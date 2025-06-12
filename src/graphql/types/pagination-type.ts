import { ClassType, Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Information about pagination in a connection.' })
export class PageInfo {
  @Field({ description: 'The cursor of the last edge in the connection.' })
  endCursor: string;

  @Field({ description: 'Indicates if there are more pages to fetch.' })
  hasNextPage: boolean;
}

export function PaginationType<TItem extends object>(TItemClass: ClassType<TItem>) {
  @ObjectType(`Paginated${TItemClass.name}Response`)
  abstract class Pagination {
    @Field(() => [TItemClass])
    nodes: TItem[];

    @Field(() => Int, { description: 'Total number of items in the collection.' })
    totalCount: number;

    @Field({ description: 'Indicates if there are more pages to fetch.' })
    hasNextPage: boolean;
  }

  return Pagination;
}
