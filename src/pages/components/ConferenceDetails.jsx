import { useLoaderData, useParams } from "react-router-dom";


const ConferenceDetails = () => {
   const { id } = useParams();
   const data = useLoaderData();
   const conf = data.find(data => data.id == id)
   console.log(conf);
   const { image,title,detail,author_name,registration_fee } = conf;
   return (
      <div>
         <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-full h-[700px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
               <p> <span>{author_name}</span> </p>
               <h2 className="card-title">
                  {title}
                  <div className="badge badge-secondary">NEW</div>
               </h2>
               <p>{detail}</p>
               <p></p>
               <p className="bold text-orange-700">Registration fee: {registration_fee} $ </p>
               <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ConferenceDetails;