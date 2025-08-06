import { Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  return (
    <div>
      <Title level={2}>Home</Title>
      <p>Welcome to the dashboard!</p>
    </div>
  );
}
