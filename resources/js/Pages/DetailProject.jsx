import React, { useState } from "react";
import { Head, usePage, Link } from "@inertiajs/react";

export default function DetailProject() {
    // Ambil data 'project' dari props Inertia
    const { project } = usePage().props;
    const { otherProject } = usePage().props;

    // Siapkan array gambar (aman jika undefined)
    const images = project?.project_images || [];

    // State untuk "gambar utama" (big image)
    // Default: index 0 (jika ada gambar)
    const [bigImage, setBigImage] = useState(
        images.length > 0 ? images[0].image : null
    );

    return (
        <section className="w-full mx-auto px-5 pt-14 pb-10 sm:pt-20 md:px-10 sm:py-0">
            <Head title={project ? project.name : "Detail Project"} />

            <div className="w-full mx-auto">
                <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                    {/* Content */}
                    <div className="[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 lg:col-span-2 lg:max-h-[95vh] lg:overflow-y-auto lg:mb-5">
                        <div className="pb-8 lg:pe-8">
                            <div className="space-y-5 lg:space-y-8">
                                {/* Tombol Kembali */}
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

                                {/* Judul / Nama Project */}
                                <h2 className="text-lg text-gray-800 font-bold md:text-xl lg:text-2xl">
                                    {project ? project.name : "Nama Project"}
                                </h2>

                                {/* Gambar Utama (big image) */}
                                {bigImage && (
                                    <div className="px-2 mb-4">
                                        <img
                                            className="w-full border border-200 h-auto object-cover rounded-lg shadow-md"
                                            src={`/storage/${bigImage}`}
                                            alt="Gambar utama project"
                                        />
                                    </div>
                                )}

                                {/* Thumbnails (project_images) */}
                                {images.length > 0 && (
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {images.map((imgObj, idx) => (
                                            <div
                                                key={idx}
                                                className="rounded-lg overflow-hidden cursor-pointer shadow-md border border-200"
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

                                {/* Deskripsi / Konten */}
                                <div className="ckeditor-content mt-6">
                                    {project?.description ||
                                        "Belum ada deskripsi"}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Project / Side section */}
                    <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent">
                        <div className="pt-10 lg:ps-8">
                            <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8">
                                <h2 className="text-gray-800 text-xl font-bold">
                                    Project Lainnya
                                </h2>
                            </div>
                            <div className="mt-5 max-h-[35vh] overflow-y-auto space-y-6 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 lg:max-h-[70vh]">
                                {/* Contoh link ke project lain */}
                                {otherProject.map((otherProject) => (
                                    <Link
                                        key={otherProject.id}
                                        className="group flex items-center gap-x-6"
                                        href={`/projects/${project.slug}`}
                                    >
                                        <div className="grow">
                                            <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600">
                                                {otherProject.name}
                                            </span>
                                        </div>
                                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
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
