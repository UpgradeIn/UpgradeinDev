import React from "react";

const ChooseUsSection = () => {
    return (
        <div className="px-5 py-10 lg:py-20 sm:px-10">
            <div className="relative rounded-xl overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover"
                    style={{
                        backgroundImage: 'url("images/bg-choose-us.jpg")',
                    }}
                ></div>

                {/* Overlay Biru */}
                <div className="absolute inset-0 bg-[#09316E] opacity-90"></div>

                {/* Content */}
                <div className="relative z-10 p-5 space-y-5 md:p-10 lg:p-20 sm:space-y-10">
                    {/* Tittle */}
                    <div className="flex flex-col items-center space-y-3">
                        <h3 className="text-[#E37915] font-semibold text-center text-sm md:text-md lg:text-lg">
                            WHY CHOOSE US
                        </h3>

                        <h1 className="max-w-lg text-white font-bold text-center text-2xl md:text-3xl lg:text-4xl">
                            Kredibilitas Kami sebagai Partner Bisnis Anda
                        </h1>

                        <p className="max-w-md text-md text-center text-gray-300">
                            Kami adalah tim yang berdedikasi untuk memberikan
                            layanan terbaik kepada pelanggan kami.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 sm:gap-12">
                        {/* List */}
                        <div className="flex flex-col space-y-5">
                            <div className="max-w-2xl mx-auto divide-y divide-gray-300">
                                {/* Item 1 */}
                                <div className="py-5">
                                    <div className="flex gap-x-5 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="flex-shrink-0 size-8 text-white sm:size-12"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                                            />
                                        </svg>

                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold text-white sm:text-xl">
                                                Profesional & Berpengalaman
                                            </h3>
                                            <p className="text-md text-gray-300">
                                                Kami memiliki tim yang
                                                berpengalaman dalam pembuatan
                                                website, aplikasi mobile, dan
                                                aplikasi desktop, memastikan
                                                kualitas terbaik untuk bisnis
                                                Anda.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="py-5">
                                    <div className="flex gap-x-5 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="flex-shrink-0 size-8 text-white sm:size-12"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                        </svg>

                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold text-white sm:text-xl">
                                                Pengerjaan Cepat & Tepat Waktu
                                            </h3>
                                            <p className="text-gray-300">
                                                Dengan proses yang terstruktur,
                                                kami memastikan proyek Anda
                                                selesai sesuai jadwal yang
                                                disepakati.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="py-5">
                                    <div className="flex gap-x-5 items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="flex-shrink-0 size-8 text-white sm:size-12"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                                            />
                                        </svg>

                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold text-white sm:text-xl">
                                                Fleksibel & Customizable
                                            </h3>
                                            <p className="text-gray-300">
                                                Kami memahami bahwa setiap
                                                bisnis memiliki kebutuhan unik.
                                                Oleh karena itu, layanan kami
                                                fleksibel dan dapat disesuaikan
                                                sesuai keinginan Anda.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src="images/team-choose-us.jpg"
                                alt="team-image"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsSection;
