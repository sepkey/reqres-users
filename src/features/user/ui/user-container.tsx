import { Card, Spin, Typography } from "antd";
import { useGetUser } from "../hooks/use-get-user";
import UserDetail from "./user-detail";

const { Text } = Typography;

export default function UserContainer() {
  const { data: user, isLoading, error } = useGetUser();

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        <Spin size="large" />
        <div style={{ marginTop: 16 }}>
          <Text>Loading user details...</Text>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <Text type="danger">
          Error loading user details:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </Text>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card>
        <Text type="warning">User not found</Text>
      </Card>
    );
  }

  return <UserDetail user={user} />;
}
