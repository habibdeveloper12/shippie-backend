/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

const Lightboxs = ({ currentImage, lightboxVisible, setLightboxVisible }) => {
  // const [currentImage, setCurrentImage] = useState("image-product-1.jpg");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);

  const images = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];

  const goPrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to go to the next image
  const goNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div
        className={`absolute z-50 ${
          lightboxVisible ? "" : "hidden"
        } bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black opacity-75`}
        id="light-1"
      ></div>
      <div
        className={`container absolute left-[10%] top-[10%] z-50 mx-auto flex-col items-center justify-center gap-8  ${
          lightboxVisible ? "" : "hidden"
        }`}
        id="light-2"
      >
        <button
          id="close"
          className="absolute -top-8 left-[70%]"
          onClick={() => setLightboxVisible(false)}
        >
          <svg
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-200 hover:text-orange"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className="mx-auto h-full w-full">
          <div className="m-auto flex w-[45%] items-center justify-center rounded-xl bg-orange xl:w-[40%]">
            <button
              className="group relative left-6 z-20 ml-3 flex items-center justify-center rounded-full bg-white py-3 pl-3 pr-4"
              id="previous"
              onClick={goPrevious}
            >
              <svg
                width="12"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-[#1D2026] transition group-hover:stroke-orange"
                id="previous"
              >
                <path
                  d="M11 1 3 9l8 8"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                  id="previous"
                />
              </svg>
            </button>

            <img
              src={images[currentImageIndex]}
              alt="sneaker"
              className="rounded-xl"
              id="hero-lightbox"
            />

            <button
              className="group relative right-6 z-20 mr-3 flex items-center justify-center rounded-full bg-white py-3 pl-4 pr-3"
              id="next"
              onClick={goNext}
            >
              <svg
                width="13"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-[#1D2026] transition group-hover:stroke-orange"
                id="next"
              >
                <path
                  d="m2 1 8 8-8 8"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                  id="next"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="thumbnails thumbnails-light m-auto flex w-[45%] justify-between gap-4 md:mt-4 lg:mt-6 xl:w-2/5">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                currentImageIndex === index ? "ring-active" : ""
              } w-1/5 cursor-pointer rounded-xl bg-white`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={image}
                alt="thumbnail"
                className={`rounded-xl transition hover:opacity-50`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Lightboxs;
