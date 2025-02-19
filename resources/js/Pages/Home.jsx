import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";

const Home = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <Head title="Home" />
                <h1 className="text-5xl font-bold text-blue-600">HALO DUNIA</h1>
            </div>
        </>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
