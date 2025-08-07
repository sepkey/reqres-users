import { EditOutlined, MailOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Descriptions, Space, Typography } from "antd";
import { Link } from "react-router";
import { userEditPath } from "../../../router/paths";
import { User } from "../types";

const { Title, Text } = Typography;

type UserDetailProps = {
  user: User;
};

export default function UserDetail({ user }: UserDetailProps) {
  return (
    <Card
      title={
        <Space align="center">
          <Avatar size={32} src={user.avatar} />
          <div style={{ padding: 8 }}>
            <Title level={4} style={{ margin: 0 }}>
              {user.first_name} {user.last_name}
            </Title>
            <Text type="secondary">User ID: {user.id}</Text>
          </div>
        </Space>
      }
      extra={
        <Link to={userEditPath(user.id.toString())}>
          <Button type="primary" icon={<EditOutlined />}>
            Edit User
          </Button>
        </Link>
      }
    >
      <Descriptions
        column={1}
        bordered
        size="middle"
        styles={{ label: { fontWeight: "bold" } }}
      >
        <Descriptions.Item label="First Name">
          {user.first_name}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">
          {user.last_name}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          <Space>
            <MailOutlined />
            <Text copyable={{ text: user.email }}>{user.email}</Text>
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="Avatar">
          <Avatar size={64} src={user.avatar} />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
