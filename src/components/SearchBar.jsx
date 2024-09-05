import React from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  return (
    <div className='flex col-span-2 gap-3 m-5'> 
        <Link className='font-bold'>Sort By:</Link>
        <Link>Popularity</Link>
        <Link><span className='font-bold'>Price:</span> Low to High</Link>
        <Link><span className='font-bold'>Price:</span> High to Low </Link>
        <Link> Newest first </Link>
        </div>
  )
}

export default SearchBar