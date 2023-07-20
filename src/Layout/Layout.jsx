import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Page/Home/Footer/Footer";
 

 

const Layout = () => {
     return (
          <div className="container">
               <Header/>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Layout;