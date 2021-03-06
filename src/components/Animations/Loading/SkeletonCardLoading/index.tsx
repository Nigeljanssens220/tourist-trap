import React from "react";

const SkeletonCardLoading = () => {
  return (
    <div className='border border-black shadow-sm p-4 max-w-sm md:max-w-lg lg:max-w-2xl w-full'>
      <div className='animate-pulse flex space-x-8 lg:space-x-12 lg:mx-4 items-center justify-center'>
        <div className='flex flex-col gap-y-10 py-6 items-center justify-center'>
          <div className='rounded-full bg-zinc-400 h-12 w-12'></div>
          <div className='rounded-full bg-zinc-400 h-12 w-12'></div>
        </div>
        <div className='grid grid-cols-2 gap-5 justify-center'>
          <div className='h-16 w-48 md:w-80 bg-zinc-400 rounded col-span-3'></div>
          <div className='h-16 w-48 md:w-80 bg-zinc-400 rounded col-span-2 lg:col-span-3'></div>
        </div>
      </div>
    </div>
    // <div className='items-center justify-center w-full'>
    //   <div className='w-full'>
    //     <div className='flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow'>
    //       <div className='w-full lg:w-2/3 h-64 ' />
    //       <div className='w-full lg:w-1/3 h-24 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r  bg-gray-100' />
    //     </div>
    //   </div>
    // </div>
  );
};

export default SkeletonCardLoading;
