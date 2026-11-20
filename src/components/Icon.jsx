const paths = {
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
  ),
  github: (
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.2a5.6 5.6 0 0 0-1.5-3.9 5.2 5.2 0 0 0-.1-3.8s-1.2-.4-3.8 1.4a13.4 13.4 0 0 0-7 0C5.8.2 4.6.6 4.6.6a5.2 5.2 0 0 0-.1 3.8A5.6 5.6 0 0 0 3 8.3c0 5.6 3.5 6.8 6.8 7.2A4.8 4.8 0 0 0 8 19v3" />
  ),
  whatsapp: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.5A8.4 8.4 0 1 1 21 11.5Z" />
      <path d="M8.5 8.8c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .6.4l.7 1.6c.1.2 0 .4-.1.6l-.4.5c-.1.2-.2.3 0 .6a6 6 0 0 0 2.8 2.4c.3.1.5.1.6-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.4 0 .1 0 .8-.4 1.3-.4.5-1 1-1.8 1-2 0-4.8-1.6-6.3-4.4-.6-1.1-.7-2.2-.3-2.9Z" />
    </>
  ),
  code: (
    <>
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </>
  ),
  palette: (
    <>
      <path d="M12 21a9 9 0 1 1 9-9c0 1.7-1.3 3-3 3h-1.5a2 2 0 0 0-1.4 3.4c.6.6.2 1.6-.6 1.6Z" />
      <circle cx="7.5" cy="10.5" r=".8" fill="currentColor" stroke="none" />
      <circle cx="10" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="6.8" r=".8" fill="currentColor" stroke="none" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4.5 4.5 0 0 0 5.9 5.9L22 21l-1.5 1.5-9-9a4.5 4.5 0 0 1-5.9-5.9L8 6l3 3 2-2-3-3 1.7-1.7Z" />
  ),
  gauge: (
    <>
      <path d="M12 14 16 9" />
      <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
      <path d="M3.5 18a9 9 0 1 1 17 0" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m18.4 5.6-2.8 2.8" />
      <path d="m8.4 15.6-2.8 2.8" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  terminal: (
    <>
      <path d="m5 8 4 4-4 4" />
      <path d="M12 16h7" />
    </>
  ),
}

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.7, ...props }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name] ?? paths.code}
    </svg>
  )
}
