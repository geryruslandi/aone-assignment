import { createBrowserRouter } from "react-router-dom";
import { UsersPage } from "./pages/Users";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <UsersPage/>,
  }
])
