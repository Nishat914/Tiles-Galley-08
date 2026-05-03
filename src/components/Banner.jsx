import Link from "next/link";
import NavLink from "./NavLink";

const Banner = () => {
  return (
    <div className="container mx-auto w-[80%] p-20 flex flex-col items-center mt-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-800">
            Discover Your Perfect Aesthetic
          </h1>

          <NavLink href={"/all-Tiles"}>
            <button className="btn bg-cyan-600 text-white hover:bg-cyan-800">
              Browse Now
            </button>
          </NavLink>
      
      
    </div>
  );
};

export default Banner;