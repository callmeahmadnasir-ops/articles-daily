import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, Calendar } from "lucide-react";
import {
  SiFacebook,
  SiX,
  SiInstagram,
  SiYoutube,
  SiTelegram,
} from "react-icons/si";

import watchEarnImage from "@assets/generated_images/watch_earn_money.jpg";

export default function ArticlePage() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans text-foreground bg-background">
      {/* HEADER */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4 text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors"><SiFacebook className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><SiX className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><SiInstagram className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><SiYoutube className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><SiTelegram className="w-5 h-5" /></Link>
          </div>
          <div className="flex-1 text-center">
            <Link href="/" className="inline-block">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-foreground">
                Articles Daily
              </h1>
            </Link>
          </div>
          <div className="md:w-32" />
        </div>
        <div className="container mx-auto px-4 md:px-8 border-t border-border/50">
          <nav className="flex items-center justify-center gap-8 py-3 text-sm font-medium uppercase tracking-wider">
            <Link href="/" className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full transition-transform hover:scale-105 shadow-sm">
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* ARTICLE */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back */}
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group text-sm font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Category */}
          <div className="mb-5">
            <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
              Online Earning
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Earn Money by Watching Videos: Complete Guide for Beginners in 2026
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                A
              </div>
              <span className="text-foreground font-semibold">Admin</span>
            </div>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> August 5, 2026</span>
            <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> 24 Comments</span>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] shadow-sm">
            <img
              src={watchEarnImage}
              alt="Earn Money by Watching Videos"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Intro */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 border-l-4 border-primary pl-5">
            Did you know you can get paid simply for watching videos online? While it will not make you rich overnight, watching videos for money is a real and legitimate way to earn extra income in your spare time. This guide covers exactly how it works, which platforms are genuine, and how to maximize your earnings in 2026.
          </p>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              How Does Earning by Watching Videos Work?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Various platforms and companies pay users to watch video content for research, advertising feedback, and engagement data. When you watch a video on these platforms, you are essentially helping advertisers understand their audience, test promotional content, or boost engagement metrics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Payment is typically made in the form of cash, gift cards, PayPal transfers, or platform-specific points that can be redeemed for real money. The amount per video is small, but it adds up with consistent effort.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              Legitimate Platforms to Earn by Watching Videos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Below are well-known, verified platforms where you can earn money by watching video content:
            </p>
            <div className="space-y-4">
              {[
                { name: "Swagbucks", desc: "One of the most popular rewards platforms globally. Earn SB points by watching videos, completing tasks, and shopping online. Points can be exchanged for PayPal cash or gift cards." },
                { name: "InboxDollars", desc: "A US-based platform that pays members directly in cash for watching TV clips, movie trailers, and sponsored videos. Minimum payout is $30 via check or gift card." },
                { name: "MyPoints", desc: "Similar to Swagbucks, MyPoints rewards you for watching videos, taking surveys, and online shopping. Points are redeemable for gift cards from major retailers." },
                { name: "Perk TV", desc: "A mobile app that rewards you for streaming video content continuously. It runs in the background on your phone, making it one of the most passive income options available." },
                { name: "Viggle", desc: "An entertainment rewards app that pays you for watching live TV and on-demand content. Simply check in while you watch and earn points redeemable for real rewards." },
              ].map((p) => (
                <div key={p.name} className="bg-card border border-card-border rounded-xl p-5">
                  <h3 className="font-bold text-foreground mb-1">{p.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              Earn More: Creating a YouTube Channel
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While watching videos pays modestly, creating videos is where significant income potential lies. Starting a YouTube channel and enabling monetization can generate consistent monthly revenue once your channel grows.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Reach 1,000 subscribers and 4,000 watch hours to qualify for the YouTube Partner Program",
                "Earn through ad revenue, channel memberships, and Super Thanks donations",
                "Top Pakistani creators earn between $500 to $10,000 per month depending on niche and views",
                "Niche topics like tech tutorials, cooking, finance, and education perform particularly well",
                "Consistency and video quality matter more than expensive equipment when starting out",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              How Much Can You Realistically Earn?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Setting realistic expectations is important. Here is a general breakdown of earnings from video-watching platforms:
            </p>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold text-foreground">Method</th>
                    <th className="text-left px-5 py-3 font-semibold text-foreground">Estimated Monthly Earnings</th>
                    <th className="text-left px-5 py-3 font-semibold text-foreground">Time Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Swagbucks / InboxDollars", "$5 – $25", "1-2 hrs/day"],
                    ["Perk TV (passive)", "$3 – $15", "Runs in background"],
                    ["YouTube Channel (small)", "$50 – $300", "5-10 hrs/week"],
                    ["YouTube Channel (established)", "$500 – $5,000+", "10-20 hrs/week"],
                  ].map(([method, earning, time], i) => (
                    <tr key={i} className="bg-card">
                      <td className="px-5 py-3 font-medium text-foreground">{method}</td>
                      <td className="px-5 py-3 text-muted-foreground">{earning}</td>
                      <td className="px-5 py-3 text-muted-foreground">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
              Tips to Maximize Your Earnings
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Sign up for multiple platforms simultaneously to increase total earning opportunities",
                "Use a dedicated device or secondary phone to run passive video apps in the background",
                "Always cash out earnings at the minimum threshold to avoid losing points",
                "Focus on referral programs — most platforms offer bonuses for inviting friends",
                "Track your time versus earnings to ensure the effort is worthwhile for you",
                "Avoid any platform that asks for upfront payment — legitimate platforms are always free to join",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
              Watch Out for Scams
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The online earning space attracts fraudulent schemes. Protect yourself by following these guidelines:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Never pay a registration or activation fee to join a video-watching platform",
                "Be skeptical of platforms promising extremely high earnings per video",
                "Verify a platform's reviews on Trustpilot or Reddit before investing time",
                "Never share your banking details or national ID with unverified platforms",
                "If an offer sounds too good to be true, it almost certainly is",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          {/* Conclusion Box */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-7 mb-10">
            <h3 className="text-lg font-bold mb-3 text-foreground">Final Thoughts</h3>
            <p className="text-muted-foreground leading-relaxed">
              Earning money by watching videos is a genuine way to generate supplementary income during your free time. While it will not replace a full-time income on its own, combining multiple platforms with a growing YouTube channel can build a meaningful and sustainable revenue stream over time. Start small, stay consistent, and always prioritize platforms with a proven track record.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-secondary/40 border border-border rounded-xl px-6 py-4 mb-10 text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> This article is provided for informational and educational purposes only. Earnings mentioned are estimates based on publicly available data and may vary depending on your location, effort, and platform policies. Always conduct your own research before joining any online earning platform.
          </div>

          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white mt-16 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-3xl font-bold tracking-tight uppercase mb-2">Articles Daily</h2>
              <p className="text-neutral-400 text-sm">The premier digital magazine for modern insights.</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><SiFacebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><SiX className="w-4 h-4" /></Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><SiInstagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><SiYoutube className="w-5 h-5" /></Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><SiTelegram className="w-5 h-5" /></Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
            <p>&copy; 2026 Articles Daily. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
