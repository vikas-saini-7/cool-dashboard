import React from 'react';
import { RightCard2Data } from '../DUMMY_DATA';

const RightSection = () => {
  return (
    <div className='p-4 pt-8 w-4/5 rightSection'>
      
      <div className=' flex flex-col gap-4 bg-gray-50 p-4'>
        <h2 className='mt-4 mb-4 font-semibold'>Retirement Strategy</h2>
        {/* item  */}
        <div className=''>
          <p className='text-sm font-semibold'>Employee Contribution</p>
          <div className='flex gap-2 mb-4'>
            <input
            type="range"
            min="0"
            max="10"
            value="5"
            id="interest-rate"
            className="w-full focus:ring-indigo-500 focus:border-indigo-500 text-indigo-600"
            />
            <span>12%</span>
          </div>
        </div>
        {/* item  */}
        <div className='mb-4 pb-4 border-b-2'>
          <p className='text-sm font-semibold'>Employee Contribution</p>
          <div className='flex gap-2 mb-4'>
            <input
            type="range"
            min="0"
            max="10"
            value="5"
            id="interest-rate"
            className="w-full focus:ring-indigo-500 focus:border-indigo-500 text-indigo-600"
            />
            <span>12%</span>
          </div>
        </div>
        
        <div className='flex flex-col gap-4'>
          {RightCard2Data.map((item) => (
            <div className='flex justify-between'>
            <p className='text-sm font-semibold'>{item.title}</p>
            <span>{item.data}</span>
          </div>
          ))}
          <button className='bg-blue-600 px-4 py-2 text-white rounded-md'>Update</button>
          <div className='text-center'>
            <span className='text-blue-600 text-xs font-bold'>View Help Docs &gt;</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2 border-l-2 border-blue-600 p-2 pl-5 mt-8'>
        <h2>Are you considering a <b>Housing Advance?</b></h2>
        <p className='text-sm text-gray-400'>Limited time reduced interest.</p>
        <span className='text-blue-600 text-xs font-bold'>Learn More &gt;</span>
      </div>

    </div>
  )
}

export default RightSection