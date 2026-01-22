"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, MoreVertical, Search, Filter, Download } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const reports = [
    {
        id: "demo-report-123",
        name: "Raport Vânzări Q3 2025",
        date: "18 Ian 2026",
        size: "2.4 MB",
        status: "Finalizat",
        type: "Vânzări"
    },
    {
        id: "demo-report-124",
        name: "Analiză Competitori Ianuarie",
        date: "15 Ian 2026",
        size: "1.8 MB",
        status: "Finalizat",
        type: "Marketing"
    },
    {
        id: "demo-report-125",
        name: "Campanie Facebook Ads Black Friday",
        date: "10 Dec 2025",
        size: "5.2 MB",
        status: "Draft",
        type: "Marketing"
    }
];

export default function ReportsPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto text-white space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Rapoartele Mele</h2>
                    <p className="text-zinc-400 mt-1">Gestionează și descarcă rapoartele generate.</p>
                </div>
                <Link href="/dashboard/new">
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                        Raport Nou
                    </Button>
                </Link>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    <Input
                        placeholder="Caută rapoarte..."
                        className="pl-9 bg-[#18181b] border-[#27272a] text-white placeholder:text-[#a1a1aa]"
                    />
                </div>
                <Button variant="outline" className="border-[#27272a] text-zinc-300 gap-2">
                    <Filter className="w-4 h-4" /> Filtrează
                </Button>
            </div>

            {/* Reports List */}
            <div className="grid gap-4">
                {reports.map((report) => (
                    <Link key={report.id} href={`/dashboard/reports/${report.id}`}>
                        <Card className="p-4 bg-[#18181b] border-[#27272a] hover:bg-[#27272a]/50 transition-colors flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-violet-500/10 rounded-lg text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                                    <FileText className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">{report.name}</h3>
                                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                                        <span>{report.date}</span>
                                        <span>•</span>
                                        <span>{report.size}</span>
                                        <span>•</span>
                                        <span className="bg-zinc-800 px-1.5 rounded text-xs">{report.type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${report.status === 'Finalizat' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                                    }`}>
                                    {report.status}
                                </span>
                                <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white">
                                    <Download className="w-4 h-4" />
                                </Button>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
