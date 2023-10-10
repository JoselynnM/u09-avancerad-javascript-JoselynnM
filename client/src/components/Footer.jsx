import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter,faFacebook,faPinterest, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
library.add(faTwitter, faFacebook, faPinterest, faGithub, faWhatsapp, faInstagram, faHouse, faUser)

const Footer = () => {
  return (
    <footer className="w-full bg-blue-100 text-gray-500 px-10 ">
      <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
        <div className="text-center">
          <div className="">
            <ul className="mt-1">
             
              
            </ul>
          </div>
          <div>
            
            <ul className="mt-1">
           
             
            </ul>
          </div>
        </div>
        <p className="text-black text-xl mt-3 ms-20 pb-4">
          &copy; despacito.se
        </p>
        <div>
       

 
<div className='flex space-x-4 w-25 '>
        <FontAwesomeIcon className='p-2 w-10 h-6 rounded-full text-black  hover:bg-blue-300 mx- inline-block ' icon="fa-brands fa-twitter" />
        <FontAwesomeIcon className='p-2 w-10 h-6 rounded-full text-black  hover:bg-blue-300 mx- inline-block ' icon="fa-brands fa-facebook" />
        <FontAwesomeIcon className='p-2 w-10 h-6 rounded-full text-black  hover:bg-blue-300 mx- inline-block ' icon="fa-brands fa-whatsapp" />
        <FontAwesomeIcon className='p-2 w-10 h-6 rounded-full text-black  hover:bg-blue-300 mx- inline-block ' icon="fa-brands fa-instagram" />
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
