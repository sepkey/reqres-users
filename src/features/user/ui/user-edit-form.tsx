import { SaveOutlined, UserOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Descriptions,
  Form,
  Input,
  Space,
  Typography,
  message,
} from 'antd';
import { useNavigate, useParams } from 'react-router';
import { userPath } from '../../../router/paths';
import useUpdateUser from '../hooks/use-update-user';
import { User } from '../types';

const { Title, Text } = Typography;

type UserEditFormProps = {
  user: User;
};

export default function UserEditForm({ user }: UserEditFormProps) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { userId } = useParams();
  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();

  const handleSubmit = async (values: Omit<User, 'id'>) => {
    await updateUser(
      {
        userId: userId!,
        user: { ...values, id: user.id },
      },
      {
        onSuccess: () => {
          message.success('User updated successfully!');
          navigate(userPath(userId!));
        },
        onError: error => {
          message.error('Failed to update user. Please try again.');
          console.error(error);
        },
      }
    );
  };

  return (
    <Form
      form={form}
      layout='vertical'
      initialValues={{
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        avatar: user.avatar,
      }}
      onFinish={handleSubmit}
    >
      <Card
        title={
          <Space align='center'>
            <Avatar size={32} src={user.avatar} icon={<UserOutlined />} />
            <div style={{ padding: 8 }}>
              <Title level={4} style={{ margin: 0 }}>
                Edit User: {user.first_name} {user.last_name}
              </Title>
              <Text type='secondary'>User ID: {user.id}</Text>
            </div>
          </Space>
        }
        extra={
          <Space>
            <Button
              onClick={() => navigate(userPath(userId!))}
              disabled={isUpdatingUser}
            >
              Cancel
            </Button>
            <Button
              type='primary'
              htmlType='submit'
              icon={<SaveOutlined />}
              loading={isUpdatingUser}
            >
              Save Changes
            </Button>
          </Space>
        }
      >
        <Descriptions
          column={1}
          bordered
          size='middle'
          styles={{ label: { fontWeight: 'bold' } }}
        >
          <Descriptions.Item label='First Name'>
            <Form.Item
              name='first_name'
              rules={[
                { required: true, message: 'Please enter first name' },
                { min: 2, message: 'First name must be at least 2 characters' },
              ]}
              style={{ margin: 0 }}
            >
              <Input placeholder='Enter first name' />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='Last Name'>
            <Form.Item
              name='last_name'
              rules={[
                { required: true, message: 'Please enter last name' },
                { min: 2, message: 'Last name must be at least 2 characters' },
              ]}
              style={{ margin: 0 }}
            >
              <Input placeholder='Enter last name' />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='Email'>
            <Form.Item
              name='email'
              rules={[
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
              style={{ margin: 0 }}
            >
              <Input placeholder='Enter email address' />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='Avatar URL'>
            <Form.Item
              name='avatar'
              rules={[
                { required: true, message: 'Please enter avatar URL' },
                { type: 'url', message: 'Please enter a valid URL' },
              ]}
              style={{ margin: 0 }}
            >
              <Input placeholder='Enter avatar image URL' />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='Avatar Preview'>
            <Form.Item shouldUpdate style={{ margin: 0 }}>
              {({ getFieldValue }) => {
                const avatarUrl = getFieldValue('avatar');
                return (
                  <Avatar
                    size={64}
                    src={avatarUrl}
                    icon={<UserOutlined />}
                    style={{
                      border: '1px solid #d9d9d9',
                    }}
                  />
                );
              }}
            </Form.Item>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </Form>
  );
}
