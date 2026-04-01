"use client";

import React, { useState, useEffect } from "react";

interface HeroProps {
    onOpenModal: () => void;
}

declare const AOS: { init: (options?: Record<string, unknown>) => void };

export default function Hero({ onOpenModal }: HeroProps) {
    const [loanAmount, setLoanAmount] = useState(50000);
    const [displayAmount, setDisplayAmount] = useState("50,000");
    const [tenure, setTenure] = useState(5);
    const interestRate = 0.035;

    useEffect(() => {
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 800, once: true, offset: 50 });
        }
    }, []);


    const totalInterest = loanAmount * interestRate * tenure;
    const totalPayment = loanAmount + totalInterest;
    const monthlyPayment = Math.floor(totalPayment / (tenure * 12));

    const formatNumber = (num: number): string => {
        return num.toLocaleString();
    };

    const handleLoanInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/[^0-9]/g, "");
        if (raw === "") {
            setDisplayAmount("");
            setLoanAmount(0);
            return;
        }
        const num = parseInt(raw, 10);
        setDisplayAmount(formatNumber(num));
        setLoanAmount(num);
    };

    const handleLoanBlur = () => {
        let clamped = loanAmount;
        if (clamped < 3000) clamped = 3000;
        if (clamped > 200000) clamped = 200000;
        setLoanAmount(clamped);
        setDisplayAmount(formatNumber(clamped));
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const num = parseInt(e.target.value, 10);
        setLoanAmount(num);
        setDisplayAmount(formatNumber(num));
    };

    return (
        <section className="relative min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-surface">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#0D9488 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">

                    <div className="lg:col-span-12 text-center relative z-10" data-aos="fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-primary/20 text-primary text-xs font-semibold mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
                            10,000+ Kelulusan Berjaya &bull; Kadar Serendah 3.5%
                        </div>

                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 max-w-5xl mx-auto">
                            Pembiayaan Koperasi
                            <span className="hero-gradient-text italic font-extrabold mx-2">Patuh Syariah</span>
                            <br className="hidden sm:block" />
                            untuk
                            <span className="relative inline-block ml-2">
                                <span className="relative z-10">Penjawat Awam</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-lime/40 -z-0" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00025 6.99997C25.7509 2.74999 86.6504 -3.29001 198.001 6.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
                            Platform <strong className="text-primary font-semibold">One-Stop Center</strong> yang membandingkan tawaran daripada
                            <span className="text-gray-900 font-semibold mx-1">10+ Koperasi &amp; Bank</span> terkemuka.
                            Kelulusan dalam <span className="bg-lime/30 px-2 py-0.5 rounded font-semibold text-primary">2 Hari Bekerja</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
                            <button onClick={onOpenModal} className="btn-primary text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-primary/30 group">
                                <span>Semak Kelayakan Percuma</span>
                                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                            </button>
                            <button onClick={() => document.getElementById('proses')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary text-gray-700 px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2">
                                <i className="fas fa-play-circle text-primary"></i>
                                <span>Info Lanjut</span>
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 mb-12">
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/60">
                                <i className="fas fa-shield-alt text-primary"></i>
                                <span>Patuh Syariah</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/60">
                                <i className="fas fa-lock text-primary"></i>
                                <span>Data Selamat</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/60">
                                <i className="fas fa-check-circle text-primary"></i>
                                <span>Tiada Caj Tersembunyi</span>
                            </div>
                        </div>

                        {/* Calculator Card */}
                        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/60" data-aos="fade-up" data-aos-delay="300">
                            <div className="grid md:grid-cols-2 gap-6 items-center text-left">
                                <div>
                                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Kalkulator Pembiayaan</h3>
                                    <p className="text-sm text-gray-500 mb-4">Dapatkan anggaran bayaran bulanan anda.</p>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2 block">Jumlah Pembiayaan</label>
                                            <div className="relative group">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-primary select-none pointer-events-none">RM</span>
                                                <input
                                                    type="text"
                                                    inputMode="numeric"
                                                    value={displayAmount}
                                                    onChange={handleLoanInput}
                                                    onBlur={handleLoanBlur}
                                                    placeholder="50,000"
                                                    className="w-full pl-14 pr-12 py-3.5 text-2xl font-bold text-gray-900 bg-white/80 hover:bg-white backdrop-blur border-2 border-gray-200 hover:border-primary/50 cursor-text rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm group-hover:shadow-md"
                                                />
                                                <i className="fas fa-pencil-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary/70 group-focus-within:text-primary transition-colors pointer-events-none data-aos='fade-in' data-aos-delay='600'"></i>
                                            </div>
                                            <input
                                                type="range"
                                                min="3000"
                                                max="200000"
                                                step="1000"
                                                value={loanAmount || 3000}
                                                onChange={handleSliderChange}
                                                className="w-full h-2 mt-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                            />
                                            <div className="flex justify-between items-center mt-2">
                                                <p className="text-[10px] text-gray-400 font-medium">Min: RM 3,000</p>
                                                <p className="text-[10px] text-gray-400 font-medium">Maks: RM 200,000</p>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2 block">Tempoh (Tahun)</label>
                                            <div className="flex gap-2">
                                                {[3, 5, 7, 10].map(yr => (
                                                    <button
                                                        key={yr}
                                                        onClick={() => setTenure(yr)}
                                                        className={`flex-1 py-2 rounded-lg border-2 text-xs transition-all ${tenure === yr
                                                            ? 'border-primary bg-primary/5 text-primary font-bold'
                                                            : 'border-gray-100 hover:border-primary/30 font-medium'
                                                            }`}
                                                    >
                                                        {yr}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-lime/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                    <p className="text-xs text-gray-500 mb-1">Anggaran Bulanan</p>
                                    <div className="relative inline-block mb-4">
                                        <p className="text-5xl font-display font-bold text-gray-900">RM{monthlyPayment.toLocaleString()}</p>
                                    </div>

                                    <button onClick={onOpenModal} className="w-full btn-primary text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/30">
                                        <i className="fab fa-whatsapp"></i>
                                        Dapatkan Anggaran Tepat
                                    </button>
                                    <p className="text-[10px] text-gray-400 mt-3 text-center">*Anggaran berdasarkan kadar 3.5% setahun. T&C apply.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
