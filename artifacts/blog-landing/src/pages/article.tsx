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

import articleImage from "@assets/32cf39ff-ecbd-42a9-b4ea-c1f0f767e228-1024x683-1_1785945626339.png";

export default function ArticlePage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-white text-[#111]">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4 text-gray-500">
            <Link href="#" className="hover:text-blue-600 transition-colors"><SiFacebook className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-blue-600 transition-colors"><SiX className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-blue-600 transition-colors"><SiInstagram className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-blue-600 transition-colors"><SiYoutube className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-blue-600 transition-colors"><SiTelegram className="w-5 h-5" /></Link>
          </div>
          <div className="flex-1 text-center">
            <Link href="/" className="inline-block">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#111]">
                Articles Daily
              </h1>
            </Link>
          </div>
          <div className="md:w-32" />
        </div>
        <div className="container mx-auto px-4 md:px-8 border-t border-gray-100">
          <nav className="flex items-center justify-center gap-8 py-3 text-sm font-medium uppercase tracking-wider">
            <Link href="/" className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition-colors shadow-sm">
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* ARTICLE */}
      <main className="flex-1 bg-white py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-4 md:px-8 max-w-3xl"
        >
          {/* Back */}
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8 group text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
              Online Earning
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#111] mb-5">
            Earn Money by Watching Videos: Complete Guide for Beginners in 2026
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 mb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">A</div>
              <span className="text-[#111] font-medium">Admin</span>
            </div>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> August 5, 2026</span>
            <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> 24 Comments</span>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={articleImage}
              alt="Earn Money by Watching Videos"
              className="w-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="text-[#222] leading-relaxed text-[17px] space-y-5">

            <p>
              Did you know you can get paid simply for watching videos online? While it will not make you rich overnight, watching videos for money is a real and legitimate way to earn extra income in your spare time. This guide covers exactly how it works, which platforms are genuine, and how to maximize your earnings in 2026.
            </p>

            <h2 className="text-2xl font-bold text-[#111] pt-4">How Does Earning by Watching Videos Work?</h2>

            <p>
              Various platforms and companies pay users to watch video content for research, advertising feedback, and engagement data. When you watch a video on these platforms, you are essentially helping advertisers understand their audience, test promotional content, or boost engagement metrics.
            </p>

            <p>
              Payment is typically made in the form of cash, gift cards, PayPal transfers, or platform-specific points that can be redeemed for real money. The amount per video is small, but it adds up with consistent effort.
            </p>

            <h2 className="text-2xl font-bold text-[#111] pt-4">Legitimate Platforms to Earn by Watching Videos</h2>

            <p>Below are well-known, verified platforms where you can earn money by watching video content:</p>

            <p>
              <strong>Swagbucks</strong> — One of the most popular rewards platforms globally. Earn SB points by watching videos, completing tasks, and shopping online. Points can be exchanged for PayPal cash or gift cards.
            </p>

            <p>
              <strong>InboxDollars</strong> — A US-based platform that pays members directly in cash for watching TV clips, movie trailers, and sponsored videos. Minimum payout is $30 via check or gift card.
            </p>

            <p>
              <strong>MyPoints</strong> — Similar to Swagbucks, MyPoints rewards you for watching videos, taking surveys, and online shopping. Points are redeemable for gift cards from major retailers.
            </p>

            <p>
              <strong>Perk TV</strong> — A mobile app that rewards you for streaming video content continuously. It runs in the background on your phone, making it one of the most passive income options available.
            </p>

            <p>
              <strong>Viggle</strong> — An entertainment rewards app that pays you for watching live TV and on-demand content. Simply check in while you watch and earn points redeemable for real rewards.
            </p>

            {/* Join Now Button 1 */}
            <div className="my-6 flex justify-center">
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-2xl">▶</span>
                Join Now — Start Earning Today
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Free</span>
              </a>
            </div>

            <h2 className="text-2xl font-bold text-[#111] pt-4">Earn More: Creating a YouTube Channel</h2>

            <p>
              While watching videos pays modestly, creating videos is where significant income potential lies. Starting a YouTube channel and enabling monetization can generate consistent monthly revenue once your channel grows.
            </p>

            <p>
              To qualify for the YouTube Partner Program, you need to reach 1,000 subscribers and 4,000 watch hours. After that, you can earn through ad revenue, channel memberships, and Super Thanks donations. Many Pakistani creators earn between $500 to $10,000 per month depending on their niche and views. Topics like tech tutorials, cooking, finance, and education perform particularly well. Consistency and video quality matter more than expensive equipment when starting out.
            </p>

            <h2 className="text-2xl font-bold text-[#111] pt-4">How Much Can You Realistically Earn?</h2>

            <p>
              Setting realistic expectations is important. From video-watching platforms like Swagbucks or InboxDollars, you can earn around $5 to $25 per month by spending 1 to 2 hours daily. Passive apps like Perk TV can add another $3 to $15 per month running in the background. A small YouTube channel can bring in $50 to $300 per month, while an established channel with a loyal audience can earn $500 to $5,000 or more.
            </p>

            <h2 className="text-2xl font-bold text-[#111] pt-4">Tips to Maximize Your Earnings</h2>

            <p>
              Sign up for multiple platforms at the same time to increase your total earning opportunities. Use a dedicated device or secondary phone to run passive video apps in the background. Always cash out your earnings at the minimum threshold to avoid losing points. Focus on referral programs since most platforms offer bonuses for inviting friends. Track your time versus earnings to make sure the effort is worthwhile for you.
            </p>

            <h2 className="text-2xl font-bold text-[#111] pt-4">Watch Out for Scams</h2>

            <p>
              The online earning space attracts fraudulent schemes. Never pay a registration or activation fee to join a video-watching platform. Be skeptical of platforms promising extremely high earnings per video. Verify a platform's reviews on Trustpilot or Reddit before investing your time. Never share your banking details or national ID with unverified platforms. If an offer sounds too good to be true, it almost certainly is.
            </p>

            <h2 className="text-2xl font-bold text-[#111] pt-4">Final Thoughts</h2>

            <p>
              Earning money by watching videos is a genuine way to generate supplementary income during your free time. While it will not replace a full-time income on its own, combining multiple platforms with a growing YouTube channel can build a meaningful and sustainable revenue stream over time. Start small, stay consistent, and always prioritize platforms with a proven track record.
            </p>

          </div>

          {/* Join Now Button 2 */}
          <div className="mt-8 mb-2">
            <div className="border-2 border-blue-600 rounded-2xl p-6 text-center bg-blue-50">
              <p className="text-[#111] font-bold text-xl mb-1">Ready to Start Earning?</p>
              <p className="text-gray-500 text-sm mb-5">Join thousands of people already making money by watching videos online.</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold text-base px-10 py-3.5 rounded-full shadow hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Join Now — It's Free
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#111] text-white mt-12 py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-3xl font-bold tracking-tight uppercase mb-1">Articles Daily</h2>
              <p className="text-gray-400 text-sm">The premier digital magazine for modern insights.</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><SiFacebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><SiX className="w-4 h-4" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><SiInstagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><SiYoutube className="w-5 h-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><SiTelegram className="w-5 h-5" /></Link>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
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
