import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartPopOver from "../CartPopOver";

export default function Header() {
  const [isOpen, SetIsOpen] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggle = () => SetIsOpen(!isOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const links = [];
  const counter = useSelector((state) => state.counter);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <>
      <section className="w-[60px] bg-white mt-5 md:py-0 text-black">
        <div className="">
          <div
            id="this-div"
            className="flex w-full items-center justify-between  "
          >
            <div className="flex gap-4">
              <button
                onClick={toggle}
                className="z-40 cursor-pointer md:hidden"
              ></button>

              {/* Sidebar - Web */}
              <nav className="ml-8 hidden md:flex">
                <ul className="flex gap-8">
                  {links.map((link, i) => (
                    <li
                      key={i}
                      className="text-md cursor-pointer   font-medium text-dark-grayish-blue transition ease-in-out duration-300 hover:border-orange hover:text-very-dark-blue md:py-8"
                      id="this-element"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="relative flex items-center gap-4 md:pb-6 lg:space-x-8">
              <div className="absolute -top-0  right-4 rounded-full bg-orange px-1 text-center text-xs font-bold text-black md:top-[-0.6rem]  md:right-[-20%]">
                {cartItems.length * counter}
              </div>
              <button
                id="cart-button"
                className="text-dark-grayish-blue transition duration-300 ease-in-out hover:text-black"
                onClick={toggleCart}
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="currentColor"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar - Mobile */}
          <aside
            className={`${
              isOpen ? "pointer-events-none opacity-0 " : ""
            } transition-all duration-300 ease-in-out`}
          >
            <div
              className={`absolute left-0 top-0 z-20 h-screen w-full bg-black bg-opacity-60 transition-opacity duration-500 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`absolute left-0 top-0 z-20 h-screen w-4/6 bg-white transform transition-transform duration-500 ease-in-out ${
                isOpen ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <nav className="px-6 py-24">
                <ul className="space-y-5">
                  {links.map((link, i) => (
                    <li key={i} className="text-lg font-bold">
                      {link}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </section>

      {isCartOpen && <CartPopOver />}
    </>
  );
}
