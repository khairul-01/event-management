import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

   const { createUser } = useContext(AuthContext);

   const handleRegister = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      // const name = form.get('name')
      // const photo = form.get('photo')
      const email = form.get('email');
      const password = form.get('password');

      // create user account
      createUser(email, password)
         .then(result => {
            console.log(result.user)
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
                  <h1 className="text-5xl font-bold">Register now!</h1>
                  <form onSubmit={handleRegister} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Your photo url" name="photo" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                     </div>
                  </form>
                  <p>Already have account? Please <Link to='/login' className="underline text-blue-600 btn-sm">Login</Link></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;