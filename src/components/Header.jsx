import React from 'react'

const Header = () => {
  return (
    <>
    <header className='border border-black border-2 flex items-center justify-between px-2 min-h-[70px] w-full sm:px-10'>
        <h2 className='text-3xl font-bold sm:text-5xl'>LOGO.</h2>
        <a href="#" className='text-xs font-semibold sm:text-lg'>KNOW MORE</a>
    </header>
    </>
  )
}

export default Header