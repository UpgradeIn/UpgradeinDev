import Slider from "../../Components/Slider";

const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 justify-center items-center pt-24 gap-10 pb-10 pr-5 pl-5 lg:min-h-screen md:pt-12 lg:pt-10 sm:pb-0 sm:gap-5 sm:grid-cols-2 sm:pr-0 sm:pl-10">
            {/* Left Side - Punch Line */}
            <div className="w-full text-center space-y-10 sm:text-left">
                <div className="space-y-3">
                    <h3 className="text-[#09316E] font-semibold text-sm md:text-md lg:text-lg">
                        Jasa Pembuatan Website, Aplikasi, dan Desktop
                    </h3>

                    <h1 className="font-bold text-gray-800 text-2xl md:text-3xl lg:text-6xl">
                        Ubah ide bisnis Anda menjadi kenyataan
                    </h1>

                    <h5 className="text-xs text-gray-700 max-w-lg md:text-sm lg:text-lg">
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
            <div className="relative w-full flex justify-center">
                <div className="absolute top-[-10px] left-0 w-full h-[50px] bg-gradient-to-b from-white to-transparent z-10"></div>
                <div className="absolute bottom-[-10px] left-0 w-full h-[50px] bg-gradient-to-t from-white to-transparent z-10"></div>
                <div className="absolute top-0 left-[-10px] h-full w-[50px] bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-[-10px] h-full w-[50px] bg-gradient-to-l from-white to-transparent z-10"></div>
                <Slider />
            </div>
        </div>
    );
};

export default HeroSection;
