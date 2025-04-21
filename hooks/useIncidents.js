import { create } from 'zustand';
import { bipadService } from '@/services/bipad';

const useIncidents = create((set) => ({
  incidents: [],
  isLoading: false,
  error: null,
  
  fetchIncidents: async () => {
    set({ isLoading: true });
    try {
      const data = await bipadService.getEvents();
      const formattedIncidents = data.results.map(event => ({
        id: event.id.toString(),
        title: event.title,
        description: event.description,
        severity: event.severity || 'medium',
        lat: parseFloat(event.latitude),
        lng: parseFloat(event.longitude),
        radius: 2000,
        status: event.status,
        reportedBy: event.reported_by || 'BIPAD Portal',
        createdAt: new Date(event.created_at),
        updatedAt: new Date(event.updated_at),
        affectedCount: event.affected_count || 0,
        location: event.location || 'Nepal'
      }));
      
      set({ incidents: formattedIncidents, isLoading: false });
    } catch (error) {
      // Fallback to mock data if API fails
      const mockIncidents = [
        {
          id: '1',
          title: 'Flood in Kathmandu',
          description: 'Severe flooding in central Kathmandu',
          severity: 'high',
          lat: 27.7172,
          lng: 85.3240,
          radius: 2000,
          status: 'active',
          reportedBy: 'System',
          createdAt: new Date(),
          updatedAt: new Date(),
          affectedCount: 100,
          location: 'Kathmandu'
        }
      ];
      set({ incidents: mockIncidents, isLoading: false });
    }
  },

  addIncident: async (incident) => {
    set({ isLoading: true });
    try {
      // Still keep local incident creation for new reports
      set(state => ({
        incidents: [...state.incidents, { ...incident, id: Date.now().toString() }],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useIncidents;