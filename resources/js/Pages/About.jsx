// resources/js/Pages/About.jsx
import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Head title="About" />
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                Tentang Kami
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center">
                Kami adalah tim yang berdedikasi untuk memberikan layanan
                terbaik kepada pelanggan kami. Fokus kami adalah pada inovasi
                dan kepuasan pelanggan.
            </p>
        </div>
    );
};

About.layout = (page) => <MainLayout>{page}</MainLayout>;

export default About;
