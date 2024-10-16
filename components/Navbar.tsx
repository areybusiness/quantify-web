"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">Quantify</Link>
          <div className="flex items-center space-x-4">
            <Link href="/#what-is-quantify" className="hover:text-primary">What is Quantify</Link>
            <Link href="/#how-it-works" className="hover:text-primary">How it Works</Link>
            <Link href="/#faq" className="hover:text-primary">FAQ</Link>
            {pathname !== '/dashboard' && (
              <>
                <Button variant="outline" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
            {pathname === '/dashboard' && (
              <Button variant="default" className="bg-green-600 hover:bg-green-700">
                Dashboard
              </Button>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}