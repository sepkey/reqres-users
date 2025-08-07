import axios from "axios";
import { apiClient } from "../../../api";
import type { PaginationParams, UserResponse, UsersResponse } from "../types";

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

export async function getUser(userId: string) {
  try {
    const response = await apiClient.get<UserResponse>(`/users/${userId}`);
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Get user failed");
    }
    throw new Error("Get user failed");
  }
}
