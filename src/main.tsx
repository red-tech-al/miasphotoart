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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/imprint",
    element: <Imprint />,
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
