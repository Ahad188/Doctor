import { useLoaderData } from "react-router-dom";

 

 

const DoctorDetails = () => {
      const data = useLoaderData();
      console.log(data);
     return (
          <div className="container">
               <h2 className="heading text-center"> {data.name} details</h2>
               <div className="hero min-h-screen bg-base-200 my-10">
               <div className="hero-content flex-col lg:flex-row-reverse">
               <img src={data.image} />
               <div>
                    <h1 className="text-5xl font-bold"> specialization:{data.specialization}</h1>
                    <p className="py-6 text_pera"> {data.description}.</p>
                         <span className="text-orange-500 text-xl">Rating : {data.rating}</span>
                    
                         <p className="text_pera">OfficeHours: {data.officeHours}</p>
                         <p className="text_pera">Location: {data.location}</p>

                         
                              <h5 className=" text-xl">Fee: $ <span className="text-orange-500">{data.fee}</span></h5>
                              <h5 className="text-xl">TotalPatients: <span className="text-orange-500">{data.totalPatients}</span>+</h5>
                          
                    <button className="btn">Booking</button>
               </div>
               </div>
               </div>
          </div>
     );
};

export default DoctorDetails;