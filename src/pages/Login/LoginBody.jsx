import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
  ToggleButton,
  ToggleButtonGroup,
  InputAdornment,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import LinkIcon from "@mui/icons-material/Link";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";
import backgroundImage from "../../assets/login_sign_up_image.png";

// ─── Left Panel ──────────────────────────────────────────────────────────────
export const LeftPanel = () => {
  const theme = useTheme();
  const isCollapsed = useMediaQuery(theme.breakpoints.down("md")); // collapses below 900px

  // ── Collapsed state: just a top bar with logo ──────────────────────────
  if (isCollapsed) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 3,
          py: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          background: theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: "8px",
            background: theme.palette.primary.main,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SyncRoundedIcon sx={{ color: "#fff", fontSize: 16 }} />
        </Box>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            fontSize: "1.05rem",
            letterSpacing: "-0.01em",
          }}
        >
          CareerSync
        </Typography>
      </Box>
    );
  }

  // ── Full panel ─────────────────────────────────────────────────────────
  return (
    <Box
      sx={{
        flex: "0 0 42%",
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px 0 0 20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: { md: 3, lg: 4 },
      }}
    >
      {/* Overlays */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Radial glow top-right */}
        <Box
          sx={{
            position: "absolute",
            width: { md: 240, lg: 320 },
            height: { md: 240, lg: 320 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
            top: -80,
            right: -80,
          }}
        />
        {/* Radial glow bottom-left */}
        <Box
          sx={{
            position: "absolute",
            width: { md: 150, lg: 200 },
            height: { md: 150, lg: 200 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,217,138,0.12) 0%, transparent 70%)",
            bottom: 80,
            left: -40,
          }}
        />
        {/* Blue hue overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, rgba(26,61,191,0.75) 0%, rgba(10,30,122,0.85) 60%, rgba(6,15,74,0.92) 100%)",
          }}
        />
      </Box>

      {/* Logo */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "8px",
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          <SyncRoundedIcon sx={{ color: "#fff", fontSize: 18 }} />
        </Box>
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            fontSize: "1.05rem",
            letterSpacing: "-0.01em",
          }}
        >
          CareerSync
        </Typography>
      </Box>

      {/* Hero text */}
      <Box sx={{ position: "relative", mt: "auto" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            lineHeight: 1.15,
            mb: 2,
            fontSize: { md: "1.6rem", lg: "2.1rem" },
          }}
        >
          Your professional momentum starts here.
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.65)",
            fontSize: { md: "0.8rem", lg: "0.875rem" },
            lineHeight: 1.6,
            maxWidth: { md: 240, lg: 300 },
          }}
        >
          Join thousands of candidates and employers managing the future of work
          with clarity and precision.
        </Typography>
      </Box>

      {/* Stats badge */}
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          gap: 1.5,
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 3,
          p: { md: "10px 14px", lg: "12px 18px" },
          alignSelf: "flex-start",
          mt: 3,
        }}
      >
        <Box
          sx={{
            width: { md: 32, lg: 38 },
            height: { md: 32, lg: 38 },
            borderRadius: "50%",
            background: "linear-gradient(135deg, #22D98A, #14A864)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(34,217,138,0.4)",
          }}
        >
          <TrendingUpRoundedIcon
            sx={{ color: "#fff", fontSize: { md: 16, lg: 20 } }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.7rem",
              lineHeight: 1,
            }}
          >
            Active Users
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: { md: "1.1rem", lg: "1.3rem" },
              lineHeight: 1.2,
            }}
          >
            45k+
          </Typography>
        </Box>
      </Box>

      {/* Dots indicator */}
      <Box sx={{ position: "relative", display: "flex", gap: 1, mt: 3 }}>
        {[1, 0, 0].map((active, i) => (
          <Box
            key={i}
            sx={{
              width: active ? 20 : 8,
              height: 8,
              borderRadius: 4,
              background: active ? "#22D98A" : "rgba(255,255,255,0.3)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

// ─── Right Panel (Form UI) ────────────────────────────────────────────────────
export const LoginBody = ({
  accountType,
  onAccountTypeChange,
  email,
  onEmailChange,
  password,
  onPasswordChange,
  showPassword,
  onTogglePassword,
  onSubmit,
  loading,
  onRegisterClick,
}) => (
  <Box
    sx={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      px: { xs: 2.5, sm: 4, md: 5 },
      py: { xs: 3, md: 4 },
      background: "#fff",
      borderRadius: { xs: "0 0 20px 20px", md: "0 20px 20px 0" },
    }}
  >
    {/* Header */}
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 0.5, fontSize: { xs: "1.6rem", sm: "2rem" } }}
      >
        Welcome Back
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Select your account type to continue.
      </Typography>

      {/* Account type toggle */}
      <ToggleButtonGroup
        value={accountType}
        exclusive
        onChange={onAccountTypeChange}
        sx={{ mb: 3 }}
      >
        <ToggleButton value="candidate">
          <PersonOutlineRoundedIcon sx={{ fontSize: 18 }} />I am a Candidate
        </ToggleButton>
        <ToggleButton value="employer">
          <BusinessRoundedIcon sx={{ fontSize: 18 }} />I am an Employer
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Email */}
      <Box sx={{ mb: 2.5 }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, color: "text.primary", mb: 0.75 }}
        >
          Email Address
        </Typography>
        <TextField
          fullWidth
          placeholder={
            accountType !== "candidate" ? "name@company.com" : "user@email.com"
          }
          type="email"
          value={email}
          onChange={onEmailChange}
          autoComplete="email"
        />
      </Box>

      {/* Password */}
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: 0.75 }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: "text.primary" }}
          >
            Password
          </Typography>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Box>
        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={onPasswordChange}
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={onTogglePassword} edge="end" size="small">
                  {showPassword ? (
                    <VisibilityOffOutlinedIcon
                      sx={{ fontSize: 18, color: "#9AAACF" }}
                    />
                  ) : (
                    <VisibilityOutlinedIcon
                      sx={{ fontSize: 18, color: "#9AAACF" }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Sign in button */}
      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={() => onSubmit(accountType)}
        disabled={loading}
        endIcon={<ArrowForwardRoundedIcon />}
        sx={{ mb: 2.5 }}
      >
        {loading ? "Signing In…" : "Sign In"}
      </Button>

      {/* Divider */}
      <Divider sx={{ mb: 2.5 }}>OR CONTINUE WITH</Divider>

      {/* Social buttons */}
      <Box sx={{ display: "flex", gap: 1.5 }}>
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          startIcon={<GoogleIcon sx={{ fontSize: "18px !important" }} />}
          sx={{ fontSize: "0.875rem" }}
        >
          Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          startIcon={<LinkIcon sx={{ fontSize: "18px !important" }} />}
          sx={{ fontSize: "0.875rem" }}
        >
          LinkedIn
        </Button>
      </Box>
    </Box>

    {/* Footer */}
    <Box>
      <Typography
        variant="body2"
        align="center"
        color="text.secondary"
        sx={{ mt: 3 }}
      >
        Don&apos;t have an account?{" "}
        <Link
          component="button"
          variant="body2"
          onClick={onRegisterClick}
          sx={{ fontWeight: 600, cursor: "pointer" }}
        >
          Create an Account
        </Link>
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: 1.5, sm: 3 },
          mt: 3,
          pt: 2.5,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        {["Help Center", "Privacy Policy", "Terms of Service"].map((item) => (
          <Link
            key={item}
            href="#"
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 500 }}
          >
            {item}
          </Link>
        ))}
      </Box>
    </Box>
  </Box>
);

export default LoginBody;
