import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Conference from "../components/Conference";
import About from "../components/About";
import Count from "../components/Count";


const Home = () => {

   const [conferences, setConferences] = useState([]);

   useEffect(()=>{
      fetch('conference.json')
      .then(res => res.json())
      .then(data=> setConferences(data))
   },[])

   return (
      <div>
         <Banner></Banner>
         <About></About>
         <h1 className="text-5xl my-9 text-center font-bold">Our Conference Services </h1>
         <div className="grid md:grid-cols-3 gap-7">
            {
               conferences.map(conference => <Conference key={conference.id} confer={conference} ></Conference> )
            }
         </div>
         <Count></Count>
      </div>
   );
};

export default Home;