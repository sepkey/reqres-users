import axios from "axios";
import { apiClient } from "../../../api";
import { AuthRequest, AuthResponse } from "../types";

export async function signUp(credentials: AuthRequest): Promise<AuthResponse> {
  try {
    const response = await apiClient.post<AuthResponse>(
      "/register",
      credentials
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Registration failed");
    }
    throw new Error("Registration failed: An unexpected error occurred");
  }
}

export async function signIn(credentials: AuthRequest): Promise<AuthResponse> {
  try {
    const response = await apiClient.post<AuthResponse>("/login", credentials);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Login failed");
    }
    throw new Error("Login failed: An unexpected error occurred");
  }
}

export async function signOut(): Promise<void> {
  try {
    await apiClient.post("/logout");
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Logout failed");
    }
    throw new Error("Logout failed: An unexpected error occurred");
  }
}
