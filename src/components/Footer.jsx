"use client"
import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container pb-5">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center mb-4">
              <div
                className="rounded-2"
                style={{ width: "32px", height: "32px", background: "linear-gradient(to right, #1976d2, #9c27b0)" }}
              ></div>
              <span className="ms-2 fs-4 fw-bold">PhoneStore</span>
            </div>
            <p className="text-secondary mb-4">
              Cửa hàng công nghệ hàng đầu, cung cấp những sản phẩm điện thoại và laptop chất lượng cao với giá cả hợp
              lý.
            </p>
            <div className="d-flex gap-3">
              <Link
                to="#"
                className="text-secondary"
                style={{ transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="#"
                className="text-secondary"
                style={{ transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
              >
                <Instagram size={20} />
              </Link>
              <Link
                to="#"
                className="text-secondary"
                style={{ transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
              >
                <Twitter size={20} />
              </Link>
              <Link
                to="#"
                className="text-secondary"
                style={{ transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h3 className="fs-5 fw-semibold mb-4">Liên kết nhanh</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none"
                  style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
                >
                  Trang chủ
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/shop"
                  className="text-secondary text-decoration-none"
                  style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
                >
                  Cửa hàng
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/blog"
                  className="text-secondary text-decoration-none"
                  style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-secondary text-decoration-none"
                  style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6">
            <h3 className="fs-5 fw-semibold mb-4">Hỗ trợ</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/payment"
                  className="text-secondary text-decoration-none"
                  style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
                >
                  Phương thức thanh toán
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/returns"
                  className="text-secondary text-decoration-none"
                  style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
                >
                  Chính sách đổi trả
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/privacy"
                  className="text-secondary text-decoration-none"
                  style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/terms"
                  className="text-secondary text-decoration-none"
                  style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
                >
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h3 className="fs-5 fw-semibold mb-4">Đăng ký nhận tin</h3>
            <p className="text-secondary mb-3">Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt</p>
            <form className="mb-3">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control bg-dark border-secondary text-white"
                  placeholder="Nhập email của bạn"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-top border-secondary py-4">
        <div className="container">
          <p className="text-secondary text-center mb-0">© 2024 PhoneStore. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>

      {/* Spacer for mobile bottom navigation */}
      <div className="d-block d-md-none" style={{ height: "64px" }}></div>
    </footer>
  )
}

export default Footer
