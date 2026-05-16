import { createTheme, alpha, useTheme } from "@mui/material/styles";

// ─── Design Tokens ────────────────────────────────────────────────────────────
// Mirrors design.md exactly. Use these anywhere you need raw values outside MUI.
export const tokens = {

  color: {
    // Surfaces
    surface:                   "#f8f9ff",
    surfaceDim:                "#cbdbf5",
    surfaceBright:             "#f8f9ff",
    surfaceContainerLowest:    "#ffffff",
    surfaceContainerLow:       "#eff4ff",
    surfaceContainer:          "#e5eeff",
    surfaceContainerHigh:      "#dce9ff",
    surfaceContainerHighest:   "#d3e4fe",

    // On-surface
    onSurface:                 "#0b1c30",
    onSurfaceVariant:          "#434655",
    inverseSurface:            "#213145",
    inverseOnSurface:          "#eaf1ff",

    // Outline
    outline:                   "#737686",
    outlineVariant:            "#c3c6d7",
    surfaceTint:               "#0053db",

    // Primary — Professional Blue
    primary:                   "#004ac6",
    onPrimary:                 "#ffffff",
    primaryContainer:          "#2563eb",
    onPrimaryContainer:        "#eeefff",
    inversePrimary:            "#b4c5ff",
    primaryFixed:              "#dbe1ff",
    primaryFixedDim:           "#b4c5ff",
    onPrimaryFixed:            "#00174b",
    onPrimaryFixedVariant:     "#003ea8",

    // Secondary — Emerald Green (progress / success / hired)
    secondary:                 "#006c49",
    onSecondary:               "#ffffff",
    secondaryContainer:        "#6cf8bb",
    onSecondaryContainer:      "#00714d",
    secondaryFixed:            "#6ffbbe",
    secondaryFixedDim:         "#4edea3",
    onSecondaryFixed:          "#002113",
    onSecondaryFixedVariant:   "#005236",

    // Tertiary — Amber (interviewing / pending)
    tertiary:                  "#784b00",
    onTertiary:                "#ffffff",
    tertiaryContainer:         "#996100",
    onTertiaryContainer:       "#ffeedd",
    tertiaryFixed:             "#ffddb8",
    tertiaryFixedDim:          "#ffb95f",
    onTertiaryFixed:           "#2a1700",
    onTertiaryFixedVariant:    "#653e00",

    // Semantic
    error:                     "#ba1a1a",
    onError:                   "#ffffff",
    errorContainer:            "#ffdad6",
    onErrorContainer:          "#93000a",

    // Background
    background:                "#f8f9ff",
    onBackground:              "#0b1c30",
    surfaceVariant:            "#d3e4fe",

    // Extras referenced in design.md components section
    applyGreen:                "#10B981",
    amberStatus:               "#F59E0B",
    slateOutline:              "#E2E8F0",
  },

  font: {
    headline: "'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif",
    body:     "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },

  // Typography scale from design.md
  type: {
    headlineXl:       { fontSize: "40px", fontWeight: 700, lineHeight: "48px", letterSpacing: "-0.02em" },
    headlineXlMobile: { fontSize: "30px", fontWeight: 700, lineHeight: "36px", letterSpacing: "-0.02em" },
    headlineLg:       { fontSize: "32px", fontWeight: 600, lineHeight: "40px", letterSpacing: "-0.01em" },
    headlineMd:       { fontSize: "24px", fontWeight: 600, lineHeight: "32px" },
    bodyLg:           { fontSize: "18px", fontWeight: 400, lineHeight: "28px" },
    bodyMd:           { fontSize: "16px", fontWeight: 400, lineHeight: "24px" },
    bodySm:           { fontSize: "14px", fontWeight: 400, lineHeight: "20px" },
    labelMd:          { fontSize: "14px", fontWeight: 600, lineHeight: "16px", letterSpacing: "0.05em" },
    labelSm:          { fontSize: "12px", fontWeight: 500, lineHeight: "14px" },
  },

  // Border radius from design.md
  radius: {
    sm:      "0.25rem",   // 4px
    default: "0.5rem",    // 8px  — buttons, inputs, small cards
    md:      "0.75rem",   // 12px
    lg:      "1rem",      // 16px — large cards, dashboard widgets
    xl:      "1.5rem",    // 24px
    full:    "9999px",    // pills / status badges
  },

  // Spacing from design.md (4px base)
  spacing: {
    xs:     "4px",
    sm:     "8px",
    md:     "16px",
    lg:     "24px",
    xl:     "32px",
    gutter: "24px",
    margin: "32px",
  },

  // Elevation / shadow levels from design.md
  shadow: {
    level0: "none",
    level1: "0px 1px 3px rgba(0,0,0,0.04)",                   // surface cards
    level2: "0px 4px 12px rgba(0,0,0,0.05)",                  // hover / active cards
    level3: "0px 12px 24px rgba(0,0,0,0.10)",                 // modals, dropdowns
    primaryGlow:     "0 4px 16px rgba(0,74,198,0.25)",
    primaryGlowHover:"0 6px 20px rgba(0,74,198,0.35)",
  },
};

// ─── MUI Theme ────────────────────────────────────────────────────────────────
export const careerSyncTheme = createTheme({

  palette: {
    mode: "light",
    primary: {
      main:         tokens.color.primary,
      light:        tokens.color.primaryContainer,
      dark:         tokens.color.onPrimaryFixed,
      contrastText: tokens.color.onPrimary,
    },
    secondary: {
      main:         tokens.color.secondary,
      light:        tokens.color.secondaryFixed,
      dark:         tokens.color.onSecondaryFixedVariant,
      contrastText: tokens.color.onSecondary,
    },
    warning: {
      main:         tokens.color.tertiary,
      light:        tokens.color.tertiaryFixed,
      dark:         tokens.color.onTertiaryFixedVariant,
      contrastText: tokens.color.onTertiary,
    },
    error: {
      main:         tokens.color.error,
      light:        tokens.color.errorContainer,
      contrastText: tokens.color.onError,
    },
    background: {
      default: tokens.color.background,
      paper:   tokens.color.surfaceContainerLowest,
    },
    text: {
      primary:   tokens.color.onSurface,
      secondary: tokens.color.onSurfaceVariant,
      disabled:  tokens.color.outline,
    },
    divider: tokens.color.outlineVariant,
  },

  typography: {
    fontFamily: tokens.font.body,

    // Headlines → Plus Jakarta Sans
    h1: {
      fontFamily:    tokens.font.headline,
      fontSize:      tokens.type.headlineXl.fontSize,
      fontWeight:    tokens.type.headlineXl.fontWeight,
      lineHeight:    tokens.type.headlineXl.lineHeight,
      letterSpacing: tokens.type.headlineXl.letterSpacing,
    },
    h2: {
      fontFamily:    tokens.font.headline,
      fontSize:      tokens.type.headlineLg.fontSize,
      fontWeight:    tokens.type.headlineLg.fontWeight,
      lineHeight:    tokens.type.headlineLg.lineHeight,
      letterSpacing: tokens.type.headlineLg.letterSpacing,
    },
    h3: {
      fontFamily:    tokens.font.headline,
      fontSize:      tokens.type.headlineLg.fontSize,
      fontWeight:    tokens.type.headlineLg.fontWeight,
      lineHeight:    tokens.type.headlineLg.lineHeight,
    },
    h4: {
      fontFamily:    tokens.font.headline,
      fontSize:      tokens.type.headlineMd.fontSize,
      fontWeight:    tokens.type.headlineMd.fontWeight,
      lineHeight:    tokens.type.headlineMd.lineHeight,
    },
    h5: {
      fontFamily: tokens.font.headline,
      fontWeight: 600,
      fontSize:   "20px",
    },
    h6: {
      fontFamily: tokens.font.headline,
      fontWeight: 600,
      fontSize:   "18px",
    },

    // Body → Inter
    body1: {
      fontFamily: tokens.font.body,
      fontSize:   tokens.type.bodyMd.fontSize,
      fontWeight: tokens.type.bodyMd.fontWeight,
      lineHeight: tokens.type.bodyMd.lineHeight,
    },
    body2: {
      fontFamily: tokens.font.body,
      fontSize:   tokens.type.bodySm.fontSize,
      fontWeight: tokens.type.bodySm.fontWeight,
      lineHeight: tokens.type.bodySm.lineHeight,
    },
    caption: {
      fontFamily:    tokens.font.body,
      fontSize:      tokens.type.labelSm.fontSize,
      fontWeight:    tokens.type.labelSm.fontWeight,
      lineHeight:    tokens.type.labelSm.lineHeight,
    },
    overline: {
      fontFamily:    tokens.font.body,
      fontSize:      tokens.type.labelMd.fontSize,
      fontWeight:    tokens.type.labelMd.fontWeight,
      lineHeight:    tokens.type.labelMd.lineHeight,
      letterSpacing: tokens.type.labelMd.letterSpacing,
      textTransform: "uppercase",
    },
    button: {
      fontFamily:    tokens.font.body,
      fontSize:      tokens.type.labelMd.fontSize,
      fontWeight:    tokens.type.labelMd.fontWeight,
      letterSpacing: tokens.type.labelMd.letterSpacing,
      textTransform: "none",
    },
  },

  shape: { borderRadius: 8 }, // default: 0.5rem

  shadows: [
    "none",                                          // 0
    tokens.shadow.level1,                            // 1
    tokens.shadow.level2,                            // 2
    tokens.shadow.level3,                            // 3
    tokens.shadow.level3,                            // 4 (overflow guard)
    ...Array(20).fill(tokens.shadow.level3),         // 5–24
  ],

  components: {

    // ── Button ───────────────────────────────────────────────────────────────
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius:  tokens.radius.default,
          textTransform: "none",
          fontFamily:    tokens.font.body,
          fontWeight:    600,
          letterSpacing: tokens.type.labelMd.letterSpacing,
          padding:       "10px 20px",
          transition:    "all 0.2s ease",
        },
        containedPrimary: {
          background: tokens.color.primaryContainer,  // #2563eb per design.md
          boxShadow:  tokens.shadow.primaryGlow,
          "&:hover": {
            background: tokens.color.primary,
            boxShadow:  tokens.shadow.primaryGlowHover,
            transform:  "translateY(-1px)",
          },
        },
        containedSecondary: {
          // "Apply" button — Emerald Green
          background: tokens.color.applyGreen,
          color:      tokens.color.onSecondary,
          "&:hover": {
            background: tokens.color.secondary,
          },
        },
        outlined: {
          borderColor: tokens.color.outlineVariant,
          color:       tokens.color.onSurface,
          "&:hover": {
            borderColor: tokens.color.primary,
            background:  alpha(tokens.color.primary, 0.04),
          },
        },
        text: {
          color: tokens.color.primary,
          "&:hover": {
            background: alpha(tokens.color.primary, 0.06),
          },
        },
      },
    },

    // ── TextField / Input ────────────────────────────────────────────────────
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: tokens.radius.default,
            background:   tokens.color.surfaceContainerLowest,
            fontFamily:   tokens.font.body,
            fontSize:     tokens.type.bodyMd.fontSize,
            color:        tokens.color.onSurface,
            // default border
            "& fieldset": {
              borderColor: tokens.color.outlineVariant,
            },
            "&:hover fieldset": {
              borderColor: tokens.color.outline,
            },
            // focus: 2px Primary Blue + soft glow (per design.md)
            "&.Mui-focused fieldset": {
              borderColor: tokens.color.primary,
              borderWidth: "2px",
              boxShadow:   `0 0 0 3px ${alpha(tokens.color.primary, 0.12)}`,
            },
          },
          "& .MuiInputLabel-root": {
            fontFamily: tokens.font.body,
            fontSize:   tokens.type.labelMd.fontSize,
            fontWeight: 600,
            color:      tokens.color.onSurfaceVariant,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: tokens.color.primary,
          },
          "& input": {
            padding: "12px 14px",
          },
        },
      },
    },

    // ── Toggle Button ─────────────────────────────────────────────────────────
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius:  `${tokens.radius.default} !important`,
          border:        `1px solid ${tokens.color.outlineVariant} !important`,
          textTransform: "none",
          fontFamily:    tokens.font.body,
          fontWeight:    500,
          fontSize:      tokens.type.bodySm.fontSize,
          color:         tokens.color.onSurfaceVariant,
          padding:       "10px 16px",
          flex:          1,
          gap:           8,
          transition:    "all 0.15s ease",
          "&.Mui-selected": {
            background:  alpha(tokens.color.primary, 0.08),
            color:       tokens.color.primary,
            borderColor: `${tokens.color.primary} !important`,
            fontWeight:  600,
          },
          "&:hover": {
            background: alpha(tokens.color.primary, 0.04),
          },
        },
      },
    },

    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          gap:          8,
          background:   tokens.color.surfaceContainerLow,
          borderRadius: tokens.radius.md,
          padding:      4,
          border:       `1px solid ${tokens.color.outlineVariant}`,
          width:        "100%",
        },
      },
    },

    // ── Card ──────────────────────────────────────────────────────────────────
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.lg,
          border:       `1px solid ${tokens.color.slateOutline}`,
          boxShadow:    tokens.shadow.level1,
          background:   tokens.color.surfaceContainerLowest,
          transition:   "box-shadow 0.2s ease, border-color 0.2s ease",
          "&:hover": {
            boxShadow:   tokens.shadow.level2,
            borderColor: tokens.color.outlineVariant,
          },
        },
      },
    },

    // ── Chip / Badge ──────────────────────────────────────────────────────────
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius:  tokens.radius.full,
          fontFamily:    tokens.font.body,
          fontSize:      tokens.type.labelSm.fontSize,
          fontWeight:    500,
          height:        "24px",
        },
      },
    },

    // ── Divider ───────────────────────────────────────────────────────────────
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor:   tokens.color.outlineVariant,
          fontSize:      tokens.type.labelSm.fontSize,
          fontFamily:    tokens.font.body,
          letterSpacing: "0.06em",
          color:         tokens.color.outline,
          "&::before, &::after": {
            borderColor: tokens.color.outlineVariant,
          },
        },
      },
    },

    // ── Link ──────────────────────────────────────────────────────────────────
    MuiLink: {
      styleOverrides: {
        root: {
          color:          tokens.color.primaryContainer,
          fontWeight:     600,
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
        },
      },
    },

    // ── Paper ─────────────────────────────────────────────────────────────────
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius:    tokens.radius.lg,
        },
        elevation1: { boxShadow: tokens.shadow.level1 },
        elevation2: { boxShadow: tokens.shadow.level2 },
        elevation3: { boxShadow: tokens.shadow.level3 },
      },
    },

    // ── CssBaseline ───────────────────────────────────────────────────────────
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { background-color: ${tokens.color.background}; }
      `,
    },
  },
});

// ─── Custom Hook ──────────────────────────────────────────────────────────────
// Use inside any component that is a child of <ThemeProvider theme={careerSyncTheme}>
//
// const theme = useCareerSyncTheme();
// theme.palette.primary.main        → "#004ac6"
// theme.tokens.color.applyGreen     → "#10B981"
// theme.tokens.shadow.level2        → "0px 4px 12px rgba(0,0,0,0.05)"
// theme.tokens.radius.full          → "9999px"  (status badge pills)

export function useCareerSyncTheme() {
  const theme = useTheme();
  return { ...theme, tokens };
}