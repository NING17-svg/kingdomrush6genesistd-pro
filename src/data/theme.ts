import type { ThemeConfig } from "@/types/theme";

// Linirea Heraldry — parchment-grounded light theme.
// Royal Linirea blue primary, heraldic gold secondary, Vez'nan's crimson accent (boss / caution only).
export const theme = {
  mode: "light",
  tokens: {
    pageBg: "#F4ECD8",
    surface1: "#FFFBF0",
    surface2: "#EFE5CB",
    surface3: "#E2D3A8",
    surfaceInverse: "#1B2540",
    textPrimary: "#2A2419",
    textMuted: "#6F5F44",
    textInverse: "#FBF6E8",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#2B4F95",
    focusRing: "#C28E1A",
    line: "#CFB988",
    lineStrong: "#8C6E2A",
    accentPrimary: "#2B4F95",
    accentSecondary: "#C28E1A",
    accentBright: "#B23A48",
    statusConfirmed: "#2F7D4F",
    statusCaution: "#C28E1A",
    statusUnknown: "#6F5F44",
  },
  typography: {
    headingFamily: "'Cinzel', 'Trajan Pro', 'Times New Roman', serif",
    bodyFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "6px",
    borderWidth: "1px",
    shadow: "0 1px 2px rgba(42, 36, 25, 0.08), 0 4px 12px rgba(42, 36, 25, 0.06)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center top" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "panelled",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;