# Nepal Disaster Response System (NDRS)

A comprehensive platform for managing disaster response operations in Nepal, including incident reporting, resource tracking, and response coordination.

## Tech Stack (Use Latest Versions)

- **Framework**: Next.js 14 with JavaScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query (React Query) and Zustand
- **Form Handling**: React Hook Form with Zod validation
- **Maps & Visualization**: Leaflet/React-Leaflet, Chart.js
- **HTTP Client**: Axios

## Packages

```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.3.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@tanstack/react-query": "^5.8.4",
    "@tanstack/react-query-devtools": "^5.8.4",
    "axios": "^1.6.2",
    "chart.js": "^4.4.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "date-fns": "^2.30.0",
    "framer-motion": "^10.16.5",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.292.0",
    "next": "14.0.3",
    "react": "^18.2.0",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.48.2",
    "react-leaflet": "^4.2.1",
    "tailwind-merge": "^2.0.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.22.4",
    "zustand": "^4.4.6"
  },
  "devDependencies": {
    "@types/leaflet": "^1.9.8",
    "@types/node": "^20.9.4",
    "@types/react": "^18.2.38",
    "@types/react-dom": "^18.2.15",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.54.0",
    "eslint-config-next": "14.0.3",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5",
    "typescript": "^5.3.2"
  }
}
```

## Project Structure

```

├ Client
│ ├── app
│ ├── components
│ ├── ui
│ ├── hooks
│ ├── lib
│ ├── public
│ └── services
```

## Features

- **Incident Reporting**: Log and track disaster incidents with location data
- **Resource Management**: Track available resources and their allocation
- **Response Coordination**: Organize and monitor response efforts
- **Real-time Alerts**: Notify relevant stakeholders about new incidents
- **Geospatial Visualization**: Map-based interface for incident and resource tracking
- **Role-based Access**: Different permissions for administrators, responders, and volunteers

## API Endpoints

> Backend functionality is assumed to be handled externally or through an API gateway.

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Incidents

- `GET /api/incidents` - Get all incidents
- `GET /api/incidents/:id` - Get specific incident
- `POST /api/incidents` - Create new incident
- `PUT /api/incidents/:id` - Update incident
- `DELETE /api/incidents/:id` - Delete incident

### Resources

- `GET /api/resources` - Get all resources
- `GET /api/resources/:id` - Get specific resource
- `POST /api/resources` - Add new resource
- `PUT /api/resources/:id` - Update resource
- `DELETE /api/resources/:id` - Remove resource

### Response

- `GET /api/responses` - Get all responses
- `GET /api/responses/:id` - Get specific response
- `POST /api/responses` - Create new response
- `PUT /api/responses/:id` - Update response
- `DELETE /api/responses/:id` - Delete response

## Use

- Nepal Government's [BIPAD Portal](https://bipadportal.gov.np/api/) for disaster data
- Open-source mapping technologies that make disaster visualization possible
