export const tokens = {
  colors: {
    surface: "#f9f9fb",
    surfaceContainerLowest: "#ffffff",
    surfaceContainerLow: "#f3f3f5",
    surfaceContainerHigh: "#e8e8ea",
    surfaceContainerHighest: "#e0e0e3",
    onSurface: "#1a1c1d",
    onSurfaceRgb: "26, 28, 29",
    primary: "#0058bc",
    primaryContainer: "#0070eb",
    outlineVariant: "#c1c6d7",
    outlineVariantRgb: "193, 198, 215",
  },
  typography: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif",
    displayLg: {
      size: "3.5rem",
      tracking: "-0.02em",
      lineHeight: "1.1",
    },
    bodyLg: {
      size: "1rem",
      tracking: "0",
      lineHeight: "1.6",
    },
    labelMd: {
      size: "0.875rem",
      tracking: "0.05em",
    },
    labelSm: {
      size: "0.75rem",
      tracking: "0.05em",
    },
  },
  elevation: {
    shadowAmbient: "0 20px 40px rgba(26, 28, 29, 0.08)",
    shadowAmbientLarge: "0 30px 60px rgba(26, 28, 29, 0.12)",
  },
  glass: {
    bg: "rgba(255, 255, 255, 0.7)",
    blur: "blur(40px)",
  },
  spacing: {
    s8: "2rem",
    s10: "2.5rem",
    s12: "4rem",
  },
  radii: {
    md: "0.75rem",
    xl: "1.5rem",
  },
} as const;

export type Tokens = typeof tokens;
