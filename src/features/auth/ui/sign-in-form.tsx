import type { FormProps } from 'antd';
import { Button, Form, Input, message, Typography } from 'antd';
import { Link } from 'react-router';
import { signUpPath } from '../../../router/paths';
import useSignIn from '../hooks/use-sign-in';
import { AuthRequest } from '../types';

export default function SignInForm() {
  const { mutate: signIn, isPending: isSigningIn } = useSignIn();

  const onFinish: FormProps<AuthRequest>['onFinish'] = values => {
    console.log('Success:', values);
    signIn(values);
  };

  const onFinishFailed: FormProps<AuthRequest>['onFinishFailed'] =
    errorInfo => {
      message.error('Failed:' + errorInfo.errorFields[0].errors[0]);
    };

  return (
    <>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <Form.Item
          name='email'
          label='Email'
          required
          help='Use eve.holt@reqres.in for testing'
          style={{ marginBottom: 0 }}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input size='large' />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          required
          help="Use 'pistol' for testing"
          style={{ marginBottom: 0 }}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input.Password size='large' />
        </Form.Item>
        <Form.Item label={null} style={{ marginBottom: 0, marginTop: '12px' }}>
          <Button
            block
            size='large'
            type='primary'
            htmlType='submit'
            loading={isSigningIn}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <Typography.Text type='secondary'>
          Don't have an account?{' '}
          <Link to={signUpPath()} style={{ fontWeight: 500 }}>
            Sign up now
          </Link>
        </Typography.Text>
      </div>
    </>
  );
}
