import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/slices/counter'
const Count = () => {
  const count = useSelector((state) => state.counter.value)

 
  const dispatch = useDispatch()
  return (
  


<div className="container mx-auto p-4 flex flex-col items-center space-y-4">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">Welcome to React Redux</h2>
      </div>

      <h1 className="text-3xl font-bold ">{phone.name}</h1>
      <p> Ram-Rom: {phone.space}</p>
      <p>  Rs {count*phone.price}/- </p>
      
      <p>Total :{count} Phones Added</p>

      <div className="flex items-center space-x-4 mt-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          +
        </button>

        {/* <div className="flex items-center">
          <p className="text-2xl font-medium">{count}</p>
        </div> */}

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          -
        </button>

        {/* <button
          onClick={() => dispatch(incrementByAmount(10))}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Add by 10
        </button> */}
      </div>

      <p className="mt-4 text-gray-600">We will learn Redux in detail</p>
    </div>
    
    
  )
}

export default Count