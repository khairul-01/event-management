import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Conference from "../components/Conference";
import About from "../components/About";
import Count from "../components/Count";
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

   const [conferences, setConferences] = useState([]);

   AOS.init();

   useEffect(()=>{
      
      fetch('conference.json')
      .then(res => res.json())
      .then(data=> setConferences(data))
   },[])

   return (
      <div data-aos="fade-right">
         <Banner></Banner>
         <About ></About>
         <h1 className="text-5xl my-9 text-center font-bold">Our Conference Services </h1>
         <div className="grid md:grid-cols-3 gap-7" data-aos="fade-up">
            {
               conferences.map(conference => <Conference key={conference.id} confer={conference} ></Conference> )
            }
         </div>
         <Count></Count>
      </div>
   );
};

export default Home;