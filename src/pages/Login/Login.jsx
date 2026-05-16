import React, { useState } from "react";
import { Box } from "@mui/material";

import { LeftPanel, LoginBody } from "./LoginBody";
import { login } from "../../api/jobApi";

export default function Login() {
  const [accountType, setAccountType] = useState("candidate");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAccountTypeChange = (_event, newType) => {
    if (newType !== null) setAccountType(newType);
  };
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  

  const handleSubmit = async (accountType) => {
    if (!email || !password) return;
    setLoading(true);
    const payload = {
        email,
        password
    }
    try {
        const response = await login(accountType,payload);
        
    } catch (err) {
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #EEF1F8 0%, #DDE3F5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 0, sm: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          // column on mobile (logo bar on top, form below), row on md+
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: { xs: "100%", sm: 520, md: 900 },
          // full screen on xs, card on sm+
          minHeight: { xs: "100vh", sm: "auto", md: "90vh" },
          borderRadius: { xs: 0, sm: "20px" },
          boxShadow: {
            xs: "none",
            sm: "0 24px 64px rgba(10,30,122,0.15)",
          },
          overflow: "hidden",
        }}
      >
        <LeftPanel />
        <LoginBody
          accountType={accountType}
          onAccountTypeChange={handleAccountTypeChange}
          email={email}
          onEmailChange={handleEmailChange}
          password={password}
          onPasswordChange={handlePasswordChange}
          showPassword={showPassword}
          onTogglePassword={handleTogglePassword}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </Box>
    </Box>
  );
}
