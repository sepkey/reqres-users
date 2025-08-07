import axios from "axios";
import { apiClient } from "../../../api";
import type { PaginationParams, User } from "../types";

interface UsersResponse {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export async function getUsers({ page = 1, per_page = 10 }: PaginationParams) {
  try {
    const response = await apiClient.get<UsersResponse>("/users", {
      params: {
        page,
        per_page,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Get users failed");
    }
    throw new Error("Get users failed");
  }
}
