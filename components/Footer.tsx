export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime to-limeDark flex items-center justify-center text-gray-900 font-bold">
                                <i className="fas fa-university"></i>
                            </div>
                            <span className="text-xl font-display font-bold text-gray-900">KREDIT RAKYAT</span>
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
                            <li><a href="#faedah" className="hover:text-primary transition-colors">Faedah</a></li>
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
                            <li><a href="#" className="hover:text-primary transition-colors">Pinjaman</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Hubungi</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-center gap-2"><i className="fas fa-envelope text-primary w-4"></i> info@kreditrakyat.com</li>
                            <li className="flex items-center gap-2"><i className="fas fa-phone text-primary w-4"></i> 03-XXXX XXXX</li>
                            <li className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-primary w-4"></i> Kuala Lumpur, Malaysia</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">&copy; 2026 Kredit Rakyat. Hak Cipta Terpelihara.</p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <a href="#" className="hover:text-primary">Dasar Privasi</a>
                        <a href="#" className="hover:text-primary">Terma & Syarat</a>
                        <span className="flex items-center gap-1"><i className="fas fa-shield-alt text-primary"></i> Lesen Kementerian Kewangan</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
