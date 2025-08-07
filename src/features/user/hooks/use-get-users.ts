import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getUsers } from "../services";
import type { PaginationParams, UsersResponse } from "../types";

export const getUsersKey = (params: PaginationParams) => ["users", params];

export function useGetUsers() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const per_page = Number(searchParams.get("per_page")) || 5;

  return useQuery<UsersResponse, Error>({
    queryKey: getUsersKey({ page, per_page }),
    queryFn: () => getUsers({ page, per_page }),
  });
}
