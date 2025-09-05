import { create } from "zustand";

const useEventStore = create((set) => ({

  events: [],
  search: "",
  category: "all",
  loading: true,

  setLoading: (status) => set({loading: status}),
  setEvents: (events) => set({events}),
  setSearch: (text) => set({ search: text }),
  setCategory: (cat) => set({ category: cat }),
  addEvent: (event) => set((s) => ({ events: [event, ...s.events] })),

}));

export default useEventStore;
