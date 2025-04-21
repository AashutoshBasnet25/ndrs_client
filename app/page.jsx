import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Home() {
  const isLoggedIn = false; // Simulated auth state

  const features = [
    {
      title: 'Incident Reporting',
      description: 'Report and track disaster incidents in real-time',
    },
    {
      title: 'Resource Management',
      description: 'Efficiently manage and allocate disaster response resources',
    },
    {
      title: 'Response Coordination',
      description: 'Coordinate response efforts across multiple agencies',
    },
  ];

  const stats = [
    { label: 'Incidents Managed', value: '1,000+' },
    { label: 'Resources Tracked', value: '5,000+' },
    { label: 'Response Teams', value: '200+' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <div className="relative mb-8">
          <img
            src="/images/gov-logo.png"
            alt="Nepal Government Logo"
            className="mx-auto h-24"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Nepal Disaster Response System
        </h1>
        <p className="text-xl text-muted-foreground">
          Unified platform for disaster management and response
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-primary/5 rounded-lg p-8 mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        {!isLoggedIn ? (
          <div className="space-x-4">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        ) : (
          <Button asChild>
            <Link href="/incidents">Report Incident</Link>
          </Button>
        )}
      </section>
    </div>
  );
}