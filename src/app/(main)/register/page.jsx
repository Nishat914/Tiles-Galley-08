'use client'
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import Link from "next/link";

const RegisterPage = ()   => {
    const router = useRouter();

    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm();
    const[isShowPassword , setIsShowPassword] = useState(false)
    
    const handleSubmitfunction = async(data) => {
        console.log(data)

        const {name ,photo, email , password} = data;
        console.log(name);

        const { data : res, error} = await authClient.signUp.email({
            name: name, // required
            image: photo,
            email: email, // required
            password: password, // required
            callbackURL: "/",
        })
        console.log(res,error);

       if(error){
            alert(error.message);
        }

        if(res){
            alert('SignUp successfully');
            router.push("/"); 
        }
        
        
    }
    const handleGoogleSignin = async() => {
                const data = await authClient.signIn.social({
                provider: "google",
            });
            console.log(data,'data')
        }
    // console.log(errors ,watch("email"))
    return (
        <>
            
        <form onSubmit={handleSubmit(handleSubmitfunction)} className="flex items-center justify-center my-20">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-3xl text-cyan-800">Register</legend>
                    
                    <label className="label mt-4">Name</label>
                    <input type="text" {...register("name" ,{required:"name field is required"})} className="input" placeholder="Name" />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                    <label className="label mt-4">Photo-url</label>
                    <input type="text" {...register("photo" ,{required:"photo field is required"})} className="input w-full " placeholder="Enter photo-url" />
                    {errors.photo && <span className="text-red-500">{errors.photo.message}</span>}

                    <label className="label mt-4">Email</label>
                    <input type="email" {...register("email" ,{required:"email field is required"})} className="input w-full " placeholder="Email" />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    <label className="label mt-4">Password</label>
                    <div className="relative">
                                            
                        <input type={isShowPassword? "text":"password"} {...register("password" , { required: "password field is required" })} className="input w-full " placeholder="Password" />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
                             {isShowPassword?  <FaEye/> : <FaEyeSlash/>}
                        </span>
                    </div>

                    <button className="btn bg-cyan-800 text-white mt-4">Register</button>

                    <div className="mt-4">
                        <span className="text-gray-500">Already have an account? </span>
                        <Link href={"/login"} className="text-cyan-600">
                         login
                        </Link>
                    </div>
                    
                    
                </fieldset>
            </form>
        </>
    )
}
export default RegisterPage;