import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const CatList = () => {
    const categoriesList = [
        { title: "CASA DE APUESTAS OFICIAL", desc: "", image: "src/assets/651x381- LA CASA DE APUESTAS OFICIAL MAS BACANA.jpg", btn: "POSTA EN VIVO" },
        { title: "CASINO EN VIVO", desc: "", image: "src/assets/651X381- EL MEJOR CASINO EN VIVO.jpg", btn: "VER MAS" },
        { title: "TODOS LOS DEPORTES", desc: "", image: "src/assets/651x381 - TODA LA EMOCION DEL DEPORTE.jpg", btn: "VER MAS" },
    ]
    
    return (
        <div className="">
            {categoriesList.map((category, index) => (
                <div className={` lg:py-2 gap-5 lg:gap-0 lg:rounded-[25px] rounded-[6px] lg:flex-row flex flex-col-reverse justify-between items-center w-full p-2 mt-7 bg-[#000000] ${index % 2 == 1 && "flex lg:flex-row-reverse"}`}>
                    <div className=" w-full h-full flex flex-col xl:gap-12 gap-4 px-4 lg:px-10 ">
                        <h4 className='lg:text-2xl text-xl font-semibold text-center lg:text-start lg:border-l-[4px] lg:border-[#79C000] pl-3 text-[#79C000]'>{category.title}</h4>
                        <span className=' text-5xl text-[#79C000] -mt-10 text-center lg:hidden'>. . . . . .</span>
                        <p className=' text-[#EFEFEF] text-lg max-w-[789px] text-center lg:text-start'>¡Bienvenido a la mejor casa de apuestas en línea de Argentina! Hace tiempo venimos disfrutando juntos de un mundo de entretenimientos y ahora te brindamos la posibilidad de que te diviertas de manera online.</p>
                        <button className=' flex items-center mx-auto lg:mx-0 gap-2 border-2 hover:scale-110 duration-150 border-[#79C000] text-[#fff] w-fit px-8 py-2 rounded-[50px]'>    {category.btn} <RiArrowRightSLine className=' text-2xl' /></button>
                    </div>
                    <div className=" w-full rounded-[25px] overflow-hidden">
                        <img className=" w-full" src={category.image} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CatList