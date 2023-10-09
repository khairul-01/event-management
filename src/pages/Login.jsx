import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

   const { Login } = useContext(AuthContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');
      // sign in user account
      Login(email, password)
         .then(result => {
            console.log(result.user);
         })
         .catch(error => {
            console.error(error);
         })
   }

   return (
      <div>
         <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">

               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <form onSubmit={handleSubmit} className="card-body">

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