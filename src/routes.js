import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./containers/Home/";
import Users from "./containers/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "usuarios",
    element: <Users />,
  },
]);

function MyRouter() {
  return router;
}

export default MyRouter();

//useHistory virou UseNavigate
//navigate não usa mais o push
