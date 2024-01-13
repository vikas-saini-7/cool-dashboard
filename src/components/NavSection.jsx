import React from 'react'

const NavSection = () => {
  return (
    <div className='flex flex-col justify-between h-screen py-10 px-3 navSection'>
      <div>
        <div className='flex justify-center py-4 my-2 rounded-xl hover:bg-gray-200 text-blue-600 cursor-pointer'>
          <i class="fa-solid fa-dove fa-2x"></i>
        </div>
        <div className='flex justify-center py-4 my-2 rounded-xl hover:bg-gray-200 cursor-pointer text-gray-500'>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      {/* divide  */}
      <div>
        <div className='flex justify-center py-6 bg-blue-600 text-white rounded-xl cursor-pointer'>
          <i class="fa-solid fa-house"></i>
        </div>
        <div className='flex justify-center py-4 my-2 rounded-xl hover:bg-gray-200 cursor-pointer text-gray-500'>
          <i class="fa-solid fa-newspaper"></i>
        </div>
        <div className='flex justify-center py-4 my-2 rounded-xl hover:bg-gray-200 cursor-pointer text-gray-500'>
          <i class="fa-solid fa-rectangle-list"></i>
        </div>
        <div className='flex justify-center py-4 my-2 rounded-xl hover:bg-gray-200 cursor-pointer text-gray-500'>
          <i class="fa-solid fa-user"></i>
        </div>
        <div className='flex justify-center py-4 my-2 rounded-xl hover:bg-gray-200 cursor-pointer text-gray-500 phone-search'>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      {/* divide  */}
      <div>
        <div className='flex justify-center  py-4 my-2 rounded-xl hover:bg-gray-200 cursor-pointer text-gray-500'>
          <i class="fa-solid fa-bell"></i>
        </div>
        <div className='flex justify-center  py-4 my-2 rounded-xl hover:bg-gray-200 cursor-pointer text-gray-500'>
          <i class="fa-solid fa-right-from-bracket"></i>
        </div>
      </div>
    </div>
  )
}

export default NavSection