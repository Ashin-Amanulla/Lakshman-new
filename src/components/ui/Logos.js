import React from 'react'

export default function Logos() {
  return (
    <svg
      width="180"
      height="48"
      viewBox="0 0 180 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 hover:scale-105"
    >
      {/* Background Gavel */}
      <g opacity="0.1" className="fill-law-navy">
        <path d="M170 8L176 14L162 28L156 22L170 8Z" />
        <rect x="158" y="24" width="6" height="16" transform="rotate(-45 158 24)" />
        <circle cx="173" cy="11" r="4" />
      </g>

      {/* S Letter */}
      <path
        d="M12 16C12 13.7909 13.7909 12 16 12H24C26.2091 12 28 13.7909 28 16V16C28 18.2091 26.2091 20 24 20H16C13.7909 20 12 21.7909 12 24V24C12 26.2091 13.7909 28 16 28H24C26.2091 28 28 26.2091 28 24"
        stroke="#BE9E44"
        strokeWidth="3"
        strokeLinecap="round"
        className="stroke-law-gold"
      />

      {/* L Letter */}
      <path
        d="M36 12V28H52"
        stroke="#162444"
        strokeWidth="3"
        strokeLinecap="round"
        className="stroke-law-navy"
      />

      {/* Decorative Line with Scales */}
      <line
        x1="12"
        y1="34"
        x2="52"
        y2="34"
        stroke="#BE9E44"
        strokeWidth="1"
        className="stroke-law-gold"
      />

      {/* Mini Scales of Justice */}
      <g transform="translate(44, 6) scale(0.5)">
        <path
          d="M24 4L28 12H20L24 4Z"
          className="fill-law-gold"
        />
        <rect
          x="23"
          y="12"
          width="2"
          height="8"
          className="fill-law-gold"
        />
      </g>

      {/* Decorative Legal Elements */}
      <g className="stroke-law-gold" fill="none" strokeWidth="0.5">
        <path d="M8 40C8 40 10 38 12 38C14 38 16 40 16 40" />
        <path d="M48 40C48 40 50 38 52 38C54 38 56 40 56 40" />
      </g>

      {/* Pillars of Justice */}
      <g className="fill-law-navy" opacity="0.1">
        <rect x="4" y="8" width="2" height="32" />
        <rect x="58" y="8" width="2" height="32" />
      </g>

      {/* Text ADVOCATES */}
      <g transform="translate(64, 28)">
        <text
          className="fill-law-navy font-serif"
          fontSize="16"
          fontWeight="500"
          letterSpacing="0.1em"
        >
          ADVOCATES
        </text>
      </g>

      {/* Legal Book Icon */}
      <g transform="translate(155, 28)" className="fill-law-navy" opacity="0.15">
        <path d="M0 0H16V2H0z M0 4H16V6H0z M0 8H16V10H0z" />
        <path d="M0 0V10 M16 0V10" />
      </g>
    </svg>
  )
}
