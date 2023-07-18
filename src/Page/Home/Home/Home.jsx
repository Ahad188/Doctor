import About from "../About/About";
import Hero from "../Hero/Hero";
import PopularServices from "../PopularServices/PopularServices";
import Services from "../Services/Services";

 

const Home = () => {
     return (
          <>
             <Hero></Hero>  
             <Services></Services>
             <About></About>
             <PopularServices></PopularServices>
          </>
     );
};

export default Home;