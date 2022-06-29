import React from 'react'
import axios from 'axios';
import {useLocation} from "react-router-dom";
import Home from './pages/home';
import TopNav from './Sections/TopNav';
import Profileandskills from './pages/profileandskills';
import Educationandlang from './pages/educationandlang';
import Contact from './pages/contactandexp';
import Footer from './pages/footer';
import $ from 'jquery'
import './Mycss.css';



function App() {
  const search = useLocation().search;
  const uid = new URLSearchParams(search).get('userid');
  axios.post("http://localhost:9000/getuserImage",{id:uid})
			.then((response)=>{
			sessionStorage.setItem("userImage",response.data);
			});
  
  $(document).ready(function(){
		var ht=$('.skills').height();
		$('.about').height(ht);
		var ht2=$('.education').height();
		$('.languages').height(ht2);
		var ht3=$('.experience').height();
		$('.contact').height(ht3);

	});

  return (
    <div className="App body">
       {sessionStorage.getItem("userid")&&<TopNav/>}
     <Home />
     <Profileandskills />
     <Educationandlang />
     <Contact />
     <Footer />
    </div>
  );
}


export default App;
