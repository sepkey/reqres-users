import { TablePaginationConfig } from 'antd';
import { useSearchParams } from 'react-router';

type UsePaginationProps = {
  total: number;
  key: string;
};

export function usePagination({ total, key }: UsePaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pagination: TablePaginationConfig = {
    current: Number(searchParams.get('page')) || 1,
    pageSize: Number(searchParams.get('per_page')) || 5,
    total,
    showSizeChanger: true,
    showTotal: total => `Total ${total} ${key}`,
    onChange: (page, pageSize) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('page', page.toString());
      newSearchParams.set('per_page', pageSize.toString());
      setSearchParams(newSearchParams);
    },
  };
  return { pagination };
}
