import { create } from 'zustand'

const useStore = create((set) => ({

    filterList: {
        city: "",
        maxPrice: "",
        guests: ""
    },

    setFilterList: (newFilterList) => set((state) => ({ filterList: { ...state.filterList, ...newFilterList } })),

    favoriteIds: [],

    toggleFavorite: (id) =>
        set((state) => {
            if (state.favoriteIds.includes(id)) {
                return { favoriteIds: state.favoriteIds.filter(item => item !== id) } //remove id
            }
            return { favoriteIds: [...state.favoriteIds, id] } //add id
        }),


    // apartments: [],
    // filteredApartments: [],
    // setApartments: (apartments) => set({ apartments: apartments }),
    // setFilteredApartments: (apartments) => set({ filteredApartments: apartments })

}))

export default useStore


