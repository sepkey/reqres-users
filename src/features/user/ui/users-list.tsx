import { Table, Typography } from 'antd';
import { useUsersTable } from '../hooks/use-user-table';

export default function UsersList() {
  const { columns, error, isLoading, users, pagination } = useUsersTable();
  if (error) {
    return (
      <Typography.Text type='danger'>
        Error loading users:{' '}
        {error instanceof Error ? error.message : 'Unknown error in users list'}
      </Typography.Text>
    );
  }

  if (!isLoading && (!users || users.length === 0)) {
    return <Typography.Text type='warning'>No users found</Typography.Text>;
  }

  return (
    <Table
      columns={columns}
      dataSource={users}
      loading={isLoading}
      rowKey='id'
      pagination={pagination}
    />
  );
}
