import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

 

const Login = () => {
     const {singIn} = useContext(AuthContext)
     
     const navigate = useNavigate();
     const location = useLocation();

     const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
     console.log(data)
     singIn(data.email, data.password)
     .then((result)=>{
          const login = result.user;
          console.log(login);
          navigate(from, { replace: true });
     })

};
     return (
          <section>
               <div className="container">
                    <h2 className="heading text-center">Login From</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
          
        <div className="w-[450px] mx-auto border border-[#2e9cf0] border-r-8 border-b-8 p-10 my-20">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Email :</span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="email"
            className="input input-bordered  max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Password :</span>
          </label>
          <input
          //   type={show ? 'text' : 'password'}
            {...register("password")}
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
          {/* <span onClick={()=>setShow(!show) } className="link">Show password</span> */}
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn bg-[#2e9cf0] w-80" value="Login" />
        </div>
               <div>
                    <p>I have no account ? Please <Link to='/register' className="link">Register</Link></p>
               </div>
          <div>
           {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </form>
               </div>
          </section>
     );
};

export default Login;