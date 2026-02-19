"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // mailto fallback — opens mail client
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:alexdalat@gmail.com?subject=${subject}&body=${body}`;

    setSending(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="border-t border-border/40 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-md"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Contact me
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            at alexdalat@gmail.com
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="h-9"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="h-9"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder=""
                required
                rows={4}
              />
            </div>

            <Button
              type="submit"
              disabled={sending}
              className="w-full gap-2"
              size="default"
            >
              {submitted ? (
                <>
                  <CheckCircle className="size-4" />
                  Opening mail client...
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
