import { Button, Typography } from 'antd';
import { Link } from 'react-router';
import { homePath } from '../router/paths';

const { Title, Paragraph } = Typography;

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        height: '70vh',
      }}
    >
      <Title
        level={1}
        style={{
          fontSize: '128px',
          fontWeight: 'bold',
          margin: 0,
          lineHeight: 1,
          color: '#8c8c8c',
        }}
      >
        404
      </Title>

      <Title
        level={2}
        style={{
          fontSize: '48px',
          fontWeight: '600',
          margin: 0,
          color: '#262626',
        }}
      >
        The page is not found.
      </Title>

      <Paragraph
        style={{
          maxWidth: '400px',
          fontSize: '16px',
          color: '#8c8c8c',
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        Unfortunately, the page you are looking for is not found. It may have
        been deleted or renamed.
      </Paragraph>

      <Link to={homePath()}>
        <Button type='primary' size='large'>
          Back to home
        </Button>
      </Link>
    </div>
  );
}
