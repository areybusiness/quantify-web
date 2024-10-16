import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

// This is a mock function. In a real app, you'd implement actual authentication logic.
const isAuthenticated = () => {
  // For demo purposes, always return true
  return true;
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  if (!isAuthenticated()) {
    redirect('/sign-in');
  }

  return <>{children}</>;
}