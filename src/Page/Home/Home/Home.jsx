import About from "../About/About";
import Faq from "../Faq/Faq";
// import Footer from "../Footer/Footer";
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
             <Faq></Faq>
             {/* <Footer></Footer> */}
          </>
     );
};

export default Home;