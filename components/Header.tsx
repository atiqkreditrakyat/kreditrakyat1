"use client";

import React, { useState, useEffect } from "react";

interface HeaderProps {
    onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'shadow-lg' : ''}`} id="navbar">
                <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primarydark rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-university"></i>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-display font-bold text-gray-900 tracking-tight leading-none group-hover:text-primary transition-colors">KREDIT RAKYAT</span>
                                <span className="text-[10px] text-gray-500 tracking-widest font-medium">PINJAMAN KOPERASI</span>
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center gap-8">
                            <a href="#tentang" className="text-gray-600 hover:text-primary font-medium transition-colors text-sm relative group">Tentang Kami<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></a>
                            <a href="#produk" className="text-gray-600 hover:text-primary font-medium transition-colors text-sm relative group">Produk<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></a>
                            <a href="#faedah" className="text-gray-600 hover:text-primary font-medium transition-colors text-sm relative group">Faedah<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></a>
                            <a href="#testimoni" className="text-gray-600 hover:text-primary font-medium transition-colors text-sm relative group">Testimoni<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></a>
                            <a href="#faqs" className="text-gray-600 hover:text-primary font-medium transition-colors text-sm relative group">Soalan<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></a>
                        </div>

                        <div className="flex items-center gap-4">
                            <button onClick={onOpenModal} className="hidden md:flex btn-primary text-white px-6 py-3 rounded-full font-semibold text-sm items-center gap-2 shadow-lg shadow-primary/30">
                                <span>Mohon Sekarang</span>
                                <i className="fas fa-arrow-right text-xs"></i>
                            </button>
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-gray-600 hover:text-primary p-2">
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-6">
                        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="mt-16 space-y-4">
                            {['tentang', 'produk', 'faedah', 'testimoni', 'faqs'].map(item => (
                                <a key={item} href={`#${item}`} className="block text-lg font-medium text-gray-800 py-2 border-b border-gray-100 capitalize" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item === 'faqs' ? 'Soalan Lazim' : item.replace('-', ' ')}
                                </a>
                            ))}
                            <button onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }} className="w-full btn-primary text-white py-4 rounded-xl font-bold mt-4">
                                Mohon Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
