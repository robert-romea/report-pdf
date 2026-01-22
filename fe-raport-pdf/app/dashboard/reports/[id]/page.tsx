"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Share2, ArrowLeft, TrendingUp, Users, DollarSign, Activity, Check, Loader2 } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function ReportViewPage() {
    const [isSharing, setIsSharing] = useState(false);
    const [isAskingAi, setIsAskingAi] = useState(false);

    const handleShare = async () => {
        setIsSharing(true);
        await navigator.clipboard.writeText(window.location.href);
        setTimeout(() => setIsSharing(false), 2000);
    };

    const handleDownload = () => {
        window.print();
    };

    const handleAskAi = async () => {
        setIsAskingAi(true);
        // Simulate AI thinking
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsAskingAi(false);
        alert("AI: Aceasta este o funcționalitate demo. În varianta finală, se va deschide o fereastră de chat :)");
    };

    return (
        <div className="p-8 max-w-7xl mx-auto text-white space-y-8 print:p-0 print:max-w-none print:text-black">
            {/* Header with Navigation and Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 print:hidden">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 bg-[#27272a] rounded-lg hover:bg-[#3f3f46] transition-colors">
                        <ArrowLeft className="w-5 h-5 text-zinc-400" />
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold">Raport Vânzări Q3 2025</h2>
                        <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1">
                            <span className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-xs font-medium">Finalizat</span>
                            <span>•</span>
                            <span>Generat acum 2 minute</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        className="border-[#27272a] text-zinc-300 gap-2 min-w-[100px]"
                        onClick={handleShare}
                    >
                        {isSharing ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
                        {isSharing ? "Copiat!" : "Share"}
                    </Button>
                    <Button
                        className="bg-violet-600 hover:bg-violet-700 text-white gap-2"
                        onClick={handleDownload}
                    >
                        <Download className="w-4 h-4" /> Descarcă PDF
                    </Button>
                </div>
            </div>

            {/* Print-only Header */}
            <div className="hidden print:block mb-8">
                <h1 className="text-3xl font-bold mb-2">Raport Vânzări Q3 2025</h1>
                <p className="text-gray-500">Generat automat de ReportSwift la {new Date().toLocaleDateString('ro-RO')}</p>
            </div>

            {/* Main Analysis Content */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Key Metrics - Left Column */}
                <div className="md:col-span-2 space-y-6">
                    {/* Big Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Card className="p-5 bg-[#18181b] border-[#27272a] text-white print:bg-white print:border-gray-200 print:text-black">
                            <p className="text-sm text-zinc-400 mb-1 print:text-gray-500">Venit Total</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-2xl font-bold">€124,500</h3>
                                <span className="text-xs text-green-500 flex items-center">+12% <TrendingUp className="w-3 h-3 ml-0.5" /></span>
                            </div>
                        </Card>
                        <Card className="p-5 bg-[#18181b] border-[#27272a] text-white print:bg-white print:border-gray-200 print:text-black">
                            <p className="text-sm text-zinc-400 mb-1 print:text-gray-500">Clienți Noi</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-2xl font-bold">342</h3>
                                <span className="text-xs text-green-500 flex items-center">+5% <TrendingUp className="w-3 h-3 ml-0.5" /></span>
                            </div>
                        </Card>
                        <Card className="p-5 bg-[#18181b] border-[#27272a] text-white print:bg-white print:border-gray-200 print:text-black">
                            <p className="text-sm text-zinc-400 mb-1 print:text-gray-500">Cost Mediu / Lead</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-2xl font-bold">€12.5</h3>
                                <span className="text-xs text-red-500 flex items-center">-2% <TrendingUp className="w-3 h-3 ml-0.5 rotate-180" /></span>
                            </div>
                        </Card>
                    </div>

                    {/* Graph Placeholder */}
                    <Card className="bg-[#18181b] border-[#27272a] p-6 h-[400px] flex flex-col justify-center items-center text-center print:bg-white print:border-gray-200 print:break-inside-avoid">
                        <div className="w-16 h-16 bg-[#27272a] rounded-full flex items-center justify-center mb-4 print:bg-gray-100">
                            <Activity className="w-8 h-8 text-zinc-500" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2 print:text-black">Vizualizare Date</h3>
                        <p className="text-zinc-400 max-w-sm print:text-gray-500">
                            Aici vor apărea graficele generate automat din datele tale (e.g. evoluție vânzări, distribuție demografică).
                        </p>
                    </Card>

                    {/* AI Insights */}
                    <Card className="bg-[#18181b] border-[#27272a] p-6 print:bg-white print:border-gray-200 print:break-inside-avoid">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 print:text-black">
                            <span className="w-2 h-6 bg-violet-500 rounded-full" />
                            Analiză AI Automată
                        </h3>
                        <div className="space-y-4 text-zinc-300 leading-relaxed text-sm print:text-gray-700">
                            <p>
                                <strong className="text-white block mb-1 print:text-black">Tendințe Principale:</strong>
                                Se observă o creștere constantă a veniturilor în a doua jumătate a trimestrului, corelată direct cu campania de marketing pe Facebook. Costul de achiziție a scăzut ușor, indicând o optimizare a audiențelor.
                            </p>
                            <p className="p-4 bg-violet-500/10 border border-violet-500/20 rounded-lg text-violet-200 print:bg-gray-50 print:border-gray-200 print:text-black">
                                <strong className="block mb-1 text-violet-400 print:text-violet-600">Recomandare:</strong>
                                Ar fi indicat să realocați o parte din bugetul de Google Ads către Facebook Ads, având în vedere ROI-ul mai ridicat (3.4 vs 2.1) din această perioadă.
                            </p>
                        </div>
                    </Card>
                </div>

                {/* Sidebar / Metadata - Right Column */}
                <div className="space-y-6 print:hidden">
                    <Card className="bg-[#18181b] border-[#27272a] p-6">
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-zinc-500">Detalii Fișier</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between">
                                <span className="text-zinc-400">Nume fișier</span>
                                <span className="text-white">sales_q3.csv</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-zinc-400">Dimensiune</span>
                                <span className="text-white">2.4 MB</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-zinc-400">Rânduri procesate</span>
                                <span className="text-white">12,450</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-zinc-400">Data Upload</span>
                                <span className="text-white">18 Ian 2026</span>
                            </li>
                        </ul>
                    </Card>

                    <Card className="bg-gradient-to-br from-violet-900/50 to-violet-900/20 border-violet-500/30 p-6">
                        <h3 className="font-semibold mb-2 text-white">Vrei mai multe detalii?</h3>
                        <p className="text-xs text-violet-200 mb-4">
                            Poți cere AI-ului să genereze secțiuni suplimentare sau să explice anumite anomalii din date.
                        </p>
                        <Button
                            className="w-full bg-white text-violet-900 hover:bg-zinc-100"
                            onClick={handleAskAi}
                            disabled={isAskingAi}
                        >
                            {isAskingAi ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin" /> Procesare...
                                </span>
                            ) : (
                                "Întreabă Asistentul AI"
                            )}
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
