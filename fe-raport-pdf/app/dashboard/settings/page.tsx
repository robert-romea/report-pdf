"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { User, Bell, Shield, Wallet } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="p-8 max-w-4xl mx-auto text-white space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Setări</h2>
                <p className="text-zinc-400 mt-1">Administrează contul și preferințele.</p>
            </div>

            <div className="grid gap-6">
                <Card className="p-6 bg-[#18181b] border-[#27272a]">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Profil</h3>
                            <p className="text-sm text-zinc-400">Informațiile tale personale</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <Label>Nume Complet</Label>
                            <Input defaultValue="Robert R" className="bg-[#09090b] border-[#27272a]" />
                        </div>
                        <div className="grid gap-2">
                            <Label>Email</Label>
                            <Input defaultValue="robert@example.com" disabled className="bg-[#09090b] border-[#27272a] opacity-50" />
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-2">Salvează Modificările</Button>
                    </div>
                </Card>

                <Card className="p-6 bg-[#18181b] border-[#27272a] opacity-75">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                            <Wallet className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Abonament (În curând)</h3>
                            <p className="text-sm text-zinc-400">Planul tău activ</p>
                        </div>
                    </div>
                    <p className="text-zinc-500 text-sm">Această secțiune va fi disponibilă după lansare.</p>
                </Card>
            </div>
        </div>
    );
}
