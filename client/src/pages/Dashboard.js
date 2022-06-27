import React,{Component} from 'react'
import logo3 from '../logo3.png'
import SideNav from '../Sections/SideNavbar';


export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={pageTitle:"Dashboard"};
    }
    render(){
        return(
            <>
             <SideNav/>

  <div className="container">
      <div className="row2">
        <div className="col-lg-3">
          <div className="service-item fourth-service">
            <div className=""></div>
            <img className='sidenav_image' src='assets/images/MYPIC.png'/>

            <div className="text-button">
             <a href='/Home'> View Resume  <i className="fa fa-right-arrow"></i></a>
             <div></div>
              <a href='/resume'> Download Resume <i className="fa fa-download"></i></a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  
            </>
        );
    }
}