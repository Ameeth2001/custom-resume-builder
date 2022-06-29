import React from "react";
import ContactResume from "./downloadPages/contactResume";
import Expresume from "./downloadPages/expresume";
import Profileresume from "./downloadPages/profileResume";
import LanguageResume from "./downloadPages/languagesresume";
import EducationResume from "./downloadPages/educationresume";
import PersonalResume from "./downloadPages/personaldetails";
import Skillresume from "./downloadPages/skillsresume";
import SideNav from "../Sections/SideNavbar";
import {jsPDF} from "jspdf"
import html2canvas from 'html2canvas';
export default function Resume (){
    const pdfDownload = e => {
        e.preventDefault()
        const input = document.getElementById('pdf-download');
    html2canvas(input,{
        scale:0.8,
        dpi: 1200,
      })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    }
    return(
        <>
        <SideNav/>
        <div className="download_resume">
        <div id="pdf-download" className="sheet">
   
   <section>
       <div className="resumeprofile navh">
       <div className="container py-4 px-3">
           <div className="row">
               <div className="col-lg-9">
               <h className="headingres">SAKETH RAO ANNAMANENI</h>
        <h4 className="sub-heading mb-3">MY RESUME</h4>
              <div>
               <ContactResume/>
              </div>
               </div>
               <div className="col-lg-3 p-3">
                   <div className="resume_outer">
                   <div className="resume_image">
                       <img src={sessionStorage.getItem("userImage")} className="phoim" alt="UserImage"/>
                   </div>
                   </div>
               
               </div>
           </div>
        
                
       </div>
       </div>
   </section>
   <section className="restext">
       <div className="row m-1">
       <div className="col-md-8 p-4">
           <div className="container line-to-right px-4 py-4">
           <div>
           <h2>Profile</h2>
             <Profileresume/>
         </div>
         <hr className="hrline"/>
         <div>
           <h2>Education</h2>
          <EducationResume/>
         </div>
         
         <hr className="hrline"/>
         <div>
           <h2>Experience</h2>
           <Expresume/>
         </div>
         
         <hr className="hrline"/>
         
               </div>    
         
</div>

<div className="col-md-4 p-4">
   <div>
       <h3>Personal details</h3>
        <PersonalResume/>
   </div>
   <hr className="hrline"/>
         <div>
           <h2>Skills</h2>
             <Skillresume/>
         </div>
   <hr className="hrline"/>
   <div>
       <h3>Languages</h3>
       <LanguageResume/>
   </div>
   
</div> 

       </div>


   </section>

        
</div>
<a onClick={pdfDownload}>Download as PDF</a>

        </div>
 
        </>
    )
}