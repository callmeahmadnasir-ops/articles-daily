import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MessageCircle, Calendar, User } from "lucide-react";
import {
  SiFacebook,
  SiX,
  SiInstagram,
  SiYoutube,
  SiTelegram,
} from "react-icons/si";

import onlineEarningImage from "@assets/generated_images/passive_income.jpg";

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

      {/* ARTICLE CONTENT */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group text-sm font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
              Business
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
            Online Earning in 2026: Real Ways to Make Money on the Internet
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold text-sm">
                A
              </div>
              <span className="text-foreground font-medium">Admin</span>
            </div>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> August 5, 2026</span>
            <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> 18 Comments</span>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7]">
            <img
              src={onlineEarningImage}
              alt="Online Earning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The internet has opened up countless legitimate ways to earn money from home. Whether you are a student, a housewife, or someone looking for extra income, there are real and proven methods that actually work in 2026.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">1. Freelancing</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Freelancing is one of the most reliable ways to earn online. Platforms like <strong>Fiverr</strong>, <strong>Upwork</strong>, and <strong>Freelancer</strong> connect skilled people with clients from around the world. You can offer services in writing, graphic design, video editing, web development, translation, and much more. Even beginners can start with small gigs and gradually build a strong profile.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. YouTube Channel</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Creating a YouTube channel on a topic you are passionate about — cooking, tech, vlogging, education — can generate income through ads, sponsorships, and memberships. It takes time to grow, but once your channel reaches 1,000 subscribers and 4,000 watch hours, you can apply for monetization. Many Pakistani YouTubers are earning in dollars consistently from this method.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. Blogging</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you enjoy writing, starting a blog is a great long-term investment. Write about topics you know well — health, finance, education, travel. Once your blog gets traffic, you can earn through Google AdSense, affiliate marketing, and sponsored posts. Platforms like WordPress make it easy to get started without technical knowledge.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. Selling Digital Products</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Digital products like eBooks, templates, online courses, and presets can be created once and sold unlimited times. Platforms like <strong>Gumroad</strong> and <strong>Teachable</strong> make it easy to sell your knowledge. If you have expertise in any field — cooking, design, finance, language — you can package it into a product and earn passively.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. Affiliate Marketing</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Affiliate marketing means promoting other companies' products and earning a commission for every sale you generate. Amazon Associates, Daraz Affiliate, and thousands of other programs are available. You can promote products through a blog, YouTube channel, or social media. No need to hold stock or deal with customers.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">6. Graphic Design & Video Editing</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Businesses and content creators always need quality visuals. If you know tools like <strong>Adobe Photoshop</strong>, <strong>Illustrator</strong>, <strong>Canva Pro</strong>, or <strong>Premiere Pro</strong>, you can find steady work online. Logos, thumbnails, social media posts, and promotional videos are in constant demand.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">7. Online Teaching & Tutoring</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you are strong in any subject — maths, English, science, coding — you can teach students online through <strong>Zoom</strong> or platforms like <strong>Preply</strong>. Many parents are looking for online tutors for their children, and you can set your own hours and rates.
            </p>

            <div className="bg-secondary/50 border border-border rounded-xl p-6 mt-10 mb-8">
              <h3 className="text-lg font-bold mb-2">Key Takeaway</h3>
              <p className="text-muted-foreground">
                There is no magic shortcut to making money online. But with the right skill, consistency, and patience, the methods above can build real, sustainable income. Start with one method, learn it properly, and scale from there.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
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
