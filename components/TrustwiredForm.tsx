"use client";

import React from "react";
// import Script from "next/script"; // For when script is provided

export default function TrustwiredForm() {
    return (
        <div className="w-full min-h-[400px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <i className="fas fa-form text-2xl"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Menunggu Kod Borang Trustwired</h4>
            <p className="text-gray-500 text-sm max-w-[280px]">
                Sila masukkan kod embed Trustwired di sini untuk mengaktifkan borang permohonan.
            </p>
            
            {/* 
                TRUSTWIRED EMBED PLACEHOLDER:
                Once code is provided, replace this entire div with the script or iframe snippets.
            */}
            
            <div className="mt-6 w-full max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-primary animate-pulse"></div>
            </div>
        </div>
    );
}
