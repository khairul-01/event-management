// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Count = () => {
   AOS.init();
   return (
      <div className="flex flex-col justify-around items-center p-7 my-20 space-y-12 bg-indigo-400" data-aos="fade-right">
         <h1 className="text-5xl">The Event will Start in</h1>
         <div className="grid grid-cols-2 md:grid-flow-col gap-4 md:gap-24 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
               <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
               </span>
               days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
               <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
               </span>
               hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
               <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
               </span>
               min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
               <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 37 }}></span>
               </span>
               sec
            </div>
         </div>
      </div>
   );
};

export default Count;