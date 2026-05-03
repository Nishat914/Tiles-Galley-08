import { getSingleTile } from "@/lib/data";
import React from "react";
const TilesDetailsPage = async({params})   => {
    const {id} = await params;
    // console.log(id ,'nle')

    const tilesDetails = await getSingleTile(id);
    // console.log(tilesDetails);
    // console.log(tilesDetails.dimensions , 'dimensions');

    return (
        <>
            
            <div className="container mx-auto w-[80%] mt-10 flex justify-center items-center">
                <div className="card lg:card-side bg-base-100 shadow-sm lg:h-150 lg:w-250">
                    <figure>
                        <img
                        src={tilesDetails.image}
                        alt={tilesDetails.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold text-3xl text-cyan-800">{tilesDetails.title}</h2>
                        <p className="text-sm font-semibold text-cyan-600">
                        Created by: <span className="font-bold text-gray-600">{tilesDetails.creator}</span>
                        </p>
                        <p className="mt-2 text-xl font-semibold text-cyan-600">Description:<br></br><span className="font-bold text-gray-600">{tilesDetails.description}</span></p>
                        <div className="mt-4 space-y-1">
                            <p><strong>Material:</strong> {tilesDetails.material}</p>
                            <p><strong>Dimensions:</strong> {tilesDetails.dimensions}</p>
                            <p><strong>Price:</strong> ${tilesDetails.price}</p>
                            <p>
                                <strong>Status:</strong>{" "}
                                {tilesDetails.inStock ? (
                                <span className="text-green-500">In Stock</span>
                                ) : (
                                <span className="text-red-500">Out of Stock</span>
                                )}
                            </p>
                        </div>

                        
                        <div className="mt-4">
                        <p className="font-semibold text-cyan-700 mb-2">Tags:</p>

                        <div className="flex flex-wrap gap-2">
                            {tilesDetails.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="badge badge-outline badge-info px-3 py-2"
                            >
                                {tag}
                            </span>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TilesDetailsPage;