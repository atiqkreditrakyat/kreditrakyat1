"use client";

import React from "react";

const defaultSteps = [
    { title: 'Isi Borang Online', desc: 'Hanya ambil masa 2 minit. Masukkan butiran asas anda untuk semakan kelayakan.' },
    { title: 'Semakan Kelayakan', desc: 'Kami bandingkan tawaran daripada 10+ koperasi & bank untuk dapatkan yang terbaik.' },
    { title: 'Kelulusan & Pembayaran', desc: 'Wang dikreditkan terus ke akaun bank anda dalam masa 48 jam selepas kelulusan.' },
];

interface ProcessProps {
    onOpenModal: () => void;
    badge?: string;
    title?: string;
    description?: string;
    steps?: Array<{ title: string; desc: string }>;
    buttonText?: string;
}

export default function Process({ 
    onOpenModal,
    badge = "Cara Kerja",
    title = "Hanya 3 Langkah Mudah",
    description = "Proses 100% percuma. Tiada bayaran pendahuluan.",
    steps = defaultSteps,
    buttonText = "Mula Permohonan"
}: ProcessProps) {
    return (
        <section id="proses" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">{badge}</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
                    <p className="text-gray-600 text-lg">{description}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {steps.map((step, i) => (
                        <div key={i} className="step-card text-center relative z-10">
                            <div className={`w-20 h-20 bg-gradient-to-br ${i === 2 ? 'from-lime to-limeDark text-gray-900 shadow-lime/30' : 'from-primary to-primarydark text-white shadow-primary/30'} rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl relative`}>
                                {i + 1}
                                {i === 0 && <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button onClick={onOpenModal} className="btn-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 inline-flex items-center gap-3 group">
                        <span>{buttonText}</span>
                        <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
