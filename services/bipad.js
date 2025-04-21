import axios from 'axios';

const BIPAD_API_URL = 'https://bipadportal.gov.np/api';

const bipadApi = axios.create({
  baseURL: BIPAD_API_URL,
  timeout: 10000,
});

export const bipadService = {
  // Get all events (disasters)
  getEvents: async () => {
    const response = await bipadApi.get('/v1/events');
    return response.data;
  },

  // Get specific event details
  getEventById: async (id) => {
    const response = await bipadApi.get(`/v1/events/${id}`);
    return response.data;
  },

  // Get all hazards
  getHazards: async () => {
    const response = await bipadApi.get('/v1/hazard');
    return response.data;
  },

  // Get loss and damage data
  getLossData: async () => {
    const response = await bipadApi.get('/v1/losses');
    return response.data;
  },

  // Get real-time weather alerts
  getWeatherAlerts: async () => {
    const response = await bipadApi.get('/v1/weather');
    return response.data;
  }
};