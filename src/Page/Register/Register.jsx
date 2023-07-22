 
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Social from "../Social/Social";
import Swal from "sweetalert2";
 
 
 
 

const Register = () => {
    const navigate = useNavigate()
 const {createUser} = useContext(AuthContext)
     const { register, handleSubmit,reset } = useForm();
     const onSubmit = (data) => {
          console.log(data);
          const saveUser = { name: data.name, email: data.email };
          createUser(data.email, data.password)
          .then(result => {
               const CUser = result.user;
               console.log(CUser);
               fetch("http://localhost:5000/users", {
               method: "POST",
               headers: { "content-type": "application/json" },
               body: JSON.stringify(saveUser),
               })
               .then((res) => res.json())
               .then((data) => {
                 if (data.insertedId) {
                    Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "User created successfully.",
                     showConfirmButton: false,
                     timer: 1500,
                    });
                    reset();
               }
          });
          navigate("/");
          })
          .catch(err=>console.log(err))

          
          
     }
     return (
          <section>
              <div className="container">
               <h2 className="heading text-center">SingUP</h2>
               <form onSubmit={handleSubmit(onSubmit)}>
        
               <div className="w-[450px] mx-auto border border-[#2e9cf0] border-r-8 border-b-8 p-10 my-20">
                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                    <span className="label-text text-xl">Name:</span>
                    </label>
                    <input
                    type="name"
                    {...register("name")}
                    placeholder="Name"
                    className="input input-bordered  max-w-xs"
                    />
                    </div>
                    

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
                    type= "password"
                    {...register("password")}
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    />
                    
                    </div>
                    <div className="form-control mt-6">
                    <input type="submit" className="btn bg-[#2e9cf0] w-80" value="Login" />
                    </div>
                         
                    <div>
                    <p className="text_pera">
                    {" "}
                    Already Have a account ? Please{" "}
                    <Link to="/login" className="link">
                         {" "}
                         Login
                    </Link>
                    </p>
                    </div>
                    
          <Social></Social>
               </div>
               </form>
               
         
               </div> 
          </section>
     );
};

export default Register;