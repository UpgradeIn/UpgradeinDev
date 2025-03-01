import React from "react";

const AboutSection = () => {
    return (
        <section id="about" className="bg-[#F4F6FF]">
            <div className="px-5 py-10 lg:py-20 sm:px-10">
                <div className="grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2 lg:gap-20 sm:items-center">
                    <div>
                        <img
                            src="/images/about-image.jpg"
                            alt="about-image"
                            className="h-full w-full rounded-xl object-cover md:h-[350px] lg:h-full"
                        />
                    </div>

                    <div className="space-y-5 sm:space-y-10">
                        <div className="space-y-3">
                            <h3 className="text-[#E37915] font-semibold text-sm md:text-sm lg:text-md">
                                ABOUT US
                            </h3>

                            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800">
                                Jasa Pembuatan Website, Aplikasi, dan Desktop
                                Terbaik
                            </h2>
                        </div>

                        <ul className="space-y-2 sm:space-y-4">
                            <li className="flex gap-x-3">
                                <span className="flex-shrink-0 mt-0.5 size-7 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                                    <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                <div className="grow">
                                    <span className="text-justify text-md text-gray-500">
                                        Kami adalah tim profesional dalam
                                        pengembangan website, aplikasi, dan
                                        desktop application untuk berbagai
                                        kebutuhan bisnis.
                                    </span>
                                </div>
                            </li>

                            <li className="flex gap-x-3">
                                <span className="flex-shrink-0 mt-0.5 size-7 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                                    <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                <div className="grow">
                                    <span className="text-justify text-md text-gray-500">
                                        Kami menciptakan solusi digital yang
                                        inovatif, responsif, dan sesuai dengan
                                        perkembangan teknologi terkini.
                                    </span>
                                </div>
                            </li>

                            <li className="flex gap-x-3">
                                <span className="flex-shrink-0 mt-0.5 size-7 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                                    <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                <div className="grow">
                                    <span className="text-justify text-md text-gray-500">
                                        Komitmen kami adalah memberikan layanan
                                        berkualitas tinggi dengan desain yang
                                        user-friendly dan performa optimal.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
