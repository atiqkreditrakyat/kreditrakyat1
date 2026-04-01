"use client";

import React from "react";
import Script from "next/script";

export default function TrustwiredForm() {
    return (
        <div className="w-full relative min-h-[600px] bg-white">
            {/* Trustwired Embed Script */}
            <Script 
                src="https://hq.kreditrakyat.com/js/form_embed.js" 
                strategy="afterInteractive" 
            />
            
            {/* Trustwired Iframe Embed */}
            <iframe
                src="https://hq.kreditrakyat.com/widget/form/38dWnERshY3DhB5bJIcB?notrack=true"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    minHeight: '800px'
                }}
                id="inline-38dWnERshY3DhB5bJIcB"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-defer-user-activate="false"
                data-redirect-to-view="false"
                data-fixed-footer="false"
                data-toggle-type="false"
                data-toggle-status="none"
                data-contact-context="false"
                title="Kredit Rakyat Form"
            />
        </div>
    );
}
