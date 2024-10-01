import Image from 'next/image'
import React from 'react'
import problem from '../public/images/problem_statement.jpg'

const Statement = () => {
  return (
    <div className="text-gray-700 bg-white font-roboto px-6 md:px-20 py-10">
      <p className="text-center text-gray-600 italic text-lg md:text-2xl">
        Unable to satisfy my cravings at a time which are just a few meters away. Bwinies Burger <br /> Frustrating, Right??
      </p>

      <div className="py-10 flex flex-col md:flex-row justify-between">
        {/* Left side content */}
        <div className="flex items-center justify-center flex-col md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Problem Statement</h2>
          <h4 className="text-xl md:text-2xl italic text-orange-400">Identifying the gaps</h4>
          <h4 className="text-xl md:text-2xl font-bold">The Initial Challenge</h4>
          <p className="text-sm md:text-md leading-relaxed">
            When I first embarked on this project, I was confronted with a critical question: What improvements are needed in existing food delivery apps to enhance user experience? Through extensive research, I identified several issues like Inefficient Scheduling, Inadequate customization recall, No transparency in queueing, and also a significant limitation—users were restricted to ordering from a single restaurant per transaction.
          </p>
        </div>

        {/* Right side image */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <Image src={problem} alt="woman" className="w-full max-w-sm" />
        </div>
      </div>

      <div className="py-10 flex flex-col space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">The core issue</h2>
        <p className="text-sm md:text-md">
          Despite the obvious benefits of experiencing culinary diversity, existing apps restricted multi-restaurant orders due to the following challenges:
        </p>

        <div className="flex flex-col h-full justify-between px-0 md:px-10 py-10 space-y-4">
          <div className="p-6 bg-red-100 rounded-md max-w-full md:max-w-2xl">
            <p className="text-md md:text-xl leading-loose">
              <span className="font-bold">Extended Delivery Times: </span>
              Ordering from multiple restaurants could significantly increase the overall delivery time.
            </p>
          </div>
          <div className="p-6 bg-red-100 rounded-md max-w-full md:max-w-2xl self-end">
            <p className="text-md md:text-xl">
              <span className="font-bold leading-loose">Inconsistent Delivery:</span> Even if managed by different delivery persons, varied preparation times could result in asynchronous arrivals, disappointing customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statement
