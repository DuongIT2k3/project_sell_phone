import { useState, useEffect } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is logged in
    const userStr = localStorage.getItem("user")
    const token = localStorage.getItem("accessToken")

    if (!userStr || !token) {
      // Redirect to login if not authenticated
      navigate("/auth/login")
      return
    }

    try {
      const user = JSON.parse(userStr)
      setCurrentUser(user)
    } catch (error) {
      console.error("Error parsing user data:", error)
      localStorage.removeItem("user")
      localStorage.removeItem("accessToken")
      navigate("/auth/login")
    }
  }, [navigate])

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("user")
    localStorage.removeItem("accessToken")

    // Redirect to login
    navigate("/auth/login")
  }

  const menuItems = [
    {
      path: "/admin",
      icon: "fas fa-tachometer-alt",
      label: "Dashboard",
      exact: true,
    },
    {
      path: "/admin/users",
      icon: "fas fa-users",
      label: "Quản lý Users",
    },
    {
      path: "/admin/products",
      icon: "fas fa-box",
      label: "Quản lý Products",
    },
    {
      path: "/admin/categories",
      icon: "fas fa-tags",
      label: "Quản lý Categories",
    },
    {
      path: "/admin/orders",
      icon: "fas fa-shopping-cart",
      label: "Quản lý Orders",
    },
    {
      path: "/admin/blogs",
      icon: "fas fa-blog",
      label: "Quản lý Blogs",
    },
  ]

  const isActiveRoute = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  if (!currentUser) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <nav className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <i className="fas fa-crown text-warning me-2"></i>
            {!sidebarCollapsed && <span className="brand-text">Admin Management</span>}
          </div>
        </div>

        <div className="sidebar-menu">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${isActiveRoute(item.path, item.exact) ? "active" : ""}`}
            >
              <i className={item.icon}></i>
              {!sidebarCollapsed && <span className="menu-text">{item.label}</span>}
            </Link>
          ))}
        </div>

        <div className="sidebar-footer">
          <Link to="/admin/profile" className={`sidebar-item ${isActiveRoute("/admin/profile") ? "active" : ""}`}>
            <i className="fas fa-user"></i>
            {!sidebarCollapsed && <span className="menu-text">Profile</span>}
          </Link>
          <Link to="/admin/settings" className={`sidebar-item ${isActiveRoute("/admin/settings") ? "active" : ""}`}>
            <i className="fas fa-cog"></i>
            {!sidebarCollapsed && <span className="menu-text">Settings</span>}
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className={`main-content ${sidebarCollapsed ? "expanded" : ""}`}>
        {/* Header */}
        <header className="main-header">
          <div className="header-left">
            <button className="btn btn-link sidebar-toggle" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
              <i className="fas fa-bars"></i>
            </button>
            <h4 className="page-title mb-0">Admin Dashboard</h4>
          </div>

          <div className="header-right">
            {/* Notifications */}
            <div className="dropdown me-3">
              <button className="btn btn-link position-relative" data-bs-toggle="dropdown">
                <i className="fas fa-bell fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <h6 className="dropdown-header">Thông báo</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Đơn hàng mới #1234
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    User mới đăng ký
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sản phẩm hết hàng
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-center" href="#">
                    Xem tất cả
                  </a>
                </li>
              </ul>
            </div>

            {/* User Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-link d-flex align-items-center"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                data-bs-toggle="dropdown"
              >
                <img
                  src={currentUser.avatar || "/placeholder.svg?height=32&width=32"}
                  alt="Admin"
                  className="rounded-circle me-2"
                  width="32"
                  height="32"
                />
                <span className="d-none d-md-inline">{currentUser.name}</span>
                <i className="fas fa-chevron-down ms-2"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/admin/profile">
                    <i className="fas fa-user me-2"></i>Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin/settings">
                    <i className="fas fa-cog me-2"></i>Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item text-danger" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt me-2"></i>Đăng xuất
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>

      <style jsx>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
        }

        .sidebar {
          width: 250px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transition: all 0.3s ease;
          position: fixed;
          height: 100vh;
          z-index: 1000;
          overflow-y: auto;
        }

        .sidebar.collapsed {
          width: 70px;
        }

        .sidebar-header {
          padding: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          font-weight: bold;
        }

        .sidebar-menu {
          padding: 1rem 0;
          flex: 1;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }

        .sidebar-item:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }

        .sidebar-item.active {
          background: rgba(255,255,255,0.15);
          color: white;
          border-left-color: #ffc107;
        }

        .sidebar-item i {
          width: 20px;
          margin-right: 0.75rem;
        }

        .sidebar.collapsed .menu-text {
          display: none;
        }

        .sidebar-footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 1rem 0;
        }

        .main-content {
          flex: 1;
          margin-left: 250px;
          transition: all 0.3s ease;
          background: #f8f9fa;
        }

        .main-content.expanded {
          margin-left: 70px;
        }

        .main-header {
          background: white;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #dee2e6;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 999;
        }

        .header-left {
          display: flex;
          align-items: center;
        }

        .sidebar-toggle {
          margin-right: 1rem;
          color: #6c757d;
        }

        .header-right {
          display: flex;
          align-items: center;
        }

        .page-content {
          padding: 1.5rem;
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }
          
          .sidebar.show {
            transform: translateX(0);
          }
          
          .main-content {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default AdminLayout
