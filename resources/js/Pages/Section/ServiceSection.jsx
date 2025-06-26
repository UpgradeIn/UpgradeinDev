const ServiceSection = () => {
    return (
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
                        mengembangkan bisnis Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {/* Item 1 */}
                    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
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
                    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
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
                                        Pembuatan aplikasi Android & iOS dengan
                                        UI/UX intuitif sesuai dengan kebutuhan
                                        bisnis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
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
                                        Pembuatan aplikasi desktop stabil dan
                                        handal untuk berbagai kebutuhan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
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
    );
};

export default ServiceSection;
