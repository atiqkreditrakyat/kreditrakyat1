import React from 'react';

export default function Comparison() {
    return (
        <section id="perbandingan" className="py-24 bg-surface relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                        Perbandingan
                    </span>
                    <h2 className="font-display text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Kenapa Pilih <span className="text-primary">Kredit Rakyat?</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Lihat perbezaan kelebihan memohon dengan kami berbanding alternatif lain di pasaran.
                    </p>
                </div>

                <div className="overflow-x-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th scope="col" className="p-6 font-bold text-gray-900 w-1/4">Ciri-ciri Utama</th>
                                <th scope="col" className="p-6 text-center w-1/4 border-x border-gray-100 bg-primary/5">
                                    <div className="inline-flex items-center justify-center gap-2 text-primary font-bold text-lg">
                                        <i className="fas fa-crown text-lime"></i>
                                        Kredit Rakyat
                                    </div>
                                </th>
                                <th scope="col" className="p-6 text-center font-bold text-gray-600 w-1/4">Bank Tradisional</th>
                                <th scope="col" className="p-6 text-center font-bold text-gray-600 w-1/4">Pinjaman Berlesen</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <th scope="row" className="p-6 font-semibold text-gray-700">Tempoh Kelulusan</th>
                                <td className="p-6 text-center border-x border-gray-100 font-bold text-gray-900 bg-primary/5">1 - 2 Hari Bekerja</td>
                                <td className="p-6 text-center text-gray-500">2 - 4 Minggu</td>
                                <td className="p-6 text-center text-gray-500">24 Jam</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <th scope="row" className="p-6 font-semibold text-gray-700">Kadar Keuntungan</th>
                                <td className="p-6 text-center border-x border-gray-100 font-bold text-gray-900 bg-primary/5">Serendah 2.99%</td>
                                <td className="p-6 text-center text-gray-500">Dari 5.00%</td>
                                <td className="p-6 text-center text-gray-500">Tertinggi (12%+)</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <th scope="row" className="p-6 font-semibold text-gray-700">Patuh Syariah</th>
                                <td className="p-6 text-center border-x border-gray-100 align-middle bg-primary/5">
                                    <i className="fas fa-check-circle text-lime text-xl"></i>
                                </td>
                                <td className="p-6 text-center align-middle text-gray-300">
                                    <i className="fas fa-check-circle text-xl"></i>
                                </td>
                                <td className="p-6 text-center align-middle">
                                    <i className="fas fa-times-circle text-red-400 text-xl"></i>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <th scope="row" className="p-6 font-semibold text-gray-700">Fleksibiliti CTOS/CCRIS</th>
                                <td className="p-6 text-center border-x border-gray-100 align-middle bg-primary/5">
                                    <i className="fas fa-check-circle text-lime text-xl"></i>
                                </td>
                                <td className="p-6 text-center align-middle">
                                    <i className="fas fa-times-circle text-red-400 text-xl"></i>
                                </td>
                                <td className="p-6 text-center align-middle text-gray-300">
                                    <i className="fas fa-check-circle text-xl"></i>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <th scope="row" className="p-6 font-semibold text-gray-700">Tanpa Penjamin</th>
                                <td className="p-6 text-center border-x border-gray-100 align-middle bg-primary/5">
                                    <i className="fas fa-check-circle text-lime text-xl"></i>
                                </td>
                                <td className="p-6 text-center align-middle">
                                    <i className="fas fa-times-circle text-red-400 text-xl"></i>
                                </td>
                                <td className="p-6 text-center align-middle text-gray-300">
                                    <i className="fas fa-check-circle text-xl"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
