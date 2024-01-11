import React from 'react';
import { RetirementIncome } from '../DUMMY_DATA';

const MiddleSection = () => {
  return (
    <div className='p-4 pt-8'>

      <h1 className='text-blue-800 font-bold'>Retirement Income</h1>
      <h2 className='text-2xl mb-4'>Starting Year 2056</h2>
      <div className='flex gap-5 mb-8'>
        {RetirementIncome.map((item) => (
          <div className='flex flex-col  flex-1 p-2 border-b-2 border-blue-600'>
            <h2 className='text-2xl font-bold mb-2'>{item.data}</h2>
            <p className='text-gray-500 text-sm mb-2'>{item.title}</p>
          </div>
        ))}
      </div>

      <h2 className='mt-4 font-semibold'>Contributions Overtime</h2>
      {/* Chart  */}

      <h2 className='mt-4 font-semibold'>How do I compare to my peers?</h2>
      <p className='text-gray-500'>These numbers represent current goal achievement</p>
      {/* Chart 2 */}


    </div>
  )
}

export default MiddleSection;