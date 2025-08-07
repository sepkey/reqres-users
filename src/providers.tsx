import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router";
import { router } from "./router";

export default function Providers() {
  const queryClient = new QueryClient();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#08979c",
          borderRadius: 4,
        },
        components: {
          Menu: {
            itemSelectedBg: "#f0f0f0",
            itemSelectedColor: "#08979c",
            itemHoverBg: "#f5f5f5",
            itemHoverColor: "#08979c",
            itemActiveBg: "#e6f7ff",
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ConfigProvider>
  );
}
