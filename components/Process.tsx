"use client";

import React from "react";

interface ProcessProps {
    onOpenModal: () => void;
}

export default function Process({ onOpenModal }: ProcessProps) {
    return (
        <section id="proses" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Cara Kerja</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Hanya 3 Langkah Mudah</h2>
                    <p className="text-gray-600 text-lg">Proses 100% percuma. Tiada bayaran pendahuluan.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    <div className="step-card text-center relative z-10" data-aos="fade-up" data-aos-delay="0">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primarydark text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl shadow-primary/30 relative">
                            1
                            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Isi Borang Online</h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">Hanya ambil masa 2 minit. Masukkan butiran asas anda untuk semakan kelayakan.</p>
                    </div>
                    <div className="step-card text-center relative z-10" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primarydark text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl shadow-primary/30">
                            2
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Semakan Kelayakan</h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">Kami bandingkan tawaran daripada 10+ koperasi & bank untuk dapatkan yang terbaik.</p>
                    </div>
                    <div className="step-card text-center relative z-10" data-aos="fade-up" data-aos-delay="400">
                        <div className="w-20 h-20 bg-gradient-to-br from-lime to-limeDark text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl shadow-lime/30">
                            3
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Kelulusan & Pembayaran</h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">Wang dikreditkan terus ke akaun bank anda dalam masa 24 jam selepas kelulusan.</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <button onClick={onOpenModal} className="btn-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 inline-flex items-center gap-3 group">
                        <span>Mula Permohonan</span>
                        <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
