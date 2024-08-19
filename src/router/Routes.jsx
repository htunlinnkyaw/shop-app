import { createBrowserRouter } from "react-router-dom";
import Template from "../components/Template";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
      },
      {
        path: "/product-detail/:productSlug",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
