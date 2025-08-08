import { Layout as AntdLayout, Card } from 'antd';
import { ReactNode } from 'react';

type CardCompactProps = {
  title: string;
  content: ReactNode;
};

export default function CardCompact({ title, content }: CardCompactProps) {
  return (
    <AntdLayout
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        title={title}
        styles={{
          header: {
            textAlign: 'center',
            borderBottom: 'none',
            padding: '24px 24px 0',
          },
        }}
        style={{
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {content}
      </Card>
    </AntdLayout>
  );
}
