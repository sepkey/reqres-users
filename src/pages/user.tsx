import Title from "antd/es/typography/Title";
import { withUser } from "../features/user/ui/user-container";
import UserDetail from "../features/user/ui/user-detail";

const UserDetailWithUserData = withUser(UserDetail);

export default function User() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Title level={2}>User Details</Title>
      <UserDetailWithUserData />
    </div>
  );
}
