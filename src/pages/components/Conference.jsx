import { Link } from "react-router-dom";
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const Conference = ({ confer }) => {
   AOS.init();
   const { id, title, image, author_name, author_image, registration_fee, detail, time } = confer;
   return (
      <div>
         <div className="card bg-base-100 shadow-xl" data-aos="fade-right">
            <figure><img className="w-full h-64" src={image} alt={title} /></figure>
            <div className="card-body">
               <h2 className="card-title">
                  {title}
                  <div className="badge badge-secondary">NEW</div>
               </h2>
               <p>{detail.slice(0,100)} <Link to={`/conference/${id}`} className="btn btn-success btn-sm underline">Details...</Link></p>
               <p className="bold text-orange-700">Registration fee: {registration_fee} $ </p>
               <div className="card-actions justify-end">
                  <div className="badge badge-outline">Conference</div>
                  <div className="badge badge-outline">Seminar</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Conference;