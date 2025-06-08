import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validations/authSchema";
import { Link } from "react-router-dom";
import { registerApi } from "../api/authApi";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data) => {
    try {
      delete data.confirmPassword;
      const res = await registerApi(data);
      console.log(res);
      toast.success("Dang ky thanh cong");
      reset();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data || "Dang ky that bat!");
      reset();
    }
  };
  return (
     <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                {/* Header */}
                <div className="text-center mb-4">
                  <div className="mb-3">
                    <i className="fas fa-user-plus fa-3x text-primary"></i>
                  </div>
                  <h2 className="card-title fw-bold text-dark mb-2">Tạo Tài Khoản</h2>
                  <p className="text-muted">Điền thông tin để đăng ký tài khoản mới</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Username Field */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-dark">
                      <i className="fas fa-user me-2 text-primary"></i>
                      Tên người dùng
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.name ? "is-invalid" : ""}`}
                      {...register("name", { required: true })}
                      placeholder="Nhập tên người dùng..."
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        <i className="fas fa-exclamation-circle me-1"></i>
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-dark">
                      <i className="fas fa-envelope me-2 text-primary"></i>
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""}`}
                      {...register("email", { required: true })}
                      placeholder="Nhập địa chỉ email..."
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        <i className="fas fa-exclamation-circle me-1"></i>
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-dark">
                      <i className="fas fa-lock me-2 text-primary"></i>
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""}`}
                      {...register("password", { required: true })}
                      placeholder="Nhập mật khẩu..."
                    />
                    {errors.password && (
                      <div className="invalid-feedback">
                        <i className="fas fa-exclamation-circle me-1"></i>
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold text-dark">
                      <i className="fas fa-lock me-2 text-primary"></i>
                      Xác nhận mật khẩu
                    </label>
                    <input
                      type="password"
                      className={`form-control form-control-lg ${errors.confirmPassword ? "is-invalid" : ""}`}
                      {...register("confirmPassword", { required: true })}
                      placeholder="Nhập lại mật khẩu..."
                    />
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        <i className="fas fa-exclamation-circle me-1"></i>
                        {errors.confirmPassword.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary btn-lg fw-semibold">
                      <i className="fas fa-user-plus me-2"></i>
                      Đăng Ký
                    </button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center">
                    <p className="text-muted mb-0">
                      Đã có tài khoản?
                      <Link to="/auth/login" className="text-primary text-decoration-none fw-semibold ms-1">
                        Đăng nhập ngay
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-4">
              <p className="text-muted small">
                Bằng việc đăng ký, bạn đồng ý với
                <a href="#" className="text-primary text-decoration-none">
                  {" "}
                  Điều khoản dịch vụ{" "}
                </a>
                và
                <a href="#" className="text-primary text-decoration-none">
                  {" "}
                  Chính sách bảo mật
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

