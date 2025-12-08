'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Scan, Zap, Wifi } from 'lucide-react';

const steps = [
    {
        id: 1,
        icon: Download,
        title: "Descarga la App",
        description: "Disponible en iOS y Android. Crea tu cuenta en segundos y vincula tu método de pago preferido."
    },
    {
        id: 2,
        icon: Scan,
        title: "Escanea el QR",
        description: "Encuentra la estación Voltaje más cercana y escanea el código QR ubicado en el frente de la estación."
    },
    {
        id: 3,
        icon: Zap,
        title: "Toma tu Powerbank",
        description: "La estación liberará automáticamente una batería cargada. Tómala y conéctala a tu dispositivo."
    },
    {
        id: 4,
        icon: Wifi,
        title: "Disfruta Conectado",
        description: "Recibe acceso instantáneo a nuestra red WiFi y mantente cargado donde quiera que vayas."
    }
];

export const ConsumerHowItWorks = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Tan Fácil como <br />
                        <span className="text-[#00E676] text-glow">1, 2, 3... Conectado</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop only) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E676]/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group text-center"
                            >
                                <div className="w-20 h-20 mx-auto bg-[#050505] border-2 border-[#00E676] rounded-full flex items-center justify-center mb-8 relative z-10 shadow-[0_0_20px_rgba(0,230,118,0.2)] group-hover:bg-[#00E676] group-hover:text-black transition-all duration-300">
                                    <step.icon className="w-8 h-8" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center border border-black shadow-lg">
                                        {step.id}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
