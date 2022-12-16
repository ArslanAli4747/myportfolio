import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';
const Layout = () => {
  return (
    <div className='layout'> 
      <Sidebar/>
      <div className='tags'>
        <div className='body-open'>
          <span className='bopc'>&lt;body&gt;</span>
          <Outlet/>
        </div>
        <div className='body-end'>
          &lt;body /&gt;
          <div className='html-end'>
            &lt;html /&gt;
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Layout
