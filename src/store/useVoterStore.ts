import { create } from 'zustand';
import type { Person, VoterState } from '@/types';



export const useVoterStore = create<VoterState>((set) => ({
  selectedVoters: [],

  toggleVoter: (person:Person) => set((state) => {
    const isSelected = state.selectedVoters.some(v => v.id === person.id);
    if (isSelected) {
      return { selectedVoters: state.selectedVoters.filter(v => v.id !== person.id) };
    }
    if (state.selectedVoters.length >= 50) return state; // Enforce Limit
    return { selectedVoters: [...state.selectedVoters, person] };
  }),

  selectMany: (people: Person[]) => set((state) => {
    // Merge unique, cap at 50
    const newSelection = [...state.selectedVoters];
    people.forEach(p => {
      if (newSelection.length < 50 && !newSelection.some(v => v.id === p.id)) {
        newSelection.push(p);
      }
    });
    return { selectedVoters: newSelection };
  }),

  clearAll: () => set({ selectedVoters: [] }),

  filters: { job: "", word: "", dob: "" },
  setFilters: (filters) => set({ filters }),
  resetFilters: () => set({ filters: { job: "", word: "", dob: "" } }),
}));
