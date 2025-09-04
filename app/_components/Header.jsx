import Link from "next/link";
import { Plus } from"lucide-react";

export default function Header(){
    return (
        <header className="bg-white h-16 flex items-center px-2 sticky top-0 shadow-md">
            <div className="flex justify-between items-center grow">
                <Link href={"/"} className="font-semibold text-black text-2xl select-none">WaledEvents</Link>
                <nav className="flex gap-x-2">
                    <Link href={"/"} className="rounded-lg border border-black px-2 py-1 text-black hover:bg-slate-200">Home</Link>
                    <Link href={"/create-event"} className="rounded-lg px-2 py-1 bg-slate-950 hover:bg-slate-600 flex items-center gap-x-2 text-white">Create Event <Plus size={16} strokeWidth={4}/></Link>
                    <Link href={"/my-events"} className="rounded-lg px-2 py-1 bg-indigo-600 hover:bg-indigo-500 text-white">My Events</Link>
                </nav>
            </div>
        </header>
    );
}