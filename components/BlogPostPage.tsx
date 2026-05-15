"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import PopupManager from "@/components/lead/PopupManager";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { BlogPost } from "@/lib/blogPosts";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <main className="relative isolate overflow-hidden bg-[var(--background)] text-[var(--ink)]">
      <SiteHeader />
      <article>
        <section className="relative px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,45,170,.14),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(255,138,61,.13),transparent_34%)]" />
            <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(17,17,17,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/72 px-4 py-2 text-xs font-semibold shadow-soft">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
              <p className="technical-label mt-7 text-[#ff2daa]">{post.category} / {post.readTime}</p>
              <h1 className="mt-4 font-display text-[clamp(2.8rem,8vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.065em]">{post.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">{post.excerpt}</p>
            </Reveal>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6 lg:px-10">
          <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[2.4rem] border border-white/76 bg-white/76 p-3 shadow-glow backdrop-blur-2xl">
            <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] md:min-h-[34rem]">
              <Image src={post.image} alt={post.title} fill sizes="92vw" className="object-cover" priority />
            </div>
          </Reveal>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <Reveal className="h-fit rounded-[1.8rem] border border-white/76 bg-white/78 p-5 shadow-soft backdrop-blur-xl">
              <p className="technical-label text-[#ff2daa]">SEO Keywords</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-[#fff5fb] px-3 py-1.5 text-xs font-semibold text-[#111]">
                    {keyword}
                  </span>
                ))}
              </div>
            </Reveal>
            <div className="grid gap-5">
              {post.sections.map((section, index) => (
                <Reveal key={section.heading} className="rounded-[1.8rem] border border-white/76 bg-white/78 p-5 shadow-soft backdrop-blur-xl md:p-6">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#ff2daa]">0{index + 1}</span>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em]">{section.heading}</h2>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">{section.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[2rem] border border-white/76 bg-[#111] p-6 text-white shadow-glow md:flex-row md:items-center md:justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">Need help planning your space?</h2>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-[#111]">
              Contact Spacelyt <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </section>
      </article>
      <SiteFooter />
      <PopupManager />
    </main>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.72, ease }}
    >
      {children}
    </motion.div>
  );
}
