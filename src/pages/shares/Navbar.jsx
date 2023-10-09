import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

   const { user, logOut } = useContext(AuthContext)
   const hanleSignOut = () => {
      logOut()
      .then(()=>{
         console.log('sign out successfully')
      })
      .catch(error => {
         console.error(error)
      })
   }

   const navLinks = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/speaker'>Speaker</NavLink></li>
      <li><NavLink to='/schedule'>Schedule</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
   </>
   return (
      <div>
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLinks}
                  </ul>
               </div>
               <a className="btn btn-ghost normal-case text-xl">Better World</a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLinks}
               </ul>
            </div>
            <div className="navbar-end">
               {
                  user?
                  <button onClick={hanleSignOut} className="btn">sign out</button>
                  :
                  <Link to='/login' className="btn">Login</Link>
               }
               
            </div>
         </div>
      </div>
   );
};

export default Navbar;