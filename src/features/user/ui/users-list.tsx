import { Avatar, Space, Table, TableColumnsType, Typography } from "antd";
import { useMemo } from "react";
import { Link } from "react-router";
import { usePagination } from "../../../hooks/use-pagination";
import { usersPath } from "../../../router/paths";
import { useGetUsers } from "../hooks/use-get-users";
import type { User } from "../types";

export default function UsersList() {
  const { data, isLoading, error } = useGetUsers();
  const { data: users = [], total = 0 } = data || {};
  const { pagination } = usePagination({ total, key: "users" });

  const columns: TableColumnsType<User> = useMemo(
    () => [
      {
        title: "Avatar",
        dataIndex: "avatar",
        key: "avatar",
        width: 80,
        render: (avatar: string) => <Avatar src={avatar} />,
      },
      {
        title: "Name",
        key: "name",
        render: (_, user) => (
          <Link to={`${usersPath()}/${user.id}`}>
            <Typography.Text strong>
              {user.first_name} {user.last_name}
            </Typography.Text>
          </Link>
        ),
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: (email: string) => <Typography.Text>{email}</Typography.Text>,
      },
      {
        title: "Actions",
        key: "actions",
        width: 120,
        render: (_, user) => (
          <Space>
            <Link to={`${usersPath()}/${user.id}/edit`}>Edit</Link>
            <Typography.Link type="danger">Delete</Typography.Link>
          </Space>
        ),
      },
    ],
    []
  );

  if (error) {
    return (
      <Typography.Text type="danger">
        Error loading users:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </Typography.Text>
    );
  }

  if (!isLoading && (!users || users.length === 0)) {
    return <Typography.Text type="warning">No users found</Typography.Text>;
  }

  return (
    <Table
      columns={columns}
      dataSource={users}
      loading={isLoading}
      rowKey="id"
      pagination={pagination}
    />
  );
}
