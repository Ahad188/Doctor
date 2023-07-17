import { Link } from 'react-router-dom';
import about from '../../../assets/images/about.jpeg'

const About = () => {
     return (
          <section>
             <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-[0] flex-col lg:flex-row ">
                         <div className='w-3/4 lg:w-1/2 xl:w-[670px] mx-auto'>
                         <img className='md:h-[700px] h-[650px] ' src={about} alt="" />
                         </div>
                         {/* content */}
                         <div className="w-full lg:w1/2 xl:w-[670px]">

                              <h2 className='heading'>Proud to be on of the nation best</h2>
                              <p className='text_pera'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos alias fugiat esse amet eius consequuntur omnis voluptates porro consectetur ipsam maiores neque assumenda beatae, aut dicta aperiam quam qui rem mollitia! Deleniti voluptates consequuntur necessitatibus officiis nulla aut quibusdam! Voluptates.</p>
                              <p className="text_pera">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque dolorum deleniti culpa voluptatum tenetur reprehenderit, inventore modi eveniet doloribus?
                              </p>
                              <Link to='/'><button className='btn'>Learn More...</button></Link>
                         </div>
                    </div>
               </div>  
          </section>
     );
};

export default About;