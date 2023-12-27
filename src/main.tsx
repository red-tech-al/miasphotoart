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

import Pricing from './routes/Pricing';
import Portfolio from './routes/Portfolio';
import Shop from './routes/Shop';
import Contact from './routes/Contact';
import About from './routes/About';
import Imprint from './routes/Imprint';
import ShopItem from './components/global/ShopItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop/:id",
    element: <ShopItem />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/imprint",
    element: <Imprint />,
    errorElement: <ErrorPage />,
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
