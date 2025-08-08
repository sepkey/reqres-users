import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { useAuth } from '../context/auth-context';
import { signOut } from '../services';

export default function useSignOut() {
  const { logout } = useAuth();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      logout();
      message.success('Sign out is successful');
    },
    onError: error => {
      message.error(error.message || 'An error happened while signing out.');
    },
  });
}
