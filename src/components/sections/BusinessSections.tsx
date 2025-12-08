'use client';

import React from 'react';
import { Button } from "@/components/ui/Button";
import { motion } from 'framer-motion';
import { Users, Clock, Zap, TrendingUp, Building, Smartphone, Coffee, ShoppingBag } from 'lucide-react';

export const BusinessSections = () => {
    return (
        <>
            {/* Hero */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#00E676] opacity-5 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#00E676]/10 border border-[#00E676]/20 text-[#00E676] text-sm font-bold">
                            Soluciones para Negocios
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Atrae y Retiene <br />
                            <span className="text-[#00E676] text-glow">Más Clientes</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-lg">
                            Ofrece a tus clientes la comodidad de cargar sus dispositivos y mejora su experiencia en tu negocio.
                        </p>
                        <Button size="lg" className="shadow-[0_0_30px_rgba(0,230,118,0.3)]">
                            Solicitar Información
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/10 relative">
                            {/* Placeholder for Station Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-48 h-64 bg-[#1a1a1a] rounded-xl border border-white/5 mx-auto mb-4 relative shadow-2xl">
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-20 bg-black rounded-lg border border-white/10 flex items-center justify-center">
                                            <span className="text-[#00E676] text-xs font-mono">VOLTIFI</span>
                                        </div>
                                        <div className="absolute bottom-0 w-full h-2 bg-[#00E676] shadow-[0_0_20px_#00E676]" />
                                    </div>
                                    <p className="text-gray-500 font-medium tracking-widest text-sm">STATION V2.0</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Grid */}
            <section className="py-20 bg-black/50">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Qué Elegir Nuestras Estaciones</h2>
                        <p className="text-gray-400 max-w-2xl">Descubre los beneficios directos que nuestras soluciones de carga aportan a tu establecimiento.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Users, title: "Aumenta el Tráfico", desc: "Atrae a nuevos clientes que buscan un lugar para cargar." },
                            { icon: Clock, title: "Más Tiempo de Permanencia", desc: "Los clientes se quedan más tiempo, aumentando las ventas." },
                            { icon: TrendingUp, title: "Mejora la Imagen", desc: "Posiciona tu negocio como moderno e innovador." },
                            { icon: Zap, title: "Genera Ingresos", desc: "Ofrece un servicio premium y monetiza el uso." }
                        ].map((item, i) => (
                            <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-[#00E676]/30 transition-colors group">
                                <div className="w-10 h-10 rounded-lg bg-[#00E676]/10 flex items-center justify-center text-[#00E676] mb-4 group-hover:bg-[#00E676] group-hover:text-black transition-all">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ideal For */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">Ideal Para Tu Negocio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Coffee, title: "Cafeterías", img: "/images/cafe_voltifi.png", isImage: true },
                            { icon: ShoppingBag, title: "Retail", img: "/images/retail_voltifi.png", isImage: true },
                            { icon: Building, title: "Hoteles", img: "/images/hotel_voltifi.png", isImage: true },
                            { icon: Smartphone, title: "Eventos", img: "/images/event_voltifi.png", isImage: true }
                        ].map((sector, i) => (
                            <div key={i} className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#00E676]/50 transition-colors">
                                {sector.isImage ? (
                                    <img src={sector.img} alt={sector.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                ) : (
                                    <div className={`absolute inset-0 ${sector.img} opacity-40 group-hover:opacity-60 transition-opacity`} />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <sector.icon className="w-8 h-8 text-[#00E676] mb-3" />
                                    <h3 className="text-xl font-bold">{sector.title}</h3>
                                    <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                                        Mejora la experiencia de tus visitantes con carga segura.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form CTA */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Ponte en Contacto</h2>
                                <p className="text-gray-400 mb-8">
                                    ¿Listo para llevar tu negocio al siguiente nivel? Completa el formulario y nuestro equipo te contactará.
                                </p>
                                <div className="space-y-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">✉️</div>
                                        info@voltajevzla.com
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">📞</div>
                                        +58 412 685 1090
                                    </div>
                                </div>
                            </div>

                            <form className="space-y-4">
                                <input type="text" placeholder="Nombre" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:border-[#00E676] focus:outline-none" />
                                <input type="text" placeholder="Nombre del Negocio" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:border-[#00E676] focus:outline-none" />
                                <input type="email" placeholder="Email" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:border-[#00E676] focus:outline-none" />
                                <textarea rows={3} placeholder="Mensaje" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:border-[#00E676] focus:outline-none" />
                                <Button className="w-full">Enviar Solicitud</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
