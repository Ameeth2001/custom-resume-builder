import React from 'react'
import logo3 from '../logo3.png'


export default function SideNav(){
    return(
        <>
        <div> 

            <div className='container2' >
            <a href="/" className='brand-logo '><img className="logo" src={logo3} /></a>             
  <div className='user-image-sec'>
  <div className='userImage'>
            <img className='sidenav_image' src='assets/images/MYPIC.png'/>
  </div>
  </div>
  
  <ul className='nav-menu2'>
  <li> <a href="/dashboard"><i className='fa fa-tachometer'></i> Dashboard</a></li> 
    <li><a href='/profile'><i className='fa fa-user'></i> Profile</a></li>
    <li><a href='/resume'><i className='fa fa-book'></i> CV PrintView</a></li>
    <li><a href='/home' target="_blank"><i className='fa fa-book'></i> CV LinkView</a></li>
    <li><a href='/login'><i className='fa fa-unlock'></i> Logout</a></li>
  </ul>
  </div>          </div></>
    );
}