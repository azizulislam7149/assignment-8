import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {  getStoredList } from '../../Utility/AddToCart';
import Camera from '../Camera/Camera';

const ListedProduct = () => {
const[list,setList]=useState([]);
    

   const allProducts =useLoaderData() ;


   useEffect( ()=>{

   },{})

    return (
        <div>
        <h3 className='text-2xl font-bold'>listed product</h3>
        {
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co.com/thcxkv0/i-Phone-13.webp"
                alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">iphone-13</h2>
              <p>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
              <br />
              <p>Price: $ 999.99</p>
            </div>
          </div>
        }
        </div>
    );
};

export default ListedProduct;