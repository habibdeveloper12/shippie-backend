import React from 'react';
import logo from "../../../Assect/logo.png"
const Footer = () => {
    return (
        <div>
            <footer className="bg-[#272727]">
                <div className="relative h-full max-w-7xl m-auto px-8 md:px-12 py-12 md:py-24">
                    <div className="grid lg:grid-cols-2 gap-x-8">
                        <div className="col-span-1 text-left">
                            <div className="w-64 mb-12 lg:mb-28">
                              <img src={logo} alt="" className='w-48' />
                            </div>
                            <div className="grid grid-rows-2 gap-y-8">
                                <div className="flex gap-x-6 sm:gap-x-12">
                                    <div className="flex-1 sm:flex-none">
                                        <p className="mb-2 text-white text-sm md:text-base font-medium whitespace-nowrap">Opening Hours</p>
                                        <p className="text-[#7C4BD1] text-vsm md:text-sm font-semibold">
                                            Mon - Fri
                                            <br />
                                            9am - 5:30pm
                                            <br />
                                            (excl. public holidays)
                                        </p>
                                    </div>
                                    <div className="flex-1 sm:flex-none">
                                        <p className="mb-2 text-white text-sm md:text-base font-medium whitespace-nowrap">Address</p>
                                        <p className="text-[#7C4BD1] text-vsm md:text-sm font-semibold">
                                            71 Ubi Crescent, #04-12
                                            <br />
                                            Excalibur Centre, Singapore 408571
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-2 text-white text-sm md:text-base font-medium whitespace-nowrap">Contact Number</p>
                                    <a href="https://wa.me/6591187971" className="text-[#7C4BD1] text-vsm md:text-sm font-semibold hover:opacity-70" target="_blank" rel="noopener noreferrer">
                                        +65 9118 7971 (WhatsApp Only)
                                        <span className="text-[#7C4BD1] ml-2">
                                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="inline w-3 h-3 undefined" fill="currentColor">
                                                <path d="M1.5 3.5V14.5H12.5V10H14V15C14 15.5523 13.5523 16 13 16H1C0.447716 16 0 15.5523 0 15V3C0 2.44772 0.447715 2 1 2H6V3.5H1.5Z"></path>
                                                <path d="M15.9217 1.17828L7.01473 10.0853L5.95407 9.02462L14.8611 0.117624L15.9217 1.17828Z"></path>
                                                <path d="M7.5 0H16V1.5H7.5V0Z"></path>
                                                <path d="M16 0L16 8.5L14.5 8.5L14.5 -6.55671e-08L16 0Z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative pb-[75%] h-0 truncate">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.748455748965!2d103.8983586!3d1.3268908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11e75385a0b1%3A0x983fdaa8ea899853!2sJustShip!5e0!3m2!1sen!2ssg!4v1657537089256!5m2!1sen!2ssg"
                                    style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="justship-on-google-maps"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;