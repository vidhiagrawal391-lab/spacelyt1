"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import PopupManager from "@/components/lead/PopupManager";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { blogPosts } from "@/lib/blogPosts";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BlogPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[var(--background)] text-[var(--ink)]">
      <SiteHeader />
      <section className="relative px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,45,170,.14),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(56,189,248,.12),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(17,17,17,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <Link href="/" className="transition hover:text-[var(--ink)]">Home</Link>
              <span>/</span>
              <span>Blog</span>
            </div>
            <h1 className="mt-6 max-w-6xl font-display text-[clamp(3.4rem,10vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
              Spacelyt
              <br />
              <span className="gradient-text">Design Journal</span>
            </h1>
          </Reveal>
          <Reveal className="rounded-[2rem] border border-white/72 bg-white/76 p-5 shadow-soft backdrop-blur-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111] text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              SEO-focused guides for architecture planning, construction quality, interior design, exterior design, renovation choices, and full turnkey project delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} className="h-full">
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/76 bg-white/78 p-4 shadow-soft backdrop-blur-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem]">
                  <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/86 px-3 py-1.5 font-mono text-xs font-semibold text-[#ff2daa] shadow-soft">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-1 pt-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">{post.date} / {post.readTime}</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.04em]">{post.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#ff2daa]">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </span>
                  <span className="sr-only">Blog article {index + 1}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
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
