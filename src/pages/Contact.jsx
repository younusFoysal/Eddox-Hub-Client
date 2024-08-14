import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-12 border">
                <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                    <p className="mt-4 text-sm leading-7 font-regular uppercase">
                        Contact
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                        Get In <span className="text-[#AA69AB]">Touch</span>
                    </h3>
                    <p className="mt-4 leading-7 text-gray-200">
                        In case you have any inquiry and you want to get a faster response,
                        You can contact our Hotline number from 9 AM to 8 PM. Our Hotline numbers are 16793 and 09678002003.
                        You can also reach us through our Email address webteam@startechbd.com
                    </p>

                    <div className="flex items-center mt-5">

                        <span className="text-sm">House #14, Street #12, Darulaman Road, Chittagong, Bangladesh.</span>
                    </div>
                    <div className="flex items-center mt-5">

                        <span className="text-sm">+93 749 99 65 50</span>
                    </div>
                    <div className="flex items-center mt-5">

                        <span className="text-sm">24/7</span>
                    </div>

                </div>
                <form className="md:col-span-8 p-10">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="text" placeholder="Younus"/>
                            {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name" type="text" placeholder="Foysal"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-password">
                                Email Address
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-email" type="email" placeholder="foysal@gmail.com"/>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-password">
                                Your Message
                            </label>
                            <textarea rows="10"
                                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                        </div>
                        <div className="flex justify-between w-full px-3">
                            <div className="md:flex md:items-center">
                                <label className="block text-gray-500 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox"/>
                                    <span className="text-sm">
                                Send me your newsletter!
                            </span>
                                </label>
                            </div>
                            <button
                                className="shadow bg-[#3B8AC9] hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                type="submit">
                                Send Message
                            </button>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default Contact;