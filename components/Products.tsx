"use client";

import React from "react";

interface ProductsProps {
    onOpenModal: () => void;
}

export default function Products({ onOpenModal }: ProductsProps) {
    return (
        <section id="produk" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-lime/20 text-gray-900 text-sm font-semibold mb-4">Produk Kami</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Pembiayaan untuk Setiap Keperluan</h2>
                    <p className="text-gray-600 text-lg">Pilih produk yang sesuai dengan keperluan kewangan anda.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: 'fa-hand-holding-usd', title: 'Pinjaman Peribadi', desc: 'Tanpa penjamin atau cagaran. Kelulusan pantas dalam 24 jam.', gradient: 'from-primary to-primarydark', shadow: 'shadow-primary/30' },
                        { icon: 'fa-motorcycle', title: 'Pinjaman Motosikal', desc: 'Skim khas kakitangan kerajaan dengan kadar bulanan yang baik.', gradient: 'from-lime to-limeDark', shadow: 'shadow-lime/30' },
                        { icon: 'fa-compress-arrows-alt', title: 'Penyatuan Hutang', desc: 'Gabungkan hutang menjadi satu. Kurangkan komitmen bulanan.', gradient: 'from-orange-400 to-orange-600', shadow: 'shadow-orange/30' },
                        { icon: 'fa-home', title: 'Pinjaman Perumahan', desc: 'Program LPHS, PR1MA & PKNS untuk kakitangan kerajaan.', gradient: 'from-blue-500 to-blue-700', shadow: 'shadow-blue/30' },
                    ].map((prod, i) => (
                        <div key={i} className="group bg-surface rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer" onClick={onOpenModal}>
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white text-2xl mb-6 shadow-lg transition-transform ${prod.gradient} ${prod.shadow} group-hover:scale-110`}>
                                <i className={`fas ${prod.icon} ${i === 1 ? 'text-gray-900' : ''}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{prod.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{prod.desc}</p>
                            <span className="text-primary text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                Mohon Sekarang <i className="fas fa-arrow-right text-xs"></i>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
