"use client";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Zm8.75 2.6a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM12 7.25A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 12 14.75 2.75 2.75 0 0 0 12 9.25Z" />
      </svg>
    )
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M13.8 22v-8.5h2.85l.43-3.31H13.8V8.08c0-.96.27-1.61 1.64-1.61h1.75V3.51A23.4 23.4 0 0 0 14.64 3c-2.52 0-4.25 1.54-4.25 4.36v2.43H7.54v3.31h2.85V22h3.41Z" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M5.34 8.67H2.16V21h3.18V8.67ZM3.75 3a1.84 1.84 0 1 0 0 3.68 1.84 1.84 0 0 0 0-3.68Zm6.8 5.67H7.5V21h3.17v-6.1c0-1.6.3-3.15 2.29-3.15 1.95 0 1.98 1.83 1.98 3.25v6h3.17v-6.76c0-3.32-.72-5.87-4.59-5.87-1.86 0-3.1 1.02-3.61 1.98h-.05V8.67Z" />
      </svg>
    )
  },
  {
    label: "Twitter",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M17.6 3h3.06l-6.69 7.65L21.84 21h-6.16l-4.82-6.31L5.33 21H2.27l7.16-8.18L1.88 3h6.31l4.36 5.76L17.6 3Zm-1.07 16.18h1.7L7.27 4.72H5.45l11.08 14.46Z" />
      </svg>
    )
  }
];

export default function SocialLinks() {
  return (
    <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white/72 transition hover:border-white/28 hover:bg-white/14 hover:text-white"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
