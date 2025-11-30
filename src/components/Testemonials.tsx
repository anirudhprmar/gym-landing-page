"use client"
import { AvatarCircles } from "./ui/avatar-circles";
import { RefObject } from "react";
import TestemonialCard from "./TestemonialCard";
import { motion } from "motion/react";

interface refInfo {
  testemonialRef?: RefObject<HTMLDivElement | null>
}

export default function Testemonials({ testemonialRef }: refInfo) {
  return (
    <section ref={testemonialRef} id="testemonials" className="w-full min-h-screen bg-zinc-950 text-zinc-50 flex flex-col lg:flex-row items-center justify-center gap-16 py-20 px-6 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start justify-center gap-8 max-w-xl z-10"
      >
        <div>
          <h4 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            WHAT OUR <br />
            <span className="text-primary">ATHLETES</span> SAY
          </h4>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Don&apos;t just take our word for it. Join a community of dedicated individuals who have transformed their lives with us.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <AvatarCircles
              numPeople={90}
              avatarUrls={[
                {
                  imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVHQH9BE0aHBU8FloxGfD-DQR05vbFZBdrz0wXl0hLp0s11GTr4=w90-h90-p-rp-mo-ba2-br100",
                  profileUrl: "",
                },
                {
                  imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUgfTkgc6OsE92zw6PEDMLA2K1StnHaLKXSBqFe8237qZDBRdCXYw=w90-h90-p-rp-mo-ba5-br100",
                  profileUrl: "",
                },
                {
                  imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWP-mq94GXl6sD5IZRFxwiy6JBL3ev3aD_ckO_PWOiK2se_qFf7xw=w90-h90-p-rp-mo-ba5-br100",
                  profileUrl: "",
                },
              ]}
            />
            <div className="flex flex-col">
              <span className="font-bold text-white">4.9/5.0 Rating</span>
              <span className="text-sm text-zinc-500">Based on 100+ reviews</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10"
      >
        <TestemonialCard />
      </motion.div>
    </section>
  )
}
