import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import {Layout} from './components/Layout';
import MainPage from './pages/Main-page';
import FavoritePage from './pages/Favorite-page';
import {NotFoundPage} from './pages/Not-found-page';
import DetailPage from './pages/Detail-page';

export enum RouterPage {
  MAIN = '/',
  FAVORITE = '/favorite',
  PHOTO_DETAIL = '/photo/:photoId',
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: RouterPage.MAIN,
        element: <MainPage />,
      },
      {
        path: RouterPage.FAVORITE,
        element: <FavoritePage />,
      },
      {
        path: RouterPage.PHOTO_DETAIL,
        element: <DetailPage/>,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
