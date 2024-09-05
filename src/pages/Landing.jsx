// src/pages/Landing.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import Phones from '../data/phones.json';
import { GiVineFlower } from "react-icons/gi";

const Landing = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
           

            {/* Hero Section */}
            <section className="icon-background flex bg-gray-100 text-white py-16 flex-col shadow">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Dynamic Express</h1>
      </div>
      {/* <GiVineFlower className='text-gray-800' /> */}
    </section>

            {/* Featured Products */}
            <section className="py-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Featured Products</h2>
                <div className="h-1 w-20 bg-gray-800 mx-auto mb-6 -mt-2"></div>

                <div className="container mx-auto">
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Phones.slice(0, 8).map((phone) => (
                            <div key={phone.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                                <img
                                    src={phone.image}
                                    alt={phone.model}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{phone.brand} {phone.model}</h3>
                                    <p className="text-gray-700 mt-2">Price: ${phone.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}

        </div>
    );
};

export default Landing;
