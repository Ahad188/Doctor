 

 

const TeamCard = ({doc}) => {
     return (
          <div className="h-[400px] shadow-lg shadow-blue-500/50  hover:shadow-gray-500/50 ">
               
                    <img className="h-[190px] w-full" src={doc.image} alt="" />
               <div className="">
                    <h2 className="text-center text-3xl font-[700]">{doc.name}</h2>
                    <p className="text_pera text-center ">{doc.specialization}</p>
                    <div className="flex justify-evenly">
                         <span>{doc.officeHours}</span>
                         <span className="text-[orange] font-[800]">{doc.rating}</span>
                    </div>
                    <button className="btn ms-[35%] mb-4">Details</button>
               </div>
          </div>
     );
};

export default TeamCard;