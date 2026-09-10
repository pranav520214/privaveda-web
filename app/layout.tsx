import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PRIVAVEDA — Patient-Specific Pharmacokinetic Simulation & Clinician Review',
  description:
    'A clinician-led computational environment for exploring patient-specific drug exposure, mechanistic ordinary differential equations, and Bayesian uncertainty.',
  keywords: [
    'PRIVAVEDA',
    'Pharmacokinetics',
    'TDM',
    'Therapeutic Drug Monitoring',
    'Bayesian Inference',
    'Clinical Simulation',
    'Digital Twin',
    'Gentamicin',
    'Vancomycin',
    'Renal Clearance',
  ],
  authors: [
    { name: 'Pranav Kumar Mishra', url: 'https://github.com/pranav520214' },
  ],
  creator: 'PRIVAVEDA Research & Engineering',
  openGraph: {
    title: 'PRIVAVEDA — Patient-Specific Pharmacokinetic Simulation & Clinician Review',
    description:
      'The model simulates. The clinician decides. A clinician-led environment for exploring patient-specific exposure and uncertainty.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PRIVAVEDA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRIVAVEDA — Pharmacokinetic Simulation & Clinician Review',
    description:
      'Patient-specific pharmacokinetic simulation. Coupling mechanistic ODE solvers with Bayesian posterior uncertainty.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F4F1E9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#F4F1E9] text-[#121715]">
      <body className="min-h-screen bg-[#F4F1E9] text-[#121715] selection:bg-[#236E67] selection:text-[#F4F1E9] overflow-x-hidden font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
