/**
 * MedSky Centralized Color & Theme Configuration
 * 
 * To change the brand colors across the entire website, update the color codes here
 * and in `app/globals.css` (`:root` block).
 */

export const THEME_COLORS = {
  // Primary Brand Colors (Teal / Cyan)
  primary: {
    DEFAULT: "#17a2b8",
    hover: "#13899c",
    light: "#eefbfd",
    border: "#c6f0f5",
    foreground: "#ffffff",
    dark: "#0e7490",
  },

  // Secondary Brand Colors (Ocean / Sky Blue)
  secondary: {
    DEFAULT: "#0284c7",
    hover: "#0369a1",
    light: "#f0f9ff",
    foreground: "#ffffff",
  },

  // Dark Navy & Midnight Healthcare Shades (Header, Footer, Dark Cards)
  navy: {
    DEFAULT: "#091a2e",
    dark: "#040c18",
    light: "#0d2138",
    surface: "#071324",
    card: "#0b1328",
    border: "rgba(255, 255, 255, 0.1)",
  },

  // Neutral Background & Surface Colors
  surface: {
    white: "#ffffff",
    lightGrey: "#f8fafc",
    border: "#e2e8f0",
    textDark: "#0f172a",
    textMuted: "#64748b",
  },
} as const;

export type ThemeColors = typeof THEME_COLORS;
