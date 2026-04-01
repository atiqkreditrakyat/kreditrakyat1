import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={process.env.NODE_ENV === 'production' ? '/kreditrakyat1/logo.png' : '/logo.png'} alt="Kredit Rakyat" className="h-10 w-auto object-contain" />
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">Platform pembiayaan pilihan penjawat awam Malaysia. Komited untuk memberikan perkhidmatan kewangan yang selamat, patuh syariah dan telus.</p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-md transition-all border border-gray-200"><i className="fab fa-facebook-f text-sm"></i></a>
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-md transition-all border border-gray-200"><i className="fab fa-instagram text-sm"></i></a>
                            <a href="#" className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:shadow-md transition-all"><i className="fab fa-whatsapp text-sm"></i></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Menu</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
                            <li><a href="#produk" className="hover:text-primary transition-colors">Produk</a></li>
                            <li><a href="#manfaat" className="hover:text-primary transition-colors">Kelebihan</a></li>
                            <li><a href="#testimoni" className="hover:text-primary transition-colors">Testimoni</a></li>
                            <li><a href="#faqs" className="hover:text-primary transition-colors">Soalan Lazim</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Perkhidmatan</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-primary transition-colors">Program Referral</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Semak Status</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Pembiayaan</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Hubungi</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex items-center gap-3"><i className="fas fa-envelope text-primary w-4"></i> infokreditrakyat@gmail.com</li>
                            <li className="flex items-center gap-3"><i className="fas fa-phone text-primary w-4"></i> +60 11-1334 3150</li>
                            <li className="flex items-start gap-3"><i className="fas fa-map-marker-alt text-primary w-4 mt-1"></i> <span className="leading-snug">Lot 3A-01A, Level 3A, Glo Damansara Shopping Mall,<br/>699, Jln Damansara, Taman Tun Dr Ismail,<br/>60000 Kuala Lumpur</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8 mb-8 text-xs text-gray-500 leading-relaxed text-justify">
                    <p>
                        <strong>Rakyat Fintech Sdn. Bhd. (202501018111 (1619525-V))</strong> merupakan pengurus rasmi untuk pemasaran jenama Kredit Rakyat. 
                        <strong> Terma Pembiayaan:</strong> Tempoh bayaran balik dari <strong>1 tahun (12 bulan) hingga 10 tahun (120 bulan)</strong>. Kadar tetap bermula dari <strong>3.5%</strong> dengan Kadar Peratusan Tahunan (APR) maksimum: <strong>4.99%</strong> (tertakluk kepada kelulusan institusi kewangan). 
                        <strong> Contoh Pengiraan Representatif:</strong> Pembiayaan RM10,000 selama 12 bulan dengan kadar tetap 3.5% setahun. Jumlah bayaran balik: RM10,350. Bayaran bulanan: RM862.50.
                        <strong> Polisi Telus:</strong> Rakyat Fintech Sdn. Bhd. adalah rakan pemasaran rasmi bagi koperasi dan institusi kewangan berlesen. Kami secara tegas <strong>TIDAK mengenakan sebarang wang pendahuluan</strong> (no upfront fees) atau caj pemprosesan sebelum pembiayaan diluluskan.
                    </p>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">&copy; 2026 Rakyat Fintech Sdn. Bhd. (202501018111 (1619525-V)). Hak Cipta Terpelihara.</p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <Link href="/dasar-privasi" className="hover:text-primary transition-colors">Dasar Privasi</Link>
                        <Link href="/terma-syarat" className="hover:text-primary transition-colors">Terma & Syarat</Link>
                        <span className="flex items-center gap-2"><i className="fas fa-shield-alt text-primary"></i> Platform Patuh Syariah</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
