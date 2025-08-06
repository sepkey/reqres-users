import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router";
import { homePath, usersPath } from "../router/paths";

type SidebarProps = {
  isMobile: boolean;
  closeDrawer: () => void;
};
export default function Sidebar({ isMobile, closeDrawer }: SidebarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
    if (isMobile) closeDrawer();
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

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[pathname]}
      onClick={handleMenuClick}
      items={menuItems}
    />
  );
}
