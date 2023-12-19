import React from 'react'

function Consump({ id, children, title, xltop }) {
    return (
        <div className={`bg-[#161232] text-white opacity-80 border-b-2 border-white hover:bg-white hover:text-[#161232] p-4 sm:w-full md:w-[47%] lg:w-[47%] xl:w-[23%] mt-3 relative ${xltop}`}>
            <div
                className="flex items-center justify-between xl:border-b-[1px] border-zinc-400 border-b-[0px] pb-2">
                <h2
                    className="mr-auto">Consumption
                </h2>
                <p
                    className='text-zinc-400'>
                    {title}
                </p>
            </div>
            <div
                className="absolute inset-0 flex items-center xl:justify-center justify-end">
                <div
                    className="text-center text-2xl mt-8"
                    id={id}
                >{children}</div>
            </div>
        </div>
    )
}

export default Consump
