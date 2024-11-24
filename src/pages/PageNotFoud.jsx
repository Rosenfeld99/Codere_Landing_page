import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFoud = () => {
    return (
        <div className=' flex gap-10 items-center md:flex-row flex-col justify-center min-h-screen w-full'>
            <div className=" text-2xl font-semibold">Page not foud 404</div>
            <Link to={'/'}>
                <button className=' border-2  px-5 py-1 rounded-[25px] text-[#79C000] border-[#79C000] font-semibold'>Back home</button>
            </Link>
        </div>
    )
}

export default PageNotFoud