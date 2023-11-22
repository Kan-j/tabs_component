
import React from 'react'
import { v4 } from 'uuid';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Duties = ({duties}) => {
  // console.log(duties);
  return (
    <section>
      {duties.map((duty)=> <section key={v4()}>
        <article className='flex gap-2 mt-2'>
        <MdKeyboardDoubleArrowRight fontSize={26}/>
          <p className='text-left'>{duty}</p>
        </article>
      </section>)}
    </section>
  )
}

export default Duties