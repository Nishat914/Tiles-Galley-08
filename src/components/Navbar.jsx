'use client'
import Link from 'next/link';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';


const Navbar = ()   => {

    const { data: session ,isPending} = authClient.useSession()
    const user = session?.user
    console.log(user,'session')
    
    return (
        <>
            <div className='sticky top-0 z-50 container mx-auto w-[80%] mt-4'>
                <div className=" bg-base-100  flex flex-col lg:flex-row justify-between items-center gap-4">
                <div className="">
                    
                    <h2 className=" font-extrabold text-2xl text-cyan-600">
                        Tiles<span className='text-cyan-800'>Gallery</span>
                    </h2>
                </div>
                <div className=" flex   gap-2">
                    <ul className="menu menu-horizontal px-1 text-gray-500">
                    <li><NavLink href={"/"}>Home</NavLink></li>
                    <li><NavLink href={"/all-Tiles"}>All Tiles</NavLink></li>
                    <li><NavLink href={"/myProfile"}>My Profile</NavLink></li>
                    </ul>
                </div>
                <div >

                    {isPending ? 
                    <span className="loading loading-dots loading-xl"></span>
                    :
                    user? 
                    <div className='flex justify-center items-center gap-3'>
                        <p className='font-semibold text-cyan-600'>Hiiii,{user.name}</p>
                        <Image 
                        src={user.image} 
                        alt="user" 
                        width={40} 
                        height={40} 
                        className="rounded-full "
                        />
                        <button onClick={async() => await authClient.signOut()} className="btn bg-cyan-800 text-white border-black px-10">
  
                             Logout
                         </button> 
                    </div>
                    :
                    <div>
                        <Link href={"/login"}>
                                <button  className="btn bg-cyan-800 text-white border-black px-10">
            
                                        Login 
                                    </button>
                         </Link>
                    
                    </div>
                         
                    }
                    
                      
                </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;