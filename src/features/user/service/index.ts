import type { User } from "../type";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

interface UsersResponse {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export async function getUsers({
  page = 1,
  per_page = 10,
}: {
  page?: number;
  per_page?: number;
}) {
  const res = await fetch(
    `${API_BASE_URL}/users?page=${page}&per_page=${per_page}`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Get users failed");
  }
  const response = (await res.json()) as UsersResponse;
  return response;
}
