import { lazy } from "react";

const Home = lazy(() => import("./components/Home/index"));
const Cart = lazy(() => import("./components/Cart/index"));
const AboutUs = lazy(() => import("./components/helpers/AboutUs"));
const Contact = lazy(() => import("./components/Contact/index"));
const ProductList = lazy(() => import("./components/ProductList/index"));

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
    {
      path: '/contact',
      component: <Contact />,
      description: "Contact",
    },
    {
      path: '/productlist',
      component: <ProductList />,
      description: "ProductList",
    },
    
];

export default routes;