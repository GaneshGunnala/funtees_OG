import { lazy } from "react";

const Home = lazy(() => import("./components/Home/index"));

const routes = [
    {
      path: '/',
      component: <Home />,
      description: "Home",
    },
];

export default routes;