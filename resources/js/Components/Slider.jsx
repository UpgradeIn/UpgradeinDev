const images = [
    "/images/hero-slider/image-1.png",
    "/images/hero-slider/image-2.png",
    "/images/hero-slider/image-3.png",
    "/images/hero-slider/image-4.jpeg",
    "/images/hero-slider/image-2.png",
    "/images/hero-slider/image-1.png",
    "/images/hero-slider/image-2.png",
    "/images/hero-slider/image-3.png",
    "/images/hero-slider/image-4.jpeg",
    "/images/hero-slider/image-1.png",
    "/images/hero-slider/image-2.png",
    "/images/hero-slider/image-3.png",
    "/images/hero-slider/image-4.jpeg",
    "/images/hero-slider/image-1.png",
    "/images/hero-slider/image-2.png",
    "/images/hero-slider/image-3.png",
    "/images/hero-slider/image-4.jpeg",
    "/images/hero-slider/image-2.png",
    "/images/hero-slider/image-1.png",
    "/images/hero-slider/image-2.png",
    "/images/hero-slider/image-3.png",
    "/images/hero-slider/image-4.jpeg",
    "/images/hero-slider/image-1.png",
    "/images/hero-slider/image-2.png",
    "/images/hero-slider/image-3.png",
    "/images/hero-slider/image-4.jpeg",
];

const Slider = () => {
    return (
        <div className="overflow-hidden w-full relative h-[300px] md:h-[380px] lg:h-[580px] perspective-wrapper">
            <div className="grid grid-cols-4 gap-x-56 md:gap-x-72 lg:gap-x-80 w-full h-full transform-3d">
                {/* Kolom 1 - animasi naik */}
                <div className="flex flex-col space-y-5 animation-sliding-img-up-1">
                    {images.map((img, index) => (
                        <div
                            key={`up1-${index}`}
                            className="relative w-[200px] h-[120px] bg-white shadow-lg rounded-xl overflow-hidden md:w-[250px] md:h-[150px] lg:w-[280px] lg:h-[150px] hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={img}
                                alt={`Image ${index}`}
                                className="w-full h-full object-top object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Kolom 2 - animasi turun */}
                <div className="flex flex-col space-y-5 animation-sliding-img-down-1">
                    {images.map((img, index) => (
                        <div
                            key={`down1-${index}`}
                            className="relative w-[200px] h-[120px] bg-white shadow-lg rounded-xl overflow-hidden sm:w-[280px] sm:h-[150px] hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={img}
                                alt={`Image ${index}`}
                                className="w-full h-full object-top object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Kolom 3 - animasi naik kedua */}
                <div className="flex flex-col space-y-5 animation-sliding-img-up-2">
                    {images.map((img, index) => (
                        <div
                            key={`up2-${index}`}
                            className="relative w-[200px] h-[120px] bg-white shadow-lg rounded-xl overflow-hidden sm:w-[280px] sm:h-[150px] hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={img}
                                alt={`Image ${index}`}
                                className="w-full h-full object-top object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
