import type { Metadata } from "next";
import { IBM_Plex_Mono,Inter} from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMonoFont = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default:"Crunch-N-Curves - The Fitness Club Gwalior",
    template: '%s | Crunch-N-Curves'
  },
  description: "Get fit at The Fitness Club – Gwalior’s best gym for strength, cardio, and wellness. Join today for expert training!",
  keywords: ['Gwalior fitness club','Best gym in Gwalior', 'Gym in Gwalior', 'Best Gym Gwalior', 'Fitness Center Gwalior', 'Personal Training Gwalior', 'Strength Training Gwalior', 'Cardio Workouts Gwalior', 'Wellness Programs Gwalior', 'Group Fitness Classes Gwalior', 'Health and Fitness Gwalior','Bodybuilding gym Gwalior','Women’s gym Gwalior','CrossFit gym Gwalior','Zumba classes Gwalior','Yoga studio Gwalior','Pilates classes Gwalior','Functional training Gwalior','HIIT workouts Gwalior','Nutritional counseling Gwalior','Weight loss programs Gwalior','Muscle building Gwalior'],
    metadataBase: new URL('https://gym-six-sand.vercel.app/'),
  alternates: {
    canonical: '/',
  },
    icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gym-six-sand.vercel.app/',
    title: 'Crunch-N-Curves - The Fitness Club Gwalior',
    description: 'Get fit at The Fitness Club – Gwalior’s best gym for strength, cardio, and wellness. Join today for expert training!',
    siteName: 'Crunch-N-Curves',
    images: [
      {
        url: 'https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WqdiFRKlKtaxomBOsGXE6S2dDACg197Qiprkl',
        width: 1200,
        height: 630,
        // alt: 'Careerspring Solutions HR Services',
      },
    ],
  },
    robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Gym",
  "name": "Crunch-N-Curves - The Fitness Club Gwalior",
  "image": "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WqdiFRKlKtaxomBOsGXE6S2dDACg197Qiprkl",
  "url": "https://gym-six-sand.vercel.app/",
  "telephone": "+91-751-1234567",
  "priceRange": "₹₹",
  "description": "The Fitness Club | Best Gym in Gwalior offering strength training, cardio, group classes, personal training & wellness programs.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C-n-C House, Sirol Main Rd, opposite Well Home Decor, near Green Mart, New City Center",
    "addressLocality": "Gwalior",
    "addressRegion": "MP",
    "postalCode": "474001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.192983,
    "longitude": 78.210254
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "06:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday"
      ],
      "opens": "closed",
      "closes": "closed"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/crunchncurves/",
    "https://www.instagram.com/crunch_n_curves",
  ]
}


  return (
    <html lang="en">
      <body
        className={`${ibmPlexMonoFont.className} ${interFont.className} antialiased`}
      >
        {children}
        <Analytics />
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
