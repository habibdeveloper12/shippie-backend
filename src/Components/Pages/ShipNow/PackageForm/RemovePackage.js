import React from 'react'

const RemovePackage = ({ remove, index}) => {
    return (
        <div>
            <div className="flex items-center pt-4 mr-6 gap-x-4">
                <div className="place-self-center rounded-full w-[26px] h-[26px] flex items-center justify-center hover:cursor-pointer">
                    <svg
                        onClick={() => remove(index)}
                        width="28"
                        height="28"
                        id="delete-svg"
                        className="w-6"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.5 7H5.83333H24.5"
                            stroke="#FD6C5F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M23.1693 6.99992C23.1693 6.44763 22.7216 5.99992 22.1693 5.99992C21.617 5.99992 21.1693 6.44763 21.1693 6.99992H23.1693ZM6.83594 6.99992C6.83594 6.44763 6.38822 5.99992 5.83594 5.99992C5.28365 5.99992 4.83594 6.44763 4.83594 6.99992H6.83594ZM8.33594 6.99992C8.33594 7.5522 8.78365 7.99992 9.33594 7.99992C9.88822 7.99992 10.3359 7.5522 10.3359 6.99992H8.33594ZM17.6693 6.99992C17.6693 7.5522 18.117 7.99992 18.6693 7.99992C19.2216 7.99992 19.6693 7.5522 19.6693 6.99992H17.6693ZM21.1693 6.99992V23.3333H23.1693V6.99992H21.1693ZM21.1693 23.3333C21.1693 24.0696 20.5723 24.6666 19.8359 24.6666V26.6666C21.6769 26.6666 23.1693 25.1742 23.1693 23.3333H21.1693ZM19.8359 24.6666H8.16927V26.6666H19.8359V24.6666ZM8.16927 24.6666C7.43289 24.6666 6.83594 24.0696 6.83594 23.3333H4.83594C4.83594 25.1742 6.32832 26.6666 8.16927 26.6666V24.6666ZM6.83594 23.3333V6.99992H4.83594V23.3333H6.83594ZM10.3359 6.99992V4.66659H8.33594V6.99992H10.3359ZM10.3359 4.66659C10.3359 3.93021 10.9329 3.33325 11.6693 3.33325V1.33325C9.82832 1.33325 8.33594 2.82564 8.33594 4.66659H10.3359ZM11.6693 3.33325H16.3359V1.33325H11.6693V3.33325ZM16.3359 3.33325C17.0723 3.33325 17.6693 3.93021 17.6693 4.66659H19.6693C19.6693 2.82564 18.1769 1.33325 16.3359 1.33325V3.33325ZM17.6693 4.66659V6.99992H19.6693V4.66659H17.6693Z"
                            fill="#FD6C5F"
                        ></path>
                        <path
                            d="M11.6641 12.8333V19.8333"
                            stroke="#FD6C5F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M16.3359 12.8333V19.8333"
                            stroke="#FD6C5F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </div>
                <span>
                    <svg
                        width="16px"
                        height="12px"
                        className="w-[18px] h-[10px] transition-transform duration-300 ease-in-out -rotate-180"
                        viewBox="0 0 16 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1 1L8 9L15 1"
                            stroke="#373F41"
                            strokeWidth="2"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default RemovePackage