import React from 'react'
import Duties from './Duties';

const JobInfo = ({jobs, currentIndex}) => {
    // console.log(jobs);
    const {title, company, dates, duties} = jobs[currentIndex];
  return (
    <section className='flex flex-col items-start'>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <h2 className='bg-gray-300 px-1 py-1'>{company}</h2>
        <h3 className='text-gray-600 mb-2'>{dates}</h3>
        <Duties duties={duties} />
    </section>
  )
}

export default JobInfo