import api from "./index"

// API calls thực tế
export const createCategory = (data) => api.post("/categories", data)

export const getAllCategory = () => api.get("/categories")

export const getCategoryDetail = (id) => api.get(`/categories/${id}`)

export const updateCategory = (id, data) => api.patch(`/categories/${id}`, data)

export const deleteCategory = (id) => api.delete(`/categories/${id}`)

// Mock data cho trường hợp API không hoạt động
export const getMockCategories = () => {
  return {
    success: true,
    statusCode: 200,
    message: "Get List category successfully!",
    data: [
      {
        _id: "1",
        title: "Điện thoại",
        description: "Các loại điện thoại di động thông minh",
        slug: "dien-thoai",
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "2",
        title: "Laptop",
        description: "Máy tính xách tay các loại",
        slug: "laptop",
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "3",
        title: "Tablet",
        description: "Máy tính bảng các loại",
        slug: "tablet",
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "4",
        title: "Phụ kiện",
        description: "Phụ kiện điện thoại và máy tính",
        slug: "phu-kien",
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "5",
        title: "Đồng hồ thông minh",
        description: "Smartwatch và đồng hồ thông minh",
        slug: "dong-ho-thong-minh",
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "6",
        title: "Tai nghe",
        description: "Tai nghe có dây và không dây",
        slug: "tai-nghe",
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
    ],
  }
}
