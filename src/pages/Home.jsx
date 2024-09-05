import React, { useEffect, useState } from 'react';
import Phones from '../data/phones.json';
import { MdFavorite } from 'react-icons/md';
import { useSelector,useDispatch } from 'react-redux';
import { addtoWishList } from '../redux/slices/phone';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import {toast} from "react-toastify"
const Home = () => {
  const dispatch = useDispatch();
  const favcount=useSelector((state)=>state.phone.wishlist.count)
  const [currentFav,setCurrentFav]=useState(favcount)


  const handleFavoriteClick = (e, id) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent Link
    console.log('Phone ID:', id);
    dispatch(addtoWishList(id));
    // toast.success("Added to Favourited List")
  };

  useEffect(() => {
    if (favcount > currentFav) {
      toast.success('Added to Favourites List');
    } else if (favcount < currentFav) {
      toast.info('Removed from Favourites List');
    }
    setCurrentFav(favcount); // Update the currentFav to the latest favcount
  }, [favcount, currentFav]);

  return (
    <div className='m-20'>
      <SearchBar />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {Phones.map((phone) => (
          
          <div className='z-10 relative bg-white shadow-lg rounded-lg overflow-hidden p-4 border border-gray-200 cursor-pointer'
          key={phone.id}
          >
          
          <div className='relative'>
              <MdFavorite
                onClick={(e) => handleFavoriteClick(e, phone.id)}
                className="absolute top-4 right-4 text-red-600 text-3xl hover:text-red-500 transition-shadow duration-300 ease-in-out z-20"
              />
            </div>
          <Link
            to={`/product/${phone.id}`}
          
            className=""
          >
         
               {/* <div className='relative'>
              <MdFavorite
                onClick={(e) => handleFavoriteClick(e, phone.id)}
                className="absolute top-4 right-4 text-red-600 text-3xl hover:text-red-500 transition-shadow duration-300 ease-in-out z-20"
              />
            </div> */}
            {/* Image with constant height */}
            <div className="relative h-48 mb-4">
              <img
                src={phone.image}
                alt={`${phone.brand} ${phone.model}`}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{phone.brand} {phone.model}</h2>
            <p className="text-gray-700 mb-2">Price: ${phone.price.toFixed(2)}</p>
            <div className="text-gray-600">
              <p><strong>Screen Size:</strong> {phone.features.screenSize}</p>
              <p><strong>Camera:</strong> {phone.features.camera}</p>
              <p><strong>Battery:</strong> {phone.features.battery}</p>
              <p><strong>Processor:</strong> {phone.features.processor}</p>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
