// resources/js/Pages/Contact.jsx
import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Head title="Contact" />
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                Hubungi Kami
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center">
                Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan
                ragu untuk menghubungi kami melalui email di support@example.com
                atau telepon di (021) 123-4567.
            </p>
        </div>
    );
};

Contact.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Contact;
