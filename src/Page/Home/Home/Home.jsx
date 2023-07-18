import About from "../About/About";
import Hero from "../Hero/Hero";
import PopularServices from "../PopularServices/PopularServices";
import Services from "../Services/Services";
import Team from "../Team/Team";

 

const Home = () => {
     return (
          <>
             <Hero></Hero>  
             <Services></Services>
             <About></About>
             <PopularServices></PopularServices>
             <Team></Team>
          </>
     );
};

export default Home;