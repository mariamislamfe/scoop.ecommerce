import React from 'react'
import { client } from '../lib/client'
import { Product } from '../components'
import Link from 'next/link'

const AllProducts = ({ products }) => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>All Products</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/" style={{
          padding: '10px 20px',
          backgroundColor: '#333',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none'
        }}>
          <button type="button" className='btn'>Back to Home</button>
        </Link>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  return {
    props: { products }
  }
}

export default AllProducts