import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
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
};
