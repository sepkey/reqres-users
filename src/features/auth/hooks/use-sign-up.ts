import { useMutation } from "@tanstack/react-query";
import { signUp } from "../services";

export default function useSignUp() {
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log(data, "data in onSuccess");
    },
    onError: (error) => {
      console.log(error, "error in onError");
    },
  });
}
