import { create } from 'zustand';
import { bipadService } from '@/services/bipad';

const useBipadData = create((set) => ({
  events: [],
  hazards: [],
  weatherAlerts: [],
  isLoading: false,
  error: null,

  fetchEvents: async () => {
    set({ isLoading: true });
    try {
      const data = await bipadService.getEvents();
      set({ events: data.results || [], isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchHazards: async () => {
    set({ isLoading: true });
    try {
      const data = await bipadService.getHazards();
      set({ hazards: data.results || [], isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchWeatherAlerts: async () => {
    set({ isLoading: true });
    try {
      const data = await bipadService.getWeatherAlerts();
      set({ weatherAlerts: data.results || [], isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  }
}));

export default useBipadData;