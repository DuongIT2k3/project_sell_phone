import { Navigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const accessToken = localStorage.getItem("accessToken")
    const user = localStorage.getItem("user")

    if (accessToken && user) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }

    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />
}

export default ProtectedRoute
