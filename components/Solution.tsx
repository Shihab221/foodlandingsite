import React from 'react'
import phnimgsolution from '../public/images/phnimgsolution.png'
import Image from 'next/image'
const Solution = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start font-roboto bg-white p-10">
        {/* Left section (Phone image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={phnimgsolution} // replace with your image path
            alt="Phone showing app"
            className="max-w-sm sm:max-w-md md:w-full"
          />
        </div>
  
        {/* Right section (Text content) */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10  ">
          <h2 className="text-3xl font-bold text-green-800">Solution</h2>
          <p className="text-2xl text-orange-400 mt-2 italic">
            Optimizing Food Delivery experience
          </p>
          <p className="text-gray-700 mt-4 max-w-xl leading-loose">
            The Delicious app enables users to order from multiple restaurants
            simultaneously, optimizing delivery logistics to ensure all items
            arrive fresh and on time. Key features include:
          </p>
  
          {/* Features List */}
          <ul className="mt-4 space-y-4 text-gray-600 max-w-xl pl-5">
            <li>
              <strong className="font-bold text-xl text-green-700">1. Location Preferences:</strong>{' '}
              Flexibility to select additional restaurants within a 1km radius of
              the first restaurant or along the delivery route which allows users
              to satisfy without sacrificing convenience.
            </li>
            <li>
              <strong className="font-bold text-xl text-green-700">2. Multi-Mix Algorithm:</strong>{' '}
              Ensures synchronous arrivals and dynamic routing for timely
              deliveries and maintained food quality.
            </li>
          </ul>
  
          {/* Enhanced Features Box */}
          <div className="mt-6 p-4 bg-green-50 rounded-lg shadow-md max-w-xl">
            <p className="text-gray-800 leading-loose">
              <strong>Enhanced features</strong> include scheduling deliveries,
              selecting delivery modes, real-time traffic updates, setting dietary
              preferences, recalling customizations, and providing queue
              transparency, all of which contribute to a richer user experience.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Solution
  
