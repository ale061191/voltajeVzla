'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import Link from 'next/link';
import { Zap, Wifi, Battery } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 center w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[50%] -translate-x-[50%] w-[600px] h-[600px] rounded-full bg-[#00E676] opacity-10 blur-[120px]" />
                <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500 opacity-5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00E676] text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]"></span>
                        </span>
                        La Revolución de la Energía Móvil
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Mantente <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00C853] text-glow">Cargado</span>,<br />
                        Mantente <span className="text-white">Conectado.</span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                        La red de alquiler de Power Banks más avanzada de Venezuela.
                        Encuentra una estación, escanea y mantente conectado con WiFi de alta velocidad.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/registro">
                            <Button size="lg" className="group">
                                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                Obtener Cotización
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg">
                            Ver Demostración
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-gray-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <Battery className="w-5 h-5 text-[#00E676]" />
                            <span>Carga Rápida</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wifi className="w-5 h-5 text-[#00E676]" />
                            <span>WiFi Seguro</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-[#00E676]" />
                            <span>Gestión App</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 glass rounded-3xl p-4 md:p-8 aspect-square flex items-center justify-center border-t border-white/10 shadow-2xl shadow-[#00E676]/10">
                        {/* Placeholder for Product Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />

                        {/* Mockup Element - Replace with actual image later */}
                        <div className="relative w-full h-3/4 bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                            <div className="text-center p-8">
                                <p className="text-gray-500 text-sm mb-2">Imagen del Producto</p>
                                <div className="w-32 h-16 bg-[#00E676]/20 mx-auto rounded-lg blur-xl" />
                                <p className="text-7xl mt-[-40px]">⚡️</p>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 right-10 glass px-4 py-2 rounded-xl flex items-center gap-3"
                        >
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-sm font-medium">Estación Activa</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-10 glass px-4 py-2 rounded-xl flex items-center gap-3"
                        >
                            <Wifi className="w-4 h-4 text-[#00E676]" />
                            <span className="text-sm font-medium">150 Mbps</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
