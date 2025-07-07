import { create } from 'zustand';

type GeneralState = {
  userId: string | null;
  setUserId: (id: string | null) => void;
};

export const useGeneralStore = create<GeneralState>((set) => ({
  userId: null,
  setUserId: (id) => set({ userId: id }),
}));