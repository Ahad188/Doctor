 
const Footer = () => {
     return (
         <section>
          <div className="container">
          <footer className="footer p-10 bg-neutral text-neutral-content">
               <div>
               <span className="footer-title text-xl">Services</span> 
               <a className="link link-hover text-xl">Branding</a>
               <a className="link link-hover text-xl">Design</a>
               <a className="link link-hover text-xl">Marketing</a>
               <a className="link link-hover text-xl">Advertisement</a>
               </div>   
               <div>  
               <span className="footer-title text-xl">Company</span> 
               <a className="link link-hover text-xl">About us</a>
               <a className="link link-hover text-xl">Contact</a>
               <a className="link link-hover text-xl">Jobs</a>
               <a className="link link-hover text-xl">Press kit</a>
               </div>   
               <div>  
               <span className="footer-title text-xl">Legal</span> 
               <a className="link link-hover text-xl">Terms of use</a>
               <a className="link link-hover text-xl">Privacy policy</a>
               <a className="link link-hover text-xl">Cookie policy</a>
               </div>
          </footer>
          </div>
         </section>
     );
};

export default Footer;