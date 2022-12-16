import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo} from 'react'
import './About.scss'
import { faAngular,faHtml5, faCss3,
    faReact,faJsSquare,
    faGitAlt

} from '@fortawesome/free-brands-svg-icons'
import Letter from '../AnimatedLetter/Letter'

const About = () => {
    
    const letter ='animate-text'
    // const p1s="I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects."
    // const p2s ="I'm quiet confident, naturally curious, and perpetually working on improving my chops one design problem at a time."
    // const p3s = "If I need to define myself in one sentence that would be a family person, a sports fanatic, and tech-obsessed!!!"

    // const p1arry= p1s.split("")
    // const p2arry= p2s.split("")
    // const p3arry= p3s.split("")

    // const p1len = p1arry.length
    // const p2len = p2arry.length
    // const p3len = p3arry.length
  return (
    
    <div className='abot-page'>
        <div className='about-layout'>
            <h1>
            <Letter 
           index={1}
           arry={['A','b','o','u','t',' ','m','e']}
           letter={letter}
           ></Letter> 
            </h1>
           <div className='para-container'>
           <div className='para'>
            <p>
            I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
            </p>
          <p >
          I'm quiet confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
          If I need to define myself in one sentence that would be a family person, a sports fanatic, and tech-obsessed!!!
       
        </p>
       
        </div>
        
            </div> 
          {/* <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p> */}
        </div>
   
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default memo( About)
