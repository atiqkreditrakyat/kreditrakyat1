"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
    { img: '11', name: 'Ahmad bin Abdullah', job: 'Guru, SMK Kuala Lumpur', amount: 'RM50,000', review: 'Proses yang sangat pantas dan mudah. Saya memohon pada pagi Isnin dan wang sudah masuk akaun pada petang yang sama.', stars: 5 },
    { img: '5', name: 'Siti Nurhaliza', job: 'Jururawat, HKL', amount: 'RM35,000', review: 'Saya ada masalah CTOS sedikit tapi Kredit Rakyat tetap bantu untuk mendapatkan kelulusan. Kadar yang ditawarkan juga lebih baik!', stars: 5 },
    { img: '3', name: 'Muhammad Rizal', job: 'Pegawai, Kementerian', amount: 'RM80,000', review: 'Penyatuan hutang berjaya mengurangkan komitmen bulanan saya dari RM1,200 kepada RM800. Penjimatan yang besar!', stars: 5 },
    { init: 'K', color: 'from-blue-500 to-blue-600', name: 'Kumaravel', job: 'Pegawai Teknik, JKR', amount: 'RM60,000', review: 'Pilihan koperasi yang banyak dan boleh bandingkan kadar. Staff consultant sangat professional dan tidak pushy.', stars: 4.5 },
    { init: 'F', color: 'from-purple-500 to-purple-600', name: 'Faridah Hassan', job: 'Pegawai, JAIN', amount: 'RM45,000', review: 'Dari segi patuh syariah, saya yakin dengan Kredit Rakyat. Semua dokumen jelas dan transparent. Tiada caj tersembunyi.', stars: 5 },
    { init: 'Z', color: 'from-orange-500 to-orange-600', name: 'Zulkifli', job: 'Polis Bantuan, IPD', amount: 'RM120,000', review: 'Pinjaman perumahan untuk program LPHS berjaya diluluskan dalam masa 2 hari. Staff sangat knowledgeable.', stars: 5 },
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.offsetWidth * 0.85;
            const gap = 24;
            const index = Math.round(scrollLeft / (cardWidth + gap));
            setActiveIndex(Math.min(index, testimonials.length - 1));
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToIndex = (index: number) => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = container.offsetWidth * 0.85;
        const gap = 24;
        container.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
    };

    return (
        <section id="testimoni" className="py-24 bg-surface relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-lime/20 text-limeDark text-sm font-bold tracking-wide mb-4 border border-lime/30 shadow-sm">
                        ✨ Testimoni
                    </span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Kepercayaan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-lime">Penjawat Awam</span>
                    </h2>
                    <p className="text-gray-600 text-lg font-light">
                        Lebih 10,000 pelanggan telah merasai perbezaan dengan Kredit Rakyat.
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 relative">
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-3xl -z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50"></div>
                    {[
                        { label: 'Rating Purata', value: '4.9/5' },
                        { label: 'Pelanggan', value: '10,000+' },
                        { label: 'Kadar Kelulusan', value: '98%' },
                        { label: 'Masa Respons', value: '24 Jam' },
                    ].map((stat, i) => (
                        <div key={i} className="p-6 text-center group">
                            <p className="text-3xl font-display font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{stat.value}</p>
                            <p className="text-xs text-gray-500 mt-2 font-medium tracking-wide uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Swipeable Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth pb-8 -mx-4 px-4 snap-x snap-mandatory"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {testimonials.map((test, i) => (
                        <div
                            key={i}
                            className="group relative flex-shrink-0 snap-start bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:shadow-[0_20px_40px_rgba(13,148,136,0.1)] hover:-translate-y-1 transition-all duration-500"
                            style={{
                                width: '85%',
                                maxWidth: '400px',
                                minWidth: '280px',
                            }}
                        >
                            {/* Decorative Quote Icon Background */}
                            <div className="absolute top-6 right-6 text-primary/5 text-8xl font-serif leading-none italic select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                                &quot;
                            </div>

                            <div className="flex items-center gap-1 mb-6 relative z-10">
                                {[...Array(Math.floor(test.stars))].map((_, idx) => (
                                    <i key={idx} className="fas fa-star text-amber-400 text-sm drop-shadow-sm"></i>
                                ))}
                                {test.stars % 1 !== 0 && <i className="fas fa-star-half-alt text-amber-400 text-sm drop-shadow-sm"></i>}
                            </div>

                            <p className="text-gray-700 text-[15px] leading-relaxed mb-8 font-medium relative z-10 w-11/12 group-hover:text-gray-900 transition-colors duration-300">
                                &quot;{test.review}&quot;
                            </p>

                            <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-gray-100">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    {test.img ? (
                                        <Image src={`https://i.pravatar.cc/150?img=${test.img}`} alt={test.name} width={52} height={52} className="rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary/20 transition-all duration-300 relative z-10" />
                                    ) : (
                                        <div className={`w-[52px] h-[52px] rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg ring-2 ring-transparent group-hover:ring-primary/20 transition-all ${test.color} relative z-10`}>{test.init}</div>
                                    )}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors duration-300">{test.name}</p>
                                    <p className="text-xs text-gray-500 mb-1">{test.job}</p>
                                    <span className="inline-flex px-2.5 py-1 bg-gradient-to-r from-lime/20 to-primary/10 text-primary text-[10px] rounded-full font-bold uppercase tracking-wider shadow-inner">
                                        {test.amount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToIndex(i)}
                            className={`rounded-full transition-all duration-500 ease-out ${activeIndex === i
                                    ? 'w-10 h-2.5 bg-gradient-to-r from-primary to-lime shadow-[0_0_10px_rgba(13,148,136,0.3)]'
                                    : 'w-2.5 h-2.5 bg-gray-200 hover:bg-primary/40'
                                }`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
