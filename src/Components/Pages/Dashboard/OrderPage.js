import React from 'react';

const OrderPage = () => {
  return (
    <div className='bg-background-gray min-h-[100vh]'> 
      <div className='container max-w-5xl 2xl:max-w-6xl mx-auto sm:px-5 py-8 sm:py-12'>
        <div className='bg-background-gray min-h-screen md:min-h-[80vh] md:pb-32'>
          <div className='mt-4 relative bg-white rounded-xl w-full max-w-4xl mx-auto'>
            <div className="absolute w-full md:w-fit px-2 md:px-0 justify-between top-6 md:-top-6 md:right-2 flex space-x-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-subtext-gray opacity-60"><polyline points="15 18 9 12 15 6"></polyline></svg><a title="View older shipment" id="older-shipment-button" data-testid="older-221022A008R01" className="flex items-center text-dark-purple gap-x-2 rounded hover:bg-background-dark-gray active:bg-gray-3" href="/dashboard/orders/221022A008R01"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg><span className="sr-only">View older shipment</span></a></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;