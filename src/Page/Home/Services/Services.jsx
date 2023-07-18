import { Link } from 'react-router-dom';
import ser1 from '../../../assets/images/services01.jpeg'
import ser2 from '../../../assets/images/services02.png'
import ser3 from '../../../assets/images/services03.jpeg'
import { BsArrowRightCircle} from "react-icons/bs";

const Services = () => {
     return (
          <section id='services'>
               <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                         <h2 className="heading text-center">
                              Provide The Best Medical Services
                         </h2>
                         <p className="text_pera text-center">
                              World class care for everyone.Ours health system offer unmatched,expert health care.
                         </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                         <div className="py-[30px] px-5">
                              <div className="flex items-center justify-center">
                                   <img className='h-[100px]' src={ser1} alt="" />
                              </div>
                              <div className="mt-[30px]">
                                   <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find A Doctor</h2>
                                   <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae delectus ex natus ullam suscipit!</p>

                                   <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRightCircle className='w-6 h-5 group hover:text-white'/>
                                   </Link>
                              </div>
                         </div>
                         <div className="py-[30px] px-5">
                              <div className="flex items-center justify-center">
                                   <img className='h-[100px]' src={ser2} alt="" />
                              </div>
                              <div className="mt-[30px]">
                                   <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find A Location</h2>
                                   <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae delectus ex natus ullam suscipit!</p>

                                   <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRightCircle className='w-6 h-5 group hover:text-white'/>
                                   </Link>
                              </div>
                         </div>
                         <div className="py-[30px] px-5">
                              <div className="flex items-center justify-center">
                                   <img className='h-[100px]' src={ser3} alt="" />
                              </div>
                              <div className="mt-[30px]">
                                   <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'> Doctor Appointment</h2>
                                   <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae delectus ex natus ullam suscipit!</p>

                                   <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        <BsArrowRightCircle className='w-6 h-5 group hover:text-white'/>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
               
          </section>
     );
};

export default Services;