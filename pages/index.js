import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'
import Link from 'next/link' // Don't forget to import Link

const Home = ({ products, bannerData }) => (
  <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div> 
    
    {/* Modified products container - shows only first 4 products */}
    <div className='products-container'>
      {products?.slice(0, 4).map(
        (product) => <Product key={product._id} product={product} />)}
    </div>

    {/* Added View All button - the only new element */}
    <div style={{ textAlign: 'center', margin: '40px 0' }}>
      <Link href="/all-products" style={{
        padding: '10px 20px',
        backgroundColor: '#f02d34',
        color: 'white',
        borderRadius: '4px',
        textDecoration: 'none'
      }}>
        <button type="button" className='btn'>View All Products</button>
      </Link>
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </>
)

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}

export default Home