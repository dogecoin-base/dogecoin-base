"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, LineChart, Menu, X } from "lucide-react";

// ✨ Stars Background
function StarsBackground() {
  const [stars, setStars] = useState<{ left: number; top: number; size: number }[]>([]);

  useEffect(() => {
    const s = Array.from({ length: 80 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(s);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{ left: `${star.left}%`, top: `${star.top}%`, width: `${star.size}px`, height: `${star.size}px` }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, delay: Math.random() * 5 }}
        />
      ))}
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const roadmapItems = [
    { phase: "Phase 1", text: "Launch Meme Coin + Viral Campaign" },
    { phase: "Phase 2", text: "NFT Meme Collection & Community Contests" },
    { phase: "Phase 3", text: "Shibe AMAs, partnerships & livestreams" },
    { phase: "Phase 4", text: "Merch, IRL events & Meme Economy Expansion" },
  ];

  const faqItems = [
    { q: "🐕 Is this financial advice?", a: "Absolutely not. Unless your financial advisor is a Shiba Inu in sunglasses. 😎" },
    { q: "🚀 Will we reach the moon?", a: "Already there. 🌕 Just waiting for you to bring memes." },
    { q: "✨ What powers Dogecoin Base?", a: "Memes, shibes, and cosmic meme energy ⚡🐶" },
    { q: "🌐 Can I join?", a: "Always. Just bring your dankest memes and good vibes. 💫" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-black flex flex-col items-center justify-start p-6 text-center text-white">
      <StarsBackground />

      {/* Header */}
      <header className="w-full flex justify-between items-center mb-8 relative z-10">
        <h1 className="text-3xl font-extrabold text-yellow-400 drop-shadow-lg">🐶 Dogecoin Base</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-yellow-400">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <nav className={`md:flex gap-6 font-bold ${menuOpen ? "flex flex-col mt-4" : "hidden"}`}>
          <a href="#memeconomics" className="hover:text-yellow-300">Memeconomics</a>
          <a href="#roadmap" className="hover:text-yellow-300">Roadmap</a>
          <a href="#community" className="hover:text-yellow-300">Community</a>
          <a href="#faq" className="hover:text-yellow-300">FAQ</a>
        </nav>
      </header>

      {/* Hero */}
      <div className="relative w-44 h-44 mb-6 drop-shadow-2xl">
        <Image src="/logo.gif" alt="Dogecoin Base Logo" fill style={{ objectFit: "contain" }} />
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-2xl mb-4">
        The Meme Coin of Zora 🚀
      </h2>
      <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-6">
        Powered by Shibes. Fueled by Memes. Destined for the Moon 🌕
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12 relative z-10">
        <a href="https://zora.co/@dogecoin_base" target="_blank" rel="noopener noreferrer">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-3xl px-8 py-4 shadow-xl transition-transform hover:scale-105">
            🚀 Mint on Zora
          </button>
        </a>
        <a href="https://x.com/dogecoin_base1" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-600 rounded-3xl px-6 py-3 flex items-center gap-2 text-white shadow-lg hover:scale-105 transition-transform">
            <Twitter className="w-5 h-5" /> Twitter
          </button>
        </a>
        <a href="https://dexscreener.com/base/0xd3f134af33a937de19f9fcc4f8337eda224fa62e2cc561db85c420cf3033ac74" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 hover:bg-green-600 rounded-3xl px-6 py-3 flex items-center gap-2 text-white shadow-lg hover:scale-105 transition-transform">
            <LineChart className="w-5 h-5" /> DexScreener
          </button>
        </a>
      </div>

      {/* Memeconomics */}
      <section id="memeconomics" className="mt-16 max-w-3xl w-full bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-2xl relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">📊 Memeconomics</h2>
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <motion.span
              className="text-5xl font-extrabold text-yellow-400 drop-shadow-glow"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🐶 50%
            </motion.span>
            <p className="text-gray-200 font-semibold">Community Memes</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.span
              className="text-5xl font-extrabold text-blue-400 drop-shadow-glow"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              🔒 50%
            </motion.span>
            <p className="text-gray-200 font-semibold text-center">
              Instantly locked in DEX liquidity.<br />
              Remaining unlocks linearly over 5 years for the creator.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="mt-20 max-w-4xl w-full relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-yellow-400 text-center">🗺️ Roadmap to the Moon</h2>
        <div className="relative border-l-4 border-yellow-400 pl-8 space-y-12">
          {roadmapItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative"
            >
              <h3 className="text-xl font-bold text-white">{item.phase}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section id="community" className="mt-16 max-w-4xl w-full bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-2xl relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">💬 Community</h2>
        <p className="text-gray-200 mb-8 font-semibold">
          Dogecoin Base is not just a coin, it&apos;s a movement.<br />
          Our shibes create memes, art, and laughter every day. 🚀🌕
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 5 : -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <Image src={`/memes/meme${i}.gif`} alt={`Meme ${i}`} width={300} height={300} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-20 max-w-3xl w-full relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-yellow-400 text-center">❓ FAQ</h2>
        <div className="space-y-6">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-6 rounded-2xl shadow-lg border border-yellow-400/30"
            >
              <h3 className="text-xl font-bold text-yellow-300 flex items-center gap-2">{item.q}</h3>
              <p className="text-gray-200 mt-2">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

