import gimg from '../../../assets/images/about.jpeg'
const Faq = () => {
     return (
          <section>
               <div className="container">
                    <h2 className="text-center heading my-5">Frequently Question?</h2>

                    <div className="grid md:grid-cols-2 gap-5">
                         <div className="shadow shadow-blue-500/40 hover:shadow-indigo-500/40 p-10">
                              <img className='h-[600px] mx-auto p-10' src={gimg} alt="" />
                         </div>
                         <div className="shadow shadow-blue-500/40 hover:shadow-indigo-500/40  p-10">
                                   {/*  */}
                                   
        
                                   <div className="collapse collapse-arrow join-item border border-base-300 my-6">
                                   <input type="radio" name="my-accordion-4" /> 
                                   <div className="collapse-title text-2xl font-medium">
                                        Click to open this one and close others
                                   </div>
                                   <div className="collapse-content"> 
                                        <p className='text_pera'>hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa molestiae voluptas pariatur velit assumenda, impedit numquam fugit sed, magnam et quaerat! Repudiandae exercitationem ab eligendi sed cupiditate animi? Eveniet!</p>
                                   </div>
                                   </div>
                                   <div className="collapse collapse-arrow join-item border border-base-300 my-6">
                                   <input type="radio" name="my-accordion-4" /> 
                                   <div className="collapse-title text-2xl font-medium">
                                        Click to open this one and close others
                                   </div>
                                   <div className="collapse-content"> 
                                        <p className='text_pera'>hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa molestiae voluptas pariatur velit assumenda, impedit numquam fugit sed, magnam et quaerat! Repudiandae exercitationem ab eligendi sed cupiditate animi? Eveniet!</p>
                                   </div>
                                   </div>
                                   <div className="collapse collapse-arrow join-item border border-base-300 my-6">
                                   <input type="radio" name="my-accordion-4" /> 
                                   <div className="collapse-title text-2xl font-medium">
                                        Click to open this one and close others
                                   </div>
                                   <div className="collapse-content"> 
                                        <p className='text_pera'>hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa molestiae voluptas pariatur velit assumenda, impedit numquam fugit sed, magnam et quaerat! Repudiandae exercitationem ab eligendi sed cupiditate animi? Eveniet!</p>
                                   </div>
                                   </div>
                                   <div className="collapse collapse-arrow join-item border border-base-300 my-6">
                                   <input type="radio" name="my-accordion-4" /> 
                                   <div className="collapse-title text-2xl font-medium">
                                        Click to open this one and close others
                                   </div>
                                   <div className="collapse-content"> 
                                        <p className='text_pera'>hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa molestiae voluptas pariatur velit assumenda, impedit numquam fugit sed, magnam et quaerat! Repudiandae exercitationem ab eligendi sed cupiditate animi? Eveniet!</p>
                                   </div>
                                   </div>
   
  
                      
                                                  
                                   {/*  */}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Faq;