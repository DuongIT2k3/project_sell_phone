import { useState } from "react"
import { createProduct } from "../../../api/productApi"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const ProductAdd = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: 0,
    status: "Active",
    image: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: name === "stock" ? Number.parseInt(value) || 0 : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await createProduct(product)
      toast.success("Sản phẩm đã được tạo thành công!")
      navigate("/admin/products")
    } catch (error) {
      console.error("Error creating product:", error)
      toast.error("Không thể tạo sản phẩm. Vui lòng thử lại.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="product-add">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Thêm Sản Phẩm Mới</h2>
        <button className="btn btn-outline-secondary" onClick={() => navigate("/admin/products")}>
          <i className="fas fa-arrow-left me-2"></i>
          Quay lại
        </button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-8">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Tên sản phẩm <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Mô tả
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                    value={product.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="price" className="form-label">
                      Giá <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">₫</span>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="category" className="form-label">
                      Danh mục <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      id="category"
                      name="category"
                      value={product.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Chọn danh mục</option>
                      <option value="Điện thoại">Điện thoại</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Phụ kiện">Phụ kiện</option>
                      <option value="Tablet">Tablet</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="stock" className="form-label">
                      Tồn kho <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                      name="stock"
                      value={product.stock}
                      onChange={handleChange}
                      min="0"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="status" className="form-label">
                      Trạng thái
                    </label>
                    <select
                      className="form-select"
                      id="status"
                      name="status"
                      value={product.status}
                      onChange={handleChange}
                    >
                      <option value="Active">Active</option>
                      <option value="Out of Stock">Out of Stock</option>
                      <option value="Discontinued">Discontinued</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Hình ảnh
                  </label>
                  <div className="d-flex flex-column align-items-center p-3 border rounded">
                    <img
                      src={product.image || "/placeholder.svg?height=150&width=150"}
                      alt="Product preview"
                      className="img-fluid mb-3"
                      style={{ maxHeight: "150px", objectFit: "contain" }}
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      name="image"
                      value={product.image}
                      onChange={handleChange}
                      placeholder="URL hình ảnh"
                    />
                    <small className="text-muted mt-2">Nhập URL hình ảnh hoặc tải lên</small>
                    <button type="button" className="btn btn-outline-secondary mt-2">
                      <i className="fas fa-upload me-2"></i>
                      Tải ảnh lên
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={() => navigate("/admin/products")}
              >
                Hủy
              </button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Đang lưu...
                  </>
                ) : (
                  <>
                    <i className="fas fa-save me-2"></i>
                    Lưu sản phẩm
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductAdd
