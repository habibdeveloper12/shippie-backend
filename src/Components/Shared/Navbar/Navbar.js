import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import logo from "../../../Assect/logo.png";
import Header from "../../Pages/product/UI/Header";
const Navbar = () => {
  // For Menu
  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countries, setCountries] = useState(false);
  const [features, setFeatures] = useState(false);
  const [price, setPrice] = useState(false);
  const [learn, setLearn] = useState(false);
  const [packages, setPackages] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [contact, setContact] = useState(false);

  const [user] = useAuthState(auth);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);
  const handleLogout = () => {
    signOut(auth);
  };

  // Navbar Style
  function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 10;

    if (distanceY > shrinkOn) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  window.addEventListener("scroll", resizeHeaderOnScroll);

  return (
    <div className=" bg-white z-50 sticky top-0  ">
      <nav className="max-w-7xl mx-auto px-4 md:px-3 lg:px-6">
        <div
          className={`${
            scroll ? " h-10 md:h-14 xl:h-26" : " h-16 md:h-18 xl:h-20"
          }   flex justify-between items-center md:justify-end md:flex-row transition-all duration-300 ease-in-out `}
        >
          <div
            className={`${
              scroll ? "w-28 lg:w-40 pr-2" : "w-40 lg:w-52 pr-2"
            } transition-all duration-300 ease-in-out`}
          >
            <NavLink to={"/"}>
              <img src={logo} alt="" className="w-48" />
            </NavLink>
          </div>
          <div className="flex h-full items-center space-x-2 sm:space-x-6 md:hidden">
            <NavLink
              to={"shipNow"}
              className={({ isActive }) =>
                `py-2 px-5 rounded-full border border-[#844FFA] text-white bg-[#844FFA] hover:bg-[#6621DF]  text-[13px]   ${
                  isActive ? "text-white" : "text-white"
                }`
              }
            >
              Send Parcel
            </NavLink>
            {/* cancle button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:mr-4 rounded-md md:hidden text-dark-purple"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* website */}
          <div className="hidden ml-auto md:block md:self-stretch basis-4/5 md:flex-none ">
            <div className="h-full flex md:gap-x-6 lg:gap-x-8 xl:gap-x-10 justify-between items-center relative">
              {/* <NavLink
                onClick={() => setCountries(!countries)}
                to={"countries"}
                className={({ isActive }) =>
                  `  text-[13px] font-semibold ${
                    isActive ? "text-purple-500" : "text-black"
                  }`
                }
              >
                Countries
                
              </NavLink> */}

              {/* <NavLink
                onClick={() => setFeatures(!features)}
                to={"features"}
                className={({ isActive }) =>
                  ` rounded-md text-[13px] font-semibold  ${
                    isActive ? "text-purple-500" : "text-black"
                  }`
                }
              >
                Features
              </NavLink> */}

              {/* <NavLink
                onClick={() => setPrice(!price)}
                to={"prices"}
                className={({ isActive }) =>
                  ` rounded-md text-[13px] font-semibold  ${
                    isActive ? "text-purple-500" : "text-black"
                  }`
                }
              >
                Prices
              </NavLink>

              <NavLink
                onClick={() => setLearn(!learn)}
                to={"learn"}
                className={({ isActive }) =>
                  ` rounded-md text-[13px] font-semibold  ${
                    isActive ? "text-purple-500" : "text-black"
                  }`
                }
              >
                Learn
              </NavLink> */}

              <>
                <NavLink
                  to={"dashboard"}
                  className={({ isActive }) =>
                    `rounded-md text-[13px] font-semibold  ${
                      isActive ? "text-purple-500" : "text-black"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to={"track-panel"}
                  className={({ isActive }) =>
                    `rounded-md text-[13px] font-semibold  ${
                      isActive ? "text-purple-500" : "text-black"
                    }`
                  }
                >
                  Track Parcel
                </NavLink>
              </>

              <NavLink
                onClick={() => setPackages(!packages)}
                to={"Packages"}
                className={({ isActive }) =>
                  `rounded-md text-[13px] font-semibold  ${
                    isActive ? "text-purple-500" : "text-black"
                  }`
                }
              >
                Packages
              </NavLink>
              <NavLink
                onClick={() => setContact(!contact)}
                to={"contact"}
                className={({ isActive }) =>
                  `rounded-md text-[13px] font-semibold  ${
                    isActive ? "text-purple-500" : "text-black"
                  }`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to={"shipnow"}
                className={({ isActive }) =>
                  `py-1 px-5 rounded-full border font-semibold border-[#844FFA] hover:text-white hover:bg-[#844FFA]  text-[13px]   ${
                    isActive ? "text-[#844FFA]" : "text-black"
                  }`
                }
              >
                Send Parcel
              </NavLink>
              <Header />
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://placeimg.com/80/80/people" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a href="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a onClick={handleLogout}>Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <NavLink
                  to={"signin"}
                  className={({ isActive }) =>
                    `rounded-md text-[13px] font-semibold ${
                      isActive ? "text-purple-500" : "text-black"
                    }`
                  }
                >
                  Sign In
                </NavLink>
              )}
            </div>

            {/* Mega Menu for Countries */}
            <OutsideClickHandler
              onOutsideClick={() => {
                setCountries(false);
              }}
            >
              <div
                className={`absolute w-screen   border-y border-gray-200 left-0 p-4 bg-white h-[27rem] shadow-sm ${
                  countries ? "block" : "hidden"
                }`}
              >
                {/* cancle button */}
                <button onClick={() => setCountries(false)}>
                  <svg
                    className="h-6 w-6  text-gray-800 cursor-pointer  hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div
                className={`absolute  pt-8 ${countries ? "block" : "hidden"}`}
              >
                <div className=" flex md:gap-x-6 lg:gap-x-8 xl:gap-x-16">
                  <div>
                    <h1
                      className=" text-[13px]
                                     font-semibold text-[#595959] mb-3"
                    >
                      Asia
                    </h1>
                    <nav className=" flex flex-col gap-3">
                      <NavLink
                        to={"countries/hongkong"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Hong Kong
                      </NavLink>

                      <NavLink
                        to={"countries/japan"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Japan
                      </NavLink>

                      <NavLink
                        to={"countries/malaysia"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Malaysia
                      </NavLink>

                      <NavLink
                        to={"countries/southkorea"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        South korea
                      </NavLink>
                    </nav>
                  </div>
                  <div>
                    <h1
                      className=" text-[13px]
                                     font-semibold text-[#595959] mb-3"
                    >
                      Europe
                    </h1>
                    <nav className=" flex flex-col gap-3">
                      <NavLink
                        to={"countries/belgium"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Belgium
                      </NavLink>

                      <NavLink
                        to={"countries/France"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        France
                      </NavLink>

                      <NavLink
                        to={"countries/germany"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Germany
                      </NavLink>

                      <NavLink
                        to={"countries/greece"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Greece
                      </NavLink>

                      <NavLink
                        to={"countries/italy"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Italy
                      </NavLink>

                      <NavLink
                        to={"countries/netherlands"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Netherlands
                      </NavLink>

                      <NavLink
                        to={"countries/portugal"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Portugal
                      </NavLink>

                      <NavLink
                        to={"countries/spain"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Spain
                      </NavLink>

                      <NavLink
                        to={"countries/sweden"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Sweden
                      </NavLink>

                      <NavLink
                        to={"countries/uk"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]   ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Uk
                      </NavLink>
                    </nav>
                  </div>
                  <div>
                    <h1
                      className=" text-[13px]
                                      font-semibold text-[#595959] mb-3"
                    >
                      N. America
                    </h1>
                    <nav className=" flex flex-col gap-3">
                      <NavLink
                        to={"countries/canada"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Canada
                      </NavLink>
                      <NavLink
                        to={"countries/usa"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        USA
                      </NavLink>
                    </nav>
                  </div>
                  <div>
                    <h1
                      className=" text-[13px]
                                      font-semibold text-[#595959] mb-3"
                    >
                      Oceania
                    </h1>
                    <nav className=" flex flex-col gap-3">
                      <NavLink
                        to={"countries/australia"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Australia
                      </NavLink>
                      <NavLink
                        to={"countries/newzealand"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Newzealand
                      </NavLink>
                    </nav>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>

            {/* Mega Menu for features */}
            <OutsideClickHandler
              onOutsideClick={() => {
                setFeatures(false);
              }}
            >
              <div
                className={`absolute w-screen   border-y border-gray-200 left-0 p-4 bg-white h-[14rem] shadow-sm ${
                  features ? "block" : "hidden"
                }`}
              >
                {/* cancle button */}
                <button onClick={() => setFeatures(false)}>
                  <svg
                    className="h-6 w-6  text-gray-800 cursor-pointer  hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={`absolute pl-24 xl:pl-[6.4rem]  pt-8 ${
                  features ? "block" : "hidden"
                }`}
              >
                <div>
                  <div>
                    <nav className=" flex flex-col gap-3">
                      <NavLink
                        to={"packing"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Packing
                      </NavLink>

                      <NavLink
                        to={"taxray"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Tax-Ray Vision
                      </NavLink>

                      <NavLink
                        to={"dangerousgoods"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Dangerous Goods
                      </NavLink>

                      <NavLink
                        to={"relocation"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Relocation
                      </NavLink>
                    </nav>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>

            {/* Mega Menu for Price */}
            <OutsideClickHandler
              onOutsideClick={() => {
                setPrice(false);
              }}
            >
              <div
                className={`absolute w-screen   border-y border-gray-200 left-0 p-4 bg-white h-[10rem] shadow-sm ${
                  price ? "block" : "hidden"
                }`}
              >
                {/* cancle button */}
                <button onClick={() => setPrice(false)}>
                  <svg
                    className="h-6 w-6  text-gray-800 cursor-pointer  hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={`absolute pl-[11.8rem] xl:pl-[12.7rem]  pt-8 ${
                  price ? "block" : "hidden"
                }`}
              >
                <div>
                  <div>
                    <nav className=" flex flex-col gap-3">
                      <NavLink
                        to={"ourPrices"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Our Prices
                      </NavLink>

                      <NavLink
                        to={"/rateCalculator"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Rate Calculator
                      </NavLink>
                    </nav>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>

            {/* Mega Menu for Learn */}
            <OutsideClickHandler
              onOutsideClick={() => {
                setLearn(false);
              }}
            >
              <div
                className={`absolute w-screen   border-y border-gray-200 left-0 p-4 bg-white h-[10rem] shadow-sm ${
                  learn ? "block" : "hidden"
                }`}
              >
                {/* cancle button */}
                <button onClick={() => setLearn(false)}>
                  <svg
                    className="h-6 w-6  text-gray-800 cursor-pointer  hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={`absolute pl-[16rem] xl:pl-[17.7rem]  pt-8 ${
                  learn ? "block" : "hidden"
                }`}
              >
                <div>
                  <div>
                    <nav className=" flex flex-col gap-3">
                      <NavLink
                        to={"blog"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Blog
                      </NavLink>

                      <NavLink
                        to={"faq"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        FAQ
                      </NavLink>
                    </nav>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>
            <OutsideClickHandler
              onOutsideClick={() => {
                setPackages(false);
              }}
            >
              <div
                className={`absolute w-screen   border-y border-gray-200 left-0 p-4 bg-white h-[10rem] shadow-sm ${
                  packages ? "block" : "hidden"
                }`}
              >
                {/* cancle button */}
                <button onClick={() => setPackages(false)}>
                  <svg
                    className="h-6 w-6  text-gray-800 cursor-pointer  hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div
                className={`absolute pl-[11.8rem] xl:pl-[12.7rem]  pt-8 ${
                  packages ? "block" : "hidden"
                }`}
              >
                <div>
                  <div>
                    <nav className="flex flex-col gap-3">
                      <NavLink
                        to={"/product/1"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Small
                      </NavLink>
                      <NavLink
                        to={"/product/2"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Medium
                      </NavLink>
                      <NavLink
                        to={"/product/3"}
                        className={({ isActive }) =>
                          `rounded-md text-[13px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                            isActive ? "text-purple-500" : "text-black"
                          }`
                        }
                      >
                        Large
                      </NavLink>
                    </nav>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>
          </div>

          {/* Mobile */}
          <div
            className={`w-full absolute md:hidden transition-all duration-300 ease-in-out top-0 bottom-0 left-0 right-0 bg-black opacity-40 z-10 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          ></div>
          <div
            ref={ref}
            className={`${
              isMenuOpen
                ? "left-0 bottom-0 top-0 z-20 "
                : "-left-96 bottom-0 top-0"
            } transition-all duration-300 ease-in-out fixed md:hidden  flex flex-col w-3/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto`}
          >
            <div className="h-full  flex flex-col md:gap-x-6 lg:gap-x-8 xl:gap-x-10  items-start pl-1">
              <div className=" flex justify-end items-end w-full">
                <button onClick={() => setIsMenuOpen(false)}>
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <NavLink
                to={"shipNow"}
                className={({ isActive }) =>
                  `py-2 px-8 rounded-full border border-[#844FFA] text-white font-semibold bg-[#844FFA]  hover:bg-[#6621DF]  text-[14px]   ${
                    isActive ? "text-white" : "text-white"
                  }`
                }
              >
                Send Parcel
              </NavLink>

              <div className=" flex flex-col gap-4 mt-8">
                <>
                  <NavLink
                    to={"dashboard"}
                    className={({ isActive }) =>
                      `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                        isActive ? "text-purple-500" : "text-black"
                      }`
                    }
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to={"track-panel"}
                    className={({ isActive }) =>
                      `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                        isActive ? "text-purple-500" : "text-black"
                      }`
                    }
                  >
                    Track Parcel
                  </NavLink>
                </>
                <NavLink
                  onClick={() => setPackages(!packages)}
                  to={"Packages"}
                  className={({ isActive }) =>
                    `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                      isActive ? "text-purple-500" : "text-black"
                    }`
                  }
                >
                  Packages
                </NavLink>
                <NavLink
                  onClick={() => setContact(!contact)}
                  to={"contact"}
                  className={({ isActive }) =>
                    `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                      isActive ? "text-purple-500" : "text-black"
                    }`
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to={"getaQuote"}
                  className={({ isActive }) =>
                    `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                      isActive ? "text-purple-500" : "text-black"
                    }`
                  }
                >
                  Get A Quote
                </NavLink>

                <NavLink
                  to={"register"}
                  className={({ isActive }) =>
                    `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                      isActive ? "text-purple-500" : "text-black"
                    }`
                  }
                >
                  Register
                </NavLink>

                <NavLink
                  to={"signIn"}
                  className={({ isActive }) =>
                    `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                      isActive ? "text-purple-500" : "text-black"
                    }`
                  }
                >
                  Sign In
                </NavLink>
              </div>
              {/* 
              <div className="w-full mt-14">
                <h1
                  className=" text-[14px]
                                     font-semibold text-[#595959] mb-3"
                >
                  Countries
                </h1>
                <hr className=" mb-7" />
                <div>
                  <h1
                    className=" text-[14px]
                                     font-semibold text-[#595959] mb-4"
                  >
                    Asia
                  </h1>
                  <nav className=" flex flex-col gap-4">
                    <NavLink
                      to={"hongkong"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Hong Kong
                    </NavLink>

                    <NavLink
                      to={"japan"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Japan
                    </NavLink>

                    <NavLink
                      to={"malaysia"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Malaysia
                    </NavLink>

                    <NavLink
                      to={"southkorea"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      South korea
                    </NavLink>
                  </nav>
                </div>
                <div className="  mt-7">
                  <h1
                    className=" text-[14px]
                                     font-semibold text-[#595959] mb-4"
                  >
                    Europe
                  </h1>
                  <nav className=" flex flex-col gap-4">
                    <NavLink
                      to={"belgium"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Belgium
                    </NavLink>

                    <NavLink
                      to={"France"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      France
                    </NavLink>

                    <NavLink
                      to={"germany"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Germany
                    </NavLink>

                    <NavLink
                      to={"greece"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Greece
                    </NavLink>

                    <NavLink
                      to={"italy"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Italy
                    </NavLink>

                    <NavLink
                      to={"netherlands"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Netherlands
                    </NavLink>

                    <NavLink
                      to={"portugal"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Portugal
                    </NavLink>

                    <NavLink
                      to={"spain"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Spain
                    </NavLink>

                    <NavLink
                      to={"sweden"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Sweden
                    </NavLink>

                    <NavLink
                      to={"uk"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]   ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Uk
                    </NavLink>
                  </nav>
                </div>
                <div className="  mt-7">
                  <h1
                    className=" text-[13px]
                                      font-semibold text-[#595959] mb-4"
                  >
                    N. America
                  </h1>
                  <nav className=" flex flex-col gap-4">
                    <NavLink
                      to={"canada"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Canada
                    </NavLink>
                    <NavLink
                      to={"usa"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      USA
                    </NavLink>
                  </nav>
                </div>
                <div className="  mt-7">
                  <h1
                    className=" text-[13px]
                                      font-semibold text-[#595959] mb-4"
                  >
                    Oceania
                  </h1>
                  <nav className=" flex flex-col gap-4">
                    <NavLink
                      to={"australia"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Australia
                    </NavLink>
                    <NavLink
                      to={"newzealand"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Newzealand
                    </NavLink>
                  </nav>
                </div>
              </div>

              <div className="w-full mt-14">
                <h1
                  className=" text-[14px]
                                     font-semibold text-[#595959] mb-4"
                >
                  Features
                </h1>
                <hr className=" mb-7" />
                <div>
                  <nav className=" flex flex-col gap-4">
                    <NavLink
                      to={"packing"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Packing
                    </NavLink>

                    <NavLink
                      to={"taxray"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Tax-Ray Vision
                    </NavLink>

                    <NavLink
                      to={"dangerousgoods"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Dangerous Goods
                    </NavLink>

                    <NavLink
                      to={"relocation"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Relocation
                    </NavLink>
                  </nav>
                </div>
              </div>

              <div className="w-full mt-14">
                <h1
                  className=" text-[14px]
                                     font-semibold text-[#595959] mb-4"
                >
                  Prices
                </h1>
                <hr className=" mb-7" />
                <div>
                  <nav className=" flex flex-col gap-4">
                    <NavLink
                      to={"ourPrices"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Our Prices
                    </NavLink>

                    <NavLink
                      to={"rateCalculator"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Rate Calculator
                    </NavLink>
                  </nav>
                </div>
              </div>

              <div className="w-full mt-14 pb-20">
                <h1
                  className=" text-[14px]
                                     font-semibold text-[#595959] mb-4"
                >
                  Learn
                </h1>
                <hr className=" mb-7" />
                <div>
                  <nav className=" flex flex-col gap-4">
                    <NavLink
                      to={"blog"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa] ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      Blog
                    </NavLink>

                    <NavLink
                      to={"faq"}
                      className={({ isActive }) =>
                        `rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${
                          isActive ? "text-purple-500" : "text-black"
                        }`
                      }
                    >
                      FAQ
                    </NavLink>
                  </nav>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
