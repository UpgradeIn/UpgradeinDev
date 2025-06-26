import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";

const About = () => {
    return (
        <>
            <Head title="Upgradein - Tentang Kami" />
            <div className="grid grid-cols-1 justify-center items-center pt-24 gap-10 pb-10 px-5 lg:pb-0 lg:pt-0 lg:grid-cols-2 lg:min-h-screen lg:gap-20 sm:px-10">
                <div>
                    <img
                        src="/images/about-image.jpg"
                        alt="about-image"
                        className="h-full w-full rounded-xl object-cover md:h-[350px] lg:h-full"
                    />
                </div>

                <div className="space-y-10">
                    <div className="space-y-3">
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
                                    pengembangan website, aplikasi, dan desktop
                                    application untuk berbagai kebutuhan bisnis.
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
        </>
    );
};

About.layout = (page) => <MainLayout>{page}</MainLayout>;

export default About;
