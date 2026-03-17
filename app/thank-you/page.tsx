import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Terima Kasih | Kredit Rakyat",
    description: "Permohonan anda telah diterima.",
};

export default function ThankYou() {
    return (
        <div className="font-sans text-gray-800 bg-surface min-h-screen flex items-center justify-center p-4">
            <div className="noise-overlay"></div>

            {/* GTM / Tracking Placeholders */}
            {/* <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
              'send_to': 'AW-XXXXXXXXXXX/YYYYYYYYYYYYYYYYYYY',
          });
        `}
      </Script> */}

            <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 text-center relative z-10">
                <div className="w-20 h-20 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-4xl text-limeDark"></i>
                </div>

                <h1 className="font-display text-3xl font-bold text-gray-900 mb-3">Terima Kasih!</h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Permohonan anda telah berjaya diterima. Konsultan kami akan menghubungi anda dalam masa terdekat untuk langkah seterusnya.
                </p>

                <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-bold w-full shadow-lg shadow-primary/30">
                    <i className="fas fa-home"></i>
                    Kembali ke Laman Utama
                </Link>
            </div>
        </div>
    );
}
