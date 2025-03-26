import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Components/Layout";
import Home from "./Components/Home";
import { Protectedroot } from "./Components/Protected/Protectedroot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      {
        path: "profile",
        element: <Protectedroot />,
        children: [{ index: true, element: <Profile /> }],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
