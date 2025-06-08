import { Link } from "react-router-dom"
import { User, Search, Heart, ShoppingCart, Menu } from "lucide-react"

const Header = () => {
  return (
    <>
      {/* Desktop Header */}
      <div className="d-none d-md-flex container-fluid px-5 py-3 justify-content-between align-items-center">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img src="/src/assets/images/logo.png" alt="Logo" width="50" />
          <span
            className="ms-2 fw-bold text-dark"
            style={{
              fontSize: "2rem",
              fontFamily: "Montserrat",
            }}
          >
            Furniro
          </span>
        </Link>

        <nav className="d-flex gap-4">
          <Link
            to="/"
            className="text-decoration-none text-dark text-capitalize fw-medium"
            style={{
              transition: "color 0.3s",
              ":hover": { color: "#b88e2f" },
            }}
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            home
          </Link>
          <Link
            to="/shop.html"
            className="text-decoration-none text-dark text-capitalize fw-medium"
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            shop
          </Link>
          <Link
            to="/about.html"
            className="text-decoration-none text-dark text-capitalize fw-medium"
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            about
          </Link>
          <Link
            to="/contact.html"
            className="text-decoration-none text-dark text-capitalize fw-medium"
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            contact
          </Link>
        </nav>

        <div className="d-flex align-items-center gap-4">
          <Link
            to="/auth/register"
            className="text-dark"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            <User size={28}  />
          </Link>
          <span
            className="text-dark"
            style={{
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            <Search size={28} />
          </span>
          <Link
            to=""
            className="text-dark"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            <Heart size={28} />
          </Link>
          <Link
            to="/cart.html"
            className="text-dark"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            <ShoppingCart size={28} />
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div
        className="d-flex d-md-none justify-content-between align-items-center px-2 position-relative"
        style={{ minHeight: "100px" }}
      >
        <Link
          to="/"
          className="position-absolute top-50 start-50 translate-middle d-flex align-items-center text-decoration-none"
        >
          <img src="/placeholder.svg?height=50&width=50" alt="Logo" width="50" />
          <span
            className="ms-2 fw-bold text-dark"
            style={{
              fontSize: "2rem",
              fontFamily: "Montserrat",
            }}
          >
            Furniro
          </span>
        </Link>

        <div className="d-flex align-items-center gap-3">
          <div className="dropdown">
            <button
              className="btn p-2 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              style={{ border: "none", background: "none" }}
            >
              <Menu size={20} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link to="/" className="dropdown-item text-capitalize">
                  home
                </Link>
              </li>
              <li>
                <Link to="/shop.html" className="dropdown-item text-capitalize">
                  shop
                </Link>
              </li>
              <li>
                <Link to="/about.html" className="dropdown-item text-capitalize">
                  about
                </Link>
              </li>
              <li>
                <Link to="/contact.html" className="dropdown-item text-capitalize">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="fixed-bottom bg-white py-3 d-flex justify-content-around align-items-center border-top">
          <Link
            to=""
            className="text-dark"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            <User size={28} />
          </Link>
          <span
            className="text-dark"
            style={{
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            <Search size={28} />
          </span>
          <Link
            to=""
            className="text-dark"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            <Heart size={28} />
          </Link>
          <Link
            to="/cart.html"
            className="text-dark"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#b88e2f")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            <ShoppingCart size={28} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
