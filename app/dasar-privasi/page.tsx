"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="bg-surface min-h-screen">
            <Header onOpenModal={() => window.location.href = '/'} />
            
            <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-100/50 border border-gray-100">
                    <h1 className="font-display text-4xl font-bold text-gray-900 mb-8">Dasar Privasi</h1>
                    
                    <div className="prose prose-teal max-w-none text-gray-600 space-y-6 text-justify">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Pengenalan</h2>
                            <p>
                                Rakyat Fintech Sdn. Bhd. (&quot;Kredit Rakyat&quot;, &quot;kami&quot;, &quot;milik kami&quot;) amat menitikberatkan privasi anda. 
                                Dasar Privasi ini menerangkan bagaimana kami mengumpul, menggunakan, mendedahkan, dan melindungi maklumat peribadi anda 
                                selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) di Malaysia.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Maklumat Yang Kami Kumpul</h2>
                            <p>Kami mungkin mengumpul maklumat peribadi anda apabila anda mengisi borang di laman web kami, termasuk tetapi tidak terhad kepada:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Nama penuh seperti dalam Kad Pengenalan.</li>
                                <li>Nombor kad pengenalan (untuk tujuan semakan kelayakan).</li>
                                <li>Alamat emel dan nombor telefon.</li>
                                <li>Butiran pekerjaan (jabatan, gaji, tempoh perkhidmatan).</li>
                                <li>Maklumat kewangan lain yang diperlukan untuk proses pembiayaan.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Tujuan Pengumpulan Data</h2>
                            <p>Maklumat anda digunakan untuk tujuan berikut:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Memproses permohonan pembiayaan anda.</li>
                                <li>Menghantar maklumat permohonan kepada rakan koperasi atau institusi kewangan yang berkaitan.</li>
                                <li>Menghubungi anda untuk rundingan dan kemaskini status permohonan.</li>
                                <li>Mematuhi keperluan undang-undang dan kawal selia.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Pendedahan Maklumat</h2>
                            <p>
                                Kami tidak akan menjual maklumat peribadi anda kepada pihak ketiga. Walau bagaimanapun, kami mungkin berkongsi maklumat anda 
                                dengan rakan strategik kami (seperti koperasi dan bank) semata-mata untuk memudahkan proses permohonan pembiayaan anda.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Keselamatan Data</h2>
                            <p>
                                Kami melaksanakan langkah-langkah keselamatan teknikal dan organisasi yang bersesuaian untuk melindungi data anda 
                                daripada akses yang tidak dibenarkan, kehilangan, atau pemusnahan. Ini termasuk penggunaan enkripsi SSL pada laman web kami.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Hak Anda</h2>
                            <p>
                                Anda mempunyai hak untuk mengakses, membetulkan, atau meminta kami memadamkan maklumat peribadi anda pada bila-bila masa. 
                                Sila hubungi kami melalui emel di info@kreditrakyat.com untuk sebarang pertanyaan mengenai data anda.
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
