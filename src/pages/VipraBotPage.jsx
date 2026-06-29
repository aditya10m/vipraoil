import { useState, useEffect, useRef } from "react";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const MODEL = "nvidia/nemotron-3-super-120b-a12b:free";

function formatMessageContent(content) {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  const phoneRegex = /(\+91\s*\d{10}|\b\d{10}\b)/g;

  const lines = content.split('\n');

  return lines.map((line, lineIdx) => {
    let parts = [line];

    let newParts = [];
    for (let part of parts) {
      if (typeof part === 'string') {
        const splitParts = part.split(emailRegex);
        newParts.push(...splitParts);
      } else {
        newParts.push(part);
      }
    }
    parts = newParts;

    parts = parts.map(part => {
      if (typeof part === 'string' && emailRegex.test(part)) {
        return (
          <a key={part} href={`mailto:${part}`} className="text-emerald-400 hover:underline">
            {part}
          </a>
        );
      }
      return part;
    });

    newParts = [];
    for (let part of parts) {
      if (typeof part === 'string') {
        const splitParts = part.split(phoneRegex);
        newParts.push(...splitParts);
      } else {
        newParts.push(part);
      }
    }
    parts = newParts;

    parts = parts.map(part => {
      if (typeof part === 'string' && phoneRegex.test(part)) {
        const cleanNumber = part.replace(/\s+/g, '');
        return (
          <a key={part} href={`tel:${cleanNumber}`} className="text-emerald-400 hover:underline">
            {part}
          </a>
        );
      }
      return part;
    });

    return (
      <div key={lineIdx}>
        {parts.length > 0 ? parts : ' '}
      </div>
    );
  });
}

export default function VipraBotPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  const messagesEndRef = useRef(null);
  const videoRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome to VIPRAOIL AI Assistant. Ask me anything about our premium biodiesel solutions, waste oil recycling, sustainability infrastructure, or contact options.",
    }
  ]);

  // Programmatic autoplay recovery setup
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.setAttribute("muted", "true");
          videoRef.current.muted = true;
          await videoRef.current.play();
        } catch (err) {
          console.warn("Autoplay initialization blocked or file path missing.", err);
        }
      }
    };
    
    const timeoutId = setTimeout(playVideo, 50);
    return () => clearTimeout(timeoutId);
  }, []);

  // Auto-scroll window to latest chat updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

async function sendMessage() {
  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    { role: "user", content: userMessage }
  ]);

  setInput("");
  setLoading(true);

  try {
    if (!API_KEY) {
      throw new Error(
        "OpenRouter API key not found. Check Vercel Environment Variables."
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "VipraBot"
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            {
              role: "system",
              content: `
You are VipraBot, the official luxury AI ecosystem representative of VIPRAOIL.

VIPRAOIL is a high-end Green Energy Ecosystem that transforms kitchen waste and used cooking oil into ultra-refined sustainable biodiesel and next-generation green energy infrastructure.

Rules:

1. Tone:
Minimalist, hyper-professional, sophisticated and premium.

2. If the user asks for phone number, email, contact, address or how to get in touch, reply with:

CONNECT WITH VIPRAOIL

CONTACT INFORMATION

Partner with us to transform waste oil into sustainable clean biodiesel systems and next-generation green energy solutions.

Direct Lines:
• +91 7209800920
• +91 7004403854
• +91 9262868606
• +91 9142199024

Corporate Communication:
• Official: contact@vipraoil.com
• Assistance: support@vipraoil.com

VIPRAOIL — Luxury Green Energy Ecosystem

Sustainable Future • Renewable Biodiesel • Eco Innovation

3. If users ask for videos, files, diagrams or visual resources, explain clearly and professionally.
`
            },
            ...messages,
            {
              role: "user",
              content: userMessage
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.error?.message ||
        `OpenRouter Error (${response.status})`
      );
    }

    const reply =
      data?.choices?.[0]?.message?.content ||
      "No response received.";

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: reply
      }
    ]);
  } catch (err) {
    console.error(err);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: `⚠️ ${err.message}`
      }
    ]);
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="min-h-screen bg-transparent text-[#F5F5F7] font-sans antialiased flex relative overflow-hidden">
      
      {/* 1. Global Background Video Environment (100% Raw Visible Layer) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            src="/videos/story.mp4"
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover scale-100 opacity-100"
          />
        ) : (
          /* Sleek alternative if video path breaks */
          <div className="w-full h-full bg-[#0D0D0E]" />
        )}
      </div>

      {/* 2. Premium Frosted Transparent Sidebar Navigation */}
      <aside className="w-80 border-r border-white/10 bg-black/20 backdrop-blur-xl flex flex-col justify-between p-6 hidden md:flex relative z-20">
        <div className="space-y-8 relative z-10">
          
          {/* Brand Identity */}
          <div>
            <div className="tracking-[0.2em] font-light text-xs text-zinc-300 uppercase mb-1 drop-shadow-md">
              Ecosystem
            </div>
            <h2 className="text-xl font-medium tracking-tight text-white drop-shadow-lg">
              VIPRAOIL <span className="text-emerald-400 text-xs font-serif italic font-normal tracking-wide block text-zinc-200 mt-0.5">Luxury Green Energy</span>
            </h2>
          </div>

          {/* Clean, Image-Free System Specifications Box (100% Video Transparent) */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-4 shadow-2xl backdrop-blur-md">
            <div className="relative z-10 w-full space-y-3 text-xs text-zinc-100">
              <p className="font-semibold text-white tracking-wide uppercase text-[10px] drop-shadow-sm">
                System Specifications
              </p>
              <div className="space-y-2 font-light">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-zinc-200">Core Engine</span>
                  <span className="text-white font-mono font-medium">Nemotron 120B</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-zinc-200">Response Protocol</span>
                  <span className="text-emerald-400 font-semibold drop-shadow-sm">Encrypted</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-200">Eco Status</span>
                  <span className="text-emerald-400 font-semibold drop-shadow-sm">100% Sustainable</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Exit Direct Link Button to pages/mission */}
        <div className="relative z-10">
          <a 
            href="/mission" 
            className="group flex items-center justify-between w-full bg-black/60 hover:bg-black/80 border border-white/25 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 backdrop-blur-xl shadow-2xl"
          >
            <span className="text-white font-medium transition-colors">Return to Mission</span>
            <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </a>
        </div>
      </aside>

      {/* 3. Main Chat Interface Canvas (Clear Overlay Structure) */}
      <main className="flex-1 flex flex-col min-h-screen relative z-10 bg-transparent">
        
        {/* Top Header Row */}
        <header className="h-20 border-b border-white/10 px-4 sm:px-8 flex items-center justify-between bg-black/30 backdrop-blur-lg sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-md" />
            <span className="text-sm font-medium tracking-wide text-white drop-shadow-md">VipraBot Protocol v3.26</span>
          </div>

          {/* Mobile Navigation Interface */}
          <a href="/mission" className="md:hidden text-xs uppercase tracking-widest text-white font-medium hover:underline transition-all p-2 bg-white/10 rounded-lg">
            ✕ Exit Chat
          </a>
        </header>

        {/* Chat Stream Window */}
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-10 md:px-16 space-y-6 sm:space-y-8 max-w-4xl mx-auto w-full relative z-10">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-3 sm:px-6 sm:py-4.5 text-sm sm:text-[15px] leading-relaxed transition-all duration-200 shadow-2xl backdrop-blur-xl ${
                  msg.role === "user"
                    ? "bg-white text-black font-bold border border-white"
                    : "bg-black/55 border border-white/15 text-white"
                }`}
              >
                {formatMessageContent(msg.content)}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-black/60 border border-white/10 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3 text-white text-sm backdrop-blur-xl shadow-2xl">
                <svg className="animate-spin h-4 w-4 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span className="font-medium tracking-wide">Analyzing Request...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Dock Panel */}
        <div className="p-4 sm:p-6 md:p-10 max-w-4xl mx-auto w-full sticky bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pt-6 sm:pt-12 z-20">
          <div className="relative flex items-center bg-black/45 border border-white/25 rounded-2xl shadow-2xl focus-within:border-white/50 transition-all group overflow-hidden backdrop-blur-xl">
            
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Inquire regarding luxury energy solutions..."
              className="flex-1 bg-transparent px-4 py-3.5 sm:px-6 sm:py-4.5 text-xs sm:text-sm text-white placeholder-zinc-300 font-medium outline-none w-full"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <div className="pr-3 flex items-center">
              <button
                onClick={sendMessage}
                className="bg-white text-black hover:bg-zinc-100 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-xl"
              >
                Send
              </button>
            </div>
          </div>
          
          <div className="text-[10px] sm:text-[11px] text-center text-white font-medium mt-3 tracking-wide drop-shadow-md">
            VIPRAOIL AI — Sustainable Ecosystem Engineering. All rights reserved 2026.
          </div>
        </div>

      </main>
    </div>
  );
}
