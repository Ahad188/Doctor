 
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
 

const Social = () => {
     const navigate = useNavigate()
     const location = useLocation();

  const from = location.state?.from?.pathname || "/";

     const {googleSing} = useContext(AuthContext)
  
     const handelGoogle =()=>{
           googleSing()
           .then((result)=>{
               const gUser = result.user
               console.log(gUser);
               const saveUser = { name: gUser.displayName, email: gUser.email };
               fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(saveUser),
                  })
                    .then((res) => res.json())
                    .then(() => {
                      navigate(from, { replace: true });
                    });
           })
           .then(err=>console.log(err))
     }

 

   
     return (
          <div className="text-center my-4">
       
      <button onClick={handelGoogle} className=" btn-circle btn-outline bg-slate-500 p-4">
        <FaGoogle></FaGoogle>
      </button>
    </div>
     );
};

export default Social;