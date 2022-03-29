import React, { FC } from "react";

const ThreeSectionCardLoading: FC = () => {
  return (
    <>
      <div className='w-full bg-zinc-400 py-10'>
        <div className='container mx-auto px-6 flex items-start justify-center'>
          <div className='w-full'>
            <div className='flex flex-col lg:flex-row mx-auto bg-white shadow rounded animate-pulse'>
              <div className='max-w-sm lg:w-1/3 px-12 flex flex-col items-center py-10'>
                <div className='w-80 h-80 mb-3 p-2 rounded bg-white flex items-center justify-center'></div>
              </div>
              <div className='max-w-sm lg:w-1/3 px-12 flex flex-col items-center py-10 border-t-2 border-b-2 lg:border-t-0 lg:border-b-0 lg:border-l-2 lg:border-r-2'>
                <div className='w-80 h-80 mb-3 p-2 rounded bg-white flex items-center justify-center'></div>
              </div>
              <div className='max-w-sm lg:w-1/3 px-12 flex flex-col items-center py-10'>
                <div className='w-80 h-80 mb-3 p-2 rounded bg-white flex items-center justify-center'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ThreeSectionCardLoading;
