"use client";

import { useState } from "react";
import { Upload, FileSpreadsheet, X, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NewReportPage() {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isAnalyzed, setIsAnalyzed] = useState(false);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        // Basic validation
        if (file.type === "text/csv" || file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.name.endsWith('.csv') || file.name.endsWith('.xlsx')) {
            setFile(file);
            // Simulate upload/analysis reset
            setIsAnalyzed(false);
        } else {
            alert("Te rugăm să încarci un fișier CSV sau Excel.");
        }
    };

    const removeFile = () => {
        setFile(null);
        setIsAnalyzed(false);
    }

    const handleSimulateAnalysis = async () => {
        if (!file) return;
        setIsUploading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsUploading(false);
        setIsAnalyzed(true);
    }

    return (
        <div className="p-8 max-w-4xl mx-auto text-white">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Raport Nou</h2>
                <p className="text-zinc-400">Încarcă datele tale pentru a genera un raport detaliat.</p>
            </div>

            <div className="grid gap-8">
                {/* Upload Area */}
                {!isAnalyzed ? (
                    <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-8">
                        <div
                            className={cn(
                                "relative border-2 border-dashed rounded-lg p-12 text-center transition-colors duration-200 ease-in-out flex flex-col items-center justify-center gap-4 cursor-pointer",
                                dragActive ? "border-violet-500 bg-violet-500/5" : "border-[#27272a] hover:border-violet-500/50 hover:bg-[#27272a]/50",
                                file && "border-green-500/50 bg-green-500/5"
                            )}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            onClick={() => document.getElementById('file-upload')?.click()}
                        >
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept=".csv, .xlsx"
                                onChange={handleChange}
                                disabled={!!file}
                            />

                            {file ? (
                                <>
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                                        <FileSpreadsheet className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{file.name}</h3>
                                        <p className="text-sm text-zinc-400">{(file.size / 1024).toFixed(2)} KB</p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="absolute top-4 right-4 text-zinc-400 hover:text-red-400"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFile();
                                        }}
                                    >
                                        <X className="w-4 h-4" />
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-500 mb-2">
                                        <Upload className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Trage fișierul aici sau click pentru upload</h3>
                                        <p className="text-sm text-zinc-400 mt-1">Suportă fișiere CSV sau Excel (.xlsx)</p>
                                    </div>
                                </>
                            )}
                        </div>

                        {file && (
                            <div className="mt-6 flex justify-end">
                                <Button
                                    className="bg-violet-600 hover:bg-violet-700 text-white w-full sm:w-auto"
                                    onClick={handleSimulateAnalysis}
                                    disabled={isUploading}
                                >
                                    {isUploading ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Se Analizează...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">Generează Raport <ArrowRight className="w-4 h-4" /></span>
                                    )}
                                </Button>
                            </div>
                        )}
                    </div>
                ) : (
                    // Success / Preview State
                    <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Date Analizate cu Succes!</h3>
                        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                            Sistemul a procesat fișierul <strong>{file?.name}</strong> și a generat insight-urile preliminare.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="outline" className="border-[#27272a] text-zinc-300" onClick={() => { setFile(null); setIsAnalyzed(false) }}>
                                Încarcă alt fișier
                            </Button>
                            <Link href="/dashboard/reports/demo-report-123">
                                <Button className="bg-violet-600 hover:bg-violet-700 text-white w-full sm:w-auto">
                                    Vezi Raportul Complet
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
