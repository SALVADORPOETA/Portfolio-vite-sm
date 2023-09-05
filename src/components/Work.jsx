import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2023,
        title: 'Freelancer',
        duration: '6 months',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias voluptates, dolor dolores sequi magni doloribus provident? Aspernatur eos necessitatibus est veritatis quis consectetur mollitia animi eligendi, rerum, officia et?',
    },
    {
        year: 2022,
        title: 'Full Stack',
        duration: '6 months',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sapiente praesentium ex esse sint odio at dolor alias sequi perferendis, ut, quis sit expedita facilis obcaecati facere quidem numquam?',
    },
    {
        year: 2021,
        title: 'Backend',
        duration: '6 months',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam expedita accusantium sed minima officiis magni alias ea beatae ratione, fugit nemo sapiente laudantium corrupti obcaecati sequi quam ipsam!',
    },
    {
        year: 2020,
        title: 'Frontend',
        duration: '6 months',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet quis sapiente officiis. Dolores minus quo cum quae, odit quisquam cumque officia! Sed neque hic molestias eveniet.',
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=> (
            <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} 
            />
        ))}
    </div>
  )
}

export default Work