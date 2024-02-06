import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SharedLayout from './components/SharedLayout';
import { persistor, store } from './redux/store';
import { GlobalStyles, theme } from './styles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        index: true,
        async lazy() {
          let { Home } = await import('pages/Home/Home');
          return { Component: Home };
        },
      },
      {
        path: 'catalog',
        async lazy() {
          let { Catalog } = await import('pages/Catalog/Catalog');
          return { Component: Catalog };
        },
      },
      {
        path: 'favorite',
        async lazy() {
          let { Favorite } = await import('pages/Favorite/Favorite');
          return { Component: Favorite };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
