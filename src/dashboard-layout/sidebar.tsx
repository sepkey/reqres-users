import {
  CloseOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Menu, Modal } from "antd";
import { Link, useLocation, useNavigate } from "react-router";
import useSignOut from "../features/auth/hooks/use-sign-out";
import { homePath, usersPath } from "../router/paths";

type SidebarProps = {
  isMobile: boolean;
  closeDrawer: () => void;
};
const menuItems = [
  {
    key: homePath(),
    icon: <HomeOutlined />,
    label: "Home",
  },
  {
    key: usersPath(),
    icon: <UserOutlined />,
    label: "Users",
  },
];

export default function Sidebar({ isMobile, closeDrawer }: SidebarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mutate: signOut, isPending: isSigningOut } = useSignOut();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
    if (isMobile) closeDrawer();
  };

  const handleLogout = () => {
    Modal.confirm({
      title: "Logout",
      content: "Are you sure you want to logout?",
      okText: "Logout",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => signOut(),
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: isMobile ? "0" : "10px",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 0",
        }}
      >
        <Link
          to={homePath()}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="./logo.svg"
            alt="logo"
            style={{
              width: "auto",
              height: "100%",
              maxHeight: "32px",
              objectFit: "contain",
            }}
          />
        </Link>
        {isMobile && (
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={closeDrawer}
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
              width: 32,
              height: 32,
            }}
          />
        )}
      </div>

      <Menu
        selectedKeys={[pathname]}
        onClick={handleMenuClick}
        items={menuItems}
        style={{
          backgroundColor: "transparent",
          flex: 1,
          border: "none",
          padding: isMobile ? "0 16px" : "0",
        }}
      />

      <div
        style={{
          padding: isMobile ? "16px" : "16px 0",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <Button
          type="text"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          loading={isSigningOut}
          disabled={isSigningOut}
          style={{
            width: "100%",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "40px",
            color: "#ff4d4f",
          }}
        >
          {isSigningOut ? "Signing out..." : "Logout"}
        </Button>
      </div>
    </div>
  );
}
