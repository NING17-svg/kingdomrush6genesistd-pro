import type { ThemeConfig } from "@/types/theme";

// Kingdom Rush's blue banners, gold trim and bright hand-drawn battlefields.
// This is the site's own design; it is not a shared V4 preset.
export const theme = {
  mode: "light",
  navigation: "wiki-sidebar",
  tokens: {
    pageBg: "#F0F4F8", surface1: "#FFFFFF", surface2: "#E9EFF5",
    surface3: "#D9E3EE", surfaceInverse: "#182F4E",
    textPrimary: "#1B3049", textMuted: "#53657B", textInverse: "#FFFFFF",
    textOnAccentPrimary: "#FFFFFF", textLink: "#205AA0", focusRing: "#9A5510",
    line: "#D7E1EB", lineStrong: "#758BA6",
    accentPrimary: "#245E9B", accentSecondary: "#9A5510", accentBright: "#AE431F",
    statusConfirmed: "#287244", statusCaution: "#9A5510", statusUnknown: "#53657B",
  },
  typography: {
    headingFamily: "'Bree Serif', Georgia, serif",
    bodyFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    headingWeight: 700,
  },
  shape: { radius: "10px", borderWidth: "1px", shadow: "0 4px 18px rgba(24,47,78,.05)", hoverLift: "0px" },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center" },
  variants: { home: "visual-cover", hub: "grouped-list", content: "wide-reference", workspace: "full-width" },
  decoration: { motif: "none", intensity: "low" },
} satisfies ThemeConfig;
