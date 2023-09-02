"use client";
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import AdminLayout from '../components/layouts/admin/AdminLayout'
import Link from 'next/link'
import axios from 'axios';
import ProductsTable from './ProductsTable';

const Products = () => {
  const [products, setProducts] = useState([]);

  async function getProducts(){
    const data = await axios.get("/api/products");
    setProducts(data.data.products);    
  }

  useEffect(() => {
    getProducts();
  }, [products])
    
  
  return (
    <AdminLayout>
      <Link href={"/products/new"} className='primaryBtn'>Add New</Link>
      
      { products.length > 0 ? (
        <div className='mt-5'>
          <ProductsTable products={products} />
        </div>
      ) : (
        <h3>No products to show</h3>
      ) }
      
    </AdminLayout>
  )
}

export default Products