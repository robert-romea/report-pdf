import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
    const { userId } = await auth();

    if (userId) {
        redirect("/dashboard");
    }

    return (
        <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center text-white p-4">
            <div className="w-full max-w-md space-y-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-tr from-violet-500 to-orange-500 rounded-xl mb-4 flex items-center justify-center font-bold text-xl">R</div>
                    <h1 className="text-3xl font-bold tracking-tighter">ReportSwift App</h1>
                    <p className="text-zinc-400 mt-2">Portalul de administrare a rapoartelor.</p>
                </div>

                <div className="space-y-4 pt-4">
                    <a href="/sign-in" className="block w-full">
                        <button className="w-full bg-white text-black hover:bg-zinc-200 font-medium h-10 px-4 py-2 rounded-md transition-colors">
                            Autentificare
                        </button>
                    </a>

                    <a href="/sign-up" className="block w-full">
                        <button className="w-full bg-[#27272a] text-white hover:bg-[#3f3f46] font-medium h-10 px-4 py-2 rounded-md transition-colors border border-zinc-800">
                            Creează Cont
                        </button>
                    </a>
                </div>

                <div className="pt-8">
                    <a href="http://localhost:3000" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                        ← Înanpoi la Site-ul Principal
                    </a>
                </div>
            </div>
        </div>
    );
}
