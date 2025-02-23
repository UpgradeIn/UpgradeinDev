import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
