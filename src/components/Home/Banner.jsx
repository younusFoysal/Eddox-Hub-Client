import React from 'react';

const Banner = () => {
    return (
        <section className="px-2 py-32 bg-white md:px-0">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full md:w-1/2 md:px-3">
                        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                <span className="block  xl:inline">All Useful Items </span>
                                <span className="block text-[#3B8AC9] xl:inline">Are in One Place</span>
                            </h1>
                            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                                Discover unbeatable deals on everything you need, <br/> all in one convenient store.
                            </p>
                            <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                <a href="#products" className="flex items-center shadow-lg w-full px-6 py-3 mb-3 text-lg font-semibold text-white bg-[#3B8AC9] rounded-md sm:mb-0 hover:bg-blue-200 duration-500 hover:text-[#3B8AC9] sm:w-auto">
                                    View Products
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </a>
                                <a href="#" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                                    Visit Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl hover:shadow-blue-100 duration-500 hover:scale-105">
                            <img src="https://i.ibb.co/WcrNX5W/modern-retail-store-interior-with-variety-gadgets-laptops-computers-counter-641503-101281.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;