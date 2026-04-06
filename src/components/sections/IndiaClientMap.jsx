"use client";

import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useState } from "react";

const GEO_URL = "/india-official.json";

const clientLocations = [
  {
    id: "kerala",
    name: "Kerala",
    note: "Headquarters",
    coordinates: [76.27, 10.85],
    isHome: true,
    textAnchor: "middle",
    dx: 0,
    dy: 14,
  },
  {
    id: "delhi",
    name: "Delhi",
    note: "Supreme Court",
    coordinates: [77.21, 28.61],
    textAnchor: "middle",
    dx: 0,
    dy: -8,
  },
  {
    id: "tamilnadu",
    name: "Tamil Nadu",
    note: "Regional Clients",
    coordinates: [79.5, 11.8],
    textAnchor: "start",
    dx: 6,
    dy: 3,
  },
  {
    id: "karnataka",
    name: "Karnataka",
    note: "Corporate Clients",
    coordinates: [76.5, 14.2],
    textAnchor: "end",
    dx: -6,
    dy: 3,
  },
  {
    id: "mumbai",
    name: "Mumbai",
    note: "Bombay High Court",
    coordinates: [72.88, 19.08],
    textAnchor: "end",
    dx: -6,
    dy: 3,
  },
];

export default function IndiaClientMap() {
  const [hovered, setHovered] = useState(null);
  const hoveredLoc = clientLocations.find((l) => l.id === hovered);

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
      style={{ position: "relative" }}
    >
      {/* Label */}
      <div
        style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#B8860B",
          marginBottom: "0.875rem",
          textAlign: "center",
        }}
      >
        Client Presence
      </div>

      {/* Map card */}
      <div
        style={{
          border: "1px solid #E8E4DF",
          borderTop: "2px solid #B8860B",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#FDFCFA",
          boxShadow: "0 4px 16px rgba(26,26,26,0.06)",
          position: "relative",
        }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: [82.5, 23], scale: 480 }}
          width={300}
          height={430}
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#F0EBE0"
                  stroke="#C4B090"
                  strokeWidth={0.6}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {clientLocations.map((loc) => (
            <Marker
              key={loc.id}
              coordinates={loc.coordinates}
              onMouseEnter={() => setHovered(loc.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Double pulse rings for Kerala HQ */}
              {loc.isHome && (
                <>
                  <motion.circle
                    r={5}
                    fill="none"
                    stroke="#B8860B"
                    strokeWidth={0.8}
                    initial={{ r: 5, opacity: 0.7 }}
                    animate={{ r: 16, opacity: 0 }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <motion.circle
                    r={5}
                    fill="none"
                    stroke="#B8860B"
                    strokeWidth={0.8}
                    initial={{ r: 5, opacity: 0.7 }}
                    animate={{ r: 16, opacity: 0 }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1.25,
                    }}
                  />
                </>
              )}

              {/* Dot */}
              <circle
                r={loc.isHome ? 4.5 : hovered === loc.id ? 3.5 : 2.8}
                fill={loc.isHome ? "#B8860B" : "#C8A040"}
                stroke="#FDFCFA"
                strokeWidth={1.2}
                style={{ cursor: "default" }}
              />

              {/* State label */}
              <text
                textAnchor={loc.textAnchor}
                x={loc.dx}
                y={loc.dy}
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: loc.isHome ? "5.5px" : "4.5px",
                  fontWeight: loc.isHome ? "600" : "400",
                  fill: loc.isHome ? "#B8860B" : "#3A3835",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {loc.name}
              </text>
              {loc.isHome && (
                <text
                  textAnchor="middle"
                  x={0}
                  y={22}
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "3.5px",
                    fill: "#B8860B",
                    pointerEvents: "none",
                    userSelect: "none",
                    letterSpacing: "0.6px",
                  }}
                >
                  HQ
                </text>
              )}
            </Marker>
          ))}
        </ComposableMap>

        {/* Hover tooltip */}
        {hoveredLoc && (
          <div
            style={{
              position: "absolute",
              bottom: "0.75rem",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(26,26,26,0.88)",
              color: "#FAFAF8",
              padding: "0.35rem 0.75rem",
              borderRadius: "4px",
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            {hoveredLoc.name}
            {hoveredLoc.note && (
              <span style={{ color: "#D4A84B" }}> · {hoveredLoc.note}</span>
            )}
          </div>
        )}
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: "1.25rem",
          justifyContent: "center",
          marginTop: "0.875rem",
        }}
      >
        {[
          { color: "#B8860B", size: 8, label: "Our Office" },
          { color: "#C8A040", size: 6, label: "Client Regions" },
        ].map((item) => (
          <div
            key={item.label}
            style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}
          >
            <div
              style={{
                width: `${item.size}px`,
                height: `${item.size}px`,
                borderRadius: "50%",
                backgroundColor: item.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.55rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#6B6B6B",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
