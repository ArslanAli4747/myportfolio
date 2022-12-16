import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { faHome,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => {
    const[home,setHome]=useState(true)
    const[about,setAbout]=useState(false)
    const[contact,setContact]=useState(false)
    function homeClass(){
        setHome(true)
        setAbout(false)
        setContact(false)
    }
 
    function contactClass(){
        setHome(false)
        setAbout(false)
        setContact(true)
    }

  return (
    <div className='sidebar' style={{backgroundColor: '#2F4F4F'}}>
        <div className='logo'>
            <Link  to='/'>A</Link>
        </div>
        <div className='menuitems'>
            <NavLink 
            to='/' 
            className='home-icon'
            id={home?"color-active":""}
            onClick={homeClass}
            >
                <FontAwesomeIcon 
                  icon={faHome} 
                  
                  >
                  </FontAwesomeIcon>
            </NavLink>

            <NavLink
             to='/about' 
              className='about-icon'
              id={about? 'color-active' : ''}
               
              onClick={()=>{
                setAbout(true);
                setHome(false);
                setContact(false)
              }}
              >
            <FontAwesomeIcon 
              icon={faUser} 
           
              ></FontAwesomeIcon>
            </NavLink>
            
            <NavLink 
                to='/contact'   
                className='contact-icon'
                onClick={contactClass} 
                id={contact?"color-active":""}
                >
                <FontAwesomeIcon   
                 icon={faEnvelope}
                
                 ></FontAwesomeIcon>
            </NavLink>
        </div>
        <div className='social'>
            <a className='github'
            href='https://github.com/ArslanAli4747 '>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a
            href='https://www.linkedin.com/in/arslan-ali-7a8ba7239'
            className='linkedin'>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                
            </a>

        </div>
    </div>
  )
}

export default Sidebar
