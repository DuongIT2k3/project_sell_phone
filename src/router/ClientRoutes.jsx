import HomePage from "../pages/common/HomePage"
import AboutPage from "../pages/common/AboutPage"
import ContactPage from "../pages/common/ContactPage"
import ProductListPage from "../pages/client/ProductListPage"
import ProductDetail from "../pages/client/ProductDetail"
import CategoryPage from "../pages/client/CategoryPage"
import CartPage from "../pages/client/CartPage"
import CheckoutPage from "../pages/client/CheckoutPage"
import BlogDetail from "../pages/client/BlogDetail"
import BlogListPage from "../pages/client/BlogListPage"
import ProfilePage from "../pages/client/ProfilePage"
import OrderPage from "../pages/client/OrderPage"

export const ClientRoutes = [
    // common
    {index: true, element: <HomePage />},
    {path: "about", element: <AboutPage />},
    {path: "contact", element: <ContactPage />},

    //products
    {path: "products", element: <ProductListPage />},
    {path: "products/:id", element: <ProductDetail />},
    {path: "categories", element: <CategoryPage />},

    //cart checkout routes
    {path: "cart", element: <CartPage />},
    {path: "checkout", element: <CheckoutPage />},

    //blog
    {path: "blogs", element: <BlogListPage />},
    {path: "blogs/:slug", element: <BlogDetail />},

    //user
    {path: "me/profile", element: <ProfilePage />},
    {path: "me/orders", element: <OrderPage />}
]