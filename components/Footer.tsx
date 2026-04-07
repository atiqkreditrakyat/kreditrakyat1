import Link from "next/link";
interface FooterProps {
    description?: string;
    email?: string;
    phone?: string;
    address?: React.ReactNode;
    disclaimer?: React.ReactNode;
    copyrightText?: string;
}

export default function Footer({ 
    description = "Platform pembiayaan pilihan penjawat awam Malaysia. Komited untuk memberikan perkhidmatan kewangan yang selamat, patuh syariah dan telus.",
    email = "infokreditrakyat@gmail.com",
    phone = "+60 11-1334 3150",
    address = "Lot 3A-01A, Level 3A, Glo Damansara Shopping Mall, 699, Jln Damansara, Taman Tun Dr Ismail, 60000 Kuala Lumpur",
    disclaimer = "Rakyat Fintech Sdn. Bhd. (202501018111 (1619525-V)) merupakan pengurus rasmi untuk pemasaran jenama Kredit Rakyat. Terma Pembiayaan: Tempoh bayaran balik dari 1 tahun (12 bulan) hingga 10 tahun (120 bulan). Kadar tetap bermula dari 3.5% dengan Kadar Peratusan Tahunan (APR) maksimum: 4.99% (tertakluk kepada kelulusan institusi kewangan). Contoh Pengiraan Representatif: Pembiayaan RM10,000 selama 12 bulan dengan kadar tetap 3.5% setahun. Jumlah bayaran balik: RM10,350. Bayaran bulanan: RM862.50. Polisi Telus: Rakyat Fintech Sdn. Bhd. adalah rakan pemasaran rasmi bagi koperasi dan institusi kewangan berlesen. Kami secara tegas TIDAK mengenakan sebarang wang pendahuluan (no upfront fees) atau caj pemprosesan sebelum pembiayaan diluluskan.",
    copyrightText = "© 2026 Rakyat Fintech Sdn. Bhd. (202501018111 (1619525-V)). Hak Cipta Terpelihara."
}: FooterProps) {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src={process.env.NODE_ENV === 'production' ? '/kreditrakyat1/logo.png' : '/logo.png'} alt="Kredit Rakyat" className="h-10 w-auto object-contain" />
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">Platform pembiayaan pilihan penjawat awam Malaysia. Komited untuk memberikan perkhidmatan kewangan yang selamat, patuh syariah dan telus.</p>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/profile.php?id=61576572101049" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-md transition-all border border-gray-200"><i className="fab fa-facebook-f text-sm"></i></a>
                            <a href="https://www.instagram.com/kreditrakyat.my/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-md transition-all border border-gray-200"><i className="fab fa-instagram text-sm"></i></a>
                            <a href="https://wa.me/601113343150?text=Hi,%20saya%20berminat%20untuk%20mengetahui%20maklumat%20berkaitan%20pinjaman%20koperasi." target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:shadow-md transition-all"><i className="fab fa-whatsapp text-sm"></i></a>
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
                            <li className="flex items-center gap-3"><i className="fas fa-envelope text-primary w-4"></i> {email}</li>
                            <li className="flex items-center gap-3"><i className="fas fa-phone text-primary w-4"></i> {phone}</li>
                            <li className="flex items-start gap-3"><i className="fas fa-map-marker-alt text-primary w-4 mt-1"></i> <span className="leading-snug">{address}</span></li>
                        </ul>
                    </div>
                </div>

                 <div className="border-t border-gray-200 mt-8 pt-8 mb-8 text-xs text-gray-500 leading-relaxed text-justify">
                    <p>
                        {disclaimer}
                    </p>
                </div>

                 <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">{copyrightText}</p>
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
