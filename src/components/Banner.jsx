import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const Banner = () => {
  return (
    <section className="position-relative" style={{ minHeight: "600px" }}>
      {/* Background Image */}
      <div
        className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/placeholder.svg?height=700&width=1400')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 10, height: "600px" }}>
        <div className="row h-100 align-items-center">
          <div className="col-12 col-lg-6 text-white">
            <h1 className="display-4 fw-bold mb-4">
              Khám phá thế giới
              <span className="d-block text-info">công nghệ mới</span>
            </h1>
            <p className="fs-5 mb-4 text-white-50">
              Tìm kiếm những chiếc điện thoại và laptop tốt nhất với giá cả hợp lý. Trải nghiệm công nghệ đỉnh cao ngay
              hôm nay.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Link
                to="/shop"
                className="btn btn-primary btn-lg d-inline-flex align-items-center"
                style={{ transition: "all 0.3s" }}
              >
                Mua sắm ngay
                <ArrowRight className="ms-2" size={20} />
              </Link>
              <Link to="/categories" className="btn btn-outline-light btn-lg">
                Xem danh mục
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="position-absolute bottom-0 end-0 d-none d-lg-block p-4">
        <div
          className="border border-2 border-white opacity-25 rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "80px", height: "80px" }}
        >
          <div className="bg-white opacity-25 rounded-circle" style={{ width: "48px", height: "48px" }}></div>
        </div>
      </div>
    </section>
  )
}

export default Banner
