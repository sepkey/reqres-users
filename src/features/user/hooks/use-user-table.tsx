import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Avatar,
  Button,
  Dropdown,
  Modal,
  TableColumnsType,
  Typography,
} from "antd";
import { useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router";
import { usePagination } from "../../../hooks/use-pagination";
import { userEditPath, usersPath } from "../../../router/paths";
import type { User } from "../types";
import useDeleteUser from "./use-delete-user";
import { useGetUsers } from "./use-get-users";

export function useUsersTable() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetUsers();
  const { mutate: deleteUser } = useDeleteUser();

  const { data: users = [], total = 0 } = data || {};

  const { pagination } = usePagination({ total, key: "users" });

  const handleDeleteUser = useCallback(
    (userId: number, userName: string) => {
      Modal.confirm({
        title: "Delete User",
        content: `Are you sure you want to delete ${userName}? This action cannot be undone.`,
        okText: "Delete",
        okType: "danger",
        cancelText: "Cancel",
        onOk: () => deleteUser(String(userId)),
      });
    },
    [deleteUser]
  );

  const columns = useMemo((): TableColumnsType<User> => {
    const getActionItems = (user: User): MenuProps["items"] => [
      {
        key: "edit",
        label: "Edit",
        icon: <EditOutlined />,
        onClick: () => navigate(userEditPath(String(user.id))),
      },
      {
        key: "delete",
        label: "Delete",
        icon: <DeleteOutlined />,
        onClick: () =>
          handleDeleteUser(user.id, `${user.first_name} ${user.last_name}`),
      },
    ];

    return [
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
      },
      {
        title: "Actions",
        key: "actions",
        width: 80,
        render: (_, user) => (
          <Dropdown
            menu={{ items: getActionItems(user) }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <Button
              type="text"
              icon={<MoreOutlined />}
              onClick={(e) => e.preventDefault()}
            />
          </Dropdown>
        ),
      },
    ];
  }, [handleDeleteUser, navigate]);

  return {
    users,
    isLoading,
    error,
    pagination,
    columns,
  };
}
