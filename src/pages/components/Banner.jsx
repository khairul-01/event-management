import { Link } from 'react-router-dom';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import moment from 'moment/moment';
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {

   AOS.init();
   return (
      <div>
         <div className="carousel w-full h-[700px]" data-aos="fade-right">

            <div id="slide1" className="carousel-item relative w-full"  >
               <div className="hero" style={{ backgroundImage: `url(${banner1})` }}>
                  <div className="hero-overlay bg-opacity-90"></div>
                  <div className="hero-content text-center text-neutral-content" >
                     <div className="w-4/5 space-y-7">
                        <h1 className='text-3xl'>Welcome to Better World</h1>
                        <h1 className="mb-5 text-5xl font-bold">Blockchain Innovators Conference</h1>
                        <p className="mb-5">The Blockchain Innovators Conference is the ultimate gathering for blockchain enthusiasts</p>
                        <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <Link to='/register'><button className="btn btn-primary mt-9">Get Register</button></Link>
                     </div>
                  </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
               <div className="hero" style={{ backgroundImage: `url(${banner2})` }}>
                  <div className="hero-overlay bg-opacity-90"></div>
                  <div className="hero-content text-center text-neutral-content">
                     <div className="w-4/5 space-y-7">
                        <h1 className='text-3xl'>Welcome to Better World</h1>
                        <h1 className="mb-5 text-5xl font-bold">Artificial Intelligence in Healthcare Summit</h1>
                        <p className="mb-5">The Artificial Intelligence in Healthcare Summit brings together healthcare professionals</p>
                        <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <Link to='/register'><button className="btn btn-primary mt-9">Get Register</button></Link>
                     </div>
                  </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
               <div className="hero" style={{ backgroundImage: `url(${banner3})` }}>
                  <div className="hero-overlay bg-opacity-90"></div>
                  <div className="hero-content text-center text-neutral-content">
                     <div className="w-4/5 space-y-7">
                        <h1 className='text-3xl'>Welcome to Better World</h1>
                        <h1 className="mb-5 text-5xl font-bold">Machine Learning Summit 2023</h1>
                        <p className="mb-5">The Machine Learning Summit 2023 is a premier event bringing together experts from the field of arti</p>
                        <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <Link to='/register'><button className="btn btn-primary mt-9">Get Register</button></Link>
                     </div>
                  </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
               <div className="hero" style={{ backgroundImage: `url(${banner4})` }}>
                  <div className="hero-overlay bg-opacity-90"></div>
                  <div className="hero-content text-center text-neutral-content">
                     <div className="w-4/5 space-y-7">
                        <h1 className='text-3xl'>Welcome to Better World</h1>
                        <h1 className="mb-5 text-5xl font-bold">Virtual Reality Summit 2023</h1>
                        <p className="mb-5">Experience the future of technology at the Virtual Reality Summit 2023. Dive into the world of virtu </p>
                        <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                        <Link to='/register'><button className="btn btn-primary mt-9">Get Register</button></Link>
                     </div>
                  </div>
               </div>
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;