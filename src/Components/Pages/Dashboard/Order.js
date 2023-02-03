import React from 'react';

const Order = () => {
  return (
    <div>
      <a className="md:grid md:grid-cols-3 flex flex-col w-full h-40 mt-6 bg-white hover:bg-gray-1 rounded-md shadow-md hover:shadow-lg items-center justify-center truncate" href="/dashboard/orders/221025A001R01"><div className="md:col-span-2 relative flex flex-col justify-center w-full items-center md:h-40 px-8 md:px-12 md:border-r border-border-gray"><div className="w-full text-center md:text-left"><h2 className="text-base lg:text-lg font-bold overflow-hidden text-ellipsis">To Ddd, FI</h2><p className="text-xs md:text-vsm text-gray-4">25 Oct 2022, 4:24 AM</p></div><div className="md:absolute w-fit md:w-1/3 min-w-fit py-0 md:py-0.5 left-0 top-0 px-2 md:px-2.5 rounded-md md:rounded-none md:rounded-br-md whitespace-pre bg-background-dark-gray text-subheading-gray"><span className="text-sm md:text-xs">Order</span><span className="text-sm md:text-base tracking-wide"> 221025A001R01</span></div></div><div className="md:col-span-1 mt-4 md:mt-0 md:px-12 text-center md:text-left"><span className="text-sm md:text-base font-bold flex items-center text-subheading-gray"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg><span className="ml-2">Cancelled</span></span></div></a>
    </div>
  );
};

export default Order;