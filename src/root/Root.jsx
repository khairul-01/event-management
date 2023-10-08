import { Outlet } from "react-router-dom";
import Navbar from "../pages/shares/Navbar";
import Footer from "../pages/shares/Footer";


const Root = () => {
   return (
      <div className="max-w-7xl mx-auto">
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;