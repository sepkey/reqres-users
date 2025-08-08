import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../services';
import { User } from '../types';
import { getUserKey } from './use-get-user';
import { getUsersKey } from './use-get-users';

type Mutation = {
  userId: string;
  user: User;
};

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation<{ updatedAt: string; userId: string }, Error, Mutation>({
    mutationFn: ({ userId, user }) => updateUser(userId, user),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: getUsersKey({ page: 1, per_page: 5 }),
      });
      queryClient.invalidateQueries({ queryKey: getUserKey(data.userId) });
    },
  });
}
