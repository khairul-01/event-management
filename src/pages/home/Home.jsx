import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Conference from "../components/Conference";


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
         <h1 className="text-3xl my-5 text-center font-bold">Our Conferences </h1>
         <div className="grid md:grid-cols-3 gap-7">
            {
               conferences.map(conference => <Conference key={conference.id} confer={conference} ></Conference> )
            }
         </div>
      </div>
   );
};

export default Home;