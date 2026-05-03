"use client";

import { useEffect, useState } from "react";
import { getAllTiles } from "@/lib/data";
import Link from "next/link";

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchTiles = async () => {
    const data = await getAllTiles();
    setTiles(data);
    setLoading(false); 
  };
  fetchTiles();
}, []);

  
  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      
      <div className="bg-cyan-800 py-16 text-center text-white container mx-auto w-[80%] mt-10 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold mb-6">Browse Tiles Gallery</h1>

        <input
          type="text"
          placeholder="Search tiles by title..."
          className=" rounded-lg text-white outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      
      <div className="container mx-auto w-[80%] mt-10">
        <h2 className="text-center text-4xl font-bold mb-10 text-cyan-800">
          All Tiles
        </h2>
        {loading?  <p className="text-center text-cyan-600 text-2xl font-bold mt-10">
          Loading tiles...<span className="loading loading-infinity loading-xl text-cyan-600"></span>

        </p> :
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTiles.map((tile) => (
            <div key={tile.id} className="card bg-base-100 shadow-md">
              <figure>
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-56 object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{tile.title}</h2>
                <p>{tile.description}</p>
                <p className="font-bold">${tile.price}</p>

                <div className="card-actions justify-end">
                  <Link href={`/tiles/${tile.id}`}>
                    <button className="btn btn-sm text-white bg-cyan-800">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {filteredTiles.length === 0 && (
          <p className="text-center text-red-500 mt-10 font-bold p-20 text-4xl bg-base-100 shadow-sm">
            No tiles found !!!
          </p>
        )}
          
        </div>} 

        
      </div>
    </>
  );
};

export default AllTilesPage;