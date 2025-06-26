import { Link } from "@inertiajs/react";

const PricingSection = () => {
    return (
        <div className="px-5 py-10 lg:py-20 sm:px-10 bg-[#F4F6FF]">
            <div className="space-y-5 sm:space-y-16">
                <div className="flex flex-col items-center space-y-3">
                    <h3 className="text-[#E37915] font-semibold text-center text-sm md:text-sm lg:text-md">
                        PRICING
                    </h3>

                    <h1 className="text-gray-800 font-bold text-center text-2xl md:text-3xl lg:text-4xl">
                        Berbagai macam paket yang dapat Anda pilih
                    </h1>
                    <p className="max-w-lg text-md text-center text-gray-600">
                        Kami menyediakan berbagai macam paket yang dapat Anda
                        pilih sesuai kebutuhan bisnis Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {/* Paket 1 */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg p-8 hover:-translate-y-2 transition-all duration-500">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 object-cover"
                            style={{
                                backgroundImage: 'url("images/bg-pricing.jpg")',
                            }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#d1d5db] opacity-70"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col text-center">
                            <h4 className="font-medium text-lg text-gray-700">
                                Landing Page
                            </h4>
                            <p className="mt-7 text-sm text-gray-700">
                                Start From
                            </p>
                            <span className="mt-2 font-bold text-5xl text-gray-700">
                                200K
                            </span>

                            <ul className="mt-7 space-y-2.5 text-sm">
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        1 Page
                                    </span>
                                </li>

                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Responsive di semua device
                                    </span>
                                </li>

                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        SEO Friendly
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Setup Hosting dan domain
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Gratis Revisi 1x
                                    </span>
                                </li>
                            </ul>

                            <Link
                                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-gray-700 text-white shadow-sm"
                                href="/contact"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>

                    {/* Paket 2 */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg p-8 hover:-translate-y-2 transition-all duration-500">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 object-cover"
                            style={{
                                backgroundImage: 'url("images/bg-pricing.jpg")',
                            }}
                        ></div>

                        {/* Overlay */}
                        {/* warna  biru */}
                        <div className="absolute inset-0 bg-[#93C5FD] opacity-70"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col text-center">
                            <h4 className="font-medium text-lg text-gray-700">
                                WordPress
                            </h4>
                            <p className="mt-7 text-sm text-gray-700">
                                Start From
                            </p>
                            <span className="mt-2 font-bold text-5xl text-gray-700">
                                500K
                            </span>

                            <ul className="mt-7 space-y-2.5 text-sm">
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Custom Design
                                    </span>
                                </li>

                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Plugin SEO
                                    </span>
                                </li>

                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Optimasi Kecepatan
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Setup Hosting dan domain
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Gratis Revisi 2x
                                    </span>
                                </li>
                            </ul>

                            <Link
                                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-gray-700 text-white shadow-sm"
                                href="/contact"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>

                    {/* Paket 3 */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg p-8 hover:-translate-y-2 transition-all duration-500">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 object-cover"
                            style={{
                                backgroundImage: 'url("images/bg-pricing.jpg")',
                            }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#6cdb9a] opacity-70"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col text-center">
                            <h4 className="font-medium text-lg text-gray-700">
                                Custom
                            </h4>
                            <p className="mt-7 text-sm text-gray-700">
                                Start From
                            </p>
                            <span className="mt-2 font-bold text-5xl text-gray-700">
                                1Jt
                            </span>

                            <ul className="mt-7 space-y-2.5 text-sm">
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Custom Design
                                    </span>
                                </li>

                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        SEO Friendly
                                    </span>
                                </li>

                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Laravel / Codeigniter
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Setup Hosting dan domain
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Gratis Revisi 3x
                                    </span>
                                </li>
                            </ul>

                            <Link
                                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-gray-700 text-white shadow-sm"
                                href="/contact"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>

                    {/* Paket 4 */}
                    <div className="relative rounded-xl overflow-hidden shadow-lg p-8 hover:-translate-y-2 transition-all duration-500">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 object-cover"
                            style={{
                                backgroundImage: 'url("images/bg-pricing.jpg")',
                            }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#f4cd0c] opacity-70"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col text-center">
                            <h4 className="font-medium text-lg text-gray-700">
                                Business
                            </h4>
                            <p className="mt-7 text-sm text-gray-700">
                                Start From
                            </p>
                            <span className="mt-2 font-bold text-5xl text-gray-700">
                                2Jt
                            </span>

                            <ul className="mt-7 space-y-2.5 text-sm">
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Custom Design
                                    </span>
                                </li>

                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        SEO Friendly
                                    </span>
                                </li>

                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Request Tech Stack
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Setup Hosting dan domain
                                    </span>
                                </li>
                                <li className="flex gap-x-2">
                                    <svg
                                        className="shrink-0 mt-0.5 size-5 text-blue-800"
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
                                    <span className="font-semibold text-gray-700">
                                        Konsultasi 24/7
                                    </span>
                                </li>
                            </ul>

                            <Link
                                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-gray-700 text-white shadow-sm"
                                href="/contact"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
