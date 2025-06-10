import fs from 'fs/promises';
import path from 'path';
import prisma from '../src/database/config';
import { env } from '../src/database/env';

interface MenuLocation {
  MENLOC_0: number;
}

interface MenuItemData {
  MENLOC_0: number;
  LANNUM_0: number;
  LANMES_0: string;
}

// Função para sanitizar nomes de membros de enum/objeto
function sanitizeEnumKey(name: string): string {
  let sanitized = name
    .normalize('NFD') // Decompõe caracteres acentuados (ex: 'é' -> 'e' + '´')
    .replace(/[\u0300-\u036f]/g, '') // Remove os diacríticos (acentos)
    .replace(/[^a-zA-Z0-9_]/g, '_') // Substitui não alfanuméricos (exceto _) por _
    .replace(/^[^a-zA-Z_]+/, ''); // Remove caracteres não alfabéticos ou _ do início

  // Se após a sanitização o nome ficar vazio ou começar com um número (inválido para identificador JS)
  if (!sanitized || /^\d/.test(sanitized)) {
    sanitized = `KEY_${sanitized}`; // Adiciona um prefixo
  }
  return sanitized.toUpperCase(); // Convenção para constantes/enums
}

async function generateLocalMenusFile() {
  try {
    console.log('🔌 Conectando ao banco de dados...');
    await prisma.$connect();
    console.log('✅ Conectado.');

    const dbSchema = env.DB_SCHEMA;

    if (!dbSchema) {
      console.error('💥 Erro: env.SCHEMA não está definido. Verifique seu arquivo src/database/env.ts');
      process.exit(1);
    }
    console.log(`ℹ️ Usando schema do banco: ${dbSchema}`);

    console.log('🔍 Buscando localizações de menu distintas...');
    // Query para buscar todos os MENLOC_0 distintos que têm itens de menu válidos
    const query = `SELECT DISTINCT MENLOC_0 FROM ${dbSchema}.AMENLOC ORDER BY MENLOC_0`;

    const menuLocations = await prisma.$queryRawUnsafe<MenuLocation[]>(query);

    if (!menuLocations || menuLocations.length === 0) {
      console.log('🚫 Nenhuma localização de menu encontrada para gerar. Saindo.');
      return;
    }
    console.log(`ℹ️ Encontradas ${menuLocations.length} localizações de menu.`);

    let fileContent = `// Arquivo gerado automaticamente em: ${new Date().toISOString()}\n`;
    fileContent += `// Não edite este arquivo manualmente, pois suas alterações serão sobrescritas.\n\n`;

    for (const loc of menuLocations) {
      const menlocId = loc.MENLOC_0;
      console.log(`📄 Processando Menu ID: ${menlocId}...`);

      const menuItems = await prisma.$queryRaw<MenuItemData[]>`
        SELECT A.MENLOC_0, B.LANNUM_0, B.LANMES_0
        FROM AMENLOC A WITH (NOLOCK)
        INNER JOIN APLSTD B WITH (NOLOCK) ON B.LANCHP_0 = A.MENLOC_0 AND B.LANNUM_0 > 0 AND B.LAN_0 = 'POR'
        WHERE A.MENLOC_0 = ${menlocId}
        ORDER BY B.LANNUM_0;
      `;

      if (menuItems && menuItems.length > 0) {
        const objectName = `Menu${menlocId}Options`;
        fileContent += `export const ${objectName} = {\n`;
        const reverseMapEntries: string[] = [];

        for (const item of menuItems) {
          const key = sanitizeEnumKey(item.LANMES_0);
          const value = item.LANNUM_0;
          fileContent += `  ${key}: ${value}, // Original: '${item.LANMES_0.replace(/'/g, "\\'")}'\n`;
          reverseMapEntries.push(`  ${value}: "${key}"`);
        }
        fileContent += `} as const;\n\n`;

        // Tipos auxiliares
        fileContent += `export type ${objectName}Keys = keyof typeof ${objectName};\n`;
        fileContent += `export type ${objectName}Values = typeof ${objectName}[${objectName}Keys];\n\n`;

        // Mapeamento reverso
        const mapName = `${objectName}Map`;
        fileContent += `export const ${mapName}: Record<${objectName}Values, ${objectName}Keys> = {\n`;
        fileContent += reverseMapEntries.join(',\n');
        fileContent += `\n};\n\n`;
        fileContent += `// --- Fim do Menu ID: ${menlocId} ---\n\n`;
      } else {
        console.log(`⚠️ Nenhum item encontrado para Menu ID: ${menlocId}.`);
      }
    }

    const outputDir = path.join(__dirname, '..', 'src', 'utils', 'generated'); // Ajuste o caminho se necessário
    const outputPath = path.join(outputDir, 'local-menus.ts');

    await fs.mkdir(outputDir, { recursive: true }); // Cria o diretório se não existir
    await fs.writeFile(outputPath, fileContent);

    console.log(`✅ Arquivo de menus gerado com sucesso em: ${outputPath}`);
  } catch (error) {
    console.error('💥 Erro ao gerar arquivo de menus:', error);
    process.exit(1);
  } finally {
    console.log('🔌 Desconectando do banco de dados...');
    await prisma.$disconnect();
    console.log('➖ Desconectado.');
  }
}

generateLocalMenusFile();
