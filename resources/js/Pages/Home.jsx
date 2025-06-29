import React, { useState, useEffect } from "react";
import { Head, usePage } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";
import HeroSection from "./Section/HeroSection";
import AboutSection from "./Section/AboutSection";
import ServiceSection from "./Section/ServiceSection";
import ChooseUsSection from "./Section/ChooseUsSection";
import WhatsAppButton from "../Components/WhatsAppButton";
import ProjectSection from "./Section/ProjectSection";
import ContactSection from "./Section/ContactSection";
import PricingSection from "./Section/PricingSection";

const Home = () => {
    const [showButton, setShowButton] = useState(false);

    // Tangkap data 'projects' dari usePage().props
    const { projects } = usePage().props;

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
            <Head title="Upgradein - Jasa Pembuatan Website dan Aplikasi Terbaik" />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ChooseUsSection />
            <ProjectSection projects={projects} />
            <PricingSection />

            {showButton && <WhatsAppButton />}
        </>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
