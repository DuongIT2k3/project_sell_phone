"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, Heart, Eye, Star } from "lucide-react"
import { getAllProduct, getMockProducts } from "../api/productApi"

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await getAllProduct()

        // Kiểm tra response từ API
        if (response.data && response.data.success) {
          setProducts(response.data.data || [])
        } else {
          throw new Error("Không thể lấy dữ liệu sản phẩm")
        }
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error)
        setError(error.message)

        // Sử dụng mock data khi API fails
        const mockData = getMockProducts()
        setProducts(mockData.data || [])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="placeholder-glow">
              <div className="placeholder col-6 col-md-4 mb-3" style={{ height: "32px" }}></div>
              <div className="placeholder col-8 col-md-6" style={{ height: "16px" }}></div>
            </div>
          </div>
          <div className="row g-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="card border-0 shadow-sm h-100">
                  <div className="placeholder-glow">
                    <div className="placeholder w-100" style={{ height: "200px" }}></div>
                  </div>
                  <div className="card-body">
                    <div className="placeholder-glow">
                      <div className="placeholder col-7 mb-2"></div>
                      <div className="placeholder col-10 mb-3"></div>
                      <div className="placeholder col-4 mb-3"></div>
                      <div className="placeholder col-12" style={{ height: "38px" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error && products.length === 0) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Không thể tải sản phẩm!</h4>
              <p>{error}</p>
              <hr />
              <button className="btn btn-danger" onClick={() => window.location.reload()}>
                Thử lại
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Lấy 8 sản phẩm đầu tiên để hiển thị
  const displayProducts = products.slice(0, 8)

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-3">Sản phẩm nổi bật</h2>
          <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            Khám phá những sản phẩm công nghệ mới nhất với chất lượng tốt nhất
          </p>
        </div>

        <div className="row g-4 mb-5">
          {displayProducts.map((product) => (
            <div key={product._id} className="col-12 col-sm-6 col-lg-3">
              <div
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: "1rem", transition: "all 0.3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)"
                  e.currentTarget.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)"
                }}
              >
                <div className="position-relative" style={{ height: "250px" }}>
                  <img
                    src={product.thumbnail?.[0] || `/placeholder.svg?height=300&width=300&text=${product.title}`}
                    alt={product.title}
                    className="card-img-top h-100 w-100"
                    style={{ objectFit: "cover", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}
                  />

                  {/* Overlay Actions */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 opacity-0"
                    style={{ transition: "opacity 0.3s", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-light rounded-circle p-2">
                        <Heart size={18} />
                      </button>
                      <Link to={`/product/${product._id}`} className="btn btn-sm btn-light rounded-circle p-2">
                        <Eye size={18} />
                      </Link>
                      <button className="btn btn-sm btn-primary rounded-circle p-2">
                        <ShoppingCart size={18} className="text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Stock Badge */}
                  {product.stock <= 10 && (
                    <div className="position-absolute top-0 start-0 m-3 badge bg-danger">
                      Còn {product.stock} sản phẩm
                    </div>
                  )}
                </div>

                <div className="card-body">
                  <h3
                    className="card-title fw-semibold mb-2"
                    style={{
                      fontSize: "1.1rem",
                      height: "2.8rem",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {product.title}
                  </h3>

                  {/* Rating */}
                  {product.rating && (
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-warning me-1">
                        <Star size={16} fill="#ffc107" stroke="#ffc107" />
                      </div>
                      <span className="text-secondary" style={{ fontSize: "0.9rem" }}>
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                  )}

                  <p
                    className="card-text text-secondary mb-3"
                    style={{
                      fontSize: "0.9rem",
                      height: "2.7rem",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {product.description}
                  </p>

                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <span className="fw-bold text-danger fs-5">{product.price?.toLocaleString("vi-VN")}đ</span>
                    </div>
                    <span className="badge bg-secondary">{product.brand}</span>
                  </div>

                  <button className="btn btn-primary w-100">Thêm vào giỏ</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop" className="btn btn-outline-primary btn-lg px-4">
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products
