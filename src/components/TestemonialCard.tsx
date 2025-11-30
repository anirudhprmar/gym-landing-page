"use client"
import React from 'react'
import { CardStack } from './ui/card-stack'
import { cn } from '@/lib/utils'

export default function TestemonialCard() {
  return (
    <div className="h-[20rem] w-full md:w-[25rem] flex items-center justify-center">
      <CardStack items={CARDS} />
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
        "font-bold bg-primary/20 text-primary px-1 py-0.5 rounded-sm",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 1,
    name: "Jeetu",
    designation: "Member since 2023",
    content: (
      <p>
        <Highlight>Best Gym</Highlight> in Gwalior city. The atmosphere is electric and pushes you to do your best every single day.
      </p>
    ),
  },
  {
    id: 2,
    name: "Puneet Mangal",
    designation: "Fitness Enthusiast",
    content: (
      <p>
        Very good gym with <Highlight>good space</Highlight> have separate Floors for weight training, cardio and CrossFit. Exactly what I needed.
      </p>
    ),
  },
  {
    id: 3,
    name: "Mayank Sing Kushwah",
    designation: "Bodybuilder",
    content: (
      <p>
        Crunch N Curves has a wide range of products and services. The staff are courteous and prompt at providing <Highlight>any assistance</Highlight>.
      </p>
    ),
  },
  {
    id: 4,
    name: "Siddhant Goswami",
    designation: "Athlete",
    content: (
      <p>
        Good with all the basic equipments. <Highlight>Neat and clean</Highlight>. Good crowd with good trainer. Overall great gym if you are looking to workout nearby.
      </p>
    ),
  },
];
