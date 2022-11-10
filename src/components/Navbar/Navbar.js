import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
     const [open , setOpen] = useState(false)
      
    const {user ,logout} = useContext(AuthContext)
    const handleLogout = ()=>{
        logout()
        .then(()=>{})
        .catch(error=> console.log(error.message))
    }



    const handleNavbar = () =>{
        setOpen(!open)
    }
    return (
        <div className='text-center bg-base-300 text-[#190e0e]'> 
       
            <ul className={`md:flex md:static absolute justify-center md:w-full w-36 z-[20] md:p-7 bg-base-300 ease-in-out duration-500  ${open ? "top-4" : "top-[-200px]"}`}>
            <li><Link to='/'>Home</Link></li>
            <li><Link className='ml-5' to='/tours'>Tours</Link></li>
            <li> <Link className='ml-5' to='/blogs'>Blogs</Link></li>
            {
                user?.email ? <>
                 <li><Link className='ml-5'  to='/addtour'>Add Tour</Link></li>
           <li> <Link className='ml-5' to='/myreview'>My review</Link></li>
            <li><Link className='ml-5' onClick={handleLogout}>Logout</Link></li>
            </> : 
            <>  
            <li><Link className='ml-5' to='/register'>Register</Link></li>
            <li><Link className='ml-5' to='/login'>Login</Link></li>
            </>
            }

           
            </ul>
         
           
            <div onClick={handleNavbar} className="md:hidden ">
                 {
                    open ? <AiOutlineClose/> : <GiHamburgerMenu/>
                 }
             </div>
           
            

         



        </div>

     
      
   
    );
};

export default Navbar;