"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Products from "../components/Products";
import Benefits from "../components/Benefits";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

declare const AOS: { init: (options?: Record<string, unknown>) => void };

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    // Form State
    const [leadName, setLeadName] = useState("");
    const [leadPhone, setLeadPhone] = useState("");

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

    const showToast = (message: string) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(""), 3000);
    };

    const submitLead = (e: React.FormEvent) => {
        e.preventDefault();
        if (leadName && leadPhone) {
            setIsModalOpen(false);
            showToast("Permohonan berjaya! Kami akan hubungi anda segera.");
            setLeadName("");
            setLeadPhone("");
        }
    };

    return (
        <div className="font-sans text-gray-800 bg-surface overflow-x-hidden min-h-screen">
            <div className="noise-overlay"></div>

            <Header onOpenModal={() => setIsModalOpen(true)} />
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            <Marquee />
            <About />
            <Products onOpenModal={() => setIsModalOpen(true)} />
            <Benefits />
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

                                <form className="space-y-4" onSubmit={submitLead}>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Nama Penuh</label>
                                        <input type="text" value={leadName} onChange={e => setLeadName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" placeholder="Ahmad bin Abdullah" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">No. Telefon</label>
                                        <input type="tel" value={leadPhone} onChange={e => setLeadPhone(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" placeholder="0123456789" required />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Gaji</label>
                                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none bg-white">
                                                <option>RM1.5k-3k</option>
                                                <option>RM3k-5k</option>
                                                <option>RM5k-8k</option>
                                                <option>RM8k+</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Sektor</label>
                                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none bg-white">
                                                <option>Kerajaan</option>
                                                <option>Badan Berkanun</option>
                                                <option>GLC</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full btn-primary text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-primary/30 mt-6 flex items-center justify-center gap-2">
                                        <i className="fab fa-whatsapp text-xl"></i>
                                        Hantar & WhatsApp Sekarang
                                    </button>
                                </form>

                                <p className="text-[10px] text-center text-gray-400 mt-4">
                                    <i className="fas fa-lock mr-1"></i> Data dilindungi enkripsi 256-bit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            <div className={`toast-notification ${toastMessage ? 'show' : ''}`}>
                <i className="fas fa-check-circle text-lime text-xl"></i>
                <span className="font-medium text-white text-sm">{toastMessage}</span>
            </div>
        </div>
    );
}
