import api from "./index"

// API calls thực tế
export const createProduct = (data) => api.post("/products", data)

export const getAllProduct = () => api.get("/products")

export const getProductDetail = (id) => api.get(`/products/${id}`)

export const updateProduct = (id, data) => api.patch(`/products/${id}`, data)

export const deleteProduct = (id) => api.delete(`/products/${id}`)

// Mock data cho trường hợp API không hoạt động
export const getMockProducts = () => {
  return {
    success: true,
    statusCode: 200,
    message: "Get list product successfully!",
    data: [
      {
        _id: "1",
        id: "iphone-15-pro-max",
        title: "iPhone 15 Pro Max",
        price: 29990000,
        description: "Điện thoại thông minh cao cấp với chip A17 Pro và camera 48MP",
        rating: 4.8,
        stock: 50,
        brand: "Apple",
        category: "Điện thoại",
        thumbnail: ["/placeholder.svg?height=300&width=300"],
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "2",
        id: "samsung-galaxy-s24-ultra",
        title: "Samsung Galaxy S24 Ultra",
        price: 27990000,
        description: "Flagship Android với S Pen và camera 200MP, màn hình Dynamic AMOLED",
        rating: 4.7,
        stock: 45,
        brand: "Samsung",
        category: "Điện thoại",
        thumbnail: ["/placeholder.svg?height=300&width=300"],
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "3",
        id: "macbook-pro-m3",
        title: "MacBook Pro M3",
        price: 45990000,
        description: "Laptop chuyên nghiệp với chip M3 mạnh mẽ, màn hình Liquid Retina XDR",
        rating: 4.9,
        stock: 30,
        brand: "Apple",
        category: "Laptop",
        thumbnail: ["/placeholder.svg?height=300&width=300"],
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "4",
        id: "dell-xps-13",
        title: "Dell XPS 13",
        price: 25990000,
        description: "Ultrabook Windows cao cấp, thiết kế mỏng nhẹ với Intel Core i7",
        rating: 4.6,
        stock: 25,
        brand: "Dell",
        category: "Laptop",
        thumbnail: ["/placeholder.svg?height=300&width=300"],
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "5",
        id: "ipad-pro-12-9",
        title: "iPad Pro 12.9",
        price: 23990000,
        description: "Tablet chuyên nghiệp với chip M2, hỗ trợ Apple Pencil",
        rating: 4.8,
        stock: 20,
        brand: "Apple",
        category: "Tablet",
        thumbnail: ["/placeholder.svg?height=300&width=300"],
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "6",
        id: "xiaomi-14-ultra",
        title: "Xiaomi 14 Ultra",
        price: 19990000,
        description: "Camera phone với ống kính Leica, zoom quang học 5x",
        rating: 4.5,
        stock: 35,
        brand: "Xiaomi",
        category: "Điện thoại",
        thumbnail: ["/placeholder.svg?height=300&width=300"],
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "7",
        id: "asus-rog-zephyrus-g16",
        title: "ASUS ROG Zephyrus G16",
        price: 55990000,
        description: "Gaming laptop với RTX 4080, màn hình 240Hz",
        rating: 4.7,
        stock: 15,
        brand: "ASUS",
        category: "Laptop",
        thumbnail: ["/placeholder.svg?height=300&width=300"],
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
      {
        _id: "8",
        id: "google-pixel-8-pro",
        title: "Google Pixel 8 Pro",
        price: 21990000,
        description: "Android thuần với AI photography và Magic Eraser",
        rating: 4.6,
        stock: 22,
        brand: "Google",
        category: "Điện thoại",
        thumbnail: ["/placeholder.svg?height=300&width=300"],
        createdAt: "2023-06-10T10:00:00.000Z",
        updatedAt: "2023-06-10T10:00:00.000Z",
      },
    ],
  }
}
