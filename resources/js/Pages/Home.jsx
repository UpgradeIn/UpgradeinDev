import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";
import Slider from "../Components/Slider";

const Home = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Head title="Landing Page" />
            {/* Hero Section */}
            <div className="grid grid-cols-1 justify-center items-center pt-24 gap-10 pb-10 px-5 lg:pb-0 lg:pt-0 lg:min-h-screen sm:gap-5 sm:grid-cols-2 sm:px-10">
                {/* Left Side - Punch Line */}
                <div className="w-full text-center space-y-10 sm:text-left">
                    <div className="space-y-3">
                        <h3 className="text-[#09316E] font-medium text-sm md:text-md lg:text-lg">
                            Jasa Pembuatan Website, Aplikasi, dan Desktop
                        </h3>

                        <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl lg:text-6xl">
                            Ubah ide bisnis Anda menjadi kenyataan
                        </h1>

                        <h5 className="text-md text-gray-700 max-w-lg md:text-md lg:text-lg">
                            Kami membantu Anda dalam mengembangkan bisnis Anda
                            dengan teknologi terkini dan terbaik yang ada saat
                            ini.
                        </h5>
                    </div>

                    <div>
                        <a
                            href="#about"
                            className="bg-[#09316E] font-semibold text-sm text-white py-3 px-5 rounded-md"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right Side - Marquee Animation */}
                <div className="w-full flex justify-center">
                    <Slider />
                </div>
            </div>
            {/* End Hero Section */}

            {/* About Section */}
            <section id="about">
                <div className="px-5 py-10 lg:py-20 sm:px-10">
                    <div className="grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2 lg:gap-20 sm:items-center">
                        <div>
                            <img
                                src="/images/about-image.jpg"
                                alt="about-image"
                                className="h-full w-full rounded-xl object-cover md:h-[350px] lg:h-full"
                            />
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-3">
                                <h3 className="text-[#E37915] font-semibold text-sm md:text-sm lg:text-md">
                                    ABOUT US
                                </h3>

                                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800">
                                    Jasa Pembuatan Website, Aplikasi, dan
                                    Desktop Terbaik
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
                                            inovatif, responsif, dan sesuai
                                            dengan perkembangan teknologi
                                            terkini.
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
                                            Komitmen kami adalah memberikan
                                            layanan berkualitas tinggi dengan
                                            desain yang user-friendly dan
                                            performa optimal.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section */}

            {/* Service Section */}
            <div className="px-5 py-10 lg:py-20 sm:px-10">
                <div className="space-y-5 sm:space-y-16">
                    <div className="flex flex-col items-center space-y-3">
                        <h3 className="text-[#E37915] font-semibold text-center text-sm md:text-sm lg:text-md">
                            OUR SERVICES
                        </h3>

                        <h1 className="text-gray-800 font-bold text-center text-2xl md:text-3xl lg:text-4xl">
                            Layanan Terbaik Kami
                        </h1>
                        <p className="max-w-lg text-md text-center text-gray-600">
                            Kami menyediakan layanan terbaik untuk membantu
                            mengembangkan bisnis Anda. Berikut adalah layanan
                            yang kami tawarkan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        {/* Item 1 */}
                        <div className="border border-gray-200 rounded-lg shadow-md">
                            <div className="relative flex items-center overflow-hidden">
                                <img
                                    className="w-36 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                                    src="images/services-image/service-1.jpg"
                                    alt="service-image"
                                />

                                <div className="grow p-4 ms-36 sm:ms-48">
                                    <div className="min-h-24 flex flex-col justify-center">
                                        <h3 className="font-semibold text-sm text-gray-800 sm:text-md">
                                            Web Development
                                        </h3>
                                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                            Pembuatan website responsif dan
                                            berkinerja tinggi sesuai kebutuhan
                                            bisnis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="border border-gray-200 rounded-lg shadow-md">
                            <div className="relative flex items-center overflow-hidden">
                                <img
                                    className="w-36 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                                    src="images/services-image/service-2.jpg"
                                    alt="service-image"
                                />

                                <div className="grow p-4 ms-36 sm:ms-48">
                                    <div className="min-h-24 flex flex-col justify-center">
                                        <h3 className="font-semibold text-sm text-gray-800 sm:text-md">
                                            Mobile Application
                                        </h3>
                                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                            Pembuatan aplikasi Android & iOS
                                            dengan UI/UX intuitif sesuai dengan
                                            kebutuhan bisnis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="border border-gray-200 rounded-lg shadow-md">
                            <div className="relative flex items-center overflow-hidden">
                                <img
                                    className="w-36 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                                    src="images/services-image/service-3.jpg"
                                    alt="service-image"
                                />

                                <div className="grow p-4 ms-36 sm:ms-48">
                                    <div className="min-h-24 flex flex-col justify-center">
                                        <h3 className="font-semibold text-sm text-gray-800 sm:text-md">
                                            Desktop Application
                                        </h3>
                                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                            Pembuatan aplikasi desktop stabil
                                            dan handal untuk berbagai kebutuhan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="border border-gray-200 rounded-lg shadow-md">
                            <div className="relative flex items-center overflow-hidden">
                                <img
                                    className="w-36 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                                    src="images/services-image/service-4.jpg"
                                    alt="service-image"
                                />

                                <div className="grow p-4 ms-36 sm:ms-48">
                                    <div className="min-h-24 flex flex-col justify-center">
                                        <h3 className="font-semibold text-sm text-gray-800 sm:text-md">
                                            Software Quality Assurance
                                        </h3>
                                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                            Pengujian manual & otomatis untuk
                                            memastikan kualitas perangkat lunak.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Section */}

            {/* Why Choose Upgradein */}
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
                    <div className="relative z-10 p-5 space-y-12 md:p-10 lg:p-20">
                        {/* Tittle */}
                        <div className="flex flex-col items-center space-y-3">
                            <h3 className="text-[#E37915] font-semibold text-center text-sm md:text-md lg:text-lg">
                                WHY CHOOSE US
                            </h3>

                            <h1 className="max-w-lg text-white font-bold text-center text-2xl md:text-3xl lg:text-4xl">
                                Kredibilitas Kami sebagai Partner Bisnis Anda
                            </h1>

                            <p className="max-w-md text-md text-center text-gray-300">
                                Kami adalah tim yang berdedikasi untuk
                                memberikan layanan terbaik kepada pelanggan
                                kami.
                            </p>
                        </div>

                        {/* Content */}
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
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
                                                    berpengalaman dalam
                                                    pembuatan website, aplikasi
                                                    mobile, dan aplikasi
                                                    desktop, memastikan kualitas
                                                    terbaik untuk bisnis Anda.
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
                                                    Pengerjaan Cepat & Tepat
                                                    Waktu
                                                </h3>
                                                <p className="text-gray-300">
                                                    Dengan proses yang
                                                    terstruktur, kami memastikan
                                                    proyek Anda selesai sesuai
                                                    jadwal yang disepakati.
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
                                                    bisnis memiliki kebutuhan
                                                    unik. Oleh karena itu,
                                                    layanan kami fleksibel dan
                                                    dapat disesuaikan sesuai
                                                    keinginan Anda.
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
            {/* Why Choose Upgradein */}

            {/* WhatsApp Button */}
            {showButton && (
                <a
                    href="https://wa.me/6289647129890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg transition hover:bg-green-600 focus:outline-none focus:bg-green-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="size-6"
                    >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.533 4.047 1.467 5.75L0 24l6.375-1.548A11.967 11.967 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.98 9.98 0 01-5.263-1.5l-.375-.25-3.875.95 1.043-3.21-.25-.375A9.972 9.972 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                </a>
            )}
        </>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
