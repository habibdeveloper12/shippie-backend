/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageGallery from "./ImageGallery";
import Counter from "./Counter";
import { addToCart } from "../../../store/slices/cartSlice";
import { useParams } from "react-router-dom";
import pic1 from "../../../Assect/image-product-1.jpg";
import pic2 from "../../../Assect/image-product-2.jpg";
import pic3 from "../../../Assect/image-product-3.jpg";
export const slides = [{ content: pic1 }, { content: pic2 }, { content: pic3 }];

export default function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState("image-product-1.jpg");
  const counter = useSelector((state) => state.counter);
  const cart = useSelector((state) => state.cart);

  const product1 = [
    {
      id: 1,
      name: "FedEx Small Box",
      image: pic1,
      price: 1,
    },
    {
      id: 2,
      name: "FedEx Medium Box",
      image: pic2,
      price: 1.5,
    },
    {
      id: 1,
      name: "FedEx Large Box",
      image: pic3,
      price: 2,
    },
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < counter; i++) {
      dispatch(addToCart(product1[id - 1]));
    }
  };
  console.log(cart);
  const productAll = [
    {
      id: 1,
      name: "FedEx Small Box",
      dis: ` 12.25" x 10.9" x 1.5" (31.12 cm x 27.69 cm x 3.81 cm)`,
      image: currentImage,
      price: 1,
    },
    {
      id: 2,
      name: "FedEx Medium Box",
      dis: `  13.25" x 11.5" x 2.38" (33.66 cm x 29.21 cm x 6.03 cm)`,
      image: currentImage,
      price: 1.5,
    },
    {
      id: 3,
      name: "FedEx Large Box",
      dis: ` 17.88" x 12.38" x 3" (45.40 cm x 31.43 cm x 7.62 cm) `,
      image: currentImage,
      price: 2,
    },
  ];

  return (
    <>
      <head>
        <title>FedEx Box</title>
        <meta name="description" content=" Product Page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <main
        className={`flex-col items-center justify-center bg-white h-screen`}
      >
        <div className="mx-auto max-w-6xl items-center md:flex">
          <ImageGallery />

          <div className="lg:w-1/2">
            <section className="flex-col items-start p-6">
              <h2 className="text-sm font-semibold uppercase text-black">
                FedEx Box
              </h2>
              <h1 className="mt-4 text-5xl font-bold text-black">
                {productAll[id - 1].name}
              </h1>
              <p className="mt-4 text-dark-grayish-blue">
                {productAll[id - 1].dis}
              </p>
            </section>

            <section className="flex-col items-center justify-between px-6">
              <div className="flex items-center">
                <h2 className="text-3xl font-bold text-black">
                  {" "}
                  SGD {productAll[id - 1].price}
                </h2>
                <h3 className="ml-4 mt-2 rounded bg-pale-orange px-2 py-1 font-bold text-orange">
                  50%
                </h3>
              </div>
              <h3 className="text-dark-blue mt-2 font-bold line-through">
                SGD {productAll[id - 1].price}
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
