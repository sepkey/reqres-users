import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router";
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

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
    if (isMobile) closeDrawer();
  };

  return (
    <Menu
      selectedKeys={[pathname]}
      onClick={handleMenuClick}
      items={menuItems}
      style={{ backgroundColor: "transparent" }}
    />
  );
}
