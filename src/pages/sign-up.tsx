import { Card, Typography } from "antd";
import { Link } from "react-router";
import SignUpForm from "../features/auth/ui/sign-up-form";
import { signInPath } from "../router/paths";

export default function SignUp() {
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
        title="Sign Up"
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
        <SignUpForm />
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <Typography.Text>
            Do you have an account?{" "}
            <Link to={signInPath()} style={{ fontWeight: 500 }}>
              Sign in now
            </Link>
          </Typography.Text>
        </div>
      </Card>
    </div>
  );
}
