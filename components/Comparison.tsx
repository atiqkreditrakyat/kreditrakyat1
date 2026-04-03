import React from 'react';

const defaultColumnHeaders = ["Ciri-ciri Utama", "Kredit Rakyat", "Bank Tradisional", "Pembiayaan Berlesen"];

const defaultRows = [
    { feature: "Tempoh Kelulusan", col1: "2 Hari Bekerja", col2: "2 - 4 Minggu", col3: "24 Jam" },
    { feature: "Kadar Tetap", col1: "Serendah 3.5%", col2: "Dari 5.00%", col3: "Tertinggi (12%+)" },
    { feature: "Patuh Syariah", col1: true, col2: "check", col3: false },
    { feature: "Fleksibiliti CTOS/CCRIS", col1: true, col2: false, col3: "check" },
    { feature: "Tanpa Penjamin", col1: true, col2: false, col3: "check" },
];

interface ComparisonProps {
    badge?: string;
    title?: string;
    highlightedTitle?: string;
    description?: string;
    columnHeaders?: string[];
    rows?: Array<{
        feature: string;
        col1: any;
        col2: any;
        col3: any;
    }>;
}

export default function Comparison({
    badge = "Perbandingan",
    title = "Kenapa Pilih",
    highlightedTitle = "Kredit Rakyat?",
    description = "Lihat perbezaan kelebihan memohon dengan kami berbanding alternatif lain di pasaran.",
    columnHeaders = defaultColumnHeaders,
    rows = defaultRows
}: ComparisonProps) {
    return (
        <section id="perbandingan" className="py-24 bg-surface relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                        {badge}
                    </span>
                    <h2 className="font-display text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {title} <span className="text-primary">{highlightedTitle}</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="overflow-x-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th scope="col" className="p-6 font-bold text-gray-900 w-1/4">{columnHeaders[0]}</th>
                                <th scope="col" className="p-6 text-center w-1/4 border-x border-gray-100 bg-primary/5">
                                    <div className="inline-flex items-center justify-center gap-2 text-primary font-bold text-lg">
                                        <i className="fas fa-crown text-lime"></i>
                                        {columnHeaders[1]}
                                    </div>
                                </th>
                                <th scope="col" className="p-6 text-center font-bold text-gray-600 w-1/4">{columnHeaders[2]}</th>
                                <th scope="col" className="p-6 text-center font-bold text-gray-600 w-1/4">{columnHeaders[3]}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {rows.map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                    <th scope="row" className="p-6 font-semibold text-gray-700">{row.feature}</th>
                                    <td className="p-6 text-center border-x border-gray-100 font-bold text-gray-900 bg-primary/5">
                                        {renderCell(row.col1, true)}
                                    </td>
                                    <td className="p-6 text-center text-gray-500">
                                        {renderCell(row.col2)}
                                    </td>
                                    <td className="p-6 text-center text-gray-500">
                                        {renderCell(row.col3)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function renderCell(val: any, isMain = false) {
    if (val === true) return <i className="fas fa-check-circle text-lime text-xl"></i>;
    if (val === false) return <i className="fas fa-times-circle text-red-400 text-xl"></i>;
    if (val === 'check') return <i className="fas fa-check-circle text-xl text-gray-300"></i>;
    return val;
}
