import React, { useState } from "react";
import { Box } from "@mui/material";

import { LeftPanel, LoginBody } from "./LoginBody";
import { RegisterBody } from "./RegisterBody";
import { login, register } from "../../api/jobApi";

export default function Login() {
  // ── View toggle ───────────────────────────────────────────────────────────
  const [isRegistering, setIsRegistering] = useState(false);

  // ── Shared state ──────────────────────────────────────────────────────────
  const [accountType, setAccountType] = useState("candidate");

  // ── Login state ───────────────────────────────────────────────────────────
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  // ── Register state ────────────────────────────────────────────────────────
  const [formData, setFormData] = useState({});
  const [registerLoading, setRegisterLoading] = useState(false);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleAccountTypeChange = (_event, newType) => {
    if (newType !== null) {
      setAccountType(newType);
      setFormData({}); // reset register form on type switch
    }
  };

  const handleSwitch = (toRegister) => {
    setIsRegistering(toRegister);
    // reset both forms on switch
    setEmail("");
    setPassword("");
    setFormData({});
  };

  const handleLoginSubmit = async (accountType) => {
    if (!email || !password) return;
    setLoginLoading(true);
    const payload = {
      email,
      password,
    };
    try {
      await new Promise((res) => setTimeout(res, 1200));
      const response = await login(accountType, payload);
    } catch (err) {
      console.error("Login failed:", err);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleRegisterSubmit = async (type) => {
    const mandatoryKeys =
      type === "candidate"
        ? ["name", "email", "password"]
        : ["name", "email", "password"];

    const missing = mandatoryKeys.filter((k) => !formData[k]?.trim());
    if (missing.length > 0) {
      alert(`Please fill in: ${missing.join(", ")}`);
      return;
    }

    setRegisterLoading(true);
    console.log('formData',formData);
    

    try {
      // TODO: replace with real API call
      // await axiosInstance.post("/register", { accountType: type, ...formData });
      await new Promise((res) => setTimeout(res, 1200));
      const response = await register(accountType,formData);
      console.log('resp',response);
      // console.log("Register submitted:", { accountType: type, ...formData });
      handleSwitch(false); // go back to login after success
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
    } finally {
      setRegisterLoading(false);
    }
  };

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // ── Render ────────────────────────────────────────────────────────────────
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
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: { xs: "100%", sm: 520, md: 900 },
          minHeight: { xs: "100vh", sm: "auto" },
          borderRadius: { xs: 0, sm: "20px" },
          boxShadow: { xs: "none", sm: "0 24px 64px rgba(10,30,122,0.15)" },
          overflow: "hidden",
        }}
      >
        <LeftPanel isRegistering={isRegistering} />

        {isRegistering ? (
          <RegisterBody
            accountType={accountType}
            onAccountTypeChange={handleAccountTypeChange}
            formData={formData}
            onFieldChange={handleFieldChange}
            onSubmit={handleRegisterSubmit}
            loading={registerLoading}
            onLoginClick={() => handleSwitch(false)}
          />
        ) : (
          <LoginBody
            accountType={accountType}
            onAccountTypeChange={handleAccountTypeChange}
            email={email}
            onEmailChange={(e) => setEmail(e.target.value)}
            password={password}
            onPasswordChange={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword((p) => !p)}
            onSubmit={handleLoginSubmit}
            loading={loginLoading}
            onRegisterClick={() => handleSwitch(true)}
          />
        )}
      </Box>
    </Box>
  );
}
