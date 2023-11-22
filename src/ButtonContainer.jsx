import React from 'react'

const ButtonContainer = ({jobs, setCurrentIndex, currentIndex}) => {
   
  return (
    <section>
        {jobs.map((job, index)=> {
          const isCurrent = index === currentIndex;
          
          const activeEffect = {
            current: 'border-l-4 border-blue-500 text-blue-500 font-semibold '
          }
          return <section key={job.id} className={isCurrent? `${activeEffect['current']}`: ''}>
              <button className='' onClick={()=> setCurrentIndex(index)}>{job.company}</button>
          </section>
        })}
    </section>
  )
}

export default ButtonContainer