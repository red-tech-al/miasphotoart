import ReactDOM from 'react-dom/client';
import React from 'react';
import './main.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/Root";
import ErrorPage from './ErrorPage';
import SplashScreen from './splashscreen';

import Shop from './routes/Shop';
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <RouterProvider router={router} />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
