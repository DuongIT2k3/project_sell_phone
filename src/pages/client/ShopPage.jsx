import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, Heart, Eye, Star } from "lucide-react"
import { getAllProduct, getMockProducts } from "../../api/productApi"
import { getAllCategory, getMockCategories } from "../../api/categoryApi"

const ShopPage = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sortBy, setSortBy] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        // Fetch products
        const productResponse = await getAllProduct()
        if (productResponse.data && productResponse.data.success) {
          setProducts(productResponse.data.data || [])
        } else {
          const mockProducts = getMockProducts()
          setProducts(mockProducts.data || [])
        }

        // Fetch categories
        const categoryResponse = await getAllCategory()
        if (categoryResponse.data && categoryResponse.data.success) {
          setCategories(categoryResponse.data.data || [])
        } else {
          const mockCategories = getMockCategories()
          setCategories(mockCategories.data || [])
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error)
        // Use mock data
        const mockProducts = getMockProducts()
        const mockCategories = getMockCategories()
        setProducts(mockProducts.data || [])
        setCategories(mockCategories.data || [])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => !selectedCategory || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return (b.rating || 0) - (a.rating || 0)
        case "name":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  if (loading) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <div className="placeholder-glow">
              <div className="placeholder col-12 mb-3" style={{ height: "200px" }}></div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row g-4">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="placeholder-glow">
                      <div className="placeholder w-100" style={{ height: "200px" }}></div>
                    </div>
                    <div className="card-body">
                      <div className="placeholder-glow">
                        <div className="placeholder col-7 mb-2"></div>
                        <div className="placeholder col-10 mb-3"></div>
                        <div className="placeholder col-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Bộ lọc</h5>

              {/* Category Filter */}
              <div className="mb-4">
                <h6 className="fw-semibold mb-3">Danh mục</h6>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    id="all-categories"
                    checked={selectedCategory === ""}
                    onChange={() => setSelectedCategory("")}
                  />
                  <label className="form-check-label" htmlFor="all-categories">
                    Tất cả
                  </label>
                </div>
                {categories.map((category) => (
                  <div key={category._id} className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id={`category-${category._id}`}
                      checked={selectedCategory === category.title}
                      onChange={() => setSelectedCategory(category.title)}
                    />
                    <label className="form-check-label" htmlFor={`category-${category._id}`}>
                      {category.title}
                    </label>
                  </div>
                ))}
              </div>

              {/* Sort Options */}
              <div className="mb-4">
                <h6 className="fw-semibold mb-3">Sắp xếp</h6>
                <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="">Mặc định</option>
                  <option value="price-low">Giá thấp đến cao</option>
                  <option value="price-high">Giá cao đến thấp</option>
                  <option value="rating">Đánh giá cao nhất</option>
                  <option value="name">Tên A-Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="col-md-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0">{selectedCategory ? `${selectedCategory}` : "Tất cả sản phẩm"}</h2>
            <span className="text-secondary">Hiển thị {filteredProducts.length} sản phẩm</span>
          </div>

          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div key={product._id} className="col-12 col-sm-6 col-lg-4">
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-5">
              <h4 className="text-secondary">Không tìm thấy sản phẩm nào</h4>
              <p className="text-secondary">Thử thay đổi bộ lọc để xem thêm sản phẩm</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
