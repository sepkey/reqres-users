import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout as AntdLayout, Button, Drawer, theme } from "antd";
import { useState } from "react";
import { Outlet } from "react-router";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Sidebar from "./sidebar";

const { Header, Sider, Content } = AntdLayout;

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      {isMobile ? (
        <>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setDrawerVisible(true)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Drawer
            placement="left"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            <AntdLayout>
              <Sider trigger={null} collapsible>
                <Sidebar
                  isMobile={isMobile}
                  closeDrawer={() => setDrawerVisible(false)}
                />
              </Sider>
            </AntdLayout>
          </Drawer>
        </>
      ) : (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Sidebar
            isMobile={isMobile}
            closeDrawer={() => setDrawerVisible(false)}
          />
        </Sider>
      )}
      <AntdLayout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {!isMobile && (
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
}
