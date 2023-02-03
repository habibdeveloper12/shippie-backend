import React from "react";

const Order = (p) => {
  // console.log(p);

  return (
    <div>
      <div className="text-slate-700 md:grid md:grid-cols-3 flex flex-col w-full h-40 my-6 bg-white hover:bg-gray-1 rounded-md shadow-md hover:shadow-lg items-center justify-center truncate">
        <div className="md:col-span-2 relative flex flex-col justify-center w-full items-center md:h-40 px-8 md:px-12 md:border-r border-border-gray">
          <div className="w-full text-center md:text-left">
            <p className="text-base lg:text-lg overflow-hidden text-ellipsis">
              <b>Sender:</b> {p.sender.firstName + " " + p.sender.lastName}
              <br />
              <b>Recipient:</b> {p.recipient.name}
              <br />
              <b>Status:</b> {["Action Pending","In Progress","Completed","Cancelled"][p.status-1]}
              <br />
              <b>Date and Time:</b> {new Date(p.createdAt).toLocaleString()}
              <br />
              <b>Order ID:</b> {p._id}
            </p>
          </div>
        </div>
        <div className="md:col-span-1 mt-4 md:mt-0 md:px-12 text-center grid justify-items-center">{p.status == 1 ? <>
        <a
          href={p.paymentLink}
          className="text-sm md:text-base font-bold flex items-center p-1 text-purple-600"
        >
          Goto Checkout
        </a>
        <a
          href={"/dashboard/orders/" + p._id}
          className="text-sm md:text-base font-bold flex items-center p-1"
        >
          Remove from Cart
        </a>
        <a
          href={"/dashboard/orders/" + p._id}
          className="text-sm md:text-base font-bold flex items-center p-1"
        >
          Get all Details
        </a>
      </> :<>
        <a
          href={"/dashboard/orders/" + p._id}
          className="text-sm md:text-base font-bold flex items-center p-1"
        >
          Get all Details
        </a>
      </>}</div>
      </div>
    </div>
  );
};

export default Order;
