import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useAuth } from "../context/auth-context";
import { signIn } from "../services";

export default function useSignIn() {
  const { setAuthToken } = useAuth();

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      message.success("Sign in successful");
      setAuthToken(data.token);
    },
    onError: (error) => {
      message.error(error.message || "An error happened while signing up.");
    },
  });
}
