import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import { MainPage, AvatarPage, CardPage, LoginPage } from "../pages";
import Slider from "components/HOC/Slider";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Slider pageName="main" direction="right">
            <MainPage />
          </Slider>
        ),
      },
      {
        path: "/:id",
        element: (
          <Slider pageName="card" direction="left">
            <CardPage />
          </Slider>
        ),
      },
      {
        path: "avatar",
        element: (
          <Slider pageName="avatar" direction="left">
            <AvatarPage />
          </Slider>
        ),
      },
      {
        path: "login",
        element: (
          <Slider pageName="login" direction="left">
            <LoginPage />
          </Slider>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);

export default Router;
