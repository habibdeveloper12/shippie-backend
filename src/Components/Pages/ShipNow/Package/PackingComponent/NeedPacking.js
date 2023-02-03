import React from 'react'

const NeedPacking = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center text-light-purple text-center">
                <p className="px-4 pb-2 md:w-2/3">To order, estimate the box size needed for your unpacked items</p>
                <span
                    className='border-box inline-block overflow-hidden relative max-w-full'>
                    <span className='border-box block max-w-full'>
                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e" className='block max-w-full'/>
                    </span>
                    <img alt="3:2:1 box" src="/_next/image?url=%2Fboxes%2FHands%2F3x2x1.png&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" className='absolute box-border block min-w-full max-w-full min-h-full max-h-full'
                        srcSet="/_next/image?url=%2Fboxes%2FHands%2F3x2x1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fboxes%2FHands%2F3x2x1.png&amp;w=640&amp;q=75 2x" />
                </span>
                <p><span>Custom Box </span>(30 x 15 x 9)</p>
            </div>
        </div>
    )
}

export default NeedPacking