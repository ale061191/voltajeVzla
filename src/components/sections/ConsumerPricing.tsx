'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/Button";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Pago por Uso",
        price: "$1.00",
        period: "/ hora",
        description: "Perfecto para recargas rápidas ocasionales.",
        features: [
            "Acceso a Batería Carga Rápida",
            "WiFi de 100Mbps incluido",
            "Sin cuotas mensuales",
            "Devolución en cualquier estación"
        ],
        highlight: false
    },
    {
        name: "Voltaje Plus",
        price: "$19.99",
        period: "/ mes",
        description: "Carga ilimitada para usuarios frecuentes.",
        features: [
            "Uso ilimitado de baterías",
            "WiFi de 1Gbps Prioritario",
            "Reservar baterías con antelación",
            "Soporte Premium 24/7",
            "Acceso a salas VIP en partners"
        ],
        highlight: true
    },
    {
        name: "Empresas",
        price: "Custom",
        period: "",
        description: "Instala una estación en tu negocio.",
        features: [
            "Estación de 12 bahías",
            "Panel de control de analíticas",
            "Marca personalizada en pantalla",
            "Mantenimiento incluido",
            "Ingresos compartidos"
        ],
        highlight: false
    }
];

export const ConsumerPricing = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Planes Flexibles para <br />
                        <span className="text-[#00E676] text-glow">Cada Necesidad</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ya sea que necesites una carga rápida o quieras instalar una estación en tu local, tenemos una opción para ti.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass p-8 rounded-3xl relative flex flex-col ${plan.highlight ? 'border-[#00E676] shadow-[0_0_30px_rgba(0,230,118,0.1)]' : 'border-white/10'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00E676] text-black px-4 py-1 rounded-full text-sm font-bold">
                                    Más Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-400 text-sm">{plan.period}</span>
                                </div>
                                <p className="text-gray-400 text-sm mt-3">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-[#00E676] shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? 'primary' : 'outline'}
                                className="w-full"
                            >
                                {plan.name === 'Empresas' ? 'Contactar Ventas' : 'Comenzar Ahora'}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
