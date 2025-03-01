import React from "react";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer class="relative overflow-hidden bg-neutral-900">
            <div class="mt-auto w-full mx-auto px-5 overflow-hidden py-16 sm:px-20">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    <div class="space-y-2 col-span-full lg:col-span-2">
                        <img
                            src="/images/full-logo.png"
                            alt="logo-footer"
                            class="h-10 w-48"
                        />
                        <p class="text-sm text-gray-400">
                            PT Upgradein Indonesia Inovasi
                        </p>
                        <p class="text-sm text-gray-400">
                            Nomor : AHU-063630.AH.01.30.Tahun 2024
                        </p>
                        <p class="text-sm text-gray-400">
                            NPWP : 0123 7409 9542 8000
                        </p>
                        <p class="text-sm text-gray-400">0857-8274-4366</p>
                    </div>

                    <div class="col-span-1">
                        <h4 class="font-semibold text-gray-100">Menu</h4>

                        <div class="mt-3 grid space-y-3">
                            <p>
                                <Link
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    href="/"
                                >
                                    Home
                                </Link>
                            </p>
                            <p>
                                <Link
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    href="/about"
                                >
                                    About
                                </Link>
                            </p>
                            <p>
                                <Link
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    href="/service"
                                >
                                    Service
                                </Link>
                            </p>
                            <p>
                                <Link
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    href="/project"
                                >
                                    Project
                                </Link>
                            </p>
                            <p>
                                <Link
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div class="col-span-1">
                        <h4 class="font-semibold text-gray-100">
                            Social Media
                        </h4>

                        <div class="mt-3 grid space-y-3">
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    href="https://www.instagram.com/upgradein.id/"
                                >
                                    Instagram
                                </a>
                            </p>
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    href="https://www.tiktok.com/@upgradein.id?_t=ZS-8uK2xxZfy3L&_r=1"
                                >
                                    Tiktok
                                </a>
                            </p>
                            <p>
                                <a
                                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                                    href="https://upgradein.id/"
                                >
                                    Other Service
                                </a>
                            </p>
                        </div>
                    </div>

                    <div class="col-span-2">
                        <h4 class="font-semibold text-gray-100">
                            Stay up to date
                        </h4>

                        <form>
                            <div class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
                                <div class="w-full">
                                    <label for="hero-input" class="sr-only">
                                        Subscribe
                                    </label>
                                    <input
                                        type="text"
                                        id="hero-input"
                                        name="hero-input"
                                        class="py-1 px-1 block w-full border-transparent rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <a
                                    class="w-full sm:w-auto whitespace-nowrap p-2 inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-[#09316E] text-white hover:bg-blue-900"
                                    href="#"
                                >
                                    Subscribe
                                </a>
                            </div>
                            <p class="mt-3 text-center text-sm text-gray-400 sm:text-start">
                                Dapatkan informasi terbaru tentang produk dan
                                layanan kami
                            </p>
                        </form>
                    </div>
                </div>

                <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
                    <div class="flex justify-center w-full items-center">
                        <p class="text-sm text-gray-400">
                            © UpgradeIn All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
