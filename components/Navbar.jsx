'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Home,
  AlertTriangle,
  Package,
  Users,
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  Search,
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const pathname = usePathname();
  const isLoggedIn = false; // Simulated auth state

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/incidents', label: 'Incidents', icon: AlertTriangle },
    { href: '/resources', label: 'Resources', icon: Package },
    { href: '/response', label: 'Response', icon: Users },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsThemeOpen(!isThemeOpen);

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-col h-screen w-64 bg-background border-r p-4">
        <Link href="/" className="flex items-center space-x-2 mb-8">
          <img src="/images/gov-logo.png" alt="Logo" className="h-8" />
          <span className="font-bold">NDRS</span>
        </Link>

        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors
                  ${pathname === item.href
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent'
                  }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-auto space-y-2">
          {isLoggedIn ? (
            <Button variant="outline" className="w-full" asChild>
              <Link href="/profile">Profile</Link>
            </Button>
          ) : (
            <Button className="w-full" asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
          
          <Button
            variant="outline"
            className="w-full"
            onClick={toggleTheme}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="ml-2">Theme</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/gov-logo.png" alt="Logo" className="h-8" />
          <span className="font-bold">NDRS</span>
        </Link>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b md:hidden"
          >
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-8"
                />
              </div>

              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center space-x-2 p-2 rounded-lg transition-colors
                        ${pathname === item.href
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4">
                {isLoggedIn ? (
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/profile">Profile</Link>
                  </Button>
                ) : (
                  <Button className="w-full" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}