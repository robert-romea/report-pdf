import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="p-8 max-w-7xl mx-auto text-white">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h2>
                    <p className="text-zinc-400">Bine ai venit înapoi! Iată o privire de ansamblu asupra rapoartelor tale.</p>
                </div>
                <Link href="/dashboard/new">
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                        <span className="flex items-center gap-2">Raport Nou <ArrowRight className="w-4 h-4" /></span>
                    </Button>
                </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card className="p-6 bg-[#18181b] border-[#27272a] text-white">
                    <div className="flex items-center justify-between space-y-0 pb-2">
                        <p className="text-sm font-medium text-zinc-400">Total Rapoarte</p>
                        <FileText className="h-4 w-4 text-violet-500" />
                    </div>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-zinc-500 mt-1">+2 săptămâna asta</p>
                </Card>
                <Card className="p-6 bg-[#18181b] border-[#27272a] text-white">
                    <div className="flex items-center justify-between space-y-0 pb-2">
                        <p className="text-sm font-medium text-zinc-400">Ore Salvate</p>
                        <Clock className="h-4 w-4 text-orange-500" />
                    </div>
                    <div className="text-2xl font-bold">48h</div>
                    <p className="text-xs text-zinc-500 mt-1">Estimare bazată pe activitate</p>
                </Card>
            </div>

            <h3 className="text-xl font-bold mb-4">Rapoarte Recente</h3>
            <Card className="bg-[#18181b] border-[#27272a] p-12 text-center flex flex-col items-center justify-center border-dashed">
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-4 text-zinc-500">
                    <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Nu ai generat încă niciun raport recent</h3>
                <p className="text-zinc-400 max-w-sm mb-6">Începe prin a încărca primul tău set de date. Sistemul va genera automat o analiză detaliată.</p>
                <Link href="/dashboard/new">
                    <Button className="bg-white text-black hover:bg-zinc-200">
                        Creează Primul Raport
                    </Button>
                </Link>
            </Card>
        </div>
    );
}
