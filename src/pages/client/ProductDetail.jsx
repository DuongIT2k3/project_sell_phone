
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getProductDetail } from "../../api/productApi"
import { ShoppingCart, Heart, Star, ArrowLeft } from "lucide-react"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await getProductDetail(id)

        if (response.data && response.data.success) {
          setProduct(response.data.data)
        } else {
          throw new Error("Không thể lấy thông tin sản phẩm")
        }
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProductDetail()
    }
  }, [id])

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0 && value <= (product?.stock || 10)) {
      setQuantity(value)
    }
  }

  const increaseQuantity = () => {
    if (quantity < (product?.stock || 10)) {
      setQuantity(quantity + 1)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  if (loading) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="placeholder-glow">
              <div className="placeholder w-100" style={{ height: "400px", borderRadius: "1rem" }}></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="placeholder-glow">
              <div className="placeholder col-8 mb-3" style={{ height: "2rem" }}></div>
              <div className="placeholder col-4 mb-4" style={{ height: "1.5rem" }}></div>
              <div className="placeholder col-12 mb-3" style={{ height: "5rem" }}></div>
              <div className="placeholder col-6 mb-3" style={{ height: "2rem" }}></div>
              <div className="placeholder col-8 mb-3" style={{ height: "2.5rem" }}></div>
              <div className="placeholder col-12" style={{ height: "3rem" }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Không thể tải thông tin sản phẩm!</h4>
          <p>{error || "Sản phẩm không tồn tại"}</p>
          <hr />
          <div className="d-flex gap-3">
            <button className="btn btn-danger" onClick={() => window.location.reload()}>
              Thử lại
            </button>
            <Link to="/" className="btn btn-outline-secondary">
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link to="/" className="text-decoration-none text-secondary d-inline-flex align-items-center">
          <ArrowLeft size={18} className="me-1" /> Quay lại trang chủ
        </Link>
      </div>

      <div className="row g-4">
        {/* Product Image */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: "1rem" }}>
            <img
              src={product.thumbnail?.[0] || `/placeholder.svg?height=500&width=500&text=${product.title}`}
              alt={product.title}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h1 className="fs-2 fw-bold mb-2">{product.title}</h1>

          {/* Brand and Rating */}
          <div className="d-flex align-items-center mb-3">
            <span className="badge bg-secondary me-3">{product.brand}</span>
            {product.rating && (
              <div className="d-flex align-items-center">
                <div className="text-warning me-1">
                  <Star size={18} fill="#ffc107" stroke="#ffc107" />
                </div>
                <span>{product.rating.toFixed(1)}</span>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="mb-4">
            <span className="fs-3 fw-bold text-danger">{product.price?.toLocaleString("vi-VN")}đ</span>
          </div>

          {/* Description */}
          <div className="mb-4">
            <h5 className="fw-semibold">Mô tả sản phẩm</h5>
            <p className="text-secondary">{product.description}</p>
          </div>

          {/* Stock */}
          <div className="mb-4">
            <p className={`fw-medium ${product.stock > 0 ? "text-success" : "text-danger"}`}>
              {product.stock > 0 ? `Còn hàng (${product.stock} sản phẩm)` : "Hết hàng"}
            </p>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label htmlFor="quantity" className="form-label fw-medium">
              Số lượng
            </label>
            <div className="input-group" style={{ width: "150px" }}>
              <button className="btn btn-outline-secondary" type="button" onClick={decreaseQuantity}>
                -
              </button>
              <input
                type="number"
                className="form-control text-center"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product.stock || 10}
              />
              <button className="btn btn-outline-secondary" type="button" onClick={increaseQuantity}>
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="d-flex gap-3">
            <button className="btn btn-primary d-flex align-items-center">
              <ShoppingCart size={18} className="me-2" /> Thêm vào giỏ
            </button>
            <button className="btn btn-outline-danger d-flex align-items-center">
              <Heart size={18} className="me-2" /> Yêu thích
            </button>
          </div>

          {/* Category */}
          <div className="mt-4">
            <p className="mb-1">
              <span className="fw-medium">Danh mục:</span> {product.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
