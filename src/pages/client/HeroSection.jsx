import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-r from-blue-400 to bg-indigo-500 dark:from-gray-800 dark:to-gray-900 py-16 px-4 text-center mt-16'>
			<div className='max-w-3xl mx-auto'>
				<h1 className='text-white text-4xl font-bold mb-4'>Courses made by indies for indies</h1>
				<p className='text-gray-200 dark:text-gray-400 mb-8'>Upskill with technologies you need and provide</p>
				<form action='' className='flex items-center bg-[#ffffff77] rounded-full shadow-xl overflow-hidden mb-8'>
					<Input type='text' className='flex-grow border-none focus-visible:ring-0 px-6 py-3 placeholder-gray-900' placeholder='Search Courses' />
					<Button className='bg-gray-50 dark:bg-blue-700 text-black px-6 py-3 rounded-r-full hover:bg-gray-200 dark:hover:bg-blue-800'>Search</Button>
				</form>
				<Button className='bg-white text-black hover:bg-gray-200 rounded-full'>Explore All Courses</Button>
			</div>
    </div>
  )
}

export default HeroSection