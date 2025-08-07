import Title from "antd/es/typography/Title";
import UsersList from "../features/user/ui/users-list";

export default function Users() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Title level={2}>Users</Title>
      <UsersList />
    </div>
  );
}
