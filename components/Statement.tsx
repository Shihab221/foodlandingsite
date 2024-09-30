import Image from 'next/image'
import React from 'react'

const Statement = () => {
  return (
    <div className='text-gray-700 bg-white font-roboto px-20 py-10'>
      <p className='text-center text-gray-600 italic text-2xl'>unable to satisfy my cravings at a time which are just few meters away. Bwinies Burger <br/> Frustrating, Right??</p>

        <div className='py-10'>
            <h2 className='text-3xl font-bold'>
                Problem Statement
            </h2>
            <h4 className='text-2xl italic text-yellow-400'>Identifying the gaps</h4>
            {/* <Image src={} alt='woman'/> */}
        </div>

        <h4 className='text-2xl font-bold'>The Initial Challenge</h4>
      <p className='text-md '>When I first embarked on this project, I was confronted with a critical question: What improvements are needed in existing food delivery appsto enhance user experience? Through extensive research, I identified several Issues like Inefficient Scheduling, Inadequate customizationrecall ,No transparency queueing and also significant limitation-users were restricted to ordering from a single restaurant per transaction.</p>
      
      <div className='py-10 flex flex-col'>
        <h2 className='text-2xl font-bold'>The core issue</h2>
        <p className='text-md '>Despite the obvious benefits of experiencing culinary diversity, existing apps restricted multi-restaurant orders due to following challenges:</p>
        <div className='p-4 bg-red-100 rounded-md flex max-w-xl flex-start'>
            <p>Extended Delivery Times: Ordering from multiple restaurants couldsignificantly increase the overall delivery time.</p>
        </div>
        <div className='p-4 bg-red-100 rounded-md flex max-w-xl flex-end'>
            <p>
            Inconsistent Delivery: Even if managed by different delivery persons, variedpreparation times could result in asynchronous arrivals, disappointing customers.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Statement
