import { Suspense } from 'react';
import PageSpinner from '../components/page-spinner';

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageSpinner />}>
    <Component />
  </Suspense>
);

export default withSuspense;
