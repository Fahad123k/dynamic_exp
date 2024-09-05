import React from 'react'

const Footer = () => {
    const name=import.meta.env.VITE_SERVER_NAME
    const number=import.meta.env.VITE_SERVER_NUMBER
    console.log(name,"hllo");
    
    return (        
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center flex flex-col space-between text-white gap-2">
                <p>&copy; 2024 Dynamic Express All rights reserved.</p>
                <p>Contact :{name}, Number: {number}</p>
            </div>
        </footer>
    )
}

export default Footer