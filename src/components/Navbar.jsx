
import Link from 'next/link';
import NavLink from './NavLink';


const Navbar = ()   => {

   
    
    return (
        <>
            <div className='container mx-auto w-[80%] mt-4'>
                <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    
                    <h2 className=" font-extrabold text-2xl text-cyan-600">
                        Tiles<span className='text-cyan-800'>Gallery</span>
                    </h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-500">
                    <li><NavLink href={"/"}>Home</NavLink></li>
                    <li><NavLink href={"/all-Tiles"}>All Tiles</NavLink></li>
                    <li><NavLink href={"/myProfile"}>My Profile</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <Link href={"/login"}>
                        <button  className="btn bg-cyan-800 text-white border-black px-10">
  
                             Login 
                         </button>
                    </Link>
                    
                      
                </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;