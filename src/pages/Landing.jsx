import React, { useEffect, useState } from 'react';
import { GiVineFlower } from "react-icons/gi";
import axios from "axios";

const Landing = () => {
    const [products, setProducts] = useState([]);  // Initialize as an empty array
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/product/products");  // Fetch products from the backend
            setProducts(response.data);  // Set the fetched product data
            setLoading(false);  // Stop loading when data is fetched
        } catch (error) {
            console.log("Some error occurred while fetching data", error);
            setLoading(true);  // Show loading in case of error
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="icon-background flex bg-gray-100 text-white py-16 flex-col shadow">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Dynamic Express</h1>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Featured Products</h2>
                <div className="h-1 w-20 bg-gray-800 mx-auto mb-6 -mt-2"></div>

                {loading ? (
                    <p>Loading..</p>
                ) : (
                    <div className="container mx-auto">
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {products.slice(0, 8).map((product) => (
                                <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                                    <img
                                        src={product.image}
                                        alt={product.model}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">{product.brand} {product.model}</h3>
                                        <p className="text-gray-700 mt-2">Price: ${product.price.toFixed(2)}</p>
                                        <p className="text-gray-700 mt-2">Price: ${product.dealer_amount.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            {/* Footer */}
        </div>
    );
};

export default Landing;
