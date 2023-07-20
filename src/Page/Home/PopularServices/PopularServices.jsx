import { useEffect, useState } from "react";
import Card from "./Card";

 

const PopularServices = () => {
     const [services, setServices] = useState([])
     useEffect(()=>{
          fetch('http://localhost:5000/services')
          .then(res=>res.json())
          .then(data=>{
               // console.log(data)
               setServices(data)
          })
     },[])
     console.log(services, "ok");
     return (
          <section>
               <div className="container">
                    <h2 className="heading text-center">Our Medical Services</h2>
                    <p className="text_pera text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente illum maxime <br /> sit corrupti accusamus doloribus.</p>

                    <div className=" p-10 mt-10">
                         <div className="grid md:grid-cols-2 gap-16">
                              {services.map(ser=><Card key={ser._id} ser={ser}></Card>)}
                         </div>

                    </div>
               </div>
          </section>
     );
};

export default PopularServices;