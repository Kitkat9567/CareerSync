import { createTheme, alpha, useTheme } from "@mui/material/styles";

// ─── Design Tokens ────────────────────────────────────────────────────────────
// Centralised raw values — reference these if you need colours outside of MUI
export const tokens = {
  color: {
    // Primary — deep royal blue
    primary900: "#060F4A",
    primary800: "#0A1E7A",
    primary700: "#0F2585",
    primary600: "#1A3DBF",   // primary.main
    primary500: "#3D5FD9",   // primary.light
    primary400: "#6B87E8",
    primary100: "#DDE3F5",

    // Secondary — vibrant mint-green
    secondary700: "#14A864",
    secondary600: "#22D98A", // secondary.main
    secondary400: "#5AEAAA", // secondary.light

    // Neutrals
    neutral900: "#0D1B4B",   // text.primary
    neutral600: "#5C6A9A",   // text.secondary
    neutral400: "#9AAACF",
    neutral200: "#D8DEF0",   // divider
    neutral100: "#EEF1F8",   // background.default
    neutral50:  "#F5F7FF",   // input background

    // Semantic
    error: "#E53935",
    white: "#FFFFFF",
  },
  font: {
    display: "'Fraunces', 'Georgia', serif",
    body:    "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
  },
  radius: {
    sm:  8,
    md:  12,
    lg:  14,
    xl:  20,
    full: 9999,
  },
  shadow: {
    primaryGlow:     "0 4px 20px rgba(26,61,191,0.35)",
    primaryGlowHover:"0 6px 24px rgba(26,61,191,0.45)",
    card:            "0 24px 64px rgba(10,30,122,0.15)",
    badge:           "0 4px 12px rgba(34,217,138,0.4)",
  },
};

// ─── MUI Theme ────────────────────────────────────────────────────────────────
export const careerSyncTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main:         tokens.color.primary600,
      light:        tokens.color.primary500,
      dark:         tokens.color.primary700,
      contrastText: tokens.color.white,
    },
    secondary: {
      main:         tokens.color.secondary600,
      light:        tokens.color.secondary400,
      dark:         tokens.color.secondary700,
      contrastText: tokens.color.primary700,
    },
    background: {
      default: tokens.color.neutral100,
      paper:   tokens.color.white,
    },
    text: {
      primary:   tokens.color.neutral900,
      secondary: tokens.color.neutral600,
    },
    divider: tokens.color.neutral200,
    error:   { main: tokens.color.error },
  },

  typography: {
    fontFamily: tokens.font.body,
    h3: {
      fontFamily:    tokens.font.display,
      fontWeight:    700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily:    tokens.font.display,
      fontWeight:    700,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontFamily: tokens.font.display,
      fontWeight: 600,
    },
    body1:   { fontFamily: tokens.font.body, fontSize: "0.95rem" },
    body2:   { fontFamily: tokens.font.body, fontSize: "0.85rem" },
    caption: { fontFamily: tokens.font.body },
    button:  {
      fontFamily:    tokens.font.body,
      fontWeight:    600,
      letterSpacing: "0.02em",
    },
  },

  shape: { borderRadius: tokens.radius.md },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius:  tokens.radius.md,
          textTransform: "none",
          padding:       "12px 24px",
          fontSize:      "0.95rem",
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${tokens.color.primary600} 0%, ${tokens.color.primary700} 100%)`,
          boxShadow:  tokens.shadow.primaryGlow,
          transition: "all 0.2s ease",
          "&:hover": {
            background:  `linear-gradient(135deg, ${tokens.color.primary500} 0%, ${tokens.color.primary600} 100%)`,
            boxShadow:   tokens.shadow.primaryGlowHover,
            transform:   "translateY(-1px)",
          },
        },
        outlinedSecondary: {
          borderColor: tokens.color.neutral200,
          color:       tokens.color.neutral900,
          "&:hover": {
            borderColor: tokens.color.primary600,
            background:  alpha(tokens.color.primary600, 0.04),
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: tokens.radius.md,
            background:   tokens.color.neutral50,
            "&:hover fieldset": { borderColor: tokens.color.primary600 },
            "&.Mui-focused fieldset": {
              borderColor: tokens.color.primary600,
              borderWidth: 1.5,
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: tokens.color.neutral200,
          },
          "& input": {
            fontFamily: tokens.font.body,
            fontSize:   "0.93rem",
            color:      tokens.color.neutral900,
            padding:    "13px 14px",
          },
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius:  `${tokens.radius.sm + 2}px !important`,
          border:        `1px solid ${tokens.color.neutral200} !important`,
          textTransform: "none",
          fontFamily:    tokens.font.body,
          fontWeight:    500,
          fontSize:      "0.9rem",
          color:         tokens.color.neutral600,
          padding:       "10px 20px",
          flex:          1,
          gap:           8,
          "&.Mui-selected": {
            background:  alpha(tokens.color.primary600, 0.08),
            color:       tokens.color.primary600,
            borderColor: `${tokens.color.primary600} !important`,
            fontWeight:  600,
          },
          "&:hover": { background: alpha(tokens.color.primary600, 0.04) },
        },
      },
    },

    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          gap:          8,
          background:   tokens.color.neutral50,
          borderRadius: tokens.radius.lg,
          padding:      4,
          border:       `1px solid ${tokens.color.neutral200}`,
          width:        "100%",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          color:         tokens.color.neutral400,
          fontSize:      "0.75rem",
          fontFamily:    tokens.font.body,
          letterSpacing: "0.08em",
          "&::before, &::after": { borderColor: tokens.color.neutral200 },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color:          tokens.color.primary600,
          fontWeight:     600,
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
        },
      },
    },
  },
});

// ─── Custom Hook ──────────────────────────────────────────────────────────────
// Usage: const theme = useCareerSyncTheme();
// Gives you the full MUI theme object + the tokens shorthand.
//
// Must be used inside a component wrapped with <ThemeProvider theme={careerSyncTheme}>
//
// Example:
//   const theme = useCareerSyncTheme();
//   <Box sx={{ color: theme.palette.primary.main }} />
//   <Box sx={{ background: theme.tokens.color.primary900 }} />

export function useCareerSyncTheme() {
  const theme = useTheme(); // MUI's built-in hook — reads from ThemeProvider context
  return { ...theme, tokens };
}