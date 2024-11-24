import React from 'react'

const DesktopHeader = ({menu}) => {
  return (
    <div className="max-w-[2536px] hidden md:flex mx-auto items-center justify-between p-3">
      <div>
        <img
          className="w-full h-[35px] object-contain"
          src="/src/assets/codere-logo.png"
          alt="Logo"
        />
      </div>
      <div className="items-center gap-4 lg:gap-8 flex">
        {menu.map((item, index) => (
          <div
            key={index}
            className="relative text-[#333F48] group hover:text-[#fff] flex flex-col items-center"
          >
            {item.name}
            <div className="h-[2px] w-0 bg-white absolute bottom-[-6px] transform transition-all duration-300 ease-in-out group-hover:w-full" />
          </div>
        ))}
      </div>
      <div className="text-[#333F48] font-semibold hover:scale-110 duration-150 border-[#333F48] px-3 py-1 border-[2px] rounded-[25px]">
        <button>Acceder</button>
      </div>
    </div>
  )
}

export default DesktopHeader