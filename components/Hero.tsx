import Image from 'next/image'
import React from 'react'
import firstimage from '../public/images/first.png'
import logo from '../public/images/foodie_faster.jpg'
const Hero = () => {
  return (
    <div className='bg-white'>
      <Image className='w-full' src={firstimage} alt='first_image_of_hero'/>

      <div className='py-10 px-10 flex flex-col sm:flex-row items-center'>
        <div className='py-10 px-5'>
            <h2 className='text-gray-900 text-4xl font-bold font-roboto'>Overview</h2>
            <h4 className='text-yellow-400 italic text-2xl '>Unlocking unlimited taste</h4>
            <p className='text-roboto text-gray-700 text-xl leading-loose'>In a bustling city filled with diverse culinary aromas, food delivery apps offering convenience and varietyat our fingertips. However, these apps often limit users to ordering from a single restaurant, restricting culinaryfreedom. The common frustration of being forced to choose between diverse cravings sparked my journey tocreate the Delicious app. This groundbreaking solution allows users to order from multiple restaurantssimultaneously, ensuring a varied and delightful dining experience. Also identified some key gaps and addressedthese issues with innovative features . This case study explores our journey from identifying a common userfrustration to delivering an intuitive, user-friendly solution.</p>
        </div>
        <Image className='max-w-sm rounded-xl' src={logo} alt='logo'/>
      </div>
    </div>
  )
}

export default Hero
