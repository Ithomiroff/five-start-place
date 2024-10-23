import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { RootPage } from './pages/Root';
import { lazy } from 'react';

const Delivery = lazy(() => import('./pages/Delivery'));

const ROUTES: RouteObject[] = [
  {
    path: '',
    element: <RootPage />,
    children: [
      {
        path: 'delivery',
        element: <Delivery />,
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export const Routes = () => <RouterProvider router={router} />;
