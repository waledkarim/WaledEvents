import EventSection from "@components/EventSection";
import SearchSection from "@components/SearchSection";
import { Calendar, MapPin, Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-2 mt-10">

      <h1 className="text-2xl font-medium">Events</h1>

      <SearchSection />
      <EventSection />

      
    </main>
  );
}
