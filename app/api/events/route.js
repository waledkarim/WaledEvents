// app/api/events/route.js
import { NextResponse } from "next/server";

const mockEvents = [
  {
    id: "1",
    title: "Next.js Conf Dhaka",
    description: "Talks & workshops on Next.js.",
    date: "2025-09-20",
    location: "BICC, Dhaka",
    category: "conference",
  },
  {
    id: "2",
    title: "React Hooks Deep Dive",
    description: "Hands-on workshop about React hooks.",
    date: "2025-10-05",
    location: "Online",
    category: "workshop",
  },
  {
    id: "3",
    title: "Frontend Meetup",
    description: "Community networking night for frontend devs.",
    date: "2025-09-15",
    location: "Banani, Dhaka",
    category: "meetup",
  },
];

export async function GET() {
  return NextResponse.json(mockEvents);
}
