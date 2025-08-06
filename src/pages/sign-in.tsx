import { Card, Typography } from "antd";
import { Link } from "react-router";
import SignInForm from "../features/auth/ui/sign-in-form";
import { signUpPath } from "../router/paths";

export default function SignIn() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        title="Sign In"
        styles={{
          header: {
            textAlign: "center",
            borderBottom: "none",
            padding: "24px 24px 0",
          },
        }}
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <SignInForm />

        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <Typography.Text type="secondary">
            Don't have an account?{" "}
            <Link to={signUpPath()} style={{ fontWeight: 500 }}>
              Sign up now
            </Link>
          </Typography.Text>
        </div>
      </Card>
    </div>
  );
}
