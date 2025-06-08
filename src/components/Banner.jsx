const Banner = () => {
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#fff", overflow: "hidden" }}>
      <div
        className="row g-0 align-items-center"
        style={{
          minHeight: "calc(100vh - 100px)",
          backgroundImage: "url(/src/assets/images/home-banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 70%",
          backgroundRepeat: "no-repeat",
          padding: "0 1%",
        }}
      >
        <div className="col-xl-6 col-lg-6 col-md-4 d-none d-md-block"></div>

        <div className="col-xl-6 col-lg-6 col-md-8 col-12 d-flex justify-content-start align-items-center">
          <div
            className="p-4 p-lg-5"
            style={{
              borderRadius: "10px",
              backgroundColor: "#FFF3E3",
              maxWidth: "500px",
              width: "100%",
              zIndex: 2,
              margin: "0 1rem",
            }}
          >
            <span
              className="d-block mb-2"
              style={{
                color: "#333",
                fontSize: "16px",
                fontWeight: "600",
                letterSpacing: "3px",
              }}
            >
              New Arrival
            </span>

            <span
              className="d-block mb-3"
              style={{
                color: "#B88E2F",
                fontSize: "52px",
                fontWeight: "700",
                lineHeight: "1.2",
              }}
            >
              Discover Our New Collection
            </span>

            <div
              className="mb-4"
              style={{
                color: "#333",
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "24px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </div>

            <a
              href="./shop.html"
              className="btn text-white text-uppercase fw-bold"
              style={{
                backgroundColor: "#B88E2F",
                padding: "25px 72px",
                fontSize: "16px",
                border: "none",
                textDecoration: "none",
              }}
            >
              BUY Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
