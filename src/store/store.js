import { create } from 'zustand'

const useStore = create((set) => ({

    filterList: {
        city: "",
        maxPrice: "",
        guests: ""
    },

    setFilterList: (newFilterList) => set((state) => ({ filterList: { ...state.filterList, ...newFilterList } }))

    // apartments: [],
    // filteredApartments: [],
    // setApartments: (apartments) => set({ apartments: apartments }),
    // setFilteredApartments: (apartments) => set({ filteredApartments: apartments })

}))

export default useStore


