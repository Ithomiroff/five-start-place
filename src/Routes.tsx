import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { RootPage } from './pages/Root';
import React, { lazy, Suspense } from 'react';

const Delivery = lazy(() => import('./pages/Delivery'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Services = lazy(() => import('./pages/Services'));
const Homes = lazy(() => import('./pages/Homes'));
const Restaurant = lazy(() => import('./pages/Restaurant'));

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
      {
        path: 'dashboard',
        element: (
          <Suspense>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: 'services',
        element: (
          <Suspense>
            <Services />
          </Suspense>
        ),
      },
      {
        path: 'homes',
        element: (
          <Suspense>
            <Homes />
          </Suspense>
        ),
      },
      {
        path: 'restaurant',
        element: (
          <Suspense>
            <Restaurant />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export const Routes = () => <RouterProvider router={router} />;
