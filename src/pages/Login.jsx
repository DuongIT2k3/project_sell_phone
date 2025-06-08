import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginSchema } from "../validations/authSchema";
import { loginApi } from "../api/authApi";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const nav = useNavigate();

  const onSubmit = async (dataForm) => {
    try {
      const { data } = await loginApi(dataForm);
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Dang nhap thanh cong");
        nav("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data || "Dang nhap that bat!");
      reset();
    }
  };
  return (
    <>
      <div className="min-vh-100 d-flex align-items-center bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-lg border-0">
                <div className="card-body p-5">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <div className="mb-3">
                      <i className="fas fa-sign-in-alt fa-3x text-primary"></i>
                    </div>
                    <h2 className="card-title fw-bold text-dark mb-2">
                      Đăng Nhập
                    </h2>
                    <p className="text-muted">Chào mừng bạn quay trở lại!</p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold text-dark">
                        <i className="fas fa-envelope me-2 text-primary"></i>
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control form-control-lg ${
                          errors.email ? "is-invalid" : ""
                        }`}
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
                    <div className="mb-4">
                      <label className="form-label fw-semibold text-dark">
                        <i className="fas fa-lock me-2 text-primary"></i>
                        Mật khẩu
                      </label>
                      <input
                        type="password"
                        className={`form-control form-control-lg ${
                          errors.password ? "is-invalid" : ""
                        }`}
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

                    {/* Forgot Password Link */}
                    <div className="text-end mb-3">
                      <Link
                        to="/auth/forgot-password"
                        className="text-primary text-decoration-none small"
                      >
                        Quên mật khẩu?
                      </Link>
                    </div>

                    {/* Submit Button */}
                    <div className="d-grid mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg fw-semibold"
                      >
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Đăng Nhập
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="text-center mb-3">
                      <div className="d-flex align-items-center">
                        <hr className="flex-grow-1" />
                        <span className="px-3 text-muted small">HOẶC</span>
                        <hr className="flex-grow-1" />
                      </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="d-grid gap-2 mb-4">
                      <button type="button" className="btn btn-outline-danger">
                        <i className="fab fa-google me-2"></i>
                        Đăng nhập với Google
                      </button>
                      <button type="button" className="btn btn-outline-primary">
                        <i className="fab fa-facebook-f me-2"></i>
                        Đăng nhập với Facebook
                      </button>
                    </div>

                    {/* Register Link */}
                    <div className="text-center">
                      <p className="text-muted mb-0">
                        Chưa có tài khoản?
                        <Link
                          to="/auth/register"
                          className="text-primary text-decoration-none fw-semibold ms-1"
                        >
                          Đăng ký ngay
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-4">
                <p className="text-muted small">
                  © 2025 Your Company. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
