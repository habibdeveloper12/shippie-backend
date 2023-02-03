import React from "react";

const NoPacking = () => {
    return (
        <div className="grid md:grid-cols-2 px-6 md:px-8">
            <div className="order-last md:order-first place-self-center">
                {/* <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"> */}
                <span className="box-border inline-block overflow-hidden opacity-10 relative max-w-full">
                    <span>
                        <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.%27%20width=%27200%27%20height=%27200%27/%3e"
                            className="block max-w-full"
                        />
                    </span>
                    <img
                        alt="2:1:1 box"
                        srcSet="/_next/image?url=%2Fboxes%2FNo%2F2x1x1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fboxes%2FNo%2F2x1x1.png&amp;w=640&amp;q=75 2x"
                        src="/_next/image?url=%2Fboxes%2FNo%2F2x1x1.png&amp;w=640&amp;q=75"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="absolute box-border m-auto block min-w-full max-w-full min-h-full max-h-full"
                    />
                </span>
            </div>
            <div className="text-sm text-left my-4 mr-4 pb-6 md:pb-0 prose marker:text-subtext-gray">
                <p className="font-semibold">Don’t want to top-up later?</p>
                <ul>
                    <li>
                        Measure from the longest cross-section of each side of your box
                    </li>
                    <li>Round up to the nearest 0.5 cm when you measure</li>
                </ul>
                <p>
                    Don’t worry about over-declaring, we will refund you the excess if
                    that happens.
                </p>
            </div>
        </div>
    );
};

export default NoPacking;
