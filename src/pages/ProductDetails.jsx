import React, {useState} from 'react';
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure.jsx";
import LoadingSpinner from "../components/Shared/LoadingSpinner.jsx";
import {TiStar} from "react-icons/ti";
import {FaCartShopping} from "react-icons/fa6";

const ProductDetails = () => {

    const { user, logOut } = useAuth()
    console.log(user)
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { id } = useParams();
    console.log(id)
    const axiosSecure = useAxiosSecure();
    const [seletedImage, setSelectedImage] = useState('');



    // Fetch reviews Data
    const {
        data: pdt = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/product/${id}`);
            setSelectedImage(data?.image)
            return data;
        },
    });

    console.log(pdt)

    const handleImageChange =  (ipath) => {
        setSelectedImage(ipath);
    }

    if (isLoading) return <LoadingSpinner />;




    return (
        <div>
            <div className="bg-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap -mx-4">

                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <img
                                src={seletedImage}
                                alt="Product"
                                className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage"/>
                            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                                <img
                                    src={pdt?.image}
                                    alt="Thumbnail 1"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onClick={() => handleImageChange(pdt.image)}/>
                                <img
                                    src={pdt?.image}                                    alt="Thumbnail 2"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onClick={() => handleImageChange(pdt.image)}/>

                            </div>
                        </div>


                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-3xl font-bold mb-2">{pdt?.name}</h2>
                            <p className="text-gray-600 mb-4">SKU: {pdt?._id}</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold mr-2">Price: ${pdt?.price}</span>
                            </div>
                            <div className="flex items-center mb-4">


                                {
                                    pdt?.ratings && pdt?.ratings > 0 && (
                                        <div className="flex items-center">
                                            {[...Array(pdt.ratings)].map((_, index) => (
                                                <div key={index} className="flex">
                                                    <TiStar/>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                }


                                <span className="ml-2 text-gray-600">{pdt?.ratings} (12{pdt?.ratings} reviews)</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <h1 className="font-semibold mr-2">Brand: </h1><span> {pdt?.brand}</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <h1 className="font-semibold mr-2">Category: </h1><span> {pdt?.category	}</span>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Arrived at:</h3>
                                <p>Date: {pdt?.date}</p>
                                <p>Time: {pdt?.time}</p>
                            </div>


                            <div className="flex space-x-4 mb-6">
                                <button
                                    className="bg-[#3B8AC9] flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <FaCartShopping className="mr-2" />
                                    Add to Cart
                                </button>
                                <button
                                    className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                    </svg>
                                    Wishlist
                                </button>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Description :</h3>
                                <p>{pdt?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ProductDetails;