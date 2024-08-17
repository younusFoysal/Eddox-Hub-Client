import React, { useEffect, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { TiStar } from "react-icons/ti";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import LoadingSpinner from "../Shared/LoadingSpinner.jsx";
import {FaSearch} from "react-icons/fa";
import useAxiosCommon from "../../hooks/useAxiosCommon.jsx";
import {CiShoppingTag} from "react-icons/ci";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 12;
    const [brand, setSelectedBrand] = useState("");
    const [category, setSelectedCategory] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [selectedPrice, setSelectedPrice] = useState(500000);
    const [priceSort, setPriceSort] = useState('asc');
    const [dateSort, setDateSort] = useState('desc');
    const [loading, setLoading] = useState(false);
    const axiosCommon = useAxiosCommon();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axiosCommon.get(`/products?page=${currentPage}&limit=${itemsPerPage}&brand=${brand}&searchQuery=${searchQuery}&category=${category}&minPrice=${minPrice}&maxPrice=${selectedPrice}&priceSort=${priceSort}&dateSort=${dateSort}`);
                setProducts(response?.data?.products);
                setTotalPages(response?.data?.totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };


        fetchProducts();
    }, [currentPage, brand, category, priceSort, dateSort, searchQuery, minPrice, maxPrice]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            setLoading(true);
            try {
                const response = await axiosCommon.get(`/products`);
                setAllProducts(response?.data?.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllProducts();
    }, []);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };


    const handlePriceSortChange = (event) => {
        setPriceSort(event.target.value);
    }

    const handleDateSortChange = (event) => {
        setDateSort(event.target.value);
    }

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "..."
            : description;
    }

    const filteredProducts = products.filter(pdt => pdt.price >= minPrice && pdt.price <= selectedPrice);


    return (
        <div id="products">
            <div
                className="text-center p-4 mb-4 bg-gradient-to-r from-[#2770ac] to-[#9a159d] text-white shadow-xl shadow-fuchsia-200 px-10">
                <h1 className="font-bold text-4xl mb-4">All Products</h1>
                <h1 className="text-3xl">Get Any Products by Filtering.</h1>
            </div>

            <div>
                <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-6 py-3 px-4 w-full">
                    <div className="relative max-w-xs border-2 rounded-lg border-[#0EA5E9]">
                        <label className="sr-only">Search</label>
                        <input
                            type="text"
                            name="hs-table-with-pagination-search"
                            id="hs-table-with-pagination-search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="py-3 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Search by Name"
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                            <FaSearch/>
                        </div>
                    </div>

                    <label>
                        <select
                            value={brand}
                            onChange={handleBrandChange}
                            className="w-full h-12 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-3 py-2 tracking-wider">
                            <option value="">All Brand</option>
                            {Array.from(new Set(allProducts?.map(product => product.brand)))
                                .sort() // Optional: to sort the departments alphabetically
                                .map(brand => (
                                    <option key={brand} value={brand}>
                                        {brand}
                                    </option>
                                ))}
                        </select>
                    </label>

                    <label>
                        <select
                            value={category}
                            onChange={handleCategoryChange}
                            className="w-full h-12 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-3 py-2 tracking-wider">
                            <option value="">All Category</option>
                            {Array.from(new Set(allProducts?.map(product => product.category)))
                                .sort() // Optional: to sort the departments alphabetically
                                .map(category => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                        </select>
                    </label>

                    <label>
                        <select
                            value={priceSort}
                            onChange={handlePriceSortChange}
                            className="w-full h-12 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-3 py-2 tracking-wider">
                            <option value="">Sort by Price</option>
                            <option value="asc">Low To High</option>
                            <option value="desc">High To Low</option>
                        </select>
                    </label>

                    <label>
                        <select
                            value={dateSort}
                            onChange={handleDateSortChange}
                            className="w-full h-12 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-3 py-2 tracking-wider">
                            <option value="">Random</option>
                            <option value="desc">Newest first</option>
                            <option value="asc">Oldest first</option>
                        </select>
                    </label>


                    <div className="w-full md:w-1/4">
                        <div className="bg-white rounded-lg border-2 border-[#0EA5E9] p-2 w-full max-w-md">
                            <div className="mb-4">
                                <label htmlFor="price-range" className="block text-gray-700 font-bold mb-2">Price
                                    Range</label>
                                <input
                                    type="range"
                                    id="price-range"
                                    className="w-full accent-[#0EA5E9]"
                                    min={minPrice}
                                    max={maxPrice}
                                    value={selectedPrice}
                                    onChange={(e) => setSelectedPrice(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span id="minPrice">${minPrice}</span>
                                <span id="maxPrice">${selectedPrice}</span>
                            </div>
                        </div>
                    </div>


                    <div>
                        {loading ? (
                            <LoadingSpinner/>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4 w-full max-w-screen-xl mx-auto">
                {filteredProducts?.map((pdt) => (
                    <div
                        key={pdt._id}
                        className="relative flex flex-col overflow-hidden border rounded-lg bg-white shadow-xl hover:shadow-blue-100 duration-500 hover:scale-105">

                        <a
                            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                            href={`productDetails/${pdt._id}`}>
                            <img
                                className="object-cover h-full mx-auto"
                                src={pdt.image}
                                alt="product image"/>
                            <span
                                className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          30% OFF
        </span>
                        </a>

                        <div className="mt-4 px-5 pb-5">
                            <a href={`productDetails/${pdt._id}`}>
                                <h5 className="text-xl font-bold tracking-normal text-slate-900">{pdt.name}</h5>
                            </a>
                            <h5>
                                {truncateDescription(pdt.description, 10)}
                            </h5>
                            <br/>

                            <div className="flex justify-between">
                                <h5>
                                    <span className="font-semibold text-black">Brand:</span> {pdt.brand}
                                </h5>
                                <h5>
                                    <span className="font-semibold text-black">Category:</span> {pdt.category}
                                </h5>
                            </div>

                            <div className="flex justify-between">
                                <h5>
                                    <span className="font-semibold text-black">Date:</span> {pdt.date}
                                </h5>
                                <h5>
                                    <span className="font-semibold text-black">Time:</span> {pdt.time}
                                </h5>
                            </div>

                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    <span className="text-3xl font-bold text-slate-900">${pdt.price}</span>
                                </p>
                                <div className="flex items-center">
                                    <div className="flex">
                                        {pdt?.ratings && pdt?.ratings > 0 && (
                                            <div className="flex items-center">
                                                {[...Array(pdt.ratings)].map((_, index) => (
                                                    <div key={index} className="flex">
                                                        <TiStar/>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <span
                                        className="mr-2 ml-3 rounded bg-[#3B8AC9] px-2.5 py-0.5 text-xs text-white font-semibold">
              {pdt.ratings}
            </span>
                                </div>
                            </div>

                            <a
                                href={`productDetails/${pdt._id}`}
                                className="flex shadow-lg items-center justify-center rounded-md bg-[#3B8AC9] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#AA69AB] focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <CiShoppingTag className="font-bold text-xl mr-2"/>
                                View This Item
                            </a>
                        </div>
                    </div>
                ))}
            </div>


            <div className="py-1 px-4 mx-auto">
                <nav className="flex justify-center items-center space-x-1">
                    <button
                        type="button"
                        onClick={handlePreviousPage}
                        className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        disabled={currentPage === 1}
                    >
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                    </button>
                    {Array.from({length: totalPages}, (_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handlePageChange(index + 1)}
                            className={`min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
                            aria-current={currentPage === index + 1 ? 'page' : undefined}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        type="button"
                        onClick={handleNextPage}
                        className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        disabled={currentPage === totalPages}
                    >
                        <span className="sr-only">Next</span>
                        <span aria-hidden="true">»</span>
                    </button>
                </nav>
            </div>


        </div>
    );
};

export default Products;
