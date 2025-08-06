import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router";
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
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Link
        to={homePath()}
        style={{
          height: "60px",
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
      <Menu
        selectedKeys={[pathname]}
        onClick={handleMenuClick}
        items={menuItems}
        style={{ backgroundColor: "transparent", flex: 1 }}
      />
    </div>
  );
}
