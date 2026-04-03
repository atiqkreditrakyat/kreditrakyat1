"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
    onOpenModal: () => void;
    buttonText?: string;
}

export default function Header({ 
    onOpenModal,
    buttonText = "Mohon Sekarang"
}: HeaderProps) {
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
                        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
                            <img src={process.env.NODE_ENV === 'production' ? '/kreditrakyat1/logo.png' : '/logo.png'} alt="Kredit Rakyat" className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                        </Link>

                        <div className="hidden lg:flex items-center gap-8">
                            <Link href="/#tentang" className="text-gray-600 hover:text-primary font-medium transition-colors text-sm relative group">Tentang Kami<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                            <Link href="/#produk" className="text-gray-600 hover:text-primary font-medium transition-colors text-sm relative group">Produk<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                            <Link href="/#manfaat" className="text-gray-600 hover:text-primary font-medium transition-colors text-sm relative group">Kelebihan<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                            <Link href="/#testimoni" className="text-gray-600 hover:text-primary font-medium transition-colors text-sm relative group">Testimoni<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                            <Link href="/#faqs" className="text-gray-600 hover:text-primary font-medium transition-colors text-sm relative group">Soalan<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span></Link>
                        </div>

                        <div className="flex items-center gap-4">
                             <button onClick={onOpenModal} className="hidden md:flex btn-primary text-white px-6 py-3 rounded-full font-semibold text-sm items-center gap-2 shadow-lg shadow-primary/30">
                                <span>{buttonText}</span>
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
                            {['tentang', 'produk', 'manfaat', 'testimoni', 'faqs'].map(item => (
                                <Link key={item} href={`/#${item}`} className="block text-lg font-medium text-gray-800 py-2 border-b border-gray-100 capitalize" onClick={() => setIsMobileMenuOpen(false)}>
                                    {item === 'faqs' ? 'Soalan Lazim' : item === 'manfaat' ? 'Kelebihan' : item.replace('-', ' ')}
                                </Link>
                            ))}
                             <button onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }} className="w-full btn-primary text-white py-4 rounded-xl font-bold mt-4">
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
