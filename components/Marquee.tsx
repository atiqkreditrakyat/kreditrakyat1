import React from "react";

export default function Marquee() {
    return (
        <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Diluluskan & Diiktiraf Oleh</h3>
            </div>
            <div className="marquee-container">
                <div className="marquee-content">
                    {[1, 2].map((_, idx) => (
                        <div key={idx} className="flex items-center gap-16 px-8">
                            {[
                                { icon: 'fa-building', name: 'Bank Islam' },
                                { icon: 'fa-landmark', name: 'Bank Rakyat' },
                                { icon: 'fa-university', name: 'Co-op Bank' },
                                { icon: 'fa-hand-holding-usd', name: 'Koperasi Tentera' },
                                { icon: 'fa-money-check-alt', name: 'Bank Muamalat' },
                                { icon: 'fa-piggy-bank', name: 'Koperasi Polis' },
                            ].map((bank, i) => (
                                <div key={i} className="logo-item flex flex-col items-center min-w-[160px]">
                                    <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 shadow-sm">
                                        <i className={`fas ${bank.icon} text-4xl text-gray-400`}></i>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600">{bank.name}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
