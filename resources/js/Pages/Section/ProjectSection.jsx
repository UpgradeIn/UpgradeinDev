import React from "react";

const ProjectSection = () => {
    return (
        <div className="px-5 py-10 lg:py-20 sm:px-10">
            <div className="space-y-5 sm:space-y-16">
                <div className="flex flex-col items-center space-y-3">
                    <h3 className="text-[#E37915] font-semibold text-center text-sm md:text-sm lg:text-md">
                        OUR PROJECT
                    </h3>

                    <h1 className="text-gray-800 font-bold text-center text-2xl md:text-3xl lg:text-4xl">
                        Project yang Sudah Kami Kerjakan
                    </h1>
                    <p className="max-w-lg text-md text-center text-gray-600">
                        Berikut adalah beberapa project yang sudah kami kerjakan
                        sebelumnya. Kami selalu berusaha memberikan yang terbaik
                        untuk setiap project yang kami kerjakan.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-10 justify-center md:grid-cols-2 lg:grid-cols-3">
                    {/* Item 1 */}
                    <div className="group">
                        <div className="relative w-full rounded-[16px] overflow-hidden shadow-md">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 ease-in-out"></div>
                            <img
                                src="/images/project-showcase/temp-track.png"
                                alt="project-thumbnail"
                                className="w-full h-full border-0 transition-all duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                <a
                                    href="#"
                                    className="shadow-2xl shadow-[#09316E] hover:bg-blue-900 hover:text-white bg-[#09316E] px-7 py-3 font-semibold rounded-full text-white text-base"
                                >
                                    Lihat Detail
                                </a>
                            </div>
                        </div>
                        <p className="text-gray-800 text-center font-bold text-lg mt-3 transition-all duration-300 ease-in-out group-hover:text-[#09316E]">
                            Website - Temp Tracking
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="group ">
                        <div className="relative w-full rounded-[16px] overflow-hidden shadow-md">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 ease-in-out"></div>
                            <img
                                src="/images/project-showcase/super-apps-tempel.png"
                                alt="project-thumbnail"
                                className="w-full h-full border-0 transition-all duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                <a
                                    href="#"
                                    className="shadow-2xl shadow-[#09316E] hover:bg-blue-900 hover:text-white bg-[#09316E] px-7 py-3 font-semibold rounded-full text-white text-base"
                                >
                                    Lihat Detail
                                </a>
                            </div>
                        </div>
                        <p className="text-gray-800 text-center font-bold text-lg mt-3 transition-all duration-300 ease-in-out group-hover:text-[#09316E]">
                            Website - Super Apps Tempel
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="group ">
                        <div className="relative w-full rounded-[16px] overflow-hidden shadow-md">
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 ease-in-out"></div>
                            <img
                                src="/images/project-showcase/wms.png"
                                alt="project-thumbnail"
                                className="w-full h-full border-0 transition-all duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                <a
                                    href="#"
                                    className="shadow-2xl shadow-[#09316E] hover:bg-blue-900 hover:text-white bg-[#09316E] px-7 py-3 font-semibold rounded-full text-white text-base"
                                >
                                    Lihat Detail
                                </a>
                            </div>
                        </div>
                        <p className="text-gray-800 text-center font-bold text-lg mt-3 transition-all duration-300 ease-in-out group-hover:text-[#09316E]">
                            Desktop - Warehouse Management System
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
