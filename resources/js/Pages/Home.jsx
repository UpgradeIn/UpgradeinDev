import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";
import HeroSection from "./Section/HeroSection";
import AboutSection from "./Section/AboutSection";
import ServiceSection from "./Section/ServiceSection";
import ChooseUsSection from "./Section/ChooseUsSection";
import WhatsAppButton from "../Components/WhatsAppButton";
import ProjectSection from "./Section/ProjectSection";
import ContactSection from "./Section/ContactSection";

const Home = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Head title="Landing Page" />
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

            {/* Service Section */}
            <ServiceSection />

            {/* Why Choose Upgradein */}
            <ChooseUsSection />

            {/* Project Section */}
            <ProjectSection />

            {/* Contact Section */}
            <ContactSection />

            {/* WhatsApp Button */}
            {showButton && <WhatsAppButton />}
        </>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
