import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection/>
      <NewArrivals/>
      {/* Best Seller */}
      <h2 className="text-3xl font-bold mb-4 m-auto text-center">Best Sellers</h2>
      <ProductDetails/>
    </div>
  )
}

export default Home
