import type { FormProps } from "antd";
import { Button, Form, Input, message, Typography } from "antd";
import { Link } from "react-router";
import { signInPath } from "../../../router/paths";
import useSignUp from "../hooks/use-sign-up";
import { AuthRequest } from "../types";

export default function SignUpForm() {
  const { mutate: signUp, isPending: isSigningUp } = useSignUp();

  const onFinish: FormProps<AuthRequest>["onFinish"] = (values) => {
    signUp(values);
  };

  const onFinishFailed: FormProps<AuthRequest>["onFinishFailed"] = (
    errorInfo
  ) => {
    message.error("Failed:" + errorInfo.errorFields[0].errors[0]);
  };

  return (
    <>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <Form.Item
          name="email"
          label="Email"
          required
          help="Use eve.holt@reqres.in for testing"
          style={{ marginBottom: 0 }}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          required
          help="Use 'pistol' for testing"
          style={{ marginBottom: 0 }}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item label={null} style={{ marginBottom: 0, marginTop: "12px" }}>
          <Button
            block
            size="large"
            type="primary"
            htmlType="submit"
            loading={isSigningUp}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <Typography.Text>
          Do you have an account?{" "}
          <Link to={signInPath()} style={{ fontWeight: 500 }}>
            Sign in now
          </Link>
        </Typography.Text>
      </div>
    </>
  );
}
