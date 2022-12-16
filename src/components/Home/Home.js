import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Letter from '../AnimatedLetter/Letter'
import './Home.scss'
const Home = () => {
  const [letter,setLetter] =useState('animate-text')
  const arry=[
    'I','a','m',' ','A','r','s','l','a','n',' ','A','l','i','.'
  ]
  const devarry=[
    'I','a','m',' ','F','u','l','l','S','t','a','c','k',' ','D','e','v','e','l','o','p','e','r','.'
  ]
  const hi=['H','i',',']

useEffect(()=>{
  setTimeout(()=>{
    setLetter('text-animate-hover')
  },5000)
},[])

  return (
    <>
    <div className="container home-page">
       
          
        <div className='text-disp'>
     
          <Letter letter={letter} 
          arry={hi}
          index={1} />
          <br/>
          <Letter
            letter={letter}
            arry={arry}
            index={5}
          />
          <br/>
          <Letter
            letter={letter}
            arry={devarry}
            index={16}
          />
        
        </div>
   
      
    <p>FullStack Developer / JavaScript Expert / Python Expert</p>
    <NavLink to='/contact'>
    <button >Contact ME</button>      
    </NavLink>
    </div>

   
  </>
  )
}

export default Home
      