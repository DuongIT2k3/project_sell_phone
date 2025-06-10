import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllCategory, getMockCategories } from "../api/categoryApi"

const Category = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await getAllCategory()

        // Kiểm tra response từ API
        if (response.data && response.data.success) {
          setCategories(response.data.data || [])
        } else {
          throw new Error("Không thể lấy dữ liệu danh mục")
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error)
        setError(error.message)

        // Sử dụng mock data khi API fails
        const mockData = getMockCategories()
        setCategories(mockData.data || [])
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return (
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <div className="placeholder-glow">
              <div className="placeholder col-6 col-md-4 mb-3" style={{ height: "32px" }}></div>
              <div className="placeholder col-8 col-md-6" style={{ height: "16px" }}></div>
            </div>
          </div>
          <div className="row g-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="placeholder-glow">
                  <div className="placeholder w-100" style={{ height: "200px", borderRadius: "1rem" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error && categories.length === 0) {
    return (
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center">
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Không thể tải danh mục!</h4>
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

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-3">Danh mục sản phẩm</h2>
          <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            Khám phá các dòng điện thoại và laptop nổi bật theo từng danh mục
          </p>
        </div>

        <div className="row g-4">
          {categories.map((cat) => (
            <div key={cat._id} className="col-12 col-md-6 col-lg-4">
              <Link to={`/category/${cat._id}`} className="text-decoration-none">
                <div
                  className="card border-0 shadow-sm h-100 overflow-hidden"
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
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=${cat.title}`}
                      alt={cat.title}
                      className="card-img-top h-100 w-100"
                      style={{ objectFit: "cover", transition: "transform 0.5s" }}
                      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title fs-4 fw-semibold text-dark">{cat.title}</h3>
                    <p className="card-text text-secondary">{cat.description || "Khám phá ngay"}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Category
