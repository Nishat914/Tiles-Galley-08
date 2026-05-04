'use client'
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await authClient.updateUser({
      name,
      image,
    });

    if (res) {
      alert("Profile Updated!");
      router.push("/"); 
    }
  };

  return (
    <form onSubmit={handleUpdate} className="flex items-center justify-center  my-20">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend text-3xl text-cyan-800">Update Profile</legend>
            <label className="label">Name</label>
            <input
                type="text"
                placeholder="Enter Name"
                className="input" 
                onChange={(e) => setName(e.target.value)}
            />
            <label className="label">Image</label>
            <input
                type="text"
                placeholder="Image URL"
                className="input" 
                onChange={(e) => setImage(e.target.value)}
            />
           

            <button type="submit" className="btn bg-cyan-800 text-white mt-4">Update</button>
        </fieldset>
      

    </form>
  );
};

export default UpdateProfile;