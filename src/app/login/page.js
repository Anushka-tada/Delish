"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMail,
  IconLock,
  IconUser,
  IconEye,
  IconEyeOff,
  IconArrowRight,
} from "@tabler/icons-react";
import { userLoginServ, userRegisterServ } from "../../../services/auth.service";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Variants
const panelVariant = {
  hidden:  { opacity: 0, x: 32  },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, x: -32, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
}

const fieldVariant = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

 
// Reusable Input Field
 
function AuthField({ icon, label, type = "text", name, value, onChange, index, toggleable }) {
  const [show, setShow] = useState(false)
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  return (
    <motion.div
      className="auth-field-wrap"
      custom={index}
      variants={fieldVariant}
    >
      {/* Label floats up when active */}
      <label className={`auth-label ${active ? "active" : ""}`}>{label}</label>

      <div className={`auth-input-row ${focused ? "focused" : ""}`}>
        <span className="auth-input-icon">{icon}</span>
        <input
          name={name}
          type={toggleable ? (show ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="auth-input"
          autoComplete="off"
        />
        {toggleable && (
          <button
            type="button"
            className="auth-eye-btn"
            onClick={() => setShow(s => !s)}
            tabIndex={-1}
          >
            {show ? <IconEyeOff size={16} stroke={1.6} /> : <IconEye size={16} stroke={1.6} />}
          </button>
        )}
      </div>

      {/* Animated underline */}
      <motion.div
        className="auth-field-line"
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}

 
// Page
 
export default function Page() {

  const router = useRouter();

  const [tab, setTab] = useState("login") // "login" | "signup"
   const dispatch = useDispatch();

  const [loginForm,  setLoginForm]  = useState({ email: "", password: "" })
  const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "" })

  const handleLogin  = e => setLoginForm(f  => ({ ...f, [e.target.name]: e.target.value }))
  const handleSignup = e => setSignupForm(f => ({ ...f, [e.target.name]: e.target.value }))

 const submitLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await userLoginServ(loginForm);
    console.log(res);

    
       dispatch(loginSuccess(res?.data?.user));
         toast.success(
      `Welcome back, ${res?.data?.user?.username}! 🍽️`
    );

  
    // reset form
    setLoginForm({ email: "", password: "" });

       setTimeout(() => {
      router.push("/");
    }, 1200);

  } catch (err) {
    console.log(err);
  }
};

 const submitSignup = async (e) => {
  e.preventDefault();

  try {
    const res = await userRegisterServ({
      ...signupForm,
      role: "user"
    });

    console.log(res)
     dispatch(loginSuccess(res?.data?.user));;

      toast.success(
      "Account created successfully! ✨"
    );

    setSignupForm({
      name: "",
      email: "",
      password: "",
    });

    setTimeout(() => {
      router.push("/");
    }, 1200);

  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="auth-root">

      <div className="auth-left">
        {/* Blurred blobs */}
        <div className="auth-blob auth-blob-1" />
        <div className="auth-blob auth-blob-2" />
        <div className="auth-blob auth-blob-3" />

        <div className="auth-left-content">
          <Link href="/" className="auth-logo-wrap">
            <img src="/assets/logo.png" alt="Logo" className="auth-logo" />
          </Link>

          <motion.h2
            className="auth-left-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Experience Fine <span className="auth-left-accent">Dining</span><br />
            Like Never Before
          </motion.h2>

          <motion.p
            className="auth-left-para"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Sign in to manage your reservations, explore exclusive offers,
            and be the first to know about special events.
          </motion.p>

          {/* Perks list */}
          <motion.div
            className="auth-perks"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              "Priority table reservations",
              "Exclusive member offers",
              "Early access to special events",
            ].map((perk, i) => (
              <motion.div
                key={i}
                className="auth-perk-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="auth-perk-dot" />
                <span>{perk}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative food image strip */}
          <motion.div
            className="auth-img-strip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              "https://feelgoodfoodie.net/wp-content/uploads/2020/04/Caesar-Salad-TIMG.jpg",
              "https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/styles/large/public/recipe-thumbnail/116744-bd4b61de9035d59377d72c224a320cbd_Lava_Cake.jpg?itok=k_dLaW-U",
              "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Alfredo-dc662e3.jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                className="auth-img-circle"
                whileHover={{ scale: 1.08, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ marginLeft: i === 0 ? 0 : "-12px" }}
              >
                <img src={src} alt="" />
              </motion.div>
            ))}
            <span className="auth-img-label">Join 50,000+ food lovers</span>
          </motion.div>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="auth-right">

        {/* Back to home */}
        <Link href="/" className="auth-back-link">
          ← Back to Home
        </Link>

        <div className="auth-form-box">

          {/* Tab switcher */}
          <div className="auth-tabs">
            <button
              className={`auth-tab ${tab === "login" ? "active" : ""}`}
              onClick={() => setTab("login")}
            >
              Sign In
            </button>
            <button
              className={`auth-tab ${tab === "signup" ? "active" : ""}`}
              onClick={() => setTab("signup")}
            >
              Sign Up
            </button>
            {/* Sliding indicator */}
            <motion.div
              className="auth-tab-indicator"
              animate={{ x: tab === "login" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          </div>

          {/* Forms */}
          <AnimatePresence mode="wait">

            {/* ── LOGIN ── */}
            {tab === "login" && (
              <motion.div
                key="login"
                variants={panelVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="auth-form-sub">Welcome back — good to see you again.</p>

                  <form onSubmit={submitLogin} className="auth-form">
                    <AuthField
                      icon={<IconMail size={16} stroke={1.6} />}
                      label="Email Address"
                      type="email"
                      name="email"
                      value={loginForm.email}
                      onChange={handleLogin}
                      index={0}
                    />
                    <AuthField
                      icon={<IconLock size={16} stroke={1.6} />}
                      label="Password"
                      name="password"
                      value={loginForm.password}
                      onChange={handleLogin}
                      index={1}
                      toggleable
                    />

                    <div className="auth-forgot-row">
                      <a href="#" className="auth-forgot-link">Forgot password?</a>
                    </div>

                    <motion.button
                      type="submit"
                      className="auth-submit-btn"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    >
                      Sign In
                      <IconArrowRight size={18} stroke={2} />
                    </motion.button>
                  </form>

                  <p className="auth-switch-text">
                    Don't have an account?{" "}
                    <button className="auth-switch-btn" onClick={() => setTab("signup")}>
                      Sign up
                    </button>
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* ── SIGN UP ── */}
            {tab === "signup" && (
              <motion.div
                key="signup"
                variants={panelVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="auth-form-sub">Create your account — it's free and takes 30 seconds.</p>

                  <form onSubmit={submitSignup} className="auth-form">
                    <AuthField
                      icon={<IconUser size={16} stroke={1.6} />}
                      label="Full Name"
                      type="text"
                      name="name"
                      value={signupForm.name}
                      onChange={handleSignup}
                      index={0}
                    />
                    <AuthField
                      icon={<IconMail size={16} stroke={1.6} />}
                      label="Email Address"
                      type="email"
                      name="email"
                      value={signupForm.email}
                      onChange={handleSignup}
                      index={1}
                    />
                    <AuthField
                      icon={<IconLock size={16} stroke={1.6} />}
                      label="Password"
                      name="password"
                      value={signupForm.password}
                      onChange={handleSignup}
                      index={2}
                      toggleable
                    />

                    <p className="auth-terms">
                      By signing up you agree to our{" "}
                      <a href="#" className="auth-terms-link">Terms of Service</a>{" "}
                      and{" "}
                      <a href="#" className="auth-terms-link">Privacy Policy</a>.
                    </p>

                    <motion.button
                      type="submit"
                      className="auth-submit-btn"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    >
                      Create Account
                      <IconArrowRight size={18} stroke={2} />
                    </motion.button>
                  </form>

                  <p className="auth-switch-text">
                    Already have an account?{" "}
                    <button className="auth-switch-btn" onClick={() => setTab("login")}>
                      Sign in
                    </button>
                  </p>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}