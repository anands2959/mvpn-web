'use client';

import { Shield, Zap, Globe, Lock, Smartphone, CheckCircle, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  }
};

const glowVariants: Variants = {
  initial: { opacity: 0.5, scale: 0.8 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [0.8, 1.1, 0.8],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradients */}
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-indigo-300 mb-4 hover:bg-white/5 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New Generation VPN Protocol
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.1]"
          >
            Secure Your <br />
            <span className="text-gradient drop-shadow-2xl">Digital Life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the future of privacy with mVPN. Ultra-fast speeds, military-grade encryption, and seamless global access.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)] flex items-center gap-2 group"
            >
              Download for Android
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-panel text-white font-bold text-lg rounded-full transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex items-center gap-8 md:gap-16 text-gray-500 border-t border-white/5 pt-8"
          >
            <StatItem value="10M+" label="Downloads" />
            <div className="w-px h-12 bg-white/10" />
            <StatItem value="50+" label="Locations" />
            <div className="w-px h-12 bg-white/10" />
            <StatItem value="4.9" label="Rating" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">Why Choose mVPN?</h2>
            <p className="text-gray-400 text-lg">Everything you need for a secure internet experience</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              title="Blazing Fast"
              desc="Built on WireGuard protocol for instant connections and lightning speeds."
              delay={0}
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-indigo-400" />}
              title="Bank-Grade Security"
              desc="ChaCha20 encryption ensures your data remains impossible to crack."
              delay={0.1}
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-cyan-400" />}
              title="Global Access"
              desc="Access content from anywhere with our distributed server network."
              delay={0.2}
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-emerald-400" />}
              title="No Logs Policy"
              desc="We never track, store, or share your online activities. Your business is yours."
              delay={0.3}
            />
            <FeatureCard
              icon={<Smartphone className="w-8 h-8 text-rose-400" />}
              title="Easy to Use"
              desc="One-tap connection. Simple, intuitive interface designed for everyone."
              delay={0.4}
            />
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-blue-400" />}
              title="Kill Switch"
              desc="Automatic internet cutoff if VPN drops to prevent data leaks."
              delay={0.5}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-bold text-white mb-1">{value}</span>
      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">{label}</span>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string, delay?: number }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors duration-300 border border-white/5 hover:border-indigo-500/30 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  )
}
