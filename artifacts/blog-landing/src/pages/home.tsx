import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { Search, MessageCircle } from "lucide-react";
import {
  SiFacebook,
  SiX,
  SiInstagram,
  SiYoutube,
  SiTelegram,
} from "react-icons/si";

import watchEarnImage from "@assets/32cf39ff-ecbd-42a9-b4ea-c1f0f767e228-1024x683-1_1785945626339.png";
import ytSubsImage from "@assets/image_search_1787834502757_1787834520249.jpg";
import musicImage from "../assets/music-curator.svg";

const NEWEST_ARTICLE = {
  id: 3,
  title: "Get Paid to Listen to Music in 2026: A Complete Guide for Playlist Curators",
  excerpt:
    "Own a Spotify playlist with a real audience? Learn how playlist curators can review new songs, support independent artists, and earn extra money.",
  category: "Online Earning",
  author: "Admin",
  date: "August 29, 2026",
  comments: 12,
  image: musicImage,
  slug: "/get-paid-to-listen-to-music",
};

const SECOND_ARTICLE = {
  id: 2,
  title: "How to Get Free YouTube Subscribers in 2026: Best Websites and Proven Methods",
  excerpt:
    "Struggling to reach 1,000 subscribers? Discover the best free websites and organic methods that genuinely help you grow your YouTube channel — no money needed.",
  category: "YouTube Growth",
  author: "Admin",
  date: "August 27, 2026",
  comments: 18,
  image: ytSubsImage,
  slug: "/article-youtube-subscribers",
};

const FEATURED_ARTICLE = {
  id: 1,
  title: "Earn Money by Watching Videos: Complete Guide for Beginners in 2026",
  excerpt:
    "Did you know you can get paid just for watching videos online? From YouTube tasks to paid platforms, this complete guide explains exactly how it works, which platforms are legitimate, and how much you can realistically earn.",
  category: "Online Earning",
  author: "Admin",
  date: "August 5, 2026",
  comments: 24,
  image: watchEarnImage,
  slug: "/article",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans text-foreground bg-background">
      {/* HEADER */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Social Icons - Left */}
          <div className="hidden md:flex items-center gap-4 text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors"><SiFacebook className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><SiX className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><SiInstagram className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><SiYoutube className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><SiTelegram className="w-5 h-5" /></Link>
          </div>

          {/* Logo - Center */}
          <div className="flex-1 text-center">
            <Link href="/" className="inline-block">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase text-foreground">
                Articles Daily
              </h1>
            </Link>
          </div>

          {/* Search - Right */}
          <div className="flex justify-end md:w-32">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="container mx-auto px-4 md:px-8 border-t border-border/50">
          <nav className="flex items-center justify-center gap-8 py-3 text-sm font-medium uppercase tracking-wider">
            <Link href="/" className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full transition-transform hover:scale-105 shadow-sm">
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-10 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          <motion.article
            variants={itemVariants}
            className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-card-border"
          >
            <Link href={NEWEST_ARTICLE.slug} className="block relative overflow-hidden aspect-[16/9]">
              <img
                src={NEWEST_ARTICLE.image}
                alt={NEWEST_ARTICLE.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-purple-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                  {NEWEST_ARTICLE.category}
                </span>
              </div>
            </Link>
            <div className="p-6 lg:p-8">
              <Link href={NEWEST_ARTICLE.slug}>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors cursor-pointer">
                  {NEWEST_ARTICLE.title}
                </h2>
              </Link>
              <p className="text-muted-foreground text-base mb-5 leading-relaxed">{NEWEST_ARTICLE.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold">A</div>
                  <span className="text-foreground">{NEWEST_ARTICLE.author}</span>
                </div>
                <span>•</span><span>{NEWEST_ARTICLE.date}</span><span>•</span>
                <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" />{NEWEST_ARTICLE.comments}</span>
              </div>
              <Link href={NEWEST_ARTICLE.slug} className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90">
                Read Article
              </Link>
            </div>
          </motion.article>

          {/* Newest article first — Free YouTube Subscribers (top) */}
          <motion.article
            variants={itemVariants}
            className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-card-border"
          >
            <Link href={SECOND_ARTICLE.slug} className="block relative overflow-hidden aspect-[16/9]">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={SECOND_ARTICLE.image}
                alt={SECOND_ARTICLE.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                  {SECOND_ARTICLE.category}
                </span>
              </div>
            </Link>

            <div className="p-6 lg:p-8">
              <Link href={SECOND_ARTICLE.slug}>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors cursor-pointer">
                  {SECOND_ARTICLE.title}
                </h2>
              </Link>
              <p className="text-muted-foreground text-base mb-5 leading-relaxed">
                {SECOND_ARTICLE.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold">
                    A
                  </div>
                  <span className="text-foreground">{SECOND_ARTICLE.author}</span>
                </div>
                <span>•</span>
                <span>{SECOND_ARTICLE.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {SECOND_ARTICLE.comments}
                </span>
              </div>

              <Link
                href={SECOND_ARTICLE.slug}
                className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Read Article
              </Link>
            </div>
          </motion.article>

          {/* Older article — Earn Money by Watching Videos (below) */}
          <motion.article
            variants={itemVariants}
            className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-card-border"
          >
            {/* Full-width Image */}
            <Link href={FEATURED_ARTICLE.slug} className="block relative overflow-hidden aspect-[16/9]">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={FEATURED_ARTICLE.image}
                alt={FEATURED_ARTICLE.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                  {FEATURED_ARTICLE.category}
                </span>
              </div>
            </Link>

            {/* Text below image */}
            <div className="p-6 lg:p-8">
              <Link href={FEATURED_ARTICLE.slug}>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors cursor-pointer">
                  {FEATURED_ARTICLE.title}
                </h2>
              </Link>
              <p className="text-muted-foreground text-base mb-5 leading-relaxed">
                {FEATURED_ARTICLE.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold">
                    A
                  </div>
                  <span className="text-foreground">{FEATURED_ARTICLE.author}</span>
                </div>
                <span>•</span>
                <span>{FEATURED_ARTICLE.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {FEATURED_ARTICLE.comments}
                </span>
              </div>

              <Link
                href={FEATURED_ARTICLE.slug}
                className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Read Article
              </Link>
            </div>
          </motion.article>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white mt-12 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-3xl font-bold tracking-tight uppercase mb-2">
                Articles Daily
              </h2>
              <p className="text-neutral-400 text-sm">
                The premier digital magazine for modern insights.
              </p>
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
