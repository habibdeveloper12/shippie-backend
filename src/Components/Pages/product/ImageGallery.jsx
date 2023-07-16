import React, { useState } from "react";
import Lightboxs from "./UI/Lightboxs";
import pic1 from "../../../Assect/image-product-1.jpg";
import pic2 from "../../../Assect/image-product-2.jpg";
import pic3 from "../../../Assect/image-product-3.jpg";
import pic4 from "../../../Assect/1x1x2.png";
import pic5 from "../../../Assect/2x1x1.png";
import pic6 from "../../../Assect/3x3x1.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const images = [pic1, pic2, pic3, pic4, pic5, pic6];
const ImageGallery = () => {
  const { id } = useParams();

  const [currentImage, setCurrentImage] = useState(images[id - 1]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  return (
    <>
      <Lightboxs
        currentImage={currentImage}
        lightboxVisible={lightboxVisible}
        setLightboxVisible={setLightboxVisible}
      />
      <section className="h-fit flex-col gap-8 sm:mx-2 sm:flex sm:h-full sm:flex-row sm:gap-4 md:mx-4 md:mt-8 lg:mx-0 lg:mt-12 lg:w-1/2 lg:flex-col">
        <picture className="relative flex items-center bg-orange sm:bg-transparent">
          <button
            className="absolute left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white pr-1 sm:hidden"
            id="previous-mobile"
            onClick={() => {
              const newIndex =
                currentImageIndex > 0
                  ? currentImageIndex - 1
                  : images.length - 1;
              setCurrentImage(images[newIndex]);
              setCurrentImageIndex(newIndex);
            }}
          >
            <svg
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              id="previous-mobile"
            >
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
                id="previous-mobile"
              />
            </svg>
          </button>
          <img
            src={currentImage}
            alt="sneaker"
            className="pointer-events-none m-auto block transition duration-300 sm:rounded-xl md:w-full lg:pointer-events-auto lg:w-3/4 lg:cursor-pointer lg:hover:shadow-xl xl:w-[70%] xl:rounded-xl"
            id="hero"
            onClick={() => setLightboxVisible(true)}
          />
          <button
            className="absolute right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white pl-1 sm:hidden"
            id="next-mobile"
            onClick={() => {
              const newIndex = (currentImageIndex + 1) % images.length;
              setCurrentImage(images[newIndex]);
              setCurrentImageIndex(newIndex);
            }}
          >
            <svg
              width="13"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              id="next-mobile"
            >
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
                id="next-mobile"
              />
            </svg>
          </button>
        </picture>

        <div className="thumbnails m-auto hidden justify-between gap-4 space-x-2 sm:flex sm:h-fit sm:flex-col sm:items-center sm:justify-start md:gap-5 lg:gap-6 lg:max-w-3/4 lg:flex-row xl:gap-4 xl:space-x-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-1/5 cursor-pointer rounded-xl transition delay-200 ease-in-out active:ring active:ring-orange sm:w-28 md:w-20 lg:w-[72px] xl:w-[78px] ${
                currentImageIndex === index ? "ring-active" : ""
              }`}
              onClick={() => {
                setCurrentImage(image);
                setCurrentImageIndex(index);
              }}
            >
              <img
                src={image}
                alt="thumbnail"
                className={`active rounded-xl transition hover:opacity-50 ${
                  currentImageIndex === index ? "opacity-50" : ""
                }`}
                id={`thumb-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageGallery;
