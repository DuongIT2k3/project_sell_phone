
import { useState, useEffect } from "react"
import { getProfile } from "./api/authApi"
import { toast } from "react-toastify"

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile")
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUserProfile()
  }, [])

  const fetchUserProfile = async () => {
    try {
      setLoading(true)
      // Get user ID from localStorage
      const user = JSON.parse(localStorage.getItem("user") || "{}")
      if (!user.id) {
        throw new Error("User not found")
      }

      const response = await getProfile(user.id)
      const userData = response.data

      setProfileData({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
        bio: userData.bio || "Quản trị viên hệ thống.",
      })

      setError(null)
    } catch (err) {
      console.error("Error fetching profile:", err)
      setError("Failed to load profile data. Please try again.")
      toast.error("Failed to load profile data")
    } finally {
      setLoading(false)
    }
  }

  const handleSaveProfile = (e) => {
    e.preventDefault()
    toast.success("Profile updated successfully")
    // Here you would typically call an API to update the profile
  }

  const handleChangePassword = (e) => {
    e.preventDefault()
    toast.success("Password changed successfully")
    // Here you would typically call an API to change the password
  }

  return (
    <div className="profile-page">
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Đang tải thông tin cá nhân...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          <i className="fas fa-exclamation-triangle me-2"></i>
          {error}
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Profile"
                  className="rounded-circle mb-3"
                  width="120"
                  height="120"
                />
                <h4 className="mb-1">{profileData.name}</h4>
                <p className="text-muted mb-3">Administrator</p>
                <button className="btn btn-primary btn-sm">
                  <i className="fas fa-camera me-2"></i>
                  Đổi ảnh đại diện
                </button>
              </div>
            </div>

            <div className="card border-0 shadow-sm mt-4">
              <div className="card-header bg-white border-0">
                <h5 className="mb-0">Thống kê hoạt động</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Đăng nhập lần cuối</span>
                  <small className="text-muted">2 giờ trước</small>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Tổng đăng nhập</span>
                  <span className="badge bg-primary">247</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Thời gian online</span>
                  <span className="badge bg-success">1,234 giờ</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white border-0">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                      onClick={() => setActiveTab("profile")}
                    >
                      <i className="fas fa-user me-2"></i>
                      Thông tin cá nhân
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "security" ? "active" : ""}`}
                      onClick={() => setActiveTab("security")}
                    >
                      <i className="fas fa-shield-alt me-2"></i>
                      Bảo mật
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "activity" ? "active" : ""}`}
                      onClick={() => setActiveTab("activity")}
                    >
                      <i className="fas fa-history me-2"></i>
                      Lịch sử hoạt động
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {activeTab === "profile" && (
                  <form onSubmit={handleSaveProfile}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Họ và tên</label>
                        <input
                          type="text"
                          className="form-control"
                          value={profileData.name}
                          onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Số điện thoại</label>
                        <input
                          type="tel"
                          className="form-control"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Địa chỉ</label>
                        <input
                          type="text"
                          className="form-control"
                          value={profileData.address}
                          onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Giới thiệu</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-save me-2"></i>
                      Lưu thay đổi
                    </button>
                  </form>
                )}

                {activeTab === "security" && (
                  <div>
                    <form className="mb-4" onSubmit={handleChangePassword}>
                      <h5 className="mb-3">Đổi mật khẩu</h5>
                      <div className="mb-3">
                        <label className="form-label">Mật khẩu hiện tại</label>
                        <input type="password" className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Mật khẩu mới</label>
                        <input type="password" className="form-control" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Xác nhận mật khẩu mới</label>
                        <input type="password" className="form-control" required />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        <i className="fas fa-key me-2"></i>
                        Đổi mật khẩu
                      </button>
                    </form>

                    <hr />

                    <h5 className="mb-3">Xác thực 2 bước</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-1">Bảo vệ tài khoản với xác thực 2 bước</p>
                        <small className="text-muted">Thêm lớp bảo mật bổ sung cho tài khoản của bạn</small>
                      </div>
                      <button className="btn btn-outline-primary">Kích hoạt</button>
                    </div>
                  </div>
                )}

                {activeTab === "activity" && (
                  <div>
                    <h5 className="mb-3">Lịch sử đăng nhập gần đây</h5>
                    <div className="list-group">
                      <div className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">Đăng nhập thành công</h6>
                            <p className="mb-1">IP: 192.168.1.1 - Chrome on Windows</p>
                            <small className="text-muted">2 giờ trước</small>
                          </div>
                          <span className="badge bg-success">Thành công</span>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">Đăng nhập thành công</h6>
                            <p className="mb-1">IP: 192.168.1.1 - Safari on iPhone</p>
                            <small className="text-muted">1 ngày trước</small>
                          </div>
                          <span className="badge bg-success">Thành công</span>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">Đăng nhập thất bại</h6>
                            <p className="mb-1">IP: 123.456.789.0 - Unknown</p>
                            <small className="text-muted">3 ngày trước</small>
                          </div>
                          <span className="badge bg-danger">Thất bại</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfilePage
