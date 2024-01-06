import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const Home = Loadable(lazy(() => import('../../pages/Home')));

export const Page404 = Loadable(lazy(() => import('../../pages/error/Page404')));
