import React from 'react'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="lg:w-7/12 w-11/12 mx-auto border rounded bg-base border-primary-500 p-5">
        <div className="text-2xl">😢</div>
        <div className='text-2xl font-semibold'>
          We ran into trouble loading this page
        </div>
        <div className='text-sm font-[400] mt-2'>
        You may be trying to view something that is deleted, or Spectrum is just having a hiccup. If you think something has gone
wrong, please contact us.
        </div>
        <div className='flex gap-x-2 w-full mt-4'>
          <button className='w-full border rounded p-1 font-semibold'>
            Contact Us
          </button>
          <button className='w-full border rounded p-1 font-semibold bg-primary-500 text-neutral-100'>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound