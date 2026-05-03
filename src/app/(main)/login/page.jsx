'use client'
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const LoginPage = ()   => {
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm();

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
            alert(error.message)
        }
        if(res){
            alert('Login seccessfully')
        }
        
        
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
                    <input type="password" {...register("password" , { required: "password field is required" })} className="input w-full" placeholder="Password" />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    <button className="btn bg-cyan-800 text-white mt-4">Login</button>
                     <div className="mt-4">
                        <span className="text-gray-500">Don't have any account? </span>
                        <Link href={"/register"} className="text-cyan-600">
                         register
                        </Link>
                    </div>
                </fieldset>
            </form>
        </>
    )
}
export default LoginPage;