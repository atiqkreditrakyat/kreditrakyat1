import React from "react";

export default function Benefits() {
    return (
        <section id="faedah" className="py-24 bg-surface relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-lime/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Keunggulan Kami</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Faedah Memohon <span className="text-primary">Dengan Kami</span></h2>
                    <p className="text-gray-600 text-lg">Nikmati pelbagai kelebihan eksklusif apabila anda memohon melalui platform kami.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: 'fa-user-clock', title: 'Proses Pantas', desc: 'Kelulusan dalam <strong class="text-primary">1 hari bekerja</strong>. Tiada proses berlarutan atau paperwork yang menyusahkan.', gradient: 'from-primary to-primarydark', shadow: 'shadow-primary/30', blur: 'from-primary/10' },
                        { icon: 'fa-mosque', title: 'Patuh Syariah 100%', desc: 'Semua produk <strong class="text-primary">bebas riba</strong> dan patuh syariah. Diperakui oleh panel syariah terkemuka.', gradient: 'from-lime to-limeDark', shadow: 'shadow-lime/30', blur: 'from-lime/20', iColor: 'text-gray-900' },
                        { icon: 'fa-hand-holding-heart', title: 'Tiada Caj Tersembunyi', desc: '<strong class="text-primary">100% Percuma</strong> perkhidmatan. Tiada yuran pemprosesan atau yuran pentadbiran.', gradient: 'from-orange-400 to-orange-600', shadow: 'shadow-orange/30', blur: 'from-orange-400/20' },
                        { icon: 'fa-shield-alt', title: 'Data & Privasi Selamat', desc: 'Sistem <strong class="text-primary">256-bit encryption</strong>. Data tidak dikongsi dengan pihak ketiga tanpa kebenaran.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue/30', blur: 'from-blue-500/20' },
                        { icon: 'fa-user-check', title: 'Tanpa Penjamin', desc: '<strong class="text-primary">Tiada penjamin</strong> atau cagaran diperlukan. Hanya gunakan slip gaji sebagai bukti kelayakan.', gradient: 'from-purple-500 to-purple-600', shadow: 'shadow-purple/30', blur: 'from-purple-500/20' },
                        { icon: 'fa-percentage', title: 'Kadar Kompetitif', desc: 'Kadar serendah <strong class="text-primary">3.5% setahun</strong>. Kami bandingkan tawaran untuk dapatkan yang terbaik untuk anda.', gradient: 'from-pink-500 to-pink-600', shadow: 'shadow-pink/30', blur: 'from-pink-500/20' },
                    ].map((ben, i) => (
                        <div key={i} className="benefit-card bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/50 relative overflow-hidden group">
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${ben.blur} to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                            <div className={`benefit-icon w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white text-2xl mb-6 shadow-lg ${ben.gradient} ${ben.shadow}`}>
                                <i className={`fas ${ben.icon} ${ben.iColor || ''}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{ben.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: ben.desc }}></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
