import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='border-black flex flex-col justify-around border-2 w-full h-[92vh] sm:min-h-[85vh] '>
      <img className='absolute z-[-2] mt-44 sm:mt-[-100px] mt-[-60px] sm:right-0 xl:w-[50%]' src="src/assets/astrounaut.png" alt="" />
    <div className="text mx-2 flex items-center z-20 sm:mx-8">
    <div className=''>    
        <h1 className='text-[20vw] font-bold mb-[-40px] sm:mb-0 sm:text-[13vw] lg:text-[8vw]'>A-RAZIQ</h1>
        <h1 className='flex items-center text-[14vw] font-bold mt-[-20px] sm:mt-[-50px] sm:text-[13vw] lg:text-[8vw]'>KHAN <p className='text-black leading-none text-[10px] p-4 mt-4 font-normal bg-red-300 sm:ml-4 sm:text-2xl lg:w-1/2'>SENIOR FULL STACK DEV WITH DJANGO & LARAVEL SKILLS!</p></h1>
        <h1 className='text-[11vw] font-bold leading-none mt-[-20px] sm:mt-[-20px] lg:text-[8vw]'>WEB-DEVELOPER</h1>
    </div>
    {/* <img className='w-48 h-48 rotate-[260deg] mb-32 absolute sm:right-24' src="src/assets/rocket.png" alt="Decorative Image of a space craft." /> */}
    </div>
    <div className="pati z-40 mix-blend-difference mt-10 flex border border-black border-l-0 border-r-0 items-center justify-center px-0 gap-1 sm:gap-5 sm:px-8 sm:justify-start sm:mt-0">
    <span className='text-sm sm:text-3xl font-semibold'>CREATIVE</span>
    <svg className='w-4 sm:w-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.0007 1.20825 18.3195 3.68108 20.7923 4.99992 18.3195 6.31876 17.0007 8.79159 15.6818 6.31876 13.209 4.99992 15.6818 3.68108 17.0007 1.20825ZM8.00065 4.33325 10.6673 9.33325 15.6673 11.9999 10.6673 14.6666 8.00065 19.6666 5.33398 14.6666.333984 11.9999 5.33398 9.33325 8.00065 4.33325ZM19.6673 16.3333 18.0007 13.2083 16.334 16.3333 13.209 17.9999 16.334 19.6666 18.0007 22.7916 19.6673 19.6666 22.7923 17.9999 19.6673 16.3333Z"></path></svg>
    <span className='text-sm sm:text-3xl font-semibold mix-blend-difference'>INTUITIVE</span>
    <svg className='w-4 sm:w-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.0007 1.20825 18.3195 3.68108 20.7923 4.99992 18.3195 6.31876 17.0007 8.79159 15.6818 6.31876 13.209 4.99992 15.6818 3.68108 17.0007 1.20825ZM8.00065 4.33325 10.6673 9.33325 15.6673 11.9999 10.6673 14.6666 8.00065 19.6666 5.33398 14.6666.333984 11.9999 5.33398 9.33325 8.00065 4.33325ZM19.6673 16.3333 18.0007 13.2083 16.334 16.3333 13.209 17.9999 16.334 19.6666 18.0007 22.7916 19.6673 19.6666 22.7923 17.9999 19.6673 16.3333Z"></path></svg>
    <span className='text-sm sm:text-3xl font-semibold'>COLLABORATIVE</span>
    </div>
    <div className='flex items-center justify-center mt-52 flex-col sm:mt-8'>
    <div className='bg-[#0000008e] rounded-full'>    
      <svg className='w-8 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path></svg></div>
    <p>SCROLL TO SEE THE COOL STUFF</p>

    </div>
    </div>
    </>
  )
}

export default Hero