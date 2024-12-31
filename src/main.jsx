import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";

import Body, {
  loader as rootLoader,
}  from "./routes/body";

import Cookie, {
  loader as cookieLoader,
} from "./routes/cookie";

import Faq, {
  loader as faqLoader,
} from "./routes/faq";

import Privacy, {
  loader as privacyLoader,
} from "./routes/privacy";

import Tos, {
  loader as tosLoader,
} from "./routes/tos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { 
            index: true, 
            element: <Body />, 
            loader: rootLoader,
          },
          {
            path: "/cookie",
            element: <Cookie />,
            loader: cookieLoader,
          },
          {
            path: "/faq",
            element: <Faq />,
            loader: faqLoader,
          },
          {
            path: "/privacy-policy",
            element: <Privacy />,
            loader: privacyLoader,
          },
          {
            path: "/tos",
            element: <Tos />,
            loader: tosLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);