import React from 'react'
// #282C33
const About = () => {
  return (
    <section id='about' className='p-3'>
      <section className='w-full max-w-[1024px] mx-auto grid grid-cols-[repeat(auto-fill,_minmax(275px,1fr))] auto-rows-auto gap-5 sm:grid-cols-2'>

        <div className='flex justify-center flex-col p-3 gap-5'>
          <h1 className= "text-2xl after:bg-cyan-500">
            <span className='text-cyan-500'>#</span> ABOUT-ME
          </h1>
          <h4>Hello i'm Emilio Rivas</h4>
          <p className='text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolor porro eum     amet, quae inventore id dolores libero culpa ex voluptatum odit facilis illo fugiat, eveniet, magnam iste obcaecati exercitationem.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, odio rerum, sapiente porro, quae labore ipsa error deleniti soluta hic molestias nam. Maiores adipisci, impedit veritatis perferendis consequatur qui accusantium.
          </p>
        </div>


        <div className='w-full'>
          <img className='w-full h-full object-cover' src="/imagenes/profile.png" alt="" />
        </div>


      </section>
    </section>
  )
}

export default About
