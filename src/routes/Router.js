import { lazy } from "react";
import { Navigate } from "react-router-dom";
//import CmmcBot from "../views/CmmcBot.js";
//import Cmmcsearch from "../views/Cmmcsearch.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
/***** Pages *****/
const Uc = lazy(() => import("../views/Uc.js"));
 
const CmmcBot = lazy(() => import("../views/CmmcBot.js"));
const Cmmcapi = lazy(() => import("../views/Cmmcapi.js"));
const Chatcmmc = lazy(() => import("../views/Chatcmmc.js"));
const Cmmcsearch = lazy(() => import("../views/Cmmcsearch.js"));
const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));


/*****Routes******/
const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/chatcmmc" /> },
      { path: "uc", element: <Uc /> },
      
      { path: "cmmcbot", element: <CmmcBot /> },
      { path: "cmmcapi", element: <Cmmcapi /> },
      { path: "chatcmmc", element: <Chatcmmc /> },
      { path: "cmmcsearch", element: <Cmmcsearch /> },
      { path: "starter", element: <Starter /> },
      { path: "about", element: <About /> },
      { path: "alerts", element: <Alerts /> },
      { path: "badges", element: <Badges /> },
      { path: "buttons", element: <Buttons /> },
      { path: "cards", element: <Cards /> },
      { path: "grid", element: <Grid /> },
      { path: "table", element: <Tables /> },
      { path: "forms", element: <Forms /> },
      { path: "breadcrumbs", element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
