import React from "react";

const ContactSection = () => {
    return (
        <div className="px-5 py-10 lg:py-20 sm:px-10 bg-[#F4F6FF]">
            <div className="space-y-5 sm:space-y-10">
                <div className="flex flex-col space-y-3">
                    <h3 className="text-[#E37915] font-semibold text-sm md:text-sm lg:text-md">
                        CONTACT US
                    </h3>
                    <h1 className="text-gray-800 font-bold text-start text-2xl md:text-3xl lg:text-4xl">
                        Dapatkan Informasi Lebih Lanjut
                    </h1>
                    <p className="max-w-lg text-md text-gray-600">
                        Kami siap membantu Anda. Silahkan hubungi kami untuk
                        mengetahui informasi lebih lanjut.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:gap-10 lg:gap-16">
                    <div className="border border-gray-200 bg-white shadow-md p-6 rounded-lg">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                <div>
                                    <label className="block text-gray-700 font-semibold">
                                        Nama Awal
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09316E]"
                                        placeholder="Masukkan Nama Awal"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold">
                                        Nama Akhir
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09316E]"
                                        placeholder="Masukkan Nama Akhir"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09316E]"
                                    placeholder="Masukkan Email Anda"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold">
                                    Nomor Telepon
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09316E]"
                                    placeholder="Masukkan Nomor Telepon Anda"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold">
                                    Detail
                                </label>
                                <textarea
                                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09316E]"
                                    placeholder="Tulis detail pesan Anda di sini"
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#09316E] text-white font-semibold py-2 rounded-lg hover:bg-blue-900 transition-all"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                    <div className="space-y-10">
                        <div className="flex gap-x-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="shrink-0 size-7 text-[#09316E]"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                            <div className="grow">
                                <h4 className="text-gray-800 font-bold text-lg lg:text-xl">
                                    Alamat :
                                </h4>
                                <address className="mt-1 text-gray-800 text-md not-italic lg:text-lg">
                                    Jl. Sariasih No.54, Sarijadi, Kec. Sukasari,
                                    Kota Bandung, Jawa Barat 40151
                                </address>
                            </div>
                        </div>

                        <div className="flex gap-x-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="shrink-0 size-7 text-[#09316E]"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                />
                            </svg>
                            <div className="grow">
                                <h4 className="text-gray-800 font-bold text-lg lg:text-xl">
                                    Email :
                                </h4>
                                <a
                                    className="mt-1 text-gray-800 text-md hover:text-blue-800 hover:underline lg:text-lg"
                                    href="mailto:upgradein.id@gmail.com"
                                >
                                    upgradein.id@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-x-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="shrink-0 size-7 text-[#09316E]"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>

                            <div className="grow">
                                <h4 className="text-gray-800 font-bold text-lg lg:text-xl">
                                    Nomor Telepon :
                                </h4>
                                <a
                                    className="mt-1 text-gray-800 text-md hover:text-blue-800 hover:underline lg:text-lg"
                                    href={`https://wa.me/6285782744366`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +6285782744366
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
