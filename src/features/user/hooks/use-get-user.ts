import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getUser } from "../services";
import type { User } from "../types";

export const getUserKey = (id: string) => ["user", id];

export function useGetUser() {
  const { userId } = useParams();
  return useQuery<User, Error>({
    queryKey: getUserKey(userId!),
    queryFn: () => getUser(userId!),
    enabled: !!userId,
  });
}
