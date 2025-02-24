import React from "react";
import { Link } from "@inertiajs/react";

const ProjectSection = ({ projects = [] }) => {
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
                    {projects.map((project) => (
                        <div key={project.id} className="group">
                            <div className="relative w-full rounded-[16px] overflow-hidden shadow-md">
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 ease-in-out"></div>
                                <img
                                    src={`/storage/${project.banner_image}`}
                                    alt="project-thumbnail"
                                    className="w-full h-full border-0 transition-all duration-300 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                    <Link
                                        className="shadow-2xl shadow-[#09316E] hover:bg-blue-900 hover:text-white bg-[#09316E] px-7 py-3 font-semibold rounded-full text-white text-base"
                                        href={`/projects/${project.slug}`}
                                    >
                                        Lihat Detail
                                    </Link>
                                </div>
                            </div>
                            <p className="text-gray-800 text-center font-bold text-lg mt-3 transition-all duration-300 ease-in-out group-hover:text-[#09316E]">
                                {project.category_id
                                    ? project.category.name
                                    : "No category"}
                                {" - "}
                                {project.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
