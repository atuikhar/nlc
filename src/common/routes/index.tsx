import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import CompactLayout from '../../layouts/compact';

//
import { Page404, Home } from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [{ path: '/', element: <Home /> }],
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
