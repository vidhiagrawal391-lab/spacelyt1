"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Service } from "@/lib/content";

type BlueprintArtProps = {
  type: Service["art"];
};

export function BlueprintGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-80"
      style={{
        backgroundImage:
          "linear-gradient(rgba(166,155,136,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(166,155,136,.16) 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }}
    />
  );
}

export function BlueprintArt({ type }: BlueprintArtProps) {
  const reduced = useReducedMotion();
  const lineEase = [0.22, 1, 0.36, 1] as const;
  const draw = reduced
    ? {}
    : {
        initial: { pathLength: 0, opacity: 0.35 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: false, amount: 0.35 },
        transition: { duration: 1.4, ease: lineEase }
      };

  const common = "fill-none stroke-[1.2] stroke-[rgba(21,21,21,.42)]";
  const accent = "fill-none stroke-[1.4] stroke-[rgba(184,170,142,.9)]";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 440"
      className="absolute inset-0 h-full w-full overflow-visible"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={`minor-grid-${type}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" className="fill-none stroke-[rgba(166,155,136,.22)] stroke-[1]" />
        </pattern>
      </defs>
      <rect width="640" height="440" fill={`url(#minor-grid-${type})`} opacity=".55" />
      {type === "planning" ? (
        <>
          <motion.path {...draw} className={common} d="M96 82H470V324H96Z M96 176H252V324 M252 82V176H470 M346 176V324 M132 116H218V150H132Z" />
          <motion.path {...draw} className={accent} d="M72 356H544 M96 340v32 M208 340v32 M320 340v32 M432 340v32 M544 340v32" />
        </>
      ) : null}
      {type === "architecture" ? (
        <>
          <motion.path {...draw} className={common} d="M112 338H540 M160 338V150L324 78l168 72v188 M206 338V178h236v160 M246 222h52v52h-52z M346 222h52v52h-52z" />
          <motion.path {...draw} className={accent} d="M160 150l164 82 168-82 M324 78v154 M206 178l118 54 118-54" />
        </>
      ) : null}
      {type === "construction" ? (
        <>
          <motion.path {...draw} className={common} d="M96 348H544 M154 348V120h324v228 M154 172h324 M154 224h324 M154 276h324 M206 120v228 M272 120v228 M338 120v228 M404 120v228" />
          <motion.path {...draw} className={accent} d="M88 112h264l-42 54 M88 112l54 54 M352 112l108 54 88-54 M460 166v62" />
        </>
      ) : null}
      {type === "interior" ? (
        <>
          <motion.path {...draw} className={common} d="M118 96h404v252H118Z M168 142h122v88H168z M340 142h122v154H340z M178 276h96 M178 304h96" />
          <motion.path {...draw} className={accent} d="M116 374h78 M216 374h78 M316 374h78 M416 374h78 M194 374v28 M294 374v28 M394 374v28" />
          <motion.circle {...draw} cx="278" cy="188" r="24" className={accent} />
        </>
      ) : null}
      {type === "exterior" ? (
        <>
          <motion.path {...draw} className={common} d="M104 344H548 M148 344V150h348v194 M194 344V206h92v138 M334 206h112v84H334z M148 150l174-72 174 72" />
          <motion.path {...draw} className={accent} d="M72 244c72-34 130-34 202 0s130 34 202 0 98-34 138 0 M528 76a44 44 0 1 0 0 88 44 44 0 0 0 0-88" />
        </>
      ) : null}
      {type === "solutions" ? (
        <>
          <motion.path {...draw} className={common} d="M120 336h400V156L320 76 120 156v180Z M188 336V196h84v140 M330 198h114v56H330z M330 282h114v54" />
          <motion.path {...draw} className={accent} d="M68 92c122 0 122 88 252 88s130-88 252-88 M68 388c122 0 122-70 252-70s130 70 252 70" />
          <motion.path {...draw} className={accent} d="M274 392h92 M252 370h136" />
        </>
      ) : null}
    </svg>
  );
}
