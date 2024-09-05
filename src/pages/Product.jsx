import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdFavorite } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addtoWishList } from '../redux/slices/phone';
import { increment } from '../redux/slices/counter';

import phones from "../data/phones.json";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch()

  const handleFavoriteClick = (id) => {

    console.log("Phone ID:", id); // Replace this with any action you want to perform
    dispatch(addtoWishList(id))
  };


  useEffect(() => {
    const fetchProduct = () => {
      try {
        // Convert id to string if it's not already a string
        // const 

        const foundProduct = phones.find(phone => phone.id == id);
        console.log("foundProduct", foundProduct)

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError(true); // No product found
        }

        setLoading(false);
      } catch (error) {
        console.log(error)
        setError(true);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong or product not found.</p>;

  return (
    <div className=" grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 m-10 ">
      {product ? (
        <Link to={`/product/${product.id}`}
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex  flex-col border border-gray-200 cursor-pointer "
        >
          {/* {favcount} */}
          <div className=''><MdFavorite onClick={() => handleFavoriteClick(product.id)} className="text-red-600 text-3xl   hover:text-red-500 transition-shadow duration-300 ease-in-out" /></div>
          {/* Image with constant height */}
          <div className="relative h-48 mb-4 "> {/* Fixed height */}
            <img
              src={product.image}
              alt={`${product.brand} ${product.model}`}
              className="w-full h-full object-contain"
            />
          </div>

          <div className='flex justify-space'>


            <div className="text-gray-600">
              <h2 className="text-xl font-semibold mb-2">{product.brand} {product.model}</h2>
              <p className="text-gray-700 mb-2">Price: ${product.price.toFixed(2)}</p>
              <p><strong>Screen Size:</strong> {product.features.screenSize}</p>
              <p><strong>Camera:</strong> {product.features.camera}</p>
              <p><strong>Battery:</strong> {product.features.battery}</p>
              <p><strong>Processor:</strong> {product.features.processor}</p>
            </div>
            <div className='flex justify-center items-center bg-red-500 h-12 rounded-md cursor-pointer p-5' onClick={()=>dispatch(increment())}>
              <p className='text-center text-white font-bold'>Add To Cart</p>
            </div>

          </div>
        </Link>

      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default Product;
