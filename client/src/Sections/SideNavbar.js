import React from 'react'
import logo4 from '../logo4.png'


export default function SideNav(){
  const logout = () =>{sessionStorage.clear();
  window.location="login";}
    return(
        <>
        <div> 

            <div className='container2' >
            <a href="/" className='brand-logo '><img className="logo" src={logo4} /></a>             
  <div className='user-image-sec'>
  <div className='userImage'>
            <img className='sidenav_image' src={sessionStorage.getItem("userImage")} alt="UserImage"/>
  </div>
  </div>
  <div className='pl-3 text-light'>
  <p>Welcome,</p>
  <h6 className=''>{sessionStorage.getItem("firstname")} {sessionStorage.getItem("lastname")}</h6>
  </div>
  
  <ul className='nav-menu2'>
  <li> <a href="/dashboard"><i className='fa fa-tachometer'></i> Dashboard</a></li> 
    <li><a href='/profile'><i className='fa fa-user'></i> Profile</a></li>
    <li><a href='/resume'><i className='fa fa-book'></i> CV PrintView</a></li>
    <li><a href='/home?userid=1'><i className='fa fa-book'></i> CV LinkView</a></li>
    <li><a href="#" onClick={logout}><i className='fa fa-unlock'></i> Logout</a></li>
  </ul>
  </div>          </div></>
    );
}