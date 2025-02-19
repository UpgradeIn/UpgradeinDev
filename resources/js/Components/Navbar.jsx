import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 z-10 bg-white w-full px-5 py-5 sm:px-10">
            <div className="flex items-center justify-between">
                <Link classID="flex items-center" href="/">
                    <img
                        src="images/full-logo.png"
                        alt="Logo"
                        className="h-8"
                    />
                </Link>

                {/* Hamburger Small Screen */}
                <div className="flex sm:hidden">
                    <button onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                            />
                        </svg>
                    </button>
                </div>
                {/* End Hamburger Small Screen */}

                {/* Menu Large Screen */}
                <div className="hidden sm:block flex-1">
                    <ul className="flex justify-end space-x-10">
                        {["home", "about", "service", "project", "contact"].map(
                            (item, index) => (
                                <li key={index}>
                                    <Link
                                        href={"/" + item}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        {item.charAt(0).toUpperCase() +
                                            item.slice(1)}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                {/* End Menu Large Screen */}

                {/* Menu Small Screen */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 left-0 right-0 h-screen bg-white z-10 sm:hidden"
                        >
                            {/* button close */}
                            <div className="relative px-5 py-5">
                                <Link
                                    classID="absolute top-5 px-5 flex items-center"
                                    href="/"
                                >
                                    <img
                                        src="images/full-logo.png"
                                        alt="Logo"
                                        className="h-8"
                                    />
                                </Link>
                                <div className="absolute top-5 right-0 px-5">
                                    <button onClick={toggleMenu}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18 18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <ul className="flex flex-col h-full justify-center items-center space-y-10">
                                {[
                                    "home",
                                    "about",
                                    "service",
                                    "project",
                                    "contact",
                                ].map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={"/" + item}
                                            className="text-xl text-gray-500 hover:text-gray-700"
                                        >
                                            {item.charAt(0).toUpperCase() +
                                                item.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* End Menu Small Screen */}
            </div>
        </nav>
    );
}
