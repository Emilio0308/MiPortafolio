import React from 'react'
import "./Home.css"

// w-full max-w-[50%]
const Home = () => {
  return (
    <section className='bg-black w-full mt-[60px] text-white grid auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(340px,1fr))] relative overflow-hidden lg:grid-cols-3 bg-[url(/imagenes/shadowbg.png)] bg-no-repeat bg-right-top min-h-[70vh]'>
      <div className=' h-[500px] container3d'> 
        <div className='column1'>
          <div className='frente'>HELLO WORLD</div>
          <div className='atras'>HELLO WORLD</div>
          <div className='arriba'></div>
          <div className='abajo'></div>
        </div>
        <div className='column2'>
          <div className='frente'></div>
          <div className='atras'></div>
          <div className='arriba'></div>
          <div className='abajo'></div>
        </div>
      </div>
      <article className='flex flex-col justify-center items-center w-[80%] p-6 mix-blend-difference  sm:w-full '>
        <h1 className='font-bold text-3xl pb-4 sm:text-4xl'><strong className='text-cyan-500'>Hi</strong> I'm a frontend developer</h1>
        <p className='text-xl'>I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
      </article>
      <div className='flex justify-center w-full py-3 items-center relative sm:col-span-2 lg:col-span-1 max-w-[700px] mx-auto'>
        <div className='w-[100%]'>
          <img className='object-cover w-full' src="/imagenes/robothome.png" alt="" />
        </div>
        <img className='absolute w-[25%] -left-10 top-5 ' src="/imagenes/elipse1.png" alt="" />
        <img className='absolute w-[40%] right-2 top-8' src="/imagenes/elipse2.png" alt="" />
        <img className='absolute w-[20%] bottom-[30%] left-11' src="/imagenes/elipse3.png" alt="" />
      </div>

    </section>
  )
}

export default Home