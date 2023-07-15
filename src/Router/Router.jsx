import {createBrowserRouter, } from "react-router-dom";
import Home from "../Page/Home";
import App from "../App";

const router = createBrowserRouter([
     {
       path: "/",
       element:  <App></App>,
       children:[
          {
               path:'/',
               element:<Home/>
          }
       ]
     },
   ]);


   export default router;