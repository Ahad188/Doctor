import { useLoaderData } from "react-router-dom";
import TeamCard from "../Home/Team/TeamCard";

 

  
 
 const AllDoctor = () => {
      const data = useLoaderData()
     return (
          <section className="container">
               <h3 className="text-center my-12 heading">All doctor Here</h3>
            
               <div className="grid md:grid-cols-3   gap-28 w-full">

               {
                    data.map(doc=><TeamCard key={doc.id} doc={doc}></TeamCard>)
               }
               </div>
          </section>
     );
 };
 
 export default AllDoctor;