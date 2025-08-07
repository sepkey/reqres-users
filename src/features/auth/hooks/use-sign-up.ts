import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../context/auth-context";
import { signUp } from "../services";
import { message } from "antd";

export default function useSignUp() {
  const { setAuthToken } = useAuth();

  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      message.success("Sign up successful");
      setAuthToken(data.token);
    },
    onError: (error) => {
      message.error(error.message || "An error happened while signing up.");
    },
  });
}
