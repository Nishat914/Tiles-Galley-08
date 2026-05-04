'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = ()   => {
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm();

    const[isShowPassword , setIsShowPassword] = useState(false)

    const handleSubmitfunction = async(data) => {
        console.log(data)
        const { email , password} = data;
        console.log(email);
        console.log(password);

        const { data :res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res,error);

        if(error){
            toast.error(error.message)
        }
        if(res){
            toast.success('Login successfully')
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
            
        <form onSubmit={handleSubmit(handleSubmitfunction)} className="flex items-center justify-center  my-20">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-3xl text-cyan-800">Login</legend>

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
                    
                    

                    <button className="btn bg-cyan-800 text-white mt-4">Login</button>
                     <div className="mt-4">
                        <span className="text-gray-500">Don't have any account? </span>
                        <Link href={"/register"} className="text-cyan-600">
                         register
                        </Link>
                    </div>
                    <div>
                        <span className="text-gray-500">Or,</span>
                        <button className="flex items-center justify-center gap-4 py-2 px-6 text-gray-500 border-2 border-gray-500 shadow-sm mt-2 w-full"
                        onClick={handleGoogleSignin}>
                        <FaGoogle></FaGoogle>
                        Login with Google
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}
export default LoginPage;