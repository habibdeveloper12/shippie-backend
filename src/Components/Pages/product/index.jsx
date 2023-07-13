/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageGallery from "./ImageGallery";
import Counter from "./Counter";
import { addToCart } from "../../../store/slices/cartSlice";

export const slides = [
  { content: "/image-product-1.jpg" },
  { content: "/image-product-2.jpg" },
  { content: "/image-product-3.jpg" },
  { content: "/image-product-4.jpg" },
];

export default function Product() {
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState("image-product-1.jpg");
  const counter = useSelector((state) => state.counter);
  const cart = useSelector((state) => state.cart);

  const product1 = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    image: currentImage,
    price: 125.0,
  };

  const handleAddToCart = () => {
    for (let i = 0; i < counter; i++) {
      dispatch(addToCart(product1));
    }
  };
  console.log(cart);
  return (
    <>
      <head>
        <title>E-commerce Product Page</title>
        <meta name="description" content="E-commerce Product Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <main className={`flex-col items-center justify-center bg-white`}>
        <div className="mx-auto max-w-6xl items-center md:flex">
          <ImageGallery />

          <div className="lg:w-1/2">
            <section className="flex-col items-start p-6">
              <h2 className="text-sm font-semibold uppercase text-black">
                sneaker company
              </h2>
              <h1 className="mt-4 text-5xl font-bold text-black">
                Fall Limited Edition Sneakers
              </h1>
              <p className="mt-4 text-dark-grayish-blue">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
            </section>

            <section className="flex-col items-center justify-between px-6">
              <div className="flex items-center">
                <h2 className="text-3xl font-bold text-black">$ 125.00</h2>
                <h3 className="ml-4 mt-2 rounded bg-pale-orange px-2 py-1 font-bold text-orange">
                  50%
                </h3>
              </div>
              <h3 className="text-dark-blue mt-2 font-bold line-through">
                $ 250.00
              </h3>
            </section>

            <section className="px-6 pb-20 pt-4 md:pb-0 lg:flex lg:space-x-4">
              <Counter />
              <button
                onClick={handleAddToCart}
                className="mt-4 bg-green-600 flex w-full items-center justify-center gap-4 rounded-lg bg-orange py-3 font-semibold text-white shadow-md shadow-orange hover:bg-opacity-90 lg:w-[55%]"
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="currentColor"
                    fillRule="nonzero"
                  />
                </svg>
                Add to cart
              </button>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
