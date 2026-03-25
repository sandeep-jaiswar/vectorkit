export const tokens = {
  colors: {
    primary: "#0058bc",
    primaryContainer: "#0070eb",
    onPrimary: "#FFFFFF",
    surface: "#f9f9fb",
    onSurface: "#1a1c1d",
    onNeutral: "#1a1c1d",
    surfaceContainerLowest: "#ffffff",
    surfaceContainerLow: "#f3f3f5",
    surfaceContainerHigh: "#e8e8ea",
    surfaceContainerHighest: "#dcdcdf",
    secondary: "#2c2e30",
    onSecondary: "#FFFFFF",
    tertiary: "#000000",
    onTertiary: "#FFFFFF",
    error: "#E04040",
    onError: "#FFFFFF",
    outlineVariant: "#c1c6d7",
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
    shadowAmbient: "0 30px 60px rgba(26, 28, 29, 0.06)",
    shadowAmbientLarge: "0 40px 80px rgba(26, 28, 29, 0.1)",
  },
  glass: {
    bg: "rgba(255, 255, 255, 0.7)",
    blur: "blur(20px)",
  },
  spacing: {
    s8: "2rem",
    s10: "2.5rem",
    s12: "4rem",
  },
  radii: {
    md: "0.5rem",
    xl: "1rem",
  },
} as const;

export type Tokens = typeof tokens;
