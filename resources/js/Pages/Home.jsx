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
            <Head title="Landing Page" />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ChooseUsSection />

            {/* 2. Oper data "projects" ke ProjectSection */}
            <ProjectSection projects={projects} />

            <ContactSection />

            {showButton && <WhatsAppButton />}
        </>
    );
};

Home.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
