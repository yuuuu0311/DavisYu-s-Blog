import create from "zustand";

const useCountStore = create((set, get) => ({
    bears: 0,
    defaultValue: "javascript0",
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));
