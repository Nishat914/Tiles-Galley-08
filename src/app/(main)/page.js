import { getAllTiles } from "@/lib/data"; 
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
   const tiles = await getAllTiles();
   console.log(tiles);
  
  const featuredTiles = tiles.slice(0, 4); // top 4

  return (
    <>
      
      <h2 className="text-5xl text-amber-500 text-center">
        homepage
      </h2>
      <div className="container mx-auto w-[80%] ">
       
        <h1 className="text-4xl font-bold mb-4 text-cyan-800">Featured Tiles</h1>
        <div className="grid grid-cols-4 gap-3">
            {featuredTiles.map((tile) => (
              <div key={tile.id} className="card bg-base-100  shadow-sm">
                <figure>
                  <img src={tile.image} alt={tile.title} className="w-full h-56 object-cover rounded-t-xl"/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{tile.title}</h2>
                  <p>{tile.description}</p>
                  <p>${tile.price}</p>
                  <div className="card-actions justify-end">
                    <Link href={`/tiles/${tile.id}`}>
                      <button className="btn btn-sm mt-2 text-white bg-cyan-800">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
        ))}

          

        </div>
        
      </div>
      
    </>
  );
}
