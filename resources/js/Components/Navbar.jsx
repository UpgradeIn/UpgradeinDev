import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Fungsi untuk toggle menu (mobile)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Dengarkan event scroll
    useEffect(() => {
        const handleScroll = () => {
            // Jika posisi scroll > 0, ubah state `scrolled` menjadi true
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        // Bersihkan event listener saat unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`
                fixed top-0 z-20 w-full px-5 py-5 sm:px-10 transition-all duration-500
                ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
            `}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link className="flex items-center" href="/">
                    <img
                        src="/images/full-logo.png"
                        alt="Logo"
                        className="h-8"
                    />
                </Link>

                {/* Hamburger (Small Screen) */}
                <div className="flex sm:hidden">
                    <button onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu (Large Screen) */}
                <div className="hidden sm:block flex-1">
                    <ul className="flex justify-end space-x-10">
                        <li>
                            <Link
                                href="/"
                                className="font-medium text-gray-800 hover:text-[#09316E] capitalize"
                            >
                                Home
                            </Link>
                        </li>
                        {["about", "service", "project", "contact"].map(
                            (item, index) => (
                                <li key={index}>
                                    <Link
                                        href={"/" + item}
                                        className="font-medium text-gray-800 hover:text-[#09316E] capitalize"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>

            {/* Menu (Small Screen, Overlay) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-0 left-0 right-0 h-screen bg-white z-10 sm:hidden"
                    >
                        {/* Header (Logo & Close Button) */}
                        <div className="flex items-center justify-between p-5">
                            <Link href="/" className="flex items-center">
                                <img
                                    src="images/full-logo.png"
                                    alt="Logo"
                                    className="h-8"
                                />
                            </Link>
                            <button onClick={toggleMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <ul className="flex flex-col h-full justify-center items-center space-y-10">
                            <Link
                                href="/"
                                className="text-xl font-medium text-gray-800 hover:text-[#09316E] capitalize"
                            >
                                home
                            </Link>
                            {["about", "service", "project", "contact"].map(
                                (item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={"/" + item}
                                            className="text-xl font-medium text-gray-800 hover:text-[#09316E] capitalize"
                                            onClick={toggleMenu}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
