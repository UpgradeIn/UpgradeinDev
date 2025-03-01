import React, { useState } from "react";
import { Head, usePage, Link } from "@inertiajs/react";

export default function DetailProject() {
    const { project } = usePage().props;
    const { otherProject } = usePage().props;

    const images = project?.project_images || [];

    const [bigImage, setBigImage] = useState(
        images.length > 0 ? images[0].image : null
    );

    return (
        <section className="w-full mx-auto px-5 pt-14 pb-10 sm:pt-20 md:px-10 sm:py-0">
            <Head
                title={
                    project
                        ? `${project.name} - Upgradein`
                        : "Detail Project - Upgradein"
                }
            />

            <div className="w-full mx-auto">
                <div className="grid lg:grid-cols-3 lg:gap-x-6">
                    <div className="[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 lg:col-span-2 lg:max-h-[95vh] lg:overflow-y-auto lg:mb-5">
                        <div className="pb-8 lg:pe-8">
                            <div className="space-y-5 lg:space-y-8">
                                <Link
                                    className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline"
                                    href="/"
                                >
                                    <svg
                                        className="flex-shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                    Kembali
                                </Link>
                                <h2 className="text-lg text-gray-800 font-bold md:text-xl lg:text-2xl">
                                    {project.category_id
                                        ? project.category.name
                                        : "No category"}
                                    {" - "}
                                    {project.name}{" "}
                                    {project ? project.name : "Nama Project"}
                                </h2>
                                {bigImage && (
                                    <div className="mb-4">
                                        <img
                                            className="w-full border border-200 h-auto object-cover rounded-lg shadow-md"
                                            src={`/storage/${bigImage}`}
                                            alt="Gambar utama project"
                                        />
                                    </div>
                                )}
                                {images.length > 0 && (
                                    <div className="flex sm:grid-cols-3 gap-4">
                                        {images.map((imgObj, idx) => (
                                            <div
                                                key={idx}
                                                className={`rounded-lg overflow-hidden cursor-pointer shadow-md border-2 ${
                                                    bigImage === imgObj.image
                                                        ? "border-blue-800"
                                                        : "border-200"
                                                }`}
                                                onClick={() =>
                                                    setBigImage(imgObj.image)
                                                }
                                            >
                                                <img
                                                    className="w-full h-auto object-cover rounded"
                                                    src={`/storage/${imgObj.image}`}
                                                    alt={`Gambar tambahan ${idx}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="ckeditor-content mt-6">
                                    {project?.description ||
                                        "Belum ada deskripsi"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent">
                        <div className="py-5 lg:ps-8 lg:py-10">
                            <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8">
                                <h2 className="text-gray-800 text-xl font-bold">
                                    Project Lainnya
                                </h2>
                            </div>
                            <div className="mt-5 max-h-[35vh] overflow-y-auto space-y-6 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 lg:max-h-[70vh]">
                                {otherProject.map((otherProject) => (
                                    <Link
                                        key={otherProject.id}
                                        className="group flex items-center gap-x-6"
                                        href={`/projects/${project.slug}`}
                                    >
                                        <div className="grow">
                                            <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                                                {otherProject.category_id
                                                    ? otherProject.category.name
                                                    : "No category"}
                                                {" - "}
                                                {otherProject.name}{" "}
                                                {otherProject.name}
                                            </span>
                                        </div>
                                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-[110px] h-[80px] sm:w-[180px] sm:h-[100px]">
                                            <img
                                                className="size-full absolute top-0 start-0 object-cover rounded-lg"
                                                src={`/storage/${otherProject.banner_image}`}
                                                alt="othe-project-thumbnail"
                                            />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
