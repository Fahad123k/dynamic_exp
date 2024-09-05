import { useSelector,useDispatch } from 'react-redux';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import Phones from '../data/phones.json';
import { addtoWishList,removeWishlist } from '../redux/slices/phone';
import React from 'react';

const Favourite = () => {
    // const [isAfav,se]
  const favsId = useSelector((state) => state.phone.wishlist.id);
  const dispatch=useDispatch()

  console.log(favsId);
  const handleFavoriteClick = (id) => {
        
    console.log("Phone ID:", id); // Replace this with any action you want to perform
    dispatch(removeWishlist([id]))
  };
  return (
    <div className="p-4 m-20">
      <div className="flex flex-col gap-4 justify-start">
        {favsId.length > 0 ? (
          Phones
            .filter((phone) => favsId.includes(phone.id)) // Only display phones that are in the favorites list
            .map((phone) => (
              <div
                key={phone.id}
                className="bg-white shadow-lg rounded-lg flex flex-col overflow-hidden p-4 border border-gray-200 "
              >
                <div className="flex justify-between items-center mb-4">
                  <IoIosRemoveCircleOutline
                    onClick={() => handleFavoriteClick(phone.id)}
                    className="text-red-600 text-3xl hover:text-red-500 transition-shadow duration-300 ease-in-out"
                  />
                </div>
                {/* Flex container for image and details */}
                <div className="flex items-start space-x-4">
                  {/* Image with reduced width */}
                  <div className="relative w-1/4 h-40">
                    <img
                      src={phone.image}
                      alt={`${phone.brand} ${phone.model}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Details with increased width */}
                  <div className="flex flex-col w-">
                    <h2 className="text-xl font-semibold mb-2">{phone.brand} {phone.model}</h2>
                    <p className="text-gray-700 mb-2">Price: ${phone.price.toFixed(2)}</p>
                    <div className="text-gray-600">
                      <p><strong>Screen Size:</strong> {phone.features.screenSize}</p>
                      <p><strong>Camera:</strong> {phone.features.camera}</p>
                      <p><strong>Battery:</strong> {phone.features.battery}</p>
                      <p><strong>Processor:</strong> {phone.features.processor}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 border border-gray-200 w-full">
            No favorites yet
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Favourite;
