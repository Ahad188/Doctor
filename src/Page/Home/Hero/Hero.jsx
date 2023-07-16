import doctor1 from '../../../assets/images/Doctor1.jpeg' 
import doctor2 from '../../../assets/images/Doctor2.jpeg' 
import doctor3 from '../../../assets/images/Doctor3.jpeg' 

const Hero = () => {
     return (
           <>
               {/*hero section  */}
               <section className="hero_section pt-[60px] 2xl:h[800px]">
                    <div className="container">
                         <div className="flex flex-col lg:flex-row gap-[90px] justify-between items-center">
                              {/* hero content */}
                              <div>
                                   <div className="lg:w-[570px]">
                                        <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">We help the patients life a healthy, longer life.</h1>
                                        <p className="text_pera">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque quis non corrupti sit veniam dolorem modi natus necessitatibus debitis, nesciunt illo eveniet, deleniti reiciendis illum fugiat aliquam, consequuntur voluptate!</p>

                                        <button className="btn">Request an Appointment</button>
                                   </div>                               
                              {/* hero counter */}
                              <div className="mt-[30px] lh:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">

                              <div className="">
                                   <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                                   <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                   <p>Year of Experience</p>
                              </div>
                              <div className="">
                                   <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                                   <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                   <p>Clinic Location</p>
                              </div>
                              <div className="">
                                   <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                                   <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                   <p>patients satisfaction</p>
                              </div>
                              </div>
                              </div>
                              {/* hero content */}
                              <div className="flex gap-[30px] justify-end">
                                   <div>
                                        <img className='w-full' src={doctor1} alt="" />
                                   </div>
                                   <div className='mt-[30px'>
                                        <img className='mb-[30px] w-full' src={doctor2} alt="" />
                                        <img className='w-full' src={doctor3} alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* hero section end */}
           </>
     );
};

export default Hero;