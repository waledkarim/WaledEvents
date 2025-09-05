"use client";
import useEventStore from "_stores/eventStore";

export default function SearchSection() {
  const { search, category, setSearch, setCategory } = useEventStore();

  return (
    <form className="flex justify-center gap-x-3">
      <input
        type="text"
        placeholder="Search events..."
        className="border border-black rounded-md p-2 w-80"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <fieldset>
        <legend className="font-semibold">Filter by category:</legend>
        <div className="flex gap-x-3">
          {
                ["all", "conference", "workshop", "meetup"].map((opt) => (
                <label key={opt}>
                {opt[0].toUpperCase() + opt.slice(1)}
                <input
                    type="radio"
                    name="category"
                    value={opt}
                    checked={category === opt}
                    onChange={(e) => setCategory(e.target.value)}
                    className="ml-2 accent-indigo-500"
                />
                </label>
            ))
          }
        </div>
      </fieldset>
    </form>
  );
}
