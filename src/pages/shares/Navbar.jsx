import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

   const { user, logOut } = useContext(AuthContext);
   console.log('user', user);
   const navigate = useNavigate();
   // console.log('user email', user.email);
   const hanleSignOut = () => {
      logOut()
         .then(() => {
            console.log('sign out successfully')
            navigate('/')
         })
         .catch(error => {
            console.error(error)
         })
   }

   const navLinks = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
      {
         user && <>
            <li><NavLink to='/schedule'>Schedule</NavLink></li>
            <li><NavLink to='/speaker'>Speaker</NavLink></li>
         </>
      }

   </>
   return (
      <div className="my-4">
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
               <a className="btn btn-ghost normal-case font-bold"><span className="text-green-950 text-lg">Better</span > <span className="text-amber-800 text-lg">World</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLinks}
               </ul>
            </div>
            <div className="navbar-end">
               {
                  user ?
                     <div className="flex gap-2">
                        <p>{user?.email && user.email}</p>
                        <div className="avatar online">
                           <div className="w-8 rounded-full">
                              <img src="https://i.ibb.co/2YxnXZT/images.jpg" />
                           </div>
                        </div>
                        <button onClick={hanleSignOut} className="btn btn-sm">sign out</button>
                     </div>

                     :
                     <Link to='/login' className="btn">Login</Link>
               }

            </div>
         </div>
      </div>
   );
};

export default Navbar;