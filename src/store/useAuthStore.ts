import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  setAuth: (value: boolean) => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,

  // set true (login)
  login: () => set({ isAuthenticated: true }),

  // set false (logout)
  logout: () => set({ isAuthenticated: false }),

  // optional: manually set value
  setAuth: (value) => set({ isAuthenticated: value }),
}));

export default useAuthStore;
