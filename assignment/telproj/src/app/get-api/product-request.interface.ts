export interface IProductRequestPayload {
  page: IPagination;
  categoryId: number;
}

interface IPagination {
  pageNumber: number;
  itemCountInPage: number;
}
