'use client'

import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = ()   => {
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm();

    const handleSubmitfunction = async(data) => {
        console.log(data)

        const {name , email , password} = data;
        console.log(name);
        
        
    }
    // console.log(errors ,watch("email"))
    return (
        <>
            
        <form onSubmit={handleSubmit(handleSubmitfunction)} className="flex items-center justify-center my-20">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-3xl text-cyan-800">Register</legend>
                    
                    <label className="label mt-4">Name</label>
                    <input type="text" {...register("name")} className="input" placeholder="Name" />

                    <label className="label mt-4">Email</label>
                    <input type="email" {...register("email")} className="input" placeholder="Email" />

                    <label className="label mt-4">Password</label>
                    <input type="password" {...register("password" , { required: "password field is required" })} className="input" placeholder="Password" />
                    {errors.password && <span>This field is required</span>}

                    <button className="btn bg-cyan-800 text-white mt-4">Register</button>
                    
                </fieldset>
            </form>
        </>
    )
}
export default RegisterPage;