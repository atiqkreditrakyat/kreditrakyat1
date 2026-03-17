"use client";

import React from "react";

interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20" style={{ background: "radial-gradient(circle, #A3E635 0%, transparent 60%)" }}></div>
            </div>
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-lime/20 text-lime text-sm font-semibold mb-6 border border-lime/30">PERMOHONAN PERCUMA</span>
                <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">Jom Mohon Sekarang?</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Dapatkan kelulusan pantas dalam 24 jam. Konsultan kewangan kami sedia membantu anda 7 hari seminggu.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={onOpenModal} className="btn-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/50 inline-flex items-center justify-center gap-3">
                        <span>Mohon Sekarang</span>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                    <a href="https://wa.me/60123456789" target="_blank" className="px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl">
                        <i className="fab fa-whatsapp text-xl"></i> WhatsApp Kami
                    </a>
                </div>

                <p className="text-gray-500 text-sm mt-8">
                    <i className="fas fa-phone-alt mr-2 text-lime"></i> Hotline: <span className="text-lime">03-XXXX XXXX</span> (Isnin-Jumaat, 9pg-6ptg)
                </p>
            </div>
        </section>
    );
}
