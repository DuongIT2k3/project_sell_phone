import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login"
import Register from "../pages/Register"
import ClientLayout from "../layouts/ClientLayout"
import AdminLayout from "../layouts/AdminLayout"
import NotFoundPage from "../pages/NotFoundPage";
import { ClientRoutes } from "./ClientRoutes";
import ProtectedRoute from "../components/ProtectedRoutes";
import { AdminRoutes } from "./AdminRoutes";


const router = createBrowserRouter([
    {path: "/",
     element: <ClientLayout />,
     children: ClientRoutes
    },
    {path: "/admin",
     element: <ProtectedRoute />,
     children: [
        {
            path: "",
            element: <AdminLayout />,
            children: AdminRoutes,
        },
     ]
    },
    {path : "*", element: <NotFoundPage />},
    {path: "/auth/login", element: <Login />},
    {path: "/auth/register", element: <Register />},
])

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter