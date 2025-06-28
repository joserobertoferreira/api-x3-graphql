import { Address, Prisma, PrismaClient } from '@prisma/client';
import prisma from '../../database/config';

// Tipagem para os argumentos de busca, para maior clareza
interface FindAddressesArgs {
  where?: Prisma.AddressWhereInput;
  orderBy?: Prisma.AddressOrderByWithRelationInput;
  skip?: number;
  take?: number;
  include?: Prisma.AddressInclude;
}

export class AddressService {
  // Usamos injeção de dependência para o PrismaClient, o que facilita os testes.
  // No nosso caso, passaremos a instância global que criamos.
  constructor(private prisma: PrismaClient) {}

  /**
   * Busca um endereço pelo seu ID único (ROWID).
   * @param id O ID do endereço (tipo Decimal, conforme seu schema).
   * @returns O objeto Address encontrado ou null se não existir.
   */
  async findAddressById(id: Prisma.Decimal): Promise<Address | null> {
    try {
      return await this.prisma.address.findUnique({
        where: { ROWID: Number(id) },
      });
    } catch (error) {
      console.error('Erro ao buscar endereço por ID:', error);
      throw new Error('Não foi possível buscar o endereço.');
    }
  }

  /**
   * Busca todos os endereços associados a uma entidade específica.
   * Útil para obter todos os endereços de um BusinessPartner ou de um Customer.
   * @param entityType O tipo da entidade (ex: 1 para BusinessPartner).
   * @param entityNumber O número/código da entidade (ex: o código do BusinessPartner).
   * @param code (Opcional) O código específico do endereço a ser buscado (BPAADD_0).
   * @param options Opções adicionais de busca como `orderBy`, `take`, `skip`, `include`.
   * @returns Um array de objetos Address.
   */
  async findAddressesByEntity(
    entityType: number,
    entityNumber: string,
    code?: string,
    options?: {
      where?: Prisma.AddressWhereInput;
      orderBy?: Prisma.AddressOrderByWithRelationInput;
      // skip?: number;
      // take?: number;
      include?: Prisma.AddressInclude;
    },
  ): Promise<Address[]> {
    try {
      const where_clause: Prisma.AddressWhereInput = {
        entityType: entityType,
        entityNumber: entityNumber,
        code: code ? code : undefined, // Se o código for fornecido, adiciona ao filtro
        ...options?.where, // Mescla com o filtro adicional, se houver
      };

      return await this.prisma.address.findMany({
        where: where_clause,
        orderBy: options?.orderBy,
        // skip: options?.skip,
        // take: options?.take,
        include: options?.include,
      });
    } catch (error) {
      console.error(`Erro ao buscar endereços para a entidade ${entityType}-${entityNumber}:`, error);
      throw new Error('Não foi possível buscar os endereços da entidade.');
    }
  }

  /**
   * @param filter Optional filter to search for sites
   * @returns List of sites matching the filter
   */
  async findMany(filter?: Prisma.AddressWhereInput): Promise<Address[]> {
    try {
      return await this.prisma.address.findMany({
        where: filter,
        orderBy: { code: 'asc' },
      });
    } catch (error) {
      console.error('Error fetching companies:', error);
      throw new Error('Unable to fetch companies.');
    }
  }

  /**
   * Busca uma lista de endereços com opções de filtro, ordenação e paginação.
   * @param args Argumentos de busca { where, orderBy, skip, take }.
   * @returns Um array de objetos Address.
   */
  async findAddresses({ where, orderBy, skip, take, include }: FindAddressesArgs): Promise<Address[]> {
    try {
      return await this.prisma.address.findMany({
        where,
        orderBy,
        skip,
        take,
        include,
      });
    } catch (error) {
      console.error('Erro ao buscar lista de endereços:', error);
      throw new Error('Não foi possível buscar os endereços.');
    }
  }

  /**
   * Cria um novo endereço.
   * @param data Os dados para criar o novo endereço.
   *             O tipo `Prisma.AddressCreateInput` é gerado automaticamente pelo Prisma
   *             e garante que apenas os campos corretos sejam enviados.
   * @returns O objeto Address recém-criado.
   */
  async createAddress(data: Prisma.AddressCreateInput): Promise<Address> {
    try {
      return await this.prisma.address.create({
        data,
      });
    } catch (error) {
      console.error('Erro ao criar endereço:', error);
      // Aqui você pode adicionar uma verificação mais específica, como erros de constraint
      throw new Error('Não foi possível criar o endereço.');
    }
  }

  /**
   * Atualiza um endereço existente.
   * @param id O ID do endereço a ser atualizado.
   * @param data Os dados a serem atualizados.
   *             `Prisma.AddressUpdateInput` garante a tipagem correta.
   * @returns O objeto Address atualizado.
   */
  async updateAddress(id: Prisma.Decimal, data: Prisma.AddressUpdateInput): Promise<Address> {
    try {
      return await this.prisma.address.update({
        where: { ROWID: Number(id) },
        data,
      });
    } catch (error) {
      console.error(`Erro ao atualizar o endereço com ID ${id}:`, error);
      // O Prisma lança um erro por padrão se o registro não for encontrado.
      // Você pode capturar esse erro específico se quiser uma mensagem customizada.
      throw new Error('Não foi possível atualizar o endereço.');
    }
  }

  /**
   * Deleta um endereço.
   * @param id O ID do endereço a ser deletado.
   * @returns O objeto Address que foi deletado.
   */
  async deleteAddress(id: Prisma.Decimal): Promise<Address> {
    try {
      return await this.prisma.address.delete({
        where: { ROWID: Number(id) },
      });
    } catch (error) {
      console.error(`Erro ao deletar o endereço com ID ${id}:`, error);
      throw new Error('Não foi possível deletar o endereço.');
    }
  }
}

// Exporta uma instância do serviço para ser usada em outros lugares (como nos resolvers)
export const addressService = new AddressService(prisma);
