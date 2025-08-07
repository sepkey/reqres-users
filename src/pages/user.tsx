import Title from "antd/es/typography/Title";
import UserContainer from "../features/user/ui/user-container";
import UserDetail from "../features/user/ui/user-detail";

export default function User() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Title level={2}>User Details</Title>
      <UserContainer Content={UserDetail} />
    </div>
  );
}
