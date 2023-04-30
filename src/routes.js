import { lazy } from "react";

const Home = lazy(() => import("./components/Home/index"));
const Cart = lazy(() => import("./components/Cart/index"));

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
    
];

export default routes;