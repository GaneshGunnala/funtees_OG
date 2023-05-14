import { lazy } from "react";

const Home = lazy(() => import("./components/Home/index"));
const Cart = lazy(() => import("./components/Cart/index"));
const AboutUs = lazy(() => import("./components/helpers/AboutUs"));

const routes = [
    {
      path: '/',
      component: <Home />,
      description: "Home",
    },
    {
      path: '/cart',
      component: <Cart />,
      description: "Cart",
    },
    {
      path: '/aboutus',
      component: <AboutUs />,
      description: "AboutUs",
    },
    
];

export default routes;