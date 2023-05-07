import React, { useRef, useState } from 'react'
import Link from 'next/link'

import { AiOutlineClose, AiOutlineShoppingCart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

function Navbar() {
  const [count, setcount] = useState('0');


  const toggleminus = () => {
    setcount(count - 1);

  }
  const toggleadd = () => {
    setcount(count + 1);

  }
  const togglecart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }

    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }

  }
  const ref = useRef()
  return (

    <header className="  text-red-400 body-font shadow-md my-2 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

          <span className="ml-3 text-xl font-serif"><span className='text-blue-500'>Code's</span> wear</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className=" mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
          <Link href={'/hoodies'} className=" mr-5 hover:text-gray-900 cursor-pointer">Hoodies</Link>
          <Link href={'/tshirt'} className="mr-5 hover:text-gray-900 cursor-pointer">T-shirts</Link>
          <Link href={'/mugs'} className="mr-5 hover:text-gray-900 cursor-pointer">Mugs</Link>
          <Link href={'/sticker'} className="mr-5 hover:text-gray-900 cursor-pointer">Stickers</Link>
          <Link href={'/signup'} className="  hover:text-gray-600 hover:text-underline mr-5  text-red-500 cursor-pointer">SignUp</Link>
          <Link href={'/login'} className="mr-5 hover:text-gray-900 cursor-pointer">LogIn</Link>
          <div onClick={togglecart} className=" w-[30px] mr-5 hover:text-gray-900 cursor-pointer"><AiOutlineShoppingCart /> </div>

        </nav>

      </div>


      {/* cart */}

      <div ref={ref} className=' w-72 h-screen  transform transition-transform translate-x-full absolute top-0 p-10 right-0 bg-pink-100 text-black'>
        <h2 className='font-semibold text-xl '> Shopping cart </h2>
        <span><AiOutlineClose onClick={togglecart} className=' text-2xl text-pink-500 cursor-pointer absolute right-0 top-5' /></span>
        <ol className=' list-decimal'>
          <li>
            <div className=' item flex my-5'>
              <div className='w-2/3 '>Tshirt - Wear the code</div>
              <div className='flex font-semibold items-center justify-center w-1/3'> <AiOutlineMinus onClick={toggleminus} className=' cursor-pointer  mx-3 text-2xl ' />{count}<AiOutlinePlus onClick={toggleadd} className=' mx-3  cursor-pointer' /></div>
            </div>
          </li>
          <li>
            <div className=' item flex my-5'>
              <div className='w-2/3 '>Tshirt - Wear the code</div>
              <div className='flex font-semibold items-center justify-center w-1/3'><AiOutlineMinus onClick={toggleminus} className=' cursor-pointer  mx-3 ' />{count}<AiOutlinePlus onClick={toggleadd} className=' mx-3  cursor-pointer' /></div>
            </div>
          </li>

          <li>
            <div className=' item flex my-5'>
              <div className='w-2/3 '>Tshirt - Wear the code</div>
              <div className='flex font-semibold items-center justify-center w-1/3'><AiOutlineMinus onClick={toggleminus} className=' mx-3 cursor-pointer' />{count}<AiOutlinePlus onClick={toggleadd} className=' mx-3  cursor-pointer text-2xl' /></div>
            </div>
          </li>

          <li>
            <div className=' item flex my-5'>
              <div className='w-2/3 '>Tshirt - Wear the code</div>
              <div className='flex font-semibold items-center justify-center w-1/3'><AiOutlineMinus onClick={toggleminus} className=' mx-3  cursor-pointer' />{count}<AiOutlinePlus onClick={toggleadd} className=' mx-3  cursor-pointer' /></div>
            </div>
          </li>
          <button className="lg:mt-2 cursor-pointer xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Checkout</button>




        </ol>
      </div>

    </header>




  )
}

export default Navbar
