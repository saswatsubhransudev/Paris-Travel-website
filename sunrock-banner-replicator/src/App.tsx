/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, Menu } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-start p-4 md:p-6 lg:p-8 gap-12 selection:bg-neutral-800 selection:text-white">
      {/* Banner Section - Fixed 900px height container */}
      <div className="w-full max-w-7xl h-[900px] bg-black text-white font-sans flex flex-col justify-between p-6 md:p-8 lg:p-10 border border-white/10 rounded-2xl relative overflow-hidden shrink-0">
        
        {/* Navigation Header */}
        <header id="header-nav" className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          
          {/* Institutional-style Brand Header */}
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white mb-0.5">
              JOURNEYS
            </span>
            <div className="h-[1px] w-12 bg-white mb-1"></div>
            <span className="text-[8px] tracking-[0.15em] uppercase text-neutral-500 font-medium">
              Paris Curated Experiences
            </span>
          </div>

          {/* Center Menu Navigation Links - Single line without wrapping, styled as transparent blur capsule */}
          <nav id="nav-links" className="flex flex-row items-center justify-center gap-x-4 text-[9px] tracking-[0.2em] uppercase font-medium bg-white/[0.04] backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full overflow-x-auto whitespace-nowrap scrollbar-none">
            <a
              id="nav-home"
              href="#home"
              className="text-white hover:opacity-100 transition-opacity pb-0.5 border-b border-white"
            >
              Home
            </a>
            <span className="text-neutral-700">/</span>
            <a
              id="nav-solutions"
              href="#solutions"
              className="text-neutral-400 hover:text-white hover:opacity-100 transition-colors pb-0.5"
            >
              Destinations
            </a>
            <span className="text-neutral-700">/</span>
            <a
              id="nav-projects"
              href="#projects"
              className="text-neutral-400 hover:text-white hover:opacity-100 transition-colors pb-0.5"
            >
              Tours
            </a>
            <span className="text-neutral-700">/</span>
            <a
              id="nav-about"
              href="#about"
              className="text-neutral-400 hover:text-white hover:opacity-100 transition-colors pb-0.5"
            >
              About us
            </a>
            <span className="text-neutral-700">/</span>
            <a
              id="nav-contact"
              href="#contact"
              className="text-neutral-400 hover:text-white hover:opacity-100 transition-colors pb-0.5"
            >
              Contact
            </a>
          </nav>

          {/* Right Side Header Options */}
          <div id="header-actions" className="flex items-center">
            <button
              id="btn-open-menu"
              className="flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              Open menu
              <Menu className="w-3 h-3" />
            </button>
          </div>
        </header>

        {/* Main Hero Copy Container - Shifted down with top spacing to allow breathing room and avoid card overlap */}
        <main id="hero-main" className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mt-12 md:mt-16 mb-auto py-4">
          {/* Priority Badge */}
          <span className="inline-block px-2.5 py-1 border border-white/25 text-[8px] tracking-[0.25em] uppercase font-bold mb-5 text-neutral-300 bg-neutral-950">
            Exclusive European Collection
          </span>

          {/* Headline (54px & Medium weight) */}
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-[54px] font-medium tracking-[-0.03em] text-white leading-[1.1] max-w-3xl uppercase">
            Discover the Magic of Paris with Unforgettable Journeys
          </h1>
          
          {/* Vertical divider line and subtext (Reduced size and regular weight) */}
          <div className="flex gap-4 mt-4 justify-center text-left max-w-xl">
            <div className="w-[1.5px] bg-white shrink-0 self-stretch"></div>
            <p id="hero-subtext" className="text-neutral-400 text-xs font-normal leading-relaxed tracking-normal">
              From iconic landmarks to hidden streets, we create personalized Paris experiences that turn every trip into a lifelong memory.
            </p>
          </div>

          {/* CTA Button */}
          <div id="hero-cta" className="mt-5">
            <button
              id="btn-talk"
              className="group flex items-center gap-3.5 bg-white text-black px-6 py-2.5 rounded-none font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all duration-300 border border-transparent hover:border-white shadow-lg"
            >
              Explore Tours
              <span className="flex items-center justify-center w-5 h-5 bg-black rounded-full text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                <ArrowUpRight className="w-3 h-3" strokeWidth={3} />
              </span>
            </button>
          </div>
        </main>

        {/* Footer Grid Info Overlay - Compact height, narrower layout, and transparent blur backgrounds */}
        <footer id="hero-footer" className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/20">
          
          {/* Card 1 - Tailor-Made Paris Adventures */}
          <div id="card-clean-energy" className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[8px] tracking-[0.2em] uppercase text-neutral-500 font-bold">
                  01 / Custom Journeys
                </span>
                <div className="w-5 h-5 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                  {/* Lightning / Compass vector representation */}
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
              <h3 id="clean-energy-title" className="text-xs font-semibold tracking-[0.1em] uppercase text-white border-b border-white/10 pb-1">
                Tailor-Made Paris Adventures
              </h3>
              <p id="clean-energy-desc" className="text-[11px] text-neutral-400 font-normal leading-relaxed">
                Experience Paris your way with personalized itineraries, expert local guides, and unforgettable moments at every turn.
              </p>
            </div>
            <div className="mt-0.5">
              <span className="text-xl font-bold tracking-tighter text-white">12,000+</span>
              <span className="text-[7.5px] tracking-[0.15em] uppercase text-neutral-500 block">Custom Trips Planned</span>
            </div>
          </div>

          {/* Card 2 - Trusted by Thousands of Travelers */}
          <div id="card-impact" className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[8px] tracking-[0.2em] uppercase text-neutral-500 font-bold">
                  02 / Global Travelers
                </span>
                <div className="w-5 h-5 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                  {/* Globe / User custom vector representation */}
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 id="impact-title" className="text-xs font-semibold tracking-[0.1em] uppercase text-white border-b border-white/10 pb-1">
                Trusted by Thousands of Travelers
              </h3>
              <p id="impact-desc" className="text-[11px] text-neutral-400 font-normal leading-relaxed">
                From romantic getaways to family vacations, we've helped visitors create seamless and memorable Paris experiences with exceptional service.
              </p>
            </div>
            <div className="mt-0.5">
              <span className="text-xl font-bold tracking-tighter text-white">4.9 / 5.0 ★</span>
              <span className="text-[7.5px] tracking-[0.15em] uppercase text-neutral-500 block">Average Customer Rating</span>
            </div>
          </div>

        </footer>
      </div>

      {/* Second Section - Proudly Trusted by Leading Brands Across Industries */}
      <div className="w-full max-w-7xl bg-black border border-white/10 rounded-2xl py-16 px-6 md:px-12 flex flex-col items-center justify-between text-center relative overflow-hidden min-h-[520px]">
        
        {/* Subtle cinematic ambient lighting backdrops */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

        {/* Content Container */}
        <div className="w-full flex flex-col items-center gap-6 z-10 my-auto">
          {/* Main Headline with Serif Italic font and DM Sans mix */}
          <h2 className="text-3xl sm:text-4xl md:text-[50px] font-normal leading-[1.2] tracking-tight max-w-3xl flex flex-col items-center justify-center">
            <span className="font-serif italic font-light text-white block">
              Proudly Trusted
            </span>
            <span className="font-sans font-medium text-white block mt-1">
              by Leading Brands
            </span>
            <span className="block mt-1">
              <span className="font-serif italic font-light text-white mr-2.5">Across</span>
              <span className="font-sans font-medium text-white relative inline-block">
                Industries
                <span className="text-red-500 text-xs md:text-sm font-bold align-super ml-1">®</span>
              </span>
            </span>
          </h2>

          {/* Subtext with editorial italic and regular mix */}
          <p className="text-neutral-400 text-xs md:text-sm max-w-md font-normal leading-relaxed tracking-wide">
            <span className="font-serif italic text-neutral-300">We've partnered with leading </span>
            <span>brands to deliver innovative and impactful architectural solutions</span>
          </p>
        </div>

        {/* Horizontal Row of Brand Logos with border divider */}
        <div className="w-full border-t border-white/10 pt-10 mt-12 z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-items-center gap-y-8 gap-x-6 opacity-65 hover:opacity-100 transition-opacity duration-300">
            
            {/* Brand 1: CONSTRUCTION */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-neutral-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H7v-2h10v2zm0-4H7V8h10v2z"/>
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] tracking-[0.25em] font-extrabold text-white">CONSTRUCTION</span>
              </div>
            </div>

            {/* Brand 2: CONDON CONSTRUCTION */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-neutral-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-[9px] tracking-[0.3em] font-extrabold text-white">CONDON</span>
              </div>
              <span className="text-[7px] tracking-[0.2em] text-neutral-500 font-semibold uppercase">CONSTRUCTION</span>
            </div>

            {/* Brand 3: Morrison Construction */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-red-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] tracking-tight font-bold text-white font-sans">Morrison</span>
                <span className="text-[7.5px] tracking-[0.1em] text-neutral-400 font-light">Construction</span>
              </div>
            </div>

            {/* Brand 4: Skyline Structures */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-neutral-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] tracking-[0.2em] font-extrabold text-white">SKYLINE</span>
                <span className="text-[6.5px] tracking-[0.1em] text-neutral-500 font-semibold uppercase">HOMES & LIVING</span>
              </div>
            </div>

            {/* Brand 5: ARCH WIREFRAME */}
            <div className="flex items-center gap-2 col-span-2 md:col-span-1 justify-center">
              <svg className="w-5 h-5 text-neutral-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M3 21 L12 3 L21 21" />
                <path d="M6 15 L18 15" />
                <path d="M9 9 L15 9" />
              </svg>
              <span className="text-[8.5px] tracking-[0.35em] font-light text-white uppercase">ARCHSTUDIO</span>
            </div>

          </div>
        </div>

      </div>

      {/* Third Section - Kinetic Studio SMM agency and staggered transparent cards */}
      <div className="w-full max-w-7xl bg-black border border-white/10 rounded-2xl py-16 px-6 md:px-12 flex flex-col items-center justify-start text-center relative overflow-hidden min-h-[750px] shrink-0">
        
        {/* Subtle cinematic ambient lighting backdrops */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neutral-800/15 blur-[120px] pointer-events-none"></div>

        {/* Content Header Container */}
        <div className="w-full flex flex-col items-center gap-4 z-10 mb-16">
          {/* Small orange label as in reference */}
          <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-orange-500">
            About studio
          </span>

          {/* Main Headline with Serif Italic and DM Sans mix */}
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-normal leading-[1.25] tracking-tight max-w-4xl text-white flex flex-col items-center justify-center">
            <span className="block">
              <span className="font-serif italic font-light text-white mr-3">Kinetic Studio</span>
              <span className="font-sans font-normal text-neutral-300">— is an SMM</span>
            </span>
            <span className="font-sans font-medium text-white block mt-2 flex items-center justify-center flex-wrap gap-2">
              <span className="inline-block w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse mr-1"></span>
              agency of bold <span className="underline decoration-orange-500/60 decoration-2">creators</span> that
            </span>
            <span className="font-sans font-light text-neutral-400 block mt-2">
              delivers the power of social media
            </span>
            <span className="block mt-2">
              <span className="font-serif italic font-light text-white mr-2.5">with</span>
              <span className="font-sans font-medium text-white">cutting-edge strategy</span>
            </span>
          </h2>

          {/* Muted Subtext */}
          <p className="text-neutral-500 text-[10px] md:text-xs max-w-lg font-normal leading-relaxed tracking-wide mt-4">
            The finderfox breezes through neon twilight with adjustable pancake logic erfox breezes through neon
          </p>
        </div>

        {/* Asymmetric Staggered Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start z-10 pb-12">
          
          {/* Card 1: Strategy - normal alignment */}
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[350px] text-left transition-all duration-300 hover:border-white/25 md:mt-0">
            <div className="flex items-start justify-start">
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-neutral-400 border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">
                Strategy
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-auto">
              <div className="w-2 h-2 bg-orange-500 rounded-full mb-1"></div>
              <h3 className="text-base font-semibold tracking-wide text-white">
                Bold strategies that shape identities
              </h3>
              <p className="text-[11px] text-neutral-400 font-normal leading-relaxed">
                We craft concepts that define unique brands and strengthen their presence.
              </p>
            </div>
          </div>

          {/* Card 2: Growth - staggered down */}
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[350px] text-left transition-all duration-300 hover:border-white/25 md:mt-12">
            <div className="flex items-start justify-start">
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-neutral-400 border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">
                Growth
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-auto">
              <div className="w-2 h-2 bg-orange-500 rounded-full mb-1"></div>
              <h3 className="text-base font-semibold tracking-wide text-white">
                Driving measurable growth through impact
              </h3>
              <p className="text-[11px] text-neutral-400 font-normal leading-relaxed">
                Focused on reach, engagement, and real sales — not empty noise.
              </p>
            </div>
          </div>

          {/* Card 3: Creative - staggered slightly down */}
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[350px] text-left transition-all duration-300 hover:border-white/25 md:mt-6">
            <div className="flex items-start justify-start">
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-neutral-400 border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">
                Creative
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-auto">
              <div className="w-2 h-2 bg-orange-500 rounded-full mb-1"></div>
              <h3 className="text-base font-semibold tracking-wide text-white">
                Creative processes with rapid delivery
              </h3>
              <p className="text-[11px] text-neutral-400 font-normal leading-relaxed">
                Ideas turn into results fast, without losing quality or relevance.
              </p>
            </div>
          </div>

          {/* Card 4: Powerfull - normal alignment */}
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[350px] text-left transition-all duration-300 hover:border-white/25 md:mt-0">
            <div className="flex items-start justify-start">
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-neutral-400 border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">
                Powerfull
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-auto">
              <div className="w-2 h-2 bg-orange-500 rounded-full mb-1"></div>
              <h3 className="text-base font-semibold tracking-wide text-white">
                A dedicated team behind success
              </h3>
              <p className="text-[11px] text-neutral-400 font-normal leading-relaxed">
                Our experts guide every step, from launch to scale.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Fourth Section - Testimonial & Performance metrics */}
      <div className="w-full max-w-7xl bg-black border border-white/10 rounded-2xl py-16 px-6 md:px-12 flex flex-col items-center justify-start text-center relative overflow-hidden min-h-[550px] shrink-0">
        
        {/* Subtle cinematic ambient lighting backdrop (blue theme as requested) */}
        <div className="absolute -bottom-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-900/10 blur-[120px] pointer-events-none"></div>

        {/* Outer Layout Grid */}
        <div className="w-full flex flex-col md:flex-row gap-8 items-stretch z-10 text-left">
          
          {/* Left Block - Profile Portrait with clean border style */}
          <div className="w-full md:w-[35%] aspect-[3/4] md:h-[450px] relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] flex items-center justify-center group shrink-0">
            <img
              src="/src/assets/images/bernice_tay_portrait_1784518974904.jpg"
              alt="Bernice Tay"
              referrerPolicy="no-referrer"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Block - Testimonial with custom blue radial background gradient */}
          <div 
            className="w-full md:w-[65%] border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden bg-black/60 backdrop-blur-md"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.12) 0%, rgba(0,0,0,0) 70%)' }}
          >
            {/* Top Quote Content */}
            <div className="flex flex-col gap-6">
              <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-blue-400">
                Client Testimonial
              </span>
              <p className="font-sans text-lg sm:text-xl md:text-2xl lg:text-[25px] font-medium leading-relaxed tracking-tight text-white uppercase max-w-2xl">
                «I wasted my time with other agencies, but with Omni, we increased our revenue and got more students with low CPL and high ROAS»
              </p>
            </div>

            {/* Metrics and Author Details */}
            <div className="mt-12 flex flex-col gap-8 md:gap-10 border-t border-white/10 pt-8">
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-start">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white font-sans">
                    $15-25
                  </span>
                  <span className="text-[8.5px] tracking-[0.15em] uppercase text-neutral-500 font-semibold mt-1">
                    CPL
                  </span>
                </div>
                
                <div className="flex flex-col items-start">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white font-sans">
                    263
                  </span>
                  <span className="text-[8.5px] tracking-[0.15em] uppercase text-neutral-500 font-semibold mt-1">
                    Webinar attendees
                  </span>
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white font-sans">
                    11.11X
                  </span>
                  <span className="text-[8.5px] tracking-[0.15em] uppercase text-neutral-500 font-semibold mt-1 font-mono">
                    ROAS for Crash Course
                  </span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[11px] tracking-[0.25em] font-bold text-white uppercase">
                  — Bernice Tay
                </span>
                <span className="text-[8px] tracking-[0.15em] uppercase text-neutral-500 font-semibold mt-1">
                  Bright Culture
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fifth Section - Four symmetric cards with an empty center placeholder */}
      <div className="w-full max-w-7xl bg-black border border-white/10 rounded-2xl py-16 px-6 md:px-12 flex flex-col items-center justify-start text-center relative overflow-hidden min-h-[700px] shrink-0">
        
        {/* Subtle cinematic ambient lighting backdrops */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[130px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="w-full flex flex-col items-center gap-4 z-10 mb-12">
          <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-neutral-400">
            Exclusive Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal leading-[1.25] tracking-tight max-w-3xl text-white">
            <span className="font-serif italic font-light text-white mr-3">Unrivaled Comfort</span>
            <span className="font-sans font-medium text-white">At Every Turn</span>
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm max-w-md font-normal leading-relaxed tracking-wide">
            We handle every detail to ensure your Parisian adventure is as flawless as it is extraordinary.
          </p>
        </div>

        {/* 3-Column Responsive Grid (Left Cards, Center Empty Visual Slot, Right Cards) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch z-10">
          
          {/* Left Column: 2 Cards */}
          <div className="flex flex-col gap-6 justify-between h-full">
            {/* Card 1 */}
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col justify-between gap-4 text-left transition-all duration-300 hover:border-white/20 min-h-[190px]">
              <div className="flex items-center justify-between">
                <span className="text-[8px] tracking-[0.2em] uppercase text-neutral-500 font-bold">
                  01 / Privileged Entry
                </span>
                <div className="w-5 h-5 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-white">
                  Exclusive VIP Access
                </h3>
                <p className="text-[11px] text-neutral-400 font-normal leading-relaxed">
                  Bypass the crowds with priority, pre-booked admissions and completely private after-hours viewings at world-renowned museums.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col justify-between gap-4 text-left transition-all duration-300 hover:border-white/20 min-h-[190px]">
              <div className="flex items-center justify-between">
                <span className="text-[8px] tracking-[0.2em] uppercase text-neutral-500 font-bold">
                  02 / Elite Guiding
                </span>
                <div className="w-5 h-5 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-white">
                  Expert Local Storytellers
                </h3>
                <p className="text-[11px] text-neutral-400 font-normal leading-relaxed">
                  Walk alongside certified historians, professional designers, and culinary experts who bring centuries of Parisian heritage to life.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Intentionally empty layout space for visual placeholder */}
          <div className="flex items-center justify-center border border-dashed border-white/10 bg-white/[0.01] rounded-xl p-8 min-h-[280px] lg:min-h-full relative overflow-hidden group">
            {/* Soft indicator of empty slot */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
            <div className="flex flex-col items-center text-center gap-2 z-10">
              <span className="text-[7.5px] tracking-[0.3em] uppercase text-neutral-600 font-bold">
                [ VISUAL CONTAINER PLACEHOLDER ]
              </span>
              <p className="text-[9px] text-neutral-500 font-light max-w-[200px]">
                This central space is preserved completely clear for dynamic rich assets or interactive 3D elements.
              </p>
            </div>
          </div>

          {/* Right Column: 2 Cards */}
          <div className="flex flex-col gap-6 justify-between h-full">
            {/* Card 3 */}
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col justify-between gap-4 text-left transition-all duration-300 hover:border-white/20 min-h-[190px]">
              <div className="flex items-center justify-between">
                <span className="text-[8px] tracking-[0.2em] uppercase text-neutral-500 font-bold">
                  03 / Seamless Logistics
                </span>
                <div className="w-5 h-5 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-white">
                  Chauffeur & Airport Transfers
                </h3>
                <p className="text-[11px] text-neutral-400 font-normal leading-relaxed">
                  Relax in premium class private vehicles with friendly bilingual drivers, ensuring all your city connections are completely stress-free.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col justify-between gap-4 text-left transition-all duration-300 hover:border-white/20 min-h-[190px]">
              <div className="flex items-center justify-between">
                <span className="text-[8px] tracking-[0.2em] uppercase text-neutral-500 font-bold">
                  04 / White-glove Support
                </span>
                <div className="w-5 h-5 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-white">
                  24/7 Dedicated Concierge
                </h3>
                <p className="text-[11px] text-neutral-400 font-normal leading-relaxed">
                  Enjoy real-time access to a dedicated assistant to manage on-the-go adjustments, secure hard-to-get bistro tables, and curate surprise moments.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}



