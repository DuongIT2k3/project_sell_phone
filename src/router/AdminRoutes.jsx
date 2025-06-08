import DashBoardPage from "../pages/admin/DashBoardPage"
import SettingPage from "../pages/admin/SettingPage"
import ProfilePage from "../pages/client/ProfilePage"
import ProductsTablePage from "../pages/admin/Products/ProductsTablePage"
import ProductAdd from "../pages/admin/Products/ProductAdd"
import ProductsEdit from "../pages/admin/Products/ProductsEdit"
import CategoriesPage from "../pages/admin/Categories/CategoriesPage"
import CategoriesAdd from "../pages/admin/Categories/CategoriesAdd"
import CategoriesEdit from "../pages/admin/Categories/CategoriesEdit"
import OrdersPage from "../pages/admin/Orders/OrdersPage"
import OrdersEdit from "../pages/admin/Orders/OrdersEdit"
import OrdersAdd from "../pages/admin/Orders/OrdersAdd"
import UsersList from "../pages/admin/Users/UsersList"
import UsersEdit from "../pages/admin/Users/UsersEdit"
import UsersAdd from "../pages/admin/Users/UsersAdd"
import BlogsPage from "../pages/admin/Blogs/BlogsPage"
import BlogsAdd from "../pages/admin/Blogs/BlogsAdd"
import BlogsEdit from "../pages/admin/Blogs/BlogsEdit"

export const AdminRoutes = [
    {index: true, element: <DashBoardPage />},
    {path: "settings", element: <SettingPage />},
    {path: "profile/me", element: <ProfilePage />},

    //Products manage routes
    {path: "products", element: <ProductsTablePage />},
    {path: "products/edit/:id", element: <ProductsEdit />},
    {path: "products/add", element: <ProductAdd />},

    //Categories manage routes
    {path: "categories", element: <CategoriesPage />},
    {path: "categories/edit/:id", element: <CategoriesEdit />},
    {path: "categories/add", element: <CategoriesAdd />},

    //Orders manage routes
    {path: "orders", element: <OrdersPage />},
    {path: "orders/edit/:id", element: <OrdersEdit />},
    {path: "orders/add", element: <OrdersAdd />},

    //Users manage routes
    {path: "users", element: <UsersList />},
    {path: "users/edit/:id", element: <UsersEdit />},
    {path: "users/add", element: <UsersAdd />},

    //Blog manage routes
    {path: "blogs", element: <BlogsPage />},
    {path: "blogs/edit/:id", element: <BlogsEdit />},
    {path: "blogs/add", element:  <BlogsAdd />}
]