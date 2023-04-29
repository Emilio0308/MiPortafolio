import React from 'react'
import SkillCard from './SkillCard'

const SkillSet = () => {
  return (
    <section className='min-h-screen p-3'>
      <section className="w-full max-w-[1024px] mx-auto flex flex-col gap-5">
        <h2 className= "text-2xl after:bg-cyan-500">
              <span className='text-cyan-500 text-3xl'>#</span>My Skills
        </h2>

        <div className='w-full flex justify-around'>
          <SkillCard type={"Soft"} skills={["Effective communication","Teamwork","Critical thinking","Adaptability"]}/>
          <SkillCard type={"FrontEnd"} skills={["Html 5","CSS 3","JavaScript","React","Redux"]}/>
          <SkillCard type={"BackEnd"} skills={["Nodejs","MongoDB","Phyton","SQL"]}/>
        </div>
        <div className='w-full h-[350px] overflow-hidden relative'>
          <img className='w-full absolute bottom-0' src="/imagenes/skillcenter.png" alt="" />
        </div>
      </section>
    </section>
  )
}

export default SkillSet