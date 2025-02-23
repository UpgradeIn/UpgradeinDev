import React from "react";
import Slider from "../../Components/Slider";

const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 justify-center items-center pt-24 gap-10 pb-10 px-5 lg:pb-0 lg:pt-0 lg:min-h-screen sm:gap-5 sm:grid-cols-2 sm:px-10">
            {/* Left Side - Punch Line */}
            <div className="w-full text-center space-y-10 sm:text-left">
                <div className="space-y-3">
                    <h3 className="text-[#09316E] font-semibold text-sm md:text-md lg:text-lg">
                        Jasa Pembuatan Website, Aplikasi, dan Desktop
                    </h3>

                    <h1 className="font-bold text-gray-800 text-3xl md:text-4xl lg:text-6xl">
                        Ubah ide bisnis Anda menjadi kenyataan
                    </h1>

                    <h5 className="text-md text-gray-700 max-w-lg md:text-md lg:text-lg">
                        Kami membantu Anda dalam mengembangkan bisnis Anda
                        dengan teknologi terkini dan terbaik yang ada saat ini.
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
    );
};

export default HeroSection;
