 

const Card = ({ser}) => {
     // console.log(ser);
     return (
          <div className=" p-10 shadow-lg gray-cyan-500/50 ">
               <h3 className="heading">{ser.name}</h3>
               <p className="text_pera">{ser.description}</p>
          </div>
     );
};

export default Card;