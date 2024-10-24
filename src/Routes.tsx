import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { RootPage } from './pages/Root';
import React, { lazy, Suspense } from 'react';

const Delivery = lazy(() => import('./pages/Delivery'));

const ROUTES: RouteObject[] = [
  {
    path: '',
    element: <RootPage />,
    children: [
      {
        path: 'delivery',
        element: (
          <Suspense>
            <Delivery />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export const Routes = () => <RouterProvider router={router} />;
