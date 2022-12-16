import React, { memo } from 'react'
import './Letter.scss'

const Letter = ({letter,arry,index}) => {
  return (
    <span className='letter-div'>
      {
        arry.map((char,i)=>(
            <span key={i} className={`${letter} _${index+i}`}>
                {char}
            </span>
        
            ))
      }
    </span>
  )
}

export default memo(Letter)
