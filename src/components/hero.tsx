"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pb-16 pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Alex Dalat
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I build things across machine learning, graphics, full-stack
            development, and more. I enjoy exploring ideas from low-level GPU
            rendering to reinforcement learning agents and everything in
            between.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
