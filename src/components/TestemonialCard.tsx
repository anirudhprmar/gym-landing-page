import React from 'react'
import { CardStack } from './ui/card-stack'
import { cn } from '@/lib/utils'

export default function TestemonialCard() {
  return (
   <div className=" h-90 p-6 flex items-center justify-center">
    <CardStack items={CARDS}/>
    </div>
  )
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  { 
    id:1,
    name: "Jeetu",
    stars:"⭐⭐⭐⭐",
    content: (
      <p>
        <Highlight>Best Gym</Highlight> in Gwalior city
      </p>
    ),
  },
  { 
    id:2,
    name: "Puneet Mangal",
    stars:"⭐⭐⭐⭐",
    content: (
      <p>
        Very good gym with <Highlight>good space</Highlight> have separate Floors for weight training, cardio and CrossFit
      </p>
    ),
  },
  { 
    id:3,
    name: "Mayank Sing Kushwah",
    stars:"⭐⭐⭐⭐",
    content: (
      <p>
        Crunch N Curves has a wide range of products and services to cater to the varied requirements of their customers. The staff at this establishment are courteous and prompt at providing <Highlight>any assistance</Highlight>.
      </p>
    ),
  },
  { 
    id:4,
    name: "Siddhant Goswami",
    stars:"⭐⭐⭐⭐",
    content: (
      <p>
        Good with all the basic equipments. <Highlight>Neat and clean</Highlight>. Good crowd with good trainer. Overall great gym if you are looking to workout nearby.
      </p>
    ),
  },
];
