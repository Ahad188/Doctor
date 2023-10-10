import About from "../About/About";
import Faq from "../Faq/Faq";
  
import Hero from "../Hero/Hero";
import Location from "../Location/Location";
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
             <Faq></Faq>
             <Location></Location>
          </>
     );
};

export default Home;