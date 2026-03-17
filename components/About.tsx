import React from "react";

export default function About() {
    return (
        <section id="tentang" className="py-24 bg-surface relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Tentang Kami</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Platform <span className="text-primary">One-Stop Center</span> untuk Penjawat Awam
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Kredit Rakyat adalah platform pembiayaan yang memberi peluang kepada kakitangan kerajaan dan ahli koperasi untuk mendapatkan dana tambahan dengan kadar faedah yang kompetitif.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        Kami bekerjasama dengan <strong className="text-primary">10+ Koperasi dan Bank</strong> terkemuka untuk memberikan anda pilihan terbaik. Misi kami adalah untuk menyediakan pinjaman yang <span className="font-semibold text-gray-900">Pantas, Selamat, dan Patuh Syariah</span>.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {[
                            { icon: 'fa-users', value: '50+', label: 'Rakan Koperasi' },
                            { icon: 'fa-handshake', value: '10+', label: 'Bank Partners' },
                            { icon: 'fa-award', value: '6+', label: 'Tahun Beroperasi' },
                            { icon: 'fa-heart', value: '98%', label: 'Kepuasan Pelanggan' },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <i className={`fas ${stat.icon} text-lg`}></i>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-gray-900 text-lg">{stat.value}</p>
                                    <p className="text-xs text-gray-500">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
