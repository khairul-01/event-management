

const About = () => {
   return (
      <div className="my-16 space-y-5">
         <h1 className="text-5xl text-center mb-9">All our dreams can come true, <span className="text-blue-600 block">if we have the courage to pursue them</span></h1>
         <div className="grid grid-cols-3 gap-5">
            <div className="card bg-base-100 shadow-xl">
               <figure><img className="h-36" src="https://i.ibb.co/jMMDRVH/main-qimg-167688a809adb6ac1461eee399a3ee5b-lq.jpg" alt="Shoes" /></figure>
               <div className="card-body">
                  <h2 className="card-title text-3xl">Visionary Speaker</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                 
               </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
               <figure><img className="h-36" src="https://i.ibb.co/b6gzmN2/5087969.png" alt="Shoes" /></figure>
               <div className="card-body">
                  <h2 className="card-title text-3xl">Visionary Speaker</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                 
               </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
               <figure><img className="h-36" src="https://i.ibb.co/qWvCMR8/istockphoto-1027108388-612x612.jpg" alt="Shoes" /></figure>
               <div className="card-body">
                  <h2 className="card-title text-3xl">Visionary Speaker</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                 
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;