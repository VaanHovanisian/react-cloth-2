import { create } from "zustand";
import qs from "qs";
export const useFilterStore = create((set) => ({

    activeCategory: qs.parse(window.location.search.slice(1)).category || "all",
    setActiveCategory: (value) => {
        set({ activeCategory: value })
    },


    activeSort: qs.parse(window.location.search.slice(1)).sort || "alphabetical",
    setActiveSort: (value) => {
        set({ activeSort: value })
    }
})) 