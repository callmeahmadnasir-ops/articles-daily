import { motion } from "framer-motion";
import { Link } from "wouter";
import { Search, MessageCircle } from "lucide-react";
import { 
  SiFacebook, 
  SiX, 
  SiInstagram, 
  SiYoutube, 
  SiTelegram 
} from "react-icons/si";

import cryptoImage from "@assets/generated_images/crypto_finance.jpg";
import productivityImage from "@assets/generated_images/productivity_hacks.jpg";
import pakistanImage from "@assets/generated_images/pakistan_tech.jpg";
import passiveIncomeImage from "@assets/generated_images/passive_income.jpg";

// Mock Data
const FEATURED_ARTICLE = {
  id: 1,
  title: "The Future of Cryptocurrency in 2026: How AI is Reshaping Digital Finance",
  excerpt: "As artificial intelligence deepens its integration into blockchain technology, the landscape of decentralized finance is undergoing a monumental shift. Discover the trends defining the next era of wealth.",
  category: "Finance",
  author: "Admin",
  date: "June 17, 2026",
  comments: 12,
  image: cryptoImage
};

const ARTICLES = [
  {
    id: 2,
    title: "10 Productivity Hacks Every Remote Worker Should Know in 2026",
    excerpt: "With remote work now the enduring standard, optimizing your environment and workflow is critical. These tested strategies will supercharge your daily output.",
    category: "Tech",
    author: "Admin",
    date: "June 10, 2026",
    comments: 8,
    image: productivityImage
  },
  {
    id: 3,
    title: "Pakistan's Tech Startup Scene: Why the World is Watching",
    excerpt: "A booming young population and increased foreign venture capital have turned local startups into global contenders. Here's what's driving the unprecedented growth.",
    category: "Startups",
    author: "Admin",
    date: "June 5, 2026",
    comments: 24,
    image: pakistanImage
  },
  {
    id: 4,
    title: "How to Build Passive Income Online: A Beginner's Guide",
    excerpt: "From digital products to automated drop-servicing, creating self-sustaining revenue streams is more accessible than ever. Start building your portfolio today.",
    category: "Business",
    author: "Admin",
    date: "May 28, 2026",
    comments: 5,
    image: passiveIncomeImage
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
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
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tech</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Finance</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Startups</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Lifestyle</Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* Featured Article */}
          <motion.article 
            variants={itemVariants}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-card-border"
          >
            <Link href="#" className="block aspect-[16/10] lg:aspect-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={FEATURED_ARTICLE.image} 
                alt={FEATURED_ARTICLE.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                  {FEATURED_ARTICLE.category}
                </span>
              </div>
            </Link>
            <div className="p-6 lg:p-10 flex flex-col justify-center">
              <Link href="#">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors text-balance">
                  {FEATURED_ARTICLE.title}
                </h2>
              </Link>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {FEATURED_ARTICLE.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
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
            </div>
          </motion.article>

          {/* Grid Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <motion.article 
                key={article.id}
                variants={itemVariants}
                className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-card-border hover:-translate-y-1"
              >
                <Link href="#" className="block aspect-[16/10] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-1">
                  <Link href="#">
                    <h3 className="text-xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mt-auto pt-4 border-t border-border">
                    <span className="text-foreground">{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
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
