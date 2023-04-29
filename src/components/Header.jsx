import React, { useState } from 'react'

const Header = () => {

    const [isMenuActive, setIsMenuActive] = useState(false)
    const handleShowMenu = ()=> {
        setIsMenuActive(!isMenuActive)
    }
  return (
    <header className='bg-black text-white w-screen fixed top-0 z-50 px-2'>
        <nav className='grid grid-cols-2 sm:grid-cols-[auto,_1fr] max-w-[1024px] mx-auto relative w-full'>
            <div className='w-[60px] h-[60px]'>
                <img className='w-full h-full object-cover' src="/logo.png" alt="" />
            </div>
            <div className={`absolute right-0 bg-cyan-950 top-0 w-full  ${isMenuActive ? "opacity-100 visible" :"opacity-0 invisible"} sm:opacity-100 sm:visible sm:bg-transparent sm:col-start-2 sm:h-full sm:grid sm:content-center` }>
                <ul className='flex flex-col max-w-full h-screen items-center justify-around sm:h-auto sm:flex-row'>
                    <li className='list-none hover:text-cyan-300 text-gray-200 '>Home</li>
                    <li className='list-none hover:text-cyan-300 text-gray-200 '>Aboute me</li>
                    <li className='list-none hover:text-cyan-300 text-gray-200 '>Proyects</li>
                    <li className='list-none hover:text-cyan-300 text-gray-200 '>Contact</li>
                </ul>
                <button onClick={handleShowMenu} className='absolute top-0 right-2 sm:opacity-0 sm:invisible'>X</button>
            </div>
            <button onClick={handleShowMenu} className='sm:opacity-0 sm:invisible'>menu</button>
        </nav>
    </header>
  )
}

export default Header