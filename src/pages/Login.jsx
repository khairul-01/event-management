import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

   const { Login } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();

   const [loginError, setLoginError] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');

      if (password.length < 6) {
         setLoginError('Password should be at least 6 characters');
         toast('Password should be at least 6 characters');
         return;
      }
      else if (!/[A-Z]/.test(password)) {
         setLoginError('Password should have at least one uppercase letter characters');
         toast('Password should have at least one uppercase letter characters');
         return;
      }

      // sign in user account
      Login(email, password)
         .then(result => {
            console.log(result.user);
            console.log(result.user.email);
            toast('You logged in successfully')
            e.target.email.value = '';
            e.target.password.value = '';
            navigate(location?.state ? location.state : '/');
         })
         .catch(error => {
            console.error(error);
            toast('there is error', `${error.message}`);
            e.target.email.value = '';
            e.target.password.value = '';
         })
   }

   return (
      <div>
         <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col">
            <h1 className="text-5xl font-bold">Login now!</h1>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                  <form onSubmit={handleSubmit} className="card-body">
                     <ToastContainer/>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                  </form>
                  <p>New here? Please <Link to='/register' className="underline text-blue-600 btn-sm">Register</Link></p>

               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;