"use client";

import useEventStore from "_stores/eventStore";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";


export default function EventSection(){

    const { events, search, category, setEvents, setLoading, loading } = useEventStore();
    const filtered = events.filter((e) => {

        const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "all" || e.category === category;
        return matchesSearch && matchesCategory;

    });

    useEffect(() => {
        async function loadEvents() {
            const res = await fetch(`api/events`);
            const data = await res.json();
            setLoading(false);
            setEvents(data);
        }
        loadEvents();
    }, []);

    return (
        <section className="grid grid-cols-3 mt-5 gap-2">
        {
            loading ? 
                [...Array(3)].map((_, i) => (
                    <div key={i} className="border shadow-sm p-5 rounded-lg animate-pulse h-[210px]">
                        <div className="h-6 bg-slate-200 rounded mb-4"></div>
                        <div className="h-4 bg-slate-200 rounded mb-2"></div>
                        <div className="h-4 bg-slate-200 rounded mb-2"></div>
                        <div className="h-4 bg-slate-200 rounded"></div>
                    </div>
                ))
            :
            filtered.map((event) => (
                    <div
                        key={event.id}
                        className="border shadow-sm p-5 rounded-lg"
                    >
                        <h2 className="font-medium text-lg">{event.title}</h2>
                        <p className="text-slate-700 font-medium break-words text-sm py-4 h-[100px] overflow-y-auto">
                        {event.description}
                        </p>
                        <p className="text-sm text-slate-500 font-medium flex gap-x-2 items-center">
                        <Calendar size={16} /> {event.date}
                        </p>
                        <p className="text-sm text-slate-500 font-medium flex gap-x-2 items-center">
                        <MapPin size={16} /> {event.location}
                        </p>
                        <div className="flex justify-end gap-x-2">
                        <Link
                            href={`event/${event.id}`}
                            className="rounded-lg border px-1 py-2 text-xs hover:bg-slate-100"
                        >
                            View Details
                        </Link>
                        <button className="rounded-lg bg-slate-950 text-white px-1 py-2 text-xs hover:bg-slate-700">
                            Will Attend
                        </button>
                        </div>
                    </div>
            ))
        }
      </section>
    );
}