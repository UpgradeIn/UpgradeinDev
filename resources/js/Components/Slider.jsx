import { motion } from "framer-motion";

const images = [
    "/images/hero-slider/image-1.png",
    "/images/hero-slider/image-2.png",
    "/images/hero-slider/image-3.png",
    "/images/hero-slider/image-2.png",
    "/images/hero-slider/image-1.png",
];

const Slider = () => {
    return (
        <div className="overflow-hidden w-full relative h-[350px] md:h-[400px] lg:h-[500px]">
            <div className="absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-white to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-white to-transparent z-10"></div>

            <div className="grid grid-cols-3 gap-x-5 gap-y-5 w-full h-full sm:p-3 md:grid-cols-2 lg:grid-cols-4 relative">
                {[...Array(4)].map((_, colIndex) => (
                    <motion.div
                        key={colIndex}
                        className="flex flex-col space-y-5"
                        animate={{
                            y: colIndex % 2 === 0 ? [0, -500] : [-500, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear",
                        }}
                        style={{ willChange: "transform" }}
                    >
                        {[...Array(6)].map((_, repeatIndex) =>
                            images.map((img, index) => (
                                <motion.div
                                    key={`${repeatIndex}-${index}`}
                                    className="relative w-[110px] h-[230px] bg-white shadow-lg rounded-xl overflow-hidden sm:w-[140px] sm:h-[250px]"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img
                                        src={img}
                                        alt={`Image ${index}`}
                                        className="w-full h-full object-top object-cover"
                                    />
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
