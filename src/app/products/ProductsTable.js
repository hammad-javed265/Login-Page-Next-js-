"use client"
import axios from 'axios';
import Link from 'next/link';
import React from 'react'
import { toast } from 'react-toastify';

const ProductsTable = ({products}) => {
  const editProductHandler = async (id) => {
    console.log(id);
  }

  const deleteProductHandler = async (id) => {
    try {
        const response =  await axios.delete(`/api/products/${id}`);   
        
        // console.log(response);
        if(response.data.success){
          toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT});
        }
        else{
          toast.error(response.data.message, { position: toast.POSITION.TOP_RIGHT});
        }         
      } catch (error) {
          toast.error(error.message, { position: toast.POSITION.TOP_RIGHT});
      }
  }
  
  return (
    <table className='w-full'> 
        <thead>
        <tr>
            <th className='border border-r-gray-300 p-2'>Title</th>
            <th className='border border-r-gray-300 p-2'>Price</th>
            <th className='border border-r-gray-300 p-2'>Actions</th>
        </tr>          
        </thead>
        <tbody className=''>
        { products.map((p) => (
            <tr key={p._id}>
                <th className='border border-r-gray-300 p-2 font-normal'>{p.title}</th>
                <th className='border border-r-gray-300 p-2 font-normal'>{p.price}</th>
                <th className='border border-r-gray-300 p-2 '>
                <div>
                    <Link 
                        href={`/products/edit/${p._id}`} 
                        className='bg-green-500 py-1 px-5 rounded-md text-white hover:bg-opacity-80 w-[100px]'
                        onClick={() => editProductHandler(p._id)}
                    >Edit</Link>

                    <button                     
                        className='ml-5 bg-red-500 py-1 px-5 rounded-md text-white hover:bg-opacity-80 w-[100px]'
                        onClick={() => deleteProductHandler(p._id)}
                    >Delete</button>
                </div>
                </th>
            </tr>          
        )) }
        </tbody>
    </table>
  )
}

export default ProductsTable