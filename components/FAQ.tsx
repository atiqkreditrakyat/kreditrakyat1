"use client";

import React, { useState } from "react";

const faqData = [
    { q: 'Adakah Kredit Rakyat berlesen?', a: 'Ya, Kredit Rakyat adalah platform pembiayaan berlesen yang beroperasi di bawah pengawasan Kementerian Kewangan Malaysia dan Bank Negara Malaysia. Kami bekerjasama dengan koperasi-koperasi berdaftar dan bank-bank terkemuka.' },
    { q: 'Berapa lama proses kelulusan?', a: 'Proses kelulusan mengambil masa <strong>1 hari bekerja (24 jam)</strong> sahaja untuk kebanyakan kes. Sekiranya dokumen lengkap diberikan, wang boleh dikreditkan ke akaun anda dalam masa yang singkat.' },
    { q: 'Adakah perlu penjamin atau cagaran?', a: 'Kebanyakan produk kami <strong>tidak memerlukan penjamin atau cagaran</strong>. Cukup dengan slip gaji terkini dan dokumen pengenalan sebagai bukti kelayakan.' },
    { q: 'Bolehkah saya memohon jika ada CTOS/CCRIS tidak sempurna?', a: 'Ya, kami menerima permohonan daripada mereka yang mempunyai rekod kredit tidak sempurna. Setiap kes akan dinilai secara individu berdasarkan kemampuan bayaran balik anda.' },
    { q: 'Adakah ada caj tersembunyi?', a: '<strong>Tiada caj tersembunyi.</strong> Perkhidmatan kami adalah 100% percuma. Tiada yuran pemprosesan, yuran pentadbiran atau sebarang bayaran pendahuluan dikenakan.' },
];

export default function FAQ() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a.replace(/<[^>]*>/g, ''),
            }
        }))
    };

    return (
        <section id="faqs" className="py-24 bg-white relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Soalan Lazim</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Soalan Yang Sering Ditanya</h2>
                </div>
                <div className="space-y-4">
                    {faqData.map((faq, i) => (
                        <div key={i} className="bg-surface rounded-2xl border border-gray-100 overflow-hidden">
                            <button onClick={() => toggleFaq(i)} className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white transition-colors group">
                                <span className="font-bold text-gray-900 group-hover:text-primary transition-colors">{faq.q}</span>
                                <i className={`fas fa-chevron-down text-primary faq-icon transition-transform duration-300 ${openFaq === i ? 'active rotate-180' : ''}`}></i>
                            </button>
                            <div className={`faq-content px-6 text-gray-600 text-sm leading-relaxed ${openFaq === i ? 'active pb-5 max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} dangerouslySetInnerHTML={{ __html: faq.a }}>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
