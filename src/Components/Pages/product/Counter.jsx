import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../store/slices/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  console.log("contador: ", counter);

  return (
    <div className="mt-4 flex h-[52px] items-center justify-between rounded-lg bg-light-grayish-blue px-6 lg:w-1/3">
      <button onClick={handleDecrement}>
        <svg
          width="12"
          height="4"
          xmlns="http://www.w3.org/2000/svg"
          href="http://www.w3.org/1999/xlink"
          className="hover:opacity-80"
        >
          <defs>
            <path
              d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
              id="a"
            />
          </defs>
          <use fill="#FF7E1B" fillRule="nonzero" href="#a" />
        </svg>
      </button>
      <p className="text-xl font-bold text-very-dark-blue">{counter}</p>
      <button onClick={handleIncrement}>
        <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          href="http://www.w3.org/1999/xlink"
          className="hover:opacity-80"
        >
          <defs>
            <path
              d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
              id="b"
            />
          </defs>
          <use fill="#FF7E1B" fillRule="nonzero" href="#b" />
        </svg>
      </button>
    </div>
  );
}
