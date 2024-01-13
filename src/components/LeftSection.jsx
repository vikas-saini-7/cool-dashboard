import React from 'react';
import { RecentTransactions, userInfo } from '../DUMMY_DATA';

const LeftSection = () => {
  return (
    // Left 
    // border-x-2
    <div className='bg-gray-50  px-4 pt-8'>
        
        <div className='flex justify-end rounded-xl pr-4 py-3 cursor-pointer text-gray-500 phone-noti'>
            <i class="fa-solid fa-bell"></i>
        </div>
        {/* top  */}
        <div class="flex flex-col space-y-4 p-4 ">
            <div class="flex items-center mb-4">
                <img src="https://placehold.co/100x100" alt="user avatar" class="w-20 rounded-full object-cover" />
                <div className='ml-4'>
                    <h3 class="font-semibold text-2xl">Hi {userInfo.name},</h3>
                    <p class="text-sm text-gray-500">welcome Back.</p>
                </div>
            </div>
            <div class="font-semibold text-gray-900">Today</div>
            <div className='py-0'>
                <h2 class="text-3xl font-bold">$19,892</h2>
                <p class="text-gray-500 text-sm">Account Balance</p>
            </div>
            <div class="py-0">
                <h2 class="text-lg font-bold ">$4,000</h2>
                <p class="text-gray-500 text-sm">Year-to-Date Contributions</p>
            </div>
            <div class="py-0">
                <h2 class="text-lg font-bold ">$1,892</h2>
                <p class="text-gray-500 text-sm">Total Interest</p>
            </div>
            <button class="flex items-center space-x-2 border bg-blue-600 text-white rounded-md py-2 px-4 mt-4 w-fit">
                <span className='text-sm'>I want to</span>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>

        {/* bottom  */}
        <div class=" rounded-lg p-4">
            <h1 class="text-xl font-semibold text-gray-900">Recent Transactions</h1>
            <div class="mt-4">
                {RecentTransactions.map((item) => (
                    <div class="flex-col items-center py-4 border-b-2 border-gray-200">
                        <p class="text-xs text-gray-400">{item.date}</p>
                        <h2 className='text-sm'>{item.transaction}</h2>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default LeftSection