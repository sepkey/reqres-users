import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../context/auth-context";
import { signIn } from "../services";

export default function useSignIn() {
  const { setAuthToken } = useAuth();

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      console.log(data, "data in onSuccess");

      setAuthToken(data.token);
    },
    onError: (error) => {
      console.log(error, "error in onError");
    },
  });
}
