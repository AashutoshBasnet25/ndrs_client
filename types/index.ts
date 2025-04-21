export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'responder' | 'volunteer';
  organization?: string;
  phone?: string;
  createdAt: Date;
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  location: string;
  severity: 'low' | 'medium' | 'high';
  lat: number;
  lng: number;
  radius?: number;
  affectedCount: number;
  status: 'active' | 'resolved' | 'archived';
  reportedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Resource {
  id: string;
  name: string;
  type: 'medical' | 'food' | 'shelter' | 'equipment' | 'other';
  quantity: number;
  location: string;
  organization: string;
  status: 'available' | 'deployed' | 'depleted';
  contactName: string;
  contactPhone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Response {
  id: string;
  incidentId: string;
  type: 'rescue' | 'medical' | 'relief' | 'evacuation' | 'other';
  status: 'planned' | 'inProgress' | 'completed';
  teamSize: number;
  location: string;
  startDate: Date;
  duration: number;
  teamLead: string;
  contactPhone: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Alert {
  id: string;
  type: 'warning' | 'danger' | 'info';
  title: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
  area: {
    lat: number;
    lng: number;
    radius: number;
  };
  createdAt: Date;
  expiresAt: Date;
}