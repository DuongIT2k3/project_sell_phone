"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { User, Search, Heart, ShoppingCart, Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Header */}
      <header className="d-none d-md-flex justify-content-between align-items-center px-4 px-lg-5 py-3 bg-white shadow-sm border-bottom">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <div
            className="rounded-2"
            style={{ width: "32px", height: "32px", background: "linear-gradient(to right, #1976d2, #9c27b0)" }}
          ></div>
          <span className="ms-2 fs-4 fw-bold text-dark">PhoneStore</span>
        </Link>

        <nav className="d-flex align-items-center gap-4">
          <Link
            to="/"
            className="text-decoration-none text-secondary fw-medium"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#1976d2")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            Trang chủ
          </Link>
          <Link
            to="/shop"
            className="text-decoration-none text-secondary fw-medium"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#1976d2")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            Cửa hàng
          </Link>
          <Link
            to="/blog"
            className="text-decoration-none text-secondary fw-medium"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#1976d2")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-decoration-none text-secondary fw-medium"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#1976d2")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            Liên hệ
          </Link>
        </nav>

        <div className="d-flex align-items-center gap-3">
          <Link
            to="/auth/register"
            className="p-2 text-secondary"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#1976d2")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            <User size={24} />
          </Link>
          <button
            className="p-2 text-secondary border-0 bg-transparent"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#1976d2")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            <Search size={24} />
          </button>
          <Link
            to="/wishlist"
            className="p-2 text-secondary"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#1976d2")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            <Heart size={24} />
          </Link>
          <Link
            to="/cart"
            className="p-2 text-secondary position-relative"
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#1976d2")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            <ShoppingCart size={24} />
            <span
              className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.65rem" }}
            >
              0
            </span>
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="d-md-none bg-white shadow-sm border-bottom">
        <div className="d-flex align-items-center justify-content-between px-3 py-3">
          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <div
              className="rounded-1"
              style={{ width: "24px", height: "24px", background: "linear-gradient(to right, #1976d2, #9c27b0)" }}
            ></div>
            <span className="ms-2 fs-5 fw-bold text-dark">PhoneStore</span>
          </Link>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-secondary border-0 bg-transparent">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-top bg-white">
            <nav className="d-flex flex-column py-2">
              <Link to="/" className="px-4 py-2 text-secondary text-decoration-none hover-bg-light">
                Trang chủ
              </Link>
              <Link to="/shop" className="px-4 py-2 text-secondary text-decoration-none hover-bg-light">
                Cửa hàng
              </Link>
              <Link to="/blog" className="px-4 py-2 text-secondary text-decoration-none hover-bg-light">
                Blog
              </Link>
              <Link to="/contact" className="px-4 py-2 text-secondary text-decoration-none hover-bg-light">
                Liên hệ
              </Link>
            </nav>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        <div className="fixed-bottom bg-white border-top" style={{ zIndex: 1030 }}>
          <div className="d-flex justify-content-around py-2">
            <Link
              to="/auth/register"
              className="d-flex flex-column align-items-center p-2 text-secondary text-decoration-none"
            >
              <User size={20} />
              <span className="mt-1" style={{ fontSize: "0.7rem" }}>
                Tài khoản
              </span>
            </Link>
            <button className="d-flex flex-column align-items-center p-2 text-secondary border-0 bg-transparent">
              <Search size={20} />
              <span className="mt-1" style={{ fontSize: "0.7rem" }}>
                Tìm kiếm
              </span>
            </button>
            <Link
              to="/wishlist"
              className="d-flex flex-column align-items-center p-2 text-secondary text-decoration-none"
            >
              <Heart size={20} />
              <span className="mt-1" style={{ fontSize: "0.7rem" }}>
                Yêu thích
              </span>
            </Link>
            <Link
              to="/cart"
              className="d-flex flex-column align-items-center p-2 text-secondary text-decoration-none position-relative"
            >
              <ShoppingCart size={20} />
              <span className="mt-1" style={{ fontSize: "0.7rem" }}>
                Giỏ hàng
              </span>
              <span
                className="position-absolute top-0 end-25 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.65rem" }}
              >
                0
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
