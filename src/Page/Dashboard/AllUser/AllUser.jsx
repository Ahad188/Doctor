import { useEffect, useState } from "react";

 
 
 const Alluser = () => {
     const [ users, setUsers] = useState([])
     useEffect(()=>{
          fetch('http://localhost:5000/users')
          .then(res=>res.json())
          .then(data=>setUsers(data))
     },[])
     console.log(users);
     return (
          <div className="w-full">
               <h2 className="heading text-center">All user {users.length}</h2>
               {/*  */}
               <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delate</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
          users.map((user,index)=><tr key={user._id}>
               <th>{index}</th>
               <td>{user.name}</td>
               <td> {user.email}</td>
               <td> user</td>
               <td className="btn my-2 hover:text-black">Delate</td>
             </tr>)
      }
    </tbody>
  </table>
</div>
          </div>
     );
 };
 
 export default Alluser;