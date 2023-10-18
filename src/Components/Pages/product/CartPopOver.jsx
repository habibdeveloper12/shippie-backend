import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartEmpty, removeFromCart } from "../../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPopOver() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const handleSetCartEmpty = (e) => {
    console.log(e);
    dispatch(removeFromCart(e));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="popover-content md:top-18 absolute left-1/2 top-20 z-40 w-[360px] -translate-x-1/2 transform rounded-xl bg-white shadow-lg shadow-very-dark-blue transition delay-500 ease-in-out md:left-auto md:right-6 xl:right-36 2xl:right-[27%] md:translate-x-0">
          <div className="">
            <h3 className="border-b border-grayish-blue px-5 pb-6 pt-4 text-xl font-bold text-very-dark-blue">
              Cart
            </h3>
          </div>
          <div className="py-14">
            <p className="text-center font-bold text-dark-grayish-blue">
              Your Cart is empty.
            </p>
          </div>
        </div>
      ) : (
        <div className="popover-content md:top-18 absolute left-1/2 top-20 z-40 w-[360px] -translate-x-1/2 transform rounded-xl bg-white shadow-lg shadow-very-dark-blue md:left-auto md:right-6 md:translate-x-0">
          <div className="">
            <h3 className="border-b border-grayish-blue px-5 pb-6 pt-4 text-xl font-bold text-very-dark-blue">
              Cart
            </h3>
          </div>
          <div className="flex flex-col gap-4 px-5 py-6">
            {cartItems?.map((item) => (
              <div className="flex items-center justify-between" key={item.id}>
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt="product"
                    width={50}
                    className="rounded-md"
                  />
                  <div className="text-dark-grayish-blue">
                    <h4 className="text-black ">{item.name}</h4>
                    <div className="flex items-center gap-2">
                      <p id="here" className="text-black">
                        ${item.price} x {counter}
                      </p>
                      <p className="font-bold text-very-dark-blue">
                        ${item.price * counter}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleSetCartEmpty(item)}
                  className="hover:text-black"
                >
                  <svg
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    href="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        id="a"
                      />
                    </defs>
                    <use fill="currentColor" fill-rule="nonzero" href="#a" />
                  </svg>
                </button>
              </div>
            ))}
            <button
              style={{ backgroundColor: " rebeccapurple" }}
              onClick={() => navigate("/checkout-form")}
              className="mt-4 w-full rounded-lg bg-blue-700 p-4 font-semibold text-white"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
