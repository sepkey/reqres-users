import { Typography } from "antd";
import UsersList from "../features/user/ui/users-list";

const { Title } = Typography;

export default function Users() {
  return (
    <div>
      <Title level={2}>Users</Title>
      <UsersList />
    </div>
  );
}
