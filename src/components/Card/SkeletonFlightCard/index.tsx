import React from "react";

const SkeletonFlightCard = () => {
  return (
    <div className='border border-black shadow-sm p-4 max-w-sm md:max-w-lg lg:max-w-2xl w-full'>
      <div className='animate-pulse flex space-x-4 items-center'>
        <div className='rounded-full bg-zinc-400 h-10 w-10'></div>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-2 bg-zinc-400 rounded'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-2 bg-zinc-400 rounded col-span-2'></div>
              <div className='h-2 bg-zinc-400 rounded col-span-1'></div>
            </div>
            <div className='h-2 bg-zinc-400 rounded'></div>
          </div>
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

export default SkeletonFlightCard;
