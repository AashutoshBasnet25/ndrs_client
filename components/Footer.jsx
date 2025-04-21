export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img
              src="/images/gov-logo.png"
              alt="Government of Nepal"
              className="h-12"
            />
            <div>
              <h3 className="font-bold">Nepal Disaster Response System</h3>
              <p className="text-sm text-muted-foreground">
                Government of Nepal
              </p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NDRS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}