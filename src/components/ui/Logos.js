import React from 'react'

export default function Logos() {
  return (
    <svg
      width="300"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 hover:scale-105"
    >
      {/* Background Shield */}
      <path
        d="M20 8L40 2L60 8C60 8 65 12 65 25C65 38 40 52 40 52C40 52 15 38 15 25C15 12 20 8 20 8Z"
        fill="#1e3a8a"
        className="fill-blue-800"
      />

      {/* Inner Shield Border */}
      <path
        d="M20 8L40 2L60 8C60 8 65 12 65 25C65 38 40 52 40 52C40 52 15 38 15 25C15 12 20 8 20 8Z"
        stroke="#BE9E44"
        strokeWidth="1.5"
        fill="none"
        className="stroke-amber-500"
      />

      {/* S Letter - Modern Design */}
      <path
        d="M28 18C28 16.3431 29.3431 15 31 15H35C36.6569 15 38 16.3431 38 18V18C38 19.6569 36.6569 21 35 21H31C29.3431 21 28 22.3431 28 24V24C28 25.6569 29.3431 27 31 27H35C36.6569 27 38 25.6569 38 24"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* L Letter - Modern Design */}
      <path
        d="M42 15V27H50"
        stroke="#BE9E44"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-amber-500"
      />

      {/* Decorative Elements */}
      <circle cx="25" cy="35" r="1.5" fill="#BE9E44" className="fill-amber-500" />
      <circle cx="55" cy="35" r="1.5" fill="#BE9E44" className="fill-amber-500" />

      {/* Company Name */}
      <text
        x="85"
        y="25"
        fontSize="18"
        fontWeight="bold"
        fill="#1e3a8a"
        className="fill-blue-800 font-serif"
      >
        ADVOCATES
      </text>

      {/* Tagline */}
      <text
        x="85"
        y="42"
        fontSize="10"
        fill="#6b7280"
        className="fill-gray-500"
      >
        Legal Excellence • Trusted Counsel
      </text>

      {/* Decorative Line */}
      <line
        x1="85"
        y1="30"
        x2="185"
        y2="30"
        stroke="#BE9E44"
        strokeWidth="1"
        className="stroke-amber-500"
      />
    </svg>
  )
}
