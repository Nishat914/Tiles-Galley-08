'use client'
import { useSession } from "@/lib/auth-client";

const MyProfilePage = ()   => {

    const { data: session ,isPending } = useSession();
    

     if (isPending) {
        return <p className="text-cyan-600 text-center">Loading...</p>;
    }

    if (!session) return null;

    const user = session.user;

    return (
        <>
           
            <div className="container mx-auto w-[80%] m-10">
                <h1 className="text-3xl font-bold text-cyan-800">My Profile</h1>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col ">
                        <img
                        src={user.image}
                        className=" rounded-lg shadow-2xl"
                        />
                        <div>
                            
                            <p className="py-6 font-bold text-cyan-800">
                               Name: <span className="font-semibold text-gray-500 ">{user.name}</span>
                            </p>
                            <p className="py-6 font-bold text-cyan-800">
                               Email: <span className="font-semibold text-gray-500 italic">{user.email}</span>
                            </p>
                            <button className="btn bg-cyan-800 text-white mt-4" onClick={() => window.location.href = "/update-profile"}>
                                Update Feature
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyProfilePage;