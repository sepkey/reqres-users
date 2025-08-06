import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../context/auth-context";
import { signUp } from "../services";

export default function useSignUp() {
  const { setAuthToken } = useAuth();

  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log(data, "data in onSuccess");
      setAuthToken(data.token);
    },
    onError: (error) => {
      console.log(error, "error in onError");
    },
  });
}
