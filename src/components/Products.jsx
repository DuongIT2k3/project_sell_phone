"use client"

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      currentPrice: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/src/assets/img/sp1.png",
      isNew: false,
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      currentPrice: "Rp 2.500.000",
      originalPrice: null,
      discount: null,
      image: "/src/assets/img/sp2.png",
      isNew: false,
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      currentPrice: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/src/assets/img/sp3.png",
      isNew: false,
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      currentPrice: "Rp 500.000",
      originalPrice: null,
      discount: null,
      image: "/src/assets/img/sp4.png",
      isNew: true,
    },
    {
      id: 5,
      name: "Grifo",
      description: "Night lamp",
      currentPrice: "Rp 1.500.000",
      originalPrice: null,
      discount: null,
      image: "/src/assets/img/sp5.png",
      isNew: false,
    },
    {
      id: 6,
      name: "Muggo",
      description: "Small mug",
      currentPrice: "Rp 150.000",
      originalPrice: null,
      discount: null,
      image: "/src/assets/img/image 6.png",
      isNew: true,
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute bed set",
      currentPrice: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/src/assets/img/sp7.png",
      isNew: false,
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      currentPrice: "Rp 500.000",
      originalPrice: null,
      discount: null,
      image: "/src/assets/img/sp8.png",
      isNew: true,
    },
  ]

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#fff",
        fontFamily: "Poppins",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h1
          className="text-center mb-5 fw-bold"
          style={{
            color: "#3a3a3a",
            fontSize: "40px",
          }}
        >
          Our Products
        </h1>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-lg-3">
              <div
                className="card h-100 border-0 position-relative"
                style={{
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.querySelector(".hover-overlay").style.opacity = "1"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.querySelector(".hover-overlay").style.opacity = "0"
                }}
              >
                {/* Product Tag */}
                {(product.discount || product.isNew) && (
                  <div
                    className="position-absolute rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                    style={{
                      top: "20px",
                      right: "20px",
                      width: "50px",
                      height: "50px",
                      fontSize: "16px",
                      zIndex: 1,
                      backgroundColor: product.discount ? "#e97171" : "#2ec1ac",
                    }}
                  >
                    {product.discount || "New"}
                  </div>
                )}

                {/* Product Image */}
                <div style={{ height: "300px", overflow: "hidden" }}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="card-img-top w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Product Info */}
                <div className="card-body" style={{ backgroundColor: "#f4f5f7" }}>
                  <h3
                    className="card-title fw-bold mb-3"
                    style={{
                      fontSize: "18px",
                      color: "#333",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p className="card-text text-muted mb-3" style={{ fontSize: "14px" }}>
                    {product.description}
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="fw-bold"
                      style={{
                        fontSize: "16px",
                        color: "#333",
                      }}
                    >
                      {product.currentPrice}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted text-decoration-line-through" style={{ fontSize: "14px" }}>
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className="hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    opacity: "0",
                    transition: "opacity 0.3s ease",
                    zIndex: 2,
                  }}
                >
                  <button
                    className="btn bg-white mb-3 fw-bold"
                    style={{
                      color: "#b88e2f",
                      width: "202px",
                      height: "48px",
                      fontSize: "16px",
                    }}
                  >
                    <a href="productdetail.html" className="text-decoration-none" style={{ color: "#b88e2f" }}>
                      Add to cart
                    </a>
                  </button>

                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-link text-white p-0 d-flex align-items-center gap-1"
                      style={{ fontSize: "14px" }}
                    >
                      <i className="fas fa-share-alt"></i> Share
                    </button>
                    <button
                      className="btn btn-link text-white p-0 d-flex align-items-center gap-1"
                      style={{ fontSize: "14px" }}
                    >
                      <i className="fas fa-exchange-alt"></i> Compare
                    </button>
                    <button
                      className="btn btn-link text-white p-0 d-flex align-items-center gap-1"
                      style={{ fontSize: "14px" }}
                    >
                      <i className="far fa-heart"></i> Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button
            className="btn fw-bold"
            style={{
              width: "245px",
              height: "48px",
              border: "1px solid #b88e2f",
              backgroundColor: "#fff",
              color: "#b88e2f",
              fontSize: "16px",
              transition: "all 0.3s ease",
            }}
          >
            <a href="./shop.html" className="text-decoration-none" style={{ color: "#b88e2f" }}>
              Show More
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
