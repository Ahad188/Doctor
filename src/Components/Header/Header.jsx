import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
// import user from '../../assets/images/user.jpeg'
import {  BiMenu } from "react-icons/bi";
import {   useContext, useRef } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
 
 
 const Header = () => {
    const {user,logOut} = useContext(AuthContext)
     const menuRef = useRef(null);

      

     const toggleMenu = ()=> menuRef.current.classList.toggle('show_Menu')

     const handelLogout=()=>{
          logOut()
          .then()
         .catch(error => console.log(error));
     }

     const navLink = [
          {
               path:'/',
               display: 'Home'
          },
          {
               path:'/doctor',
               display: 'Doctor'
          },
          {
               path:'services',
               display: 'Services'
          },
          {
               path:'/contact',
               display: 'Contact'
          }
     ]
     return (
           <header className="header flex items-center "  >
               <div className="container">
                    <div className="flex justify-between items-center">
                         {/* logo */}
                         <div>
                              <img className='w-[60px] h-[60px]' src={logo} alt="" />
                         </div>
                         {/* menu */}
                         <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                              <ul className="menu flex md:flex-row items-center gap-[2.7rem]">
                                   {
                                        navLink.map((link,index)=><li key={index}>
                                             <NavLink to={link.path} className={navClass=>navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600]" : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"}>{link.display}</NavLink>
                                        </li>)
                                   }
                                   {
                                        user ? <NavLink to='/dashboard'>Dashboard</NavLink> : ''
                                   }
                              </ul>
                         </div>
                         {/* right nav */}
                         <div className="flex items-center gap-4">
                               
                             {user ? <button className='btn' onClick={ handelLogout}>Logout</button> : <Link to='/login'>
                              <button className='btn bg-primaryColor py-2 px-6 text-white h-[44px] font-[600] flex items-center rounded-[50px]'>Login</button>
                              </Link>}
                              <span className='md:hidden' onClick={toggleMenu}>
                                   <BiMenu className='w-6 h-6 cursor-pointer'></BiMenu>
                              </span>
                         </div>
                    </div>
               </div>
           </header>
     );
 };
 
 export default Header;
 