import { createBrowserRouter } from "react-router-dom";
import { UsersPage } from "./pages/Users";
import { UserPage } from "./pages/User";
import { AboutPage } from "./pages/About";

export const routers = createBrowserRouter([
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/",
    element: <UsersPage/>,
  },
  {
    path: "/users",
    element: <UsersPage/>,
  },
  {
    path: "/users/:id",
    element: <UserPage/>,
  },
])
