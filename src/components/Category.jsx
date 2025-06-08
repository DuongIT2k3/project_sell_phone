const Category = () => {
  return (
    <div className="container-fluid" style={{ maxWidth: "1440px", margin: "0 auto", padding: "50px 20px" }}>
      <div className="text-center mb-4">
        <h1
          className="fw-bold mb-3"
          style={{
            color: "#333",
            fontFamily: "Poppins",
            fontSize: "32px",
          }}
        >
          Browse The Range
        </h1>
        <p
          className="text-muted"
          style={{
            color: "#666",
            fontFamily: "Poppins",
            fontSize: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="row g-3 justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="text-center">
            <img
              src="/src/assets/img/image100.png"
              alt="Dining"
              className="img-fluid rounded"
              style={{ borderRadius: "10px" }}
            />
            <p
              className="mt-3 fw-semibold"
              style={{
                color: "#333",
                fontFamily: "Poppins",
                fontSize: "24px",
              }}
            >
              Dining
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="text-center">
            <img
              src="/src/assets/img/image101.png"
              alt="Living"
              className="img-fluid rounded"
              style={{ borderRadius: "10px" }}
            />
            <p
              className="mt-3 fw-semibold"
              style={{
                color: "#333",
                fontFamily: "Poppins",
                fontSize: "24px",
              }}
            >
              Living
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="text-center">
            <img
              src="/src/assets/images/image 106.png"
              alt="Bedroom"
              className="img-fluid rounded"
              style={{ borderRadius: "10px" }}
            />
            <p
              className="mt-3 fw-semibold"
              style={{
                color: "#333",
                fontFamily: "Poppins",
                fontSize: "24px",
              }}
            >
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
