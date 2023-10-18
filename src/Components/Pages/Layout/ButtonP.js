import React from "react";

const ButtonP = ({ title }) => {
  return (
    <button className="border-2 bg-white border-solid text-sm sm:text-base lg:text-lg font-medium font-pop rounded-lg border-primary transition duration-300 ease-in-out text-black px-4 py-1 md:px-6 md:py-2 hover:font-medium hover:bg-white hover:text-primary">
      {title}
    </button>
  );
};

export default ButtonP;
