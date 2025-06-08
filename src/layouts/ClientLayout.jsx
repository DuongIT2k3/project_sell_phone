import React from 'react'
import Header from "../components/Header"
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer"
import Banner from '../components/Banner'
import Category from '../components/Category'
import Products from '../components/Products'

const ClientLayout = () => {
  return (
    <div>
       <Header />
       <main>
         <Banner />
         <Outlet />
         <Category />
         <Products />
       </main>
       <Footer />
    </div>
  )
}

export default ClientLayout
