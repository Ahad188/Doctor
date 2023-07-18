import { useLoaderData } from "react-router-dom";

 

const DoctorDetails = () => {
     const data = useLoaderData()
     return (
          <div>
               <h2>Doctor details {data}</h2>
          </div>
     );
};

export default DoctorDetails;