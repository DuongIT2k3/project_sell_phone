import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
      <h1>Oops! Not Found</h1>
      <Link to="/">Quay về trang chủ</Link>
    </>
  )
}

export default NotFoundPage
