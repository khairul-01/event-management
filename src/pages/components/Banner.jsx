import { Link } from 'react-router-dom';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'

const Banner = () => {
   return (
      <div>
         <div className="carousel w-full h-[700px]">

            <div id="slide1" className="carousel-item relative w-full">
            <div className="hero" style={{ backgroundImage: `url(${banner1})` }}>
                  <div className="hero-overlay bg-opacity-90"></div>
                  <div className="hero-content text-center text-neutral-content">
                     <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/register'><button className="btn btn-primary">Get Register</button></Link>
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
                     <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
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
                     <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
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
                     <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
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