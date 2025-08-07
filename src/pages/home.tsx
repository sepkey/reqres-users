import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        textAlign: "center",
        gap: "24px",
      }}
    >
      <img
        src="./logo.svg"
        alt="Logo"
        style={{
          width: "auto",
          height: "120px",
          maxWidth: "300px",
          objectFit: "contain",
        }}
      />

      <Title level={1}>Home</Title>

      <Paragraph
        style={{
          fontSize: "18px",
          color: "#8c8c8c",
        }}
      >
        Welcome to the Sepide Kia's users dashboard!
      </Paragraph>
    </div>
  );
}
