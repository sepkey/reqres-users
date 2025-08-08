import Title from "antd/es/typography/Title";
import { withUser } from "../features/user/ui/user-container";
import UserEditForm from "../features/user/ui/user-edit-form";

const UserEditFormWithUserData = withUser(UserEditForm);

export default function UserEdit() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Title level={2}>Edit User</Title>
      <UserEditFormWithUserData />
    </div>
  );
}
