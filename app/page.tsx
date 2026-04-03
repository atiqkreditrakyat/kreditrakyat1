"use client";

import React, { useState, useEffect } from "react";
import { PLASMIC } from "../plasmic-init";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import TrustwiredForm from "../components/TrustwiredForm";

// Force static rendering with ISR
export const revalidate = 60;

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
        // @ts-ignore
        if (typeof AOS !== 'undefined') {
            // @ts-ignore
            AOS.init({ duration: 800, once: true, offset: 50 });
        }
    }, []);

    return (
        <PlasmicRootProvider loader={PLASMIC}>
            <div className="font-sans text-gray-800 bg-surface overflow-x-hidden min-h-screen">
                <div className="noise-overlay"></div>

                {/* 
                    This renders the homepage defined in Plasmic Studio.
                    Your designer can now reorder sections, edit text, 
                    and add new registered components (Hero, FAQ, etc.) 
                    directly from the Studio!
                */}
                <PlasmicComponent 
                    component="Homepage" 
                    componentProps={{
                        onOpenModal: () => setIsModalOpen(true)
                    }}
                />

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-[60]">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)}></div>
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all scale-100" onClick={e => e.stopPropagation()}>
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
        </PlasmicRootProvider>
    );
}
