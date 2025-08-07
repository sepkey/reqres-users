import { useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { deleteUser } from "../services";
import { getUsersKey } from "./use-get-users";

export default function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getUsersKey({ page: 1, per_page: 10 }),
      });
      message.success("The user has been deleted successfully");
    },
    onError: (error: unknown) =>
      message.error(
        "The user has not been deleted successfully" + (error as Error).message
      ),
  });
}
