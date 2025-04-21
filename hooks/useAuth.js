import { create } from 'zustand';

const useAuth = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ user: { id: '1', name: 'Test User', role: 'admin' }, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  logout: () => {
    set({ user: null, error: null });
  },
}));

export default useAuth;