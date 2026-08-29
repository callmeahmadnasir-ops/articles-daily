import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Calendar, MessageCircle } from "lucide-react";
import { SiFacebook, SiInstagram, SiTelegram, SiX, SiYoutube } from "react-icons/si";
import musicImage from "../assets/music-curator.svg";

const JOIN_URL = "https://soundcamps.com/get-paid-to-listen-to-music/";

export default function ArticlePaidMusicPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-white text-[#111]">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4 text-gray-500">
            <Link href="#" className="hover:text-blue-600"><SiFacebook className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-blue-600"><SiX className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-blue-600"><SiInstagram className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-blue-600"><SiYoutube className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-blue-600"><SiTelegram className="w-5 h-5" /></Link>
          </div>
          <div className="flex-1 text-center">
            <Link href="/" className="inline-block">
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight uppercase">Articles Daily</h1>
            </Link>
          </div>
          <div className="md:w-32" />
        </div>
        <div className="container mx-auto px-4 md:px-8 border-t border-gray-100">
          <nav className="flex justify-center py-3 text-sm font-medium uppercase tracking-wider">
            <Link href="/" className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700">Home</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-white py-10">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="container mx-auto px-4 md:px-8 max-w-3xl"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="mb-4">
            <span className="bg-purple-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">Online Earning</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Get Paid to Listen to Music in 2026: A Complete Guide for Playlist Curators
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 mb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold">A</div>
              <span className="text-[#111] font-medium">Admin</span>
            </div>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> August 29, 2026</span>
            <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> 12 Comments</span>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img src={musicImage} alt="Get paid to review music as a playlist curator" className="w-full object-cover" />
          </div>

          <div className="flex justify-center mb-8">
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#2b2b2b" }}
              className="inline-flex items-center justify-center text-white font-bold text-base px-12 py-4 rounded-full hover:opacity-80 transition-opacity"
            >
              JOIN NOW
            </a>
          </div>

          <div className="text-[#222] leading-relaxed text-[17px] space-y-5">
            <p>
              Music fans with an established Spotify playlist can turn their listening time into a small online income. The opportunity is designed for playlist curators: you receive songs that match your playlist&apos;s genres, listen carefully, and submit an honest review.
            </p>

            <h2 className="text-2xl font-bold pt-4">How the Opportunity Works</h2>
            <p>
              After applying, a moderation team reviews your playlist and audience. Approved curators receive tracks selected around their playlist genres. You listen to each song, provide useful feedback, and may choose to add a suitable track to your playlist. Adding a song is optional; the review should always reflect your genuine opinion.
            </p>

            <h2 className="text-2xl font-bold pt-4">Who Can Apply?</h2>
            <p>
              You need an active Spotify playlist with at least 1,000 real, organic followers. Fake followers, inactive playlists, or artificially inflated engagement can lead to rejection. Your playlist should also have a clear theme or genre so relevant music can be matched to it.
            </p>

            <h2 className="text-2xl font-bold pt-4">How Much Can You Earn?</h2>
            <p>
              Verified curators may earn up to $14 for an eligible song review. The actual amount can vary based on the playlist&apos;s size, activity, audience quality, and campaign availability. This should be treated as side income rather than a guaranteed full-time salary.
            </p>

            <h2 className="text-2xl font-bold pt-4">Step-by-Step Application Process</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Open the application using the JOIN NOW button above.</li>
              <li>Select your country and confirm that you manage an active Spotify playlist.</li>
              <li>Provide accurate playlist and follower information.</li>
              <li>Wait while the moderation team checks playlist quality and organic activity.</li>
              <li>If approved, review matched tracks and submit thoughtful feedback.</li>
            </ol>

            <h2 className="text-2xl font-bold pt-4">Tips to Improve Your Chances</h2>
            <p>
              Keep your playlist public, focused, and regularly updated. Build followers through real promotion, choose a recognizable playlist title and cover, remove tracks that no longer fit, and encourage genuine listeners to save and revisit it. A healthy playlist is more valuable than a large but inactive one.
            </p>

            <h2 className="text-2xl font-bold pt-4">Reviews Must Be Honest</h2>
            <p>
              Curators are paid for their time and feedback—not for promising positive coverage. Listen to the whole track, mention specific strengths or weaknesses, and never add music that does not fit your audience. Honest reviews help independent artists improve while protecting your listeners&apos; trust.
            </p>

            <h2 className="text-2xl font-bold pt-4">Payments and Expectations</h2>
            <p>
              Eligible earnings can be requested through the payout options available to your account. Availability and payment methods may differ by location. Before applying, review the current terms shown on the application page and remember that the number of tracks you receive is not guaranteed.
            </p>

            <h2 className="text-2xl font-bold pt-4">Final Thoughts</h2>
            <p>
              If you already manage a genuine Spotify playlist, reviewing new music can be a practical way to discover independent artists and earn extra money. Focus on growing an authentic audience first, submit useful reviews, and keep your expectations realistic.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </motion.article>
      </main>

      <footer className="bg-[#111] text-white mt-12 py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-3xl font-bold tracking-tight uppercase mb-1">Articles Daily</h2>
              <p className="text-gray-400 text-sm">The premier digital magazine for modern insights.</p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500">
            <p>&copy; 2026 Articles Daily. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}