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

export type UsersResponse = {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

export type UserResponse = {
  data: User;
};
