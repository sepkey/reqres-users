import { Card, Spin, Typography } from 'antd';
import { ComponentType } from 'react';
import { useGetUser } from '../hooks/use-get-user';
import { User } from '../types';

const { Text } = Typography;

interface WithUserProps {
  user: User;
}

export function withUser<T extends WithUserProps>(
  WrappedComponent: ComponentType<T>
) {
  return (props: Omit<T, keyof WithUserProps>) => {
    const { data: user, isLoading, error } = useGetUser();

    if (isLoading) {
      return (
        <div style={{ textAlign: 'center', padding: '50px 0' }}>
          <Spin size='large' />
          <div style={{ marginTop: 16 }}>
            <Text>Loading user details...</Text>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <Card>
          <Text type='danger'>
            Error loading user details:{' '}
            {error instanceof Error ? error.message : 'Unknown error'}
          </Text>
        </Card>
      );
    }

    if (!user) {
      return (
        <Card>
          <Text type='warning'>User not found</Text>
        </Card>
      );
    }

    return <WrappedComponent {...(props as T)} user={user} />;
  };
}
