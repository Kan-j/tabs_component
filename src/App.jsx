import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonContainer from './ButtonContainer'
import JobInfo from './JobInfo'
import data from './data'

function App() {
  const [jobs, setJobs] = useState(data)
  const [isLoading, setIsLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)


  // const fetchAllJobs = async() => {
  //   const response = await fetch('https://course-api.com/react-tabs-project');
  //   const jobsData = await response.json();
  //   setJobs(jobsData);
  //   setIsLoading(false);
  // }
  
  // useEffect(()=> {
  //   fetchAllJobs()
  //   console.log(jobs);
  // }, [])

  return (
    <>
     <section className='grid grid-cols-12'>
        <section className='col-span-3'>
          <ButtonContainer jobs={jobs} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </section>
        <section className='col-span-9'>
          <JobInfo jobs={jobs} currentIndex={currentIndex}/>
        </section>
     </section>
    </>
  )
}

export default App
