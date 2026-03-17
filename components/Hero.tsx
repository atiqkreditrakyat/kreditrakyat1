"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    const [loanAmount, setLoanAmount] = useState(50000);
    const [displayAmount, setDisplayAmount] = useState("50,000");
    const [tenure, setTenure] = useState(5);
    const interestRate = 0.035;

    useEffect(() => {
        // @ts-ignore
        if (typeof AOS !== 'undefined') {
            // @ts-ignore
            AOS.init({ duration: 800, once: true, offset: 50 });
        }
    }, []);

    const totalInterest = loanAmount * interestRate * tenure;
    const totalPayment = loanAmount + totalInterest;
    const monthlyPayment = Math.floor(totalPayment / (tenure * 12));

    const formatNumber = (num: number): string => num.toLocaleString();

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
        <section 
            className="relative min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden" 
            style={{ backgroundColor: '#F2F5F7', fontFamily: "'Roboto Condensed', sans-serif" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
                    
                    {/* LEFT SIDE: Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center" data-aos="fade-right">
                        
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 self-start bg-white shadow-sm" style={{ borderColor: '#ffe16a' }}>
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#ffe16a' }}></span>
                            <span style={{ color: '#02176d', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Pinjaman Koperasi Kakitangan Kerajaan
                            </span>
                        </div>

                        <h1 
                            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6"
                            style={{ fontFamily: "'Montserrat', sans-serif", color: '#4B4F58' }}
                        >
                            Pembiayaan Peribadi <br />
                            <span style={{ color: '#02176d' }}>Patuh Syariah</span> <br />
                            <span className="text-3xl sm:text-4xl font-bold mt-2 block opacity-80">Untuk Penjawat Awam</span>
                        </h1>

                        <p className="text-lg mb-8 leading-relaxed max-w-xl" style={{ color: '#4B4F58' }}>
                            Platform <strong style={{ color: '#02176d' }}>sehenti</strong> yang membezakan tawaran daripada 10+ Koperasi & Bank terkemuka. Kelulusan seawal <strong style={{ color: '#02176d', backgroundColor: 'rgba(255, 225, 106, 0.3)', padding: '2px 6px' }}>1 Hari Bekerja</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <button 
                                onClick={onOpenModal} 
                                className="text-white px-8 py-4 font-bold text-sm flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-lg active:scale-95"
                                style={{ 
                                    backgroundColor: '#88eb07', 
                                    borderRadius: '30px', 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '1px',
                                    color: '#fff'
                                }}
                            >
                                <span>Semak Kelayakan</span>
                                <i className="fas fa-arrow-right text-xs"></i>
                            </button>
                            <div className="flex items-center gap-3 text-sm font-medium" style={{ color: '#4B4F58' }}>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm">
                                    <i className="fab fa-whatsapp text-xl text-green-500"></i>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase opacity-60">WhatsApp Kami</span>
                                    <span className="font-bold">01X-XXXXXXX</span>
                                </div>
                            </div>
                        </div>

                        {/* EEAT: Partner Logos Strip */}
                        <div className="mb-8 overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
                            <p className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50" style={{ color: '#02176d' }}>Partner Rasmi Kami</p>
                            <div className="flex flex-wrap items-center gap-6 grayscale contrast-125">
                                <div className="h-8 w-24 bg-gray-300 rounded flex items-center justify-center text-[10px] font-bold">MBSB</div>
                                <div className="h-8 w-24 bg-gray-300 rounded flex items-center justify-center text-[10px] font-bold">CO-OP FIRST</div>
                                <div className="h-8 w-24 bg-gray-300 rounded flex items-center justify-center text-[10px] font-bold">KOPERASI</div>
                                <div className="h-8 w-16 bg-gray-300 rounded flex items-center justify-center text-[10px] font-bold">UKIR</div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-8 border-t border-gray-200">
                            <div className="flex flex-col items-start gap-2">
                                <div className="w-10 h-10 rounded shadow-sm flex items-center justify-center bg-white text-xl" style={{ color: '#02176d' }}>
                                    <i className="fas fa-mosque"></i>
                                </div>
                                <span className="text-[11px] font-bold uppercase" style={{ color: '#424242' }}>Patuh Syariah</span>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="w-10 h-10 rounded shadow-sm flex items-center justify-center bg-white text-xl" style={{ color: '#02176d' }}>
                                    <i className="fas fa-file-invoice-dollar"></i>
                                </div>
                                <span className="text-[11px] font-bold uppercase" style={{ color: '#424242' }}>Laporan CTOS</span>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="w-10 h-10 rounded shadow-sm flex items-center justify-center bg-white text-xl" style={{ color: '#02176d' }}>
                                    <i className="fas fa-user-check"></i>
                                </div>
                                <span className="text-[11px] font-bold uppercase" style={{ color: '#424242' }}>Tiada Upfront</span>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="w-10 h-10 rounded shadow-sm flex items-center justify-center bg-white text-xl" style={{ color: '#02176d' }}>
                                    <i className="fas fa-university"></i>
                                </div>
                                <span className="text-[11px] font-bold uppercase" style={{ color: '#424242' }}>Potongan Angkasa</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Visual Composition & Calculator */}
                    <div className="lg:col-span-5 relative" data-aos="fade-left">
                        
                        <div className="absolute -top-8 -left-8 md:-left-12 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce z-20" style={{ animationDuration: '3s' }}>
                            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-inner" style={{ backgroundColor: 'rgba(255, 225, 106, 0.4)', color: '#02176d' }}>
                                <i className="fas fa-calendar-check"></i>
                            </div>
                            <div>
                                <p className="text-xs font-bold m-0" style={{ fontFamily: "'Montserrat', sans-serif", color: '#02176d' }}>Kelulusan Cepat</p>
                                <p className="text-[10px] text-gray-500 m-0 leading-none mt-1">Dalam masa 24 jam</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden relative z-10" style={{ boxShadow: '0 30px 60px -12px rgba(2, 23, 109, 0.15)', borderTop: '6px solid #02176d' }}>
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl font-bold mb-2 text-center" style={{ fontFamily: "'Montserrat', sans-serif", color: '#02176d' }}>Kalkulator Pinjaman</h3>
                                <p className="text-sm text-gray-500 mb-6 text-center">Anggaran bayaran bulanan anda.</p>

                                <div className="space-y-6">
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wide mb-2 block" style={{ color: '#4B4F58' }}>Jumlah Pinjaman</label>
                                        <div className="relative group">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold select-none pointer-events-none" style={{ color: '#02176d' }}>RM</span>
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                value={displayAmount}
                                                onChange={handleLoanInput}
                                                onBlur={handleLoanBlur}
                                                placeholder="50,000"
                                                className="w-full pl-14 pr-4 py-3 text-2xl font-bold bg-gray-50 border-2 rounded outline-none transition-all shadow-inner focus:bg-white"
                                                style={{ borderColor: '#e4f7fc', color: '#222222' }}
                                                onFocus={(e) => e.target.style.borderColor = '#02176d'}
                                                onBlurCapture={(e) => e.target.style.borderColor = '#e4f7fc'}
                                            />
                                        </div>
                                        <input
                                            type="range"
                                            min="3000"
                                            max="200000"
                                            step="1000"
                                            value={loanAmount || 3000}
                                            onChange={handleSliderChange}
                                            className="w-full h-2 mt-4 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            style={{ accentColor: '#02176d' }}
                                        />
                                        <div className="flex justify-between items-center mt-2">
                                            <p className="text-[10px] text-gray-500 font-medium">Min: RM 3,000</p>
                                            <p className="text-[10px] text-gray-500 font-medium">Maks: RM 200,000</p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-wide mb-2 block" style={{ color: '#4B4F58' }}>Tempoh (Tahun)</label>
                                        <div className="flex gap-2">
                                            {[3, 5, 7, 10].map(yr => (
                                                <button
                                                    key={yr}
                                                    onClick={() => setTenure(yr)}
                                                    className={`flex-1 py-2 rounded border-2 text-sm font-bold transition-all ${
                                                        tenure === yr
                                                            ? 'shadow-md'
                                                            : 'bg-white text-gray-500 hover:bg-gray-50'
                                                    }`}
                                                    style={{ 
                                                        borderColor: tenure === yr ? '#02176d' : '#e4f7fc',
                                                        backgroundColor: tenure === yr ? '#02176d' : 'transparent',
                                                        color: tenure === yr ? '#ffffff' : '#4B4F58'
                                                    }}
                                                >
                                                    {yr}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-xs text-gray-500 mb-1 text-center font-medium">Anggaran Bayaran Bulanan</p>
                                        <div className="text-center mb-4">
                                            <p className="font-bold flex items-center justify-center" style={{ fontFamily: "'Montserrat', sans-serif", color: '#02176d' }}>
                                                <span className="text-xl mr-1 opacity-60 font-medium tracking-tighter">RM</span>
                                                <span className="text-5xl tracking-tighter">{monthlyPayment.toLocaleString()}</span>
                                            </p>
                                        </div>
                                        <button 
                                            onClick={onOpenModal} 
                                            className="w-full text-white py-4 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                                            style={{ 
                                                backgroundColor: '#02176d', 
                                                textTransform: 'uppercase', 
                                                letterSpacing: '1px',
                                                borderRadius: '4px'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a2b7a'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#02176d'}
                                        >
                                            Mohon Sekarang
                                        </button>
                                        
                                        {/* YMYL/EEAT: Transparency Disclaimers */}
                                        <div className="mt-6 space-y-2 px-1">
                                            <div className="flex justify-between text-[10px] text-gray-500 font-medium">
                                                <span>Kadar Keuntungan (APR):</span>
                                                <span className="font-bold text-gray-700">2.99% - 4.99% setahun</span>
                                            </div>
                                            <div className="flex justify-between text-[10px] text-gray-500 font-medium">
                                                <span>Tempoh Bayaran:</span>
                                                <span className="font-bold text-gray-700">1 - 10 Tahun</span>
                                            </div>
                                            <p className="text-[9px] text-gray-400 mt-3 text-center leading-tight">
                                                *Kadar tertakluk kepada T&C kelulusan koperasi. Berdasarkan pembiayaan bersih. <br />
                                                <strong>Tiada Caj Tersembunyi.</strong> Syarat Kelayakan apply.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="h-1 w-full" style={{ backgroundColor: '#ffe16a' }}></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
