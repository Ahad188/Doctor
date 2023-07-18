import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
 

 

const Team = () => {
     const[doctor, setDoctor] = useState([])
     useEffect(()=>{
          fetch('../../../../public/Data/Doctor.json')
          .then(res=>res.json())
          .then(data=>setDoctor(data))
     },[])
     return (
          <section>
              <div className="container">
                    <h2 className="text-center heading">Our Team Member</h2>
                    <p className="text_pera text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ab dolorem <br /> ducimus modi voluptatum optio esse, vel asperiores.</p>

                    <div className=" p-10 mt-10">
                         <div className="grid md:grid-cols-3 gap-16">
                               {
                                  doctor.slice(0,6).map(doc=> <TeamCard key={doc.id} doc={doc}></TeamCard>)
                               }
                         </div>

                    </div>
                    <div className="text-center">
                    <button className="btn ">See All</button>
                    </div>
               </div> 
          </section>
     );
};

export default Team;