import React from 'react'
import ProjectItem from './ProjectItem'
import dropdownImg from '../assets/dropdown.png'
import elementsImg from '../assets/elements.png'
import filterImg from '../assets/filter.png'
import weatherImg from '../assets/weather.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Explicabo veritatis porro aliquid commodi cupiditate esse ipsam! 
            Rem tenetur eveniet dignissimos nesciunt, 
            consequatur porro dolore dicta, nobis velit dolorem quod quas.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={dropdownImg} title='Dropdown' technologies='ReactJS / TailwindCSS' />
            <ProjectItem img={elementsImg} title='CSS Elements' technologies='HTML / CSS' />
            <ProjectItem img={filterImg} title='Filter' technologies='ReactJS / Bootstrap' />
            <ProjectItem img={weatherImg} title='Weather App' technologies='ReactJS / Axios / API' />
        </div>
    </div>
  )
}

export default Projects