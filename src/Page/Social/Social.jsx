 
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
 

const Social = () => {
     const navigate = useNavigate()
     const {googleSing} = useContext(AuthContext)
  
     const handelGoogle =()=>{
           googleSing()
           .then((result)=>{
               const gUser = result.user
               console.log(gUser);
               navigate('/')
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