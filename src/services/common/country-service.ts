import { Prisma } from '@prisma/client';

// Interface de argumentos para buscas, incluindo a opção "include".
interface FindCountriesArgs {
  where?: Prisma.CountriesWhereInput;
  orderBy?: Prisma.CountriesOrderByWithRelationInput;
  skip?: number;
  take?: number;
  include?: Prisma.CountriesInclude; // Para carregar relações, se necessário
}
