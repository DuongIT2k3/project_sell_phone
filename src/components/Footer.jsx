const Footer = () => {
  return (
    <footer
      className="bg-white border-top mt-5"
      style={{
        borderColor: "#e0e0e0",
        fontFamily: "Poppins",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row py-5">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h2
              className="fw-bold mb-4"
              style={{
                fontSize: "24px",
                color: "#000",
              }}
            >
              Funiro.
            </h2>
            <p
              className="text-muted"
              style={{
                fontSize: "14px",
                lineHeight: "1.5",
                color: "#666",
              }}
            >
              400 University Drive Suite 200 Coral
              <br />
              Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h3
              className="mb-3"
              style={{
                color: "#9f9f9f",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Links
            </h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark fw-medium" style={{ fontSize: "16px" }}>
                  Home
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark fw-medium" style={{ fontSize: "16px" }}>
                  Shop
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark fw-medium" style={{ fontSize: "16px" }}>
                  About
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark fw-medium" style={{ fontSize: "16px" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h3
              className="mb-3"
              style={{
                color: "#9f9f9f",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Help
            </h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark fw-medium" style={{ fontSize: "16px" }}>
                  Payment Options
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark fw-medium" style={{ fontSize: "16px" }}>
                  Returns
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-decoration-none text-dark fw-medium" style={{ fontSize: "16px" }}>
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h3
              className="mb-3"
              style={{
                color: "#9f9f9f",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Newsletter
            </h3>
            <form className="d-flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="form-control border-0 border-bottom"
                style={{
                  borderColor: "#333 !important",
                  borderRadius: "0",
                  fontSize: "12px",
                  boxShadow: "none",
                }}
                required
              />
              <button
                type="submit"
                className="btn border-0 border-bottom fw-bold"
                style={{
                  borderColor: "#333 !important",
                  borderRadius: "0",
                  fontSize: "14px",
                  background: "none",
                  color: "#000",
                }}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="border-top pt-4 text-start" style={{ borderColor: "#e0e0e0" }}>
          <p
            className="mb-0"
            style={{
              fontSize: "16px",
              color: "#000",
            }}
          >
            2023 Funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
