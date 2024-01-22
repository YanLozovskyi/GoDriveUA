import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import SharedLayout from './SharedLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        index: true,
        async lazy() {
          let { Home } = await import('../pages/Home/Home');
          return { Component: Home };
        },
      },
      {
        path: 'catalog',
        async lazy() {
          let { Catalog } = await import('../pages/Catalog/Catalog');
          return { Component: Catalog };
        },
      },
      {
        path: 'favorite',
        async lazy() {
          let { Favorite } = await import('../pages/Favorite/Favorite');
          return { Component: Favorite };
        },
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
