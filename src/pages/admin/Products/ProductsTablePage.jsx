"use client"

import { useState, useEffect } from "react"
import { getAllProduct, deleteProduct } from "../../../api/productApi"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

const ProductsTablePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      console.log("Fetching products from API...")
      const response = await getAllProduct()
      console.log("API Response:", response)

      // Handle different possible response structures
      let productsData = []

      if (response?.data && Array.isArray(response.data)) {
        productsData = response.data
      } else if (Array.isArray(response)) {
        productsData = response
      } else if (response?.products && Array.isArray(response.products)) {
        productsData = response.products
      } else if (response?.result && Array.isArray(response.result)) {
        productsData = response.result
      } else {
        console.warn("Unexpected API response structure:", response)
        productsData = []
      }

      console.log("Processed products data:", productsData)
      setProducts(productsData)

      if (productsData.length > 0) {
        toast.success(`Đã tải ${productsData.length} sản phẩm thành công!`)
      } else {
        toast.info("Không có sản phẩm nào trong hệ thống")
      }
    } catch (err) {
      console.error("Error fetching products:", err)
      setError("Không thể tải danh sách sản phẩm. Vui lòng thử lại.")
      toast.error("Lỗi khi tải danh sách sản phẩm")
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      try {
        console.log("Deleting product with ID:", id)
        await deleteProduct(id)

        // Update local state
        setProducts(products.filter((product) => product.id !== id))
        toast.success("Xóa sản phẩm thành công!")
      } catch (err) {
        console.error("Error deleting product:", err)
        toast.error("Lỗi khi xóa sản phẩm")
      }
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.title?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter
      ? product.category === categoryFilter || product.categoryId === categoryFilter
      : true
    const matchesStatus = statusFilter
      ? product.status === statusFilter || product.isActive === (statusFilter === "Active")
      : true
    return matchesSearch && matchesCategory && matchesStatus
  })

  // Extract unique categories from products
  const categories = [...new Set(products.map((product) => product.category || product.categoryName))].filter(Boolean)

  const formatPrice = (price) => {
    if (!price) return "N/A"
    return `₫${Number(price).toLocaleString("vi-VN")}`
  }

  const getProductImage = (product) => {
    return product.image || product.imageUrl || product.thumbnail || "/placeholder.svg?height=60&width=60"
  }

  const getProductName = (product) => {
    return product.name || product.title || product.productName || "Unnamed Product"
  }

  const getProductCategory = (product) => {
    return product.category || product.categoryName || "N/A"
  }

  const getProductStock = (product) => {
    return product.stock || product.quantity || product.stockQuantity || 0
  }

  const getProductStatus = (product) => {
    if (product.status) return product.status
    if (product.isActive !== undefined) return product.isActive ? "Active" : "Inactive"
    if (product.isAvailable !== undefined) return product.isAvailable ? "Available" : "Unavailable"
    return "Unknown"
  }

  return (
    <div className="products-management">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Quản lý Sản phẩm</h2>
          <p className="text-muted mb-0">
            Tổng cộng: {products.length} sản phẩm
            {filteredProducts.length !== products.length && ` (Hiển thị: ${filteredProducts.length})`}
          </p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary" onClick={fetchProducts} disabled={loading}>
            <i className="fas fa-sync-alt me-2"></i>
            Làm mới
          </button>
          <Link to="/admin/products/add" className="btn btn-primary">
            <i className="fas fa-plus me-2"></i>
            Thêm sản phẩm mới
          </Link>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white border-0">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-8 text-end">
              <select
                className="form-select w-auto d-inline-block me-2"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">Tất cả danh mục</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                className="form-select w-auto d-inline-block"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">Tất cả trạng thái</option>
                <option value="Active">Hoạt động</option>
                <option value="Inactive">Không hoạt động</option>
                <option value="Out of Stock">Hết hàng</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card-body">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Đang tải danh sách sản phẩm...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              <div className="d-flex align-items-center">
                <i className="fas fa-exclamation-triangle me-2"></i>
                <div className="flex-grow-1">{error}</div>
                <button className="btn btn-sm btn-outline-danger" onClick={fetchProducts}>
                  <i className="fas fa-redo me-1"></i>
                  Thử lại
                </button>
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th style={{ width: "35%" }}>Sản phẩm</th>
                    <th style={{ width: "15%" }}>Danh mục</th>
                    <th style={{ width: "15%" }}>Giá</th>
                    <th style={{ width: "10%" }}>Tồn kho</th>
                    <th style={{ width: "10%" }}>Trạng thái</th>
                    <th style={{ width: "15%" }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <tr key={product.id || product._id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={getProductImage(product) || "/placeholder.svg"}
                              alt={getProductName(product)}
                              className="rounded me-3"
                              width="60"
                              height="60"
                              style={{ objectFit: "cover" }}
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg?height=60&width=60"
                              }}
                            />
                            <div>
                              <div className="fw-semibold">{getProductName(product)}</div>
                              {product.description && (
                                <small className="text-muted">
                                  {product.description.length > 50
                                    ? `${product.description.substring(0, 50)}...`
                                    : product.description}
                                </small>
                              )}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-light text-dark">{getProductCategory(product)}</span>
                        </td>
                        <td className="fw-semibold">{formatPrice(product.price)}</td>
                        <td>
                          <span className={`badge ${getProductStock(product) > 0 ? "bg-success" : "bg-danger"}`}>
                            {getProductStock(product)} sản phẩm
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              getProductStatus(product) === "Active"
                                ? "bg-success"
                                : getProductStatus(product) === "Inactive"
                                  ? "bg-secondary"
                                  : "bg-warning"
                            }`}
                          >
                            {getProductStatus(product)}
                          </span>
                        </td>
                        <td>
                          <div className="btn-group" role="group">
                            <Link
                              to={`/admin/products/view/${product.id || product._id}`}
                              className="btn btn-sm btn-outline-primary"
                              title="Xem chi tiết"
                            >
                              <i className="fas fa-eye"></i>
                            </Link>
                            <Link
                              to={`/admin/products/edit/${product.id || product._id}`}
                              className="btn btn-sm btn-outline-secondary"
                              title="Chỉnh sửa"
                            >
                              <i className="fas fa-edit"></i>
                            </Link>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDeleteProduct(product.id || product._id)}
                              title="Xóa"
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-5">
                        <div className="text-muted">
                          <i className="fas fa-box-open fa-3x mb-3"></i>
                          <div>
                            {products.length === 0
                              ? "Chưa có sản phẩm nào trong hệ thống"
                              : "Không tìm thấy sản phẩm nào phù hợp với bộ lọc"}
                          </div>
                          {products.length === 0 && (
                            <Link to="/admin/products/add" className="btn btn-primary mt-3">
                              <i className="fas fa-plus me-2"></i>
                              Thêm sản phẩm đầu tiên
                            </Link>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsTablePage
