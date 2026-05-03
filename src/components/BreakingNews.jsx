import { RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS } from "next/dist/lib/constants";
import Marquee from "react-fast-marquee";
import { getAllTiles } from "@/lib/data";

const BreakingNews = async()   => {
    const tiles = await getAllTiles();
    const featuredTiles = tiles.slice(0, 4);
    return (
        <>
            <div className="p-2 flex justify-between items-center gap-4 bg-cyan-100 container mx-auto w-[80%] mb-8">
                <button className="btn bg-cyan-600 text-white">New Arrivals: </button>
                 <Marquee pauseOnHover>
                   {featuredTiles.map((tile, index) => (
                        <span key={tile.id} className="mr-12 font-medium text-gray-700">
                            
                            {tile.title} | Weekly Feature: {tile.description} | Join the Community...
                            
                            {index !== featuredTiles.length - 1 && "   "}
                        </span>
                    ))}
                </Marquee>
            </div>
           
        </>
    )
}
export default BreakingNews;

