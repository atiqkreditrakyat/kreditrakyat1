"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsAndConditions() {
    return (
        <div className="bg-surface min-h-screen">
            <Header onOpenModal={() => window.location.href = '/'} />
            
            <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-100/50 border border-gray-100">
                    <h1 className="font-display text-4xl font-bold text-gray-900 mb-8">Terma & Syarat</h1>
                    
                    <div className="prose prose-teal max-w-none text-gray-600 space-y-6 text-justify">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Penerimaan Terma</h2>
                            <p>
                                Dengan mengakses laman web ini, anda bersetuju untuk terikat dengan Terma dan Syarat 
                                Penggunaan yang terkandung di sini. Sekiranya anda tidak bersetuju, sila berhenti 
                                menggunakan laman web ini dengan segera.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Peranan Kami</h2>
                            <p>
                                Kredit Rakyat bertindak sebagai platform pemasaran bagi produk-produk pembiayaan 
                                peribadi daripada rakan koperasi dan bank-bank berlesen. Keputusan akhir mengenai 
                                kelulusan dan kadar pembiayaan adalah tertakluk kepada budi bicara mutlak 
                                institusi pemberi pembiayaan tersebut.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Kelayakan</h2>
                            <p>Permohonan melalui Kredit Rakyat adalah terhad kepada:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Warganegara Malaysia yang berumur antara 18 hingga 60 tahun.</li>
                                <li>Penjawat awam (Persekutuan, Negeri, atau Badan Berkanun).</li>
                                <li>Kakitangan Syarikat Berkaitan Kerajaan (GLC) terpilih.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Tiada Caj Pendahuluan</h2>
                            <p>
                                Kredit Rakyat dengan tegas menyatakan kami <strong>TIDAK</strong> akan meminta sebarang yuran 
                                pendahuluan (Upfront Fees) daripada pelanggan. Sekiranya anda diminta membuat 
                                bayaran oleh mana-mana pihak yang mendakwa sebagai wakil kami, sila laporkan 
                                segera kepada kami.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Ketebalan Maklumat</h2>
                            <p>
                                Anda bertanggungjawab sepenuhnya untuk memberikan maklumat kewangan dan pekerjaan 
                                yang tepat dan benar. Sebarang percubaan penipuan data boleh mengakibatkan 
                                permohonan anda ditolak secara automatik.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Had Liabiliti</h2>
                            <p>
                                Kredit Rakyat tidak akan bertanggungjawab terhadap sebarang kerugian atau 
                                kerosakan yang timbul daripada penggunaan maklumat atau perkhidmatan di laman web ini.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-gray-100">
                            <p className="text-sm italic">Kemaskini terakhir: 1 April 2026</p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
