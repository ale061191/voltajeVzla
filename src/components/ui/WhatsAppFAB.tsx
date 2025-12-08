'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFAB = () => {
    const phoneNumber = "584126851090";
    const message = encodeURIComponent("¡Hola! 👋 Quiero más información sobre las estaciones de Voltaje.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
            aria-label="Contactar por WhatsApp"
        >
            {/* Pulsing effect */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-0 group-hover:animate-ping duration-1000"></span>

            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex items-center justify-center w-14 h-14 bg-[#00E676] rounded-full shadow-[0_0_20px_rgba(0,230,118,0.5)] border border-[#00E676]"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                <MessageCircle className="w-8 h-8 text-black fill-current" />
            </motion.div>

            {/* Tooltip */}
            <span className="absolute right-16 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                ¡Chatea con nosotros!
            </span>
        </a>
    );
};
