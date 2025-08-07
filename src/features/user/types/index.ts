export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type PaginationParams = {
  page: number;
  per_page: number;
};
