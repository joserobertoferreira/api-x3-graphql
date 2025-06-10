import { Customer, Prisma, PrismaClient } from '@prisma/client';
import prisma from '../database/config';

// Interface de argumentos para buscas, incluindo a opção "include".
interface FindCustomersArgs {
  where?: Prisma.CustomerWhereInput;
  orderBy?: Prisma.CustomerOrderByWithRelationInput;
  skip?: number;
  take?: number;
  include?: Prisma.CustomerInclude; // Para carregar relações, como a de endereços
}

export class CustomerService {
  constructor(private prisma: PrismaClient) {}

  /**
   * Busca um cliente pelo seu código único (BPCNUM_0).
   * @param customerCode O código do cliente.
   * @param include Objeto para incluir relações. Ex: { addresses: true }
   * @returns O objeto Customer encontrado ou null se não existir.
   */
  async findCustomerByCode(customerCode: string, include?: Prisma.CustomerInclude): Promise<Customer | null> {
    try {
      return await this.prisma.customer.findUnique({
        where: { customerCode },
        include,
      });
    } catch (error) {
      console.error('Erro ao buscar cliente por código:', error);
      throw new Error('Não foi possível buscar o cliente.');
    }
  }

  /**
   * Busca uma lista de clientes com opções de filtro, ordenação e paginação.
   * @param args Argumentos de busca { where, orderBy, skip, take, include }.
   * @returns Um array de objetos Customer.
   */
  async findCustomers({ where, orderBy, skip, take, include }: FindCustomersArgs): Promise<Customer[]> {
    try {
      return await this.prisma.customer.findMany({
        where,
        orderBy,
        skip,
        take,
        include,
      });
    } catch (error) {
      console.error('Erro ao buscar lista de clientes:', error);
      throw new Error('Não foi possível buscar os clientes.');
    }
  }

  /**
   * Cria um novo cliente.
   * @param data Os dados para criar o novo cliente.
   *             `Prisma.CustomerCreateInput` garante a tipagem correta.
   * @returns O objeto Customer recém-criado.
   */
  async createCustomer(data: Prisma.CustomerCreateInput): Promise<Customer> {
    try {
      return await this.prisma.customer.create({
        data,
      });
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      throw new Error('Não foi possível criar o cliente.');
    }
  }

  /**
   * Atualiza um cliente existente, identificado pelo seu código.
   * @param customerCode O código do cliente a ser atualizado.
   * @param data Os dados a serem atualizados.
   * @returns O objeto Customer atualizado.
   */
  async updateCustomer(customerCode: string, data: Prisma.CustomerUpdateInput): Promise<Customer> {
    try {
      return await this.prisma.customer.update({
        where: { customerCode },
        data,
      });
    } catch (error) {
      console.error(`Erro ao atualizar o cliente com código ${customerCode}:`, error);
      throw new Error('Não foi possível atualizar o cliente.');
    }
  }

  /**
   * Deleta um cliente, identificado pelo seu código.
   * @param customerCode O código do cliente a ser deletado.
   * @returns O objeto Customer que foi deletado.
   */
  async deleteCustomer(customerCode: string): Promise<Customer> {
    try {
      // Assim como no BusinessPartner, a deleção pode falhar se houver
      // registros dependentes (como endereços) e não houver deleção em cascata.
      return await this.prisma.customer.delete({
        where: { customerCode },
      });
    } catch (error) {
      console.error(`Erro ao deletar o cliente com código ${customerCode}:`, error);
      throw new Error('Não foi possível deletar o cliente.');
    }
  }
}

// Exporta uma instância do serviço para ser usada na aplicação
export const customerService = new CustomerService(prisma);
