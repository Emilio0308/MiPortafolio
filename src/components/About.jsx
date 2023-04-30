import React from 'react'
// #282C33
const About = () => {
  return (
    <section id='about'>
      <section className='w-full max-w-[1024px] mx-auto grid grid-rows-2 gap-5 p-3 sm:grid-cols-2 sm:grid-rows-[1fr,0] sm:gap-y-0'>

        <div className='flex justify-center flex-col gap-5 text-gray-200 max-w-full sm:border-b-2 border-cyan-500'>
          <h2 className= "text-2xl after:bg-cyan-500">
            <span className='text-cyan-500 text-3xl'>#</span>About-Me
          </h2>
          <h4><span className='text-cyan-500 text-2xl'>{`<`}</span> Hello i'm Emilio Rivas <span className='text-cyan-500 text-2xl'>{`>`}</span></h4>
          <p className='text-justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex porro ut rem adipisci placeat obcaecati itaque maxime a sunt in odio voluptate ipsa praesentium odit, atque quidem quod hic labore.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolor porro eum     amet, quae inventore id i soluta hic molestias nam. Maiores adipisci, impedit veritatis perferendis consequatur qui accusantium.
          </p>
        </div>


        <div className='max-w-full relative aspect-square w-full sm:self-end'>
          <div className='w-[100%] imgcontainer absolute after:bg-cyan-500 before:bg-cyan-500 bottom-0 sm:translate-y-[25%]'>
            <img className='w-full h-full object-cover' src="/imagenes/profile.png" alt="" /> 
          </div>
        </div>


      </section>
    </section>
  )
}

export default About
