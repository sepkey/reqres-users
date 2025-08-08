import { Alert, Typography } from 'antd';
import { isRouteErrorResponse, useRouteError } from 'react-router';

const { Title } = Typography;

export default function Error() {
  const error = useRouteError();
  const prod = import.meta.env.PROD;

  const getErrorMessage = () => {
    if (isRouteErrorResponse(error)) {
      return 'The requested page was not found.';
    }
    if (prod) {
      return 'An unexpected error occurred.';
    }
    return (error as Error).message;
  };

  const getErrorType = () => {
    if (isRouteErrorResponse(error)) {
      return 'warning';
    }
    return 'error';
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <main>
        <Title level={1}>Oops...</Title>
        <Alert
          message={getErrorMessage()}
          type={getErrorType()}
          showIcon
          style={{ marginTop: '16px' }}
        />
      </main>
    </div>
  );
}
