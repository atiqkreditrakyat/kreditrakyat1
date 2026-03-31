"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Products from "../components/Products";
import Benefits from "../components/Benefits";
import Comparison from "../components/Comparison";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import TrustwiredForm from "../components/TrustwiredForm";

declare const AOS: { init: (options?: Record<string, unknown>) => void };

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsModalOpen(false);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Initialize AOS animations
    useEffect(() => {
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 800, once: true, offset: 50 });
        }
    }, []);

    return (
        <div className="font-sans text-gray-800 bg-surface overflow-x-hidden min-h-screen">
            <div className="noise-overlay"></div>

            <Header onOpenModal={() => setIsModalOpen(true)} />
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            <Marquee />
            <About />
            <Products onOpenModal={() => setIsModalOpen(true)} />
            <Benefits />
            <Comparison />
            <Process onOpenModal={() => setIsModalOpen(true)} />
            <Testimonials />
            <FAQ />
            <CTA onOpenModal={() => setIsModalOpen(true)} />
            <Footer />

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60]">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)}></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all scale-100" onClick={e => e.stopPropagation()}>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-gray-900">Dapatkan Anggaran Tepat</h3>
                                        <p className="text-sm text-gray-500 mt-1">Konsultan kami akan hubungi anda segera.</p>
                                    </div>
                                    <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                        <i className="fas fa-times text-sm"></i>
                                    </button>
                                </div>

                                <TrustwiredForm />
                                
                                <p className="text-[10px] text-center text-gray-400 mt-6">
                                    <i className="fas fa-lock mr-1"></i> Data dilindungi enkripsi 256-bit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {toastMessage && (
                <div className="toast-notification show">
                    <i className="fas fa-check-circle text-lime text-xl"></i>
                    <span className="font-medium text-white text-sm">{toastMessage}</span>
                </div>
            )}
        </div>
    );
}
