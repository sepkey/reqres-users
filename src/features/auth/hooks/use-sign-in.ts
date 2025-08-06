import { useMutation } from "@tanstack/react-query";
import { signIn } from "../services";

export default function useSignIn() {
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      console.log(data, "data in onSuccess");
    },
    onError: (error) => {
      console.log(error, "error in onError");
    },
  });
}
