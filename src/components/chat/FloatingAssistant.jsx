'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  MessageCircle,
  X,
  Send,
  ArrowUpRight,
  Sparkles,
  Bot,
  User,
  ExternalLink,
  ChevronDown,
  RotateCcw,
} from 'lucide-react';
import AnimatedLogo from '@/components/ui/AnimatedLogo';

// Knowledge Base for the Free Rule-Based Chatbot
const KNOWLEDGE_BASE = [
  {
    triggers: ['price', 'pricing', 'cost', 'rate', 'how much', 'quote', 'budget', 'fee', 'charge'],
    response:
      'Here are our transparent starting points:\n\n• WordPress Websites: From ₹10K\n• Shopify Ecommerce: From ₹20K\n• React / Next.js Apps: From ₹25K\n• Landing Pages & Redesign: From ₹5K\n• Custom Web Applications: Bespoke scope\n\nEvery project includes mobile responsiveness, SEO foundations, and clean code.',
    actions: [
      { label: 'View Pricing & Process', href: '/services' },
      { label: 'Start a Project', href: '/contact' },
    ],
  },
  {
    triggers: ['service', 'services', 'what do you do', 'offer', 'build', 'create', 'develop'],
    response:
      'Susthir Digital specializes in 5 core disciplines:\n\n1. WordPress Websites (Clean, secure, editor-friendly)\n2. Shopify Stores (High-conversion e-commerce)\n3. React & Next.js (Fast modern web applications)\n4. Custom Web Applications (Bespoke workflows)\n5. Website Redesigns & Performance Optimization',
    actions: [
      { label: 'Explore All Services', href: '/services' },
      { label: 'See Live Work', href: '/work' },
    ],
  },
  {
    triggers: ['work', 'project', 'projects', 'portfolio', 'client', 'clients', 'case study', 'examples', 'showcase'],
    response:
      'We have 11 real production projects in our portfolio across healthcare, dental clinics, ecommerce, manufacturing, and tech startups (including Viva Kraft, Hillstone Dental Lab, Natural Elixirs, Mad Moose, and Neoplan Foods).',
    actions: [
      { label: 'View 11 Projects', href: '/work' },
      { label: 'Inspect Next.js Apps', href: '/work?filter=app' },
    ],
  },
  {
    triggers: ['about', 'who are you', 'team', 'susthir', 'founder', 'story', 'experience', 'agency'],
    response:
      'Susthir Digital is an independent digital studio founded on direct engineering principles. You work directly with the senior developer building your code—no junior handoffs, no middle managers, just focused craft and accountability.',
    actions: [
      { label: 'Read Our Story', href: '/about' },
      { label: 'Founder Philosophy', href: '/about#philosophy' },
    ],
  },
  {
    triggers: ['contact', 'hire', 'talk', 'call', 'email', 'phone', 'reach', 'meeting', 'discuss', 'start'],
    response:
      'You can submit your project brief directly on our contact page, or reach us instantly on WhatsApp. We typically respond within 2 to 4 business hours.',
    actions: [
      { label: 'Open Contact Form', href: '/contact' },
      { label: 'Chat on WhatsApp', isWhatsApp: true },
    ],
  },
  {
    triggers: ['timeline', 'time', 'how long', 'duration', 'weeks', 'days', 'delivery'],
    response:
      'Our typical project timelines:\n\n• High-Impact Landing Page: 5–7 business days\n• Complete Business Website: 2–3 weeks\n• Custom Shopify Store: 3–4 weeks\n• Complex Web Application: 4–8 weeks\n\nWe provide a fixed timeline before kickoff.',
    actions: [
      { label: 'Discuss Your Timeline', href: '/contact' },
    ],
  },
  {
    triggers: ['location', 'odisha', 'bhubaneswar', 'india', 'where', 'office', 'remote'],
    response:
      'We are headquartered in Odisha, India, and collaborate with growing businesses nationwide and remote clients globally across the US, Europe, UAE, and Southeast Asia.',
    actions: [
      { label: 'Learn About Our Reach', href: '/about' },
    ],
  },
  {
    triggers: ['tech', 'stack', 'nextjs', 'next.js', 'react', 'shopify', 'wordpress', 'technology'],
    response:
      'Our core technology stack is chosen for stability and speed:\n\n• Frontend: Next.js 15, React 19, Tailwind CSS, GSAP\n• CMS & Commerce: Shopify Liquid, Headless Shopify, WordPress ACF\n• Backend & Cloud: Node.js, Prisma, Vercel, Cloud SQL\n• Quality: 100/100 Core Web Vitals targets.',
    actions: [
      { label: 'Explore Stack on Work Page', href: '/work' },
    ],
  },
];

const QUICK_SUGGESTIONS = [
  'What are your prices?',
  'Show me your work',
  'What services do you offer?',
  'How do I start a project?',
  'What is your timeline?',
];

export default function FloatingAssistant() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! Welcome to Susthir Digital. We build websites, ecommerce stores, and custom web applications. How can I help you today?',
      actions: [
        { label: 'View Pricing', href: '/services' },
        { label: 'Our Work', href: '/work' },
        { label: 'Start a Project', href: '/contact' },
      ],
      time: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        'Hello Susthir Digital, I would like to discuss a new project.'
      )}`
    : 'https://wa.me/?text=Hello%20Susthir%20Digital%2C%20I%20would%20like%20to%20discuss%20a%20new%20project.';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add User Message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Rule-Based Bot Intelligence (Simulate instant micro-typing delay)
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matched = null;

      for (const item of KNOWLEDGE_BASE) {
        if (item.triggers.some((t) => lower.includes(t))) {
          matched = item;
          break;
        }
      }

      let botResponse;
      if (matched) {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: matched.response,
          actions: matched.actions,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
      } else {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: "I can help guide you through Susthir Digital's services, pricing, real portfolio projects, and project kickoff details. What would you like to explore?",
          actions: [
            { label: 'Services & Pricing', href: '/services' },
            { label: 'Selected Work', href: '/work' },
            { label: 'Start a Project', href: '/contact' },
            { label: 'WhatsApp Us', isWhatsApp: true },
          ],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 450);
  };

  const handleActionClick = (action) => {
    if (action.isWhatsApp) {
      window.open(whatsappHref, '_blank', 'noopener,noreferrer');
      return;
    }
    if (action.href) {
      setIsOpen(false);
      router.push(action.href);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: 'Chat history cleared. How can I help you today?',
        actions: [
          { label: 'View Pricing', href: '/services' },
          { label: 'Our Work', href: '/work' },
          { label: 'Start a Project', href: '/contact' },
        ],
        time: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* ============================================================ */}
      {/* 1. STICKY WHATSAPP ICON (POSITIONED DIRECTLY ABOVE CHATBOT)  */}
      {/* ============================================================ */}
      <aside aria-label="Quick contact tools" className="fixed bottom-22 right-5 sm:right-6 z-40 flex flex-col items-end">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center h-12 w-12 sm:h-13 sm:w-13 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg shadow-emerald-900/20 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Direct inquiry on WhatsApp"
        >
          {/* Subtle Ambient Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-60 pointer-events-none" style={{ animationDuration: '3s' }} />

          {/* WhatsApp Vector Icon */}
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            stroke="currentColor"
            strokeWidth="0"
            fill="currentColor"
            className="relative z-10"
          >
            <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.979.578 3.824 1.574 5.378L2.094 22l4.743-1.442a10.007 10.007 0 0 0 5.194 1.473h.005c5.535 0 10.03-4.495 10.03-10.031C22.066 6.495 17.566 2 12.031 2zm5.879 14.281c-.247.693-1.436 1.332-1.979 1.417-.506.08-1.161.116-3.753-.956-3.119-1.289-5.127-4.472-5.283-4.68-.151-.208-1.258-1.674-1.258-3.193 0-1.519.794-2.268 1.077-2.576.284-.308.621-.386.828-.386.208 0 .415.002.597.01.192.01.448-.073.702.538.261.628.892 2.17.971 2.327.078.156.13.338.026.546-.104.208-.156.338-.312.52-.156.182-.328.406-.469.546-.156.156-.319.328-.137.64.182.312.808 1.334 1.733 2.158 1.19 1.06 2.193 1.388 2.505 1.544.312.156.494.13.676-.078.182-.208.78-.909.988-1.221.208-.312.416-.26.694-.156.277.104 1.758.829 2.062.981.304.152.507.226.581.353.074.127.074.739-.173 1.432z" />
          </svg>

          {/* Hover Tooltip Label */}
          <span className="absolute right-full mr-3 hidden sm:group-hover:flex items-center px-2.5 py-1 rounded bg-neutral-950 text-white text-[11px] font-medium tracking-wide shadow-md whitespace-nowrap pointer-events-none transition-opacity animate-fadeIn">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* ============================================================ */}
      {/* 2. STICKY CHATBOT TRIGGER BUTTON                              */}
      {/* ============================================================ */}
      <aside aria-label="Site assistant" className="fixed bottom-6 right-5 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative flex items-center justify-center h-12 w-12 sm:h-13 sm:w-13 rounded-full shadow-xl transition-all duration-200 ${
            isOpen
              ? 'bg-neutral-900 text-white rotate-90 scale-95'
              : 'bg-neutral-950 hover:bg-neutral-900 text-white hover:scale-105 active:scale-95'
          }`}
          aria-label={isOpen ? 'Close chat assistant' : 'Open Susthir Digital assistant'}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <>
              {/* Unread Active Indicator Dot */}
              <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-blue-500 border-2 border-white" />
              <MessageCircle className="h-5 w-5 text-blue-400" />
            </>
          )}

          {/* Hover Tooltip Label */}
          {!isOpen && (
            <span className="absolute right-full mr-3 hidden sm:group-hover:flex items-center px-2.5 py-1 rounded bg-neutral-950 text-white text-[11px] font-medium tracking-wide shadow-md whitespace-nowrap pointer-events-none transition-opacity animate-fadeIn">
              Ask Susthir Digital
            </span>
          )}
        </button>
      </aside>

      {/* ============================================================ */}
      {/* 3. CHATBOT POPUP DIALOG WINDOW                               */}
      {/* ============================================================ */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Susthir Digital Interactive Assistant"
          className="fixed bottom-22 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] h-[520px] max-h-[82vh] rounded-[var(--radius-default)] bg-white border border-neutral-200 shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-neutral-950 text-white flex items-center justify-between border-b border-neutral-800 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-md bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-white">Susthir Digital Concierge</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Free Instant Answers</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Restart conversation"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/70 text-xs">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
                >
                  <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 px-1 font-mono">
                    <span>{isUser ? 'You' : 'Susthir Digital'}</span>
                    <span>·</span>
                    <span>{msg.time}</span>
                  </div>

                  <div
                    className={`max-w-[85%] rounded-[var(--radius-default)] p-3 shadow-2xs leading-relaxed whitespace-pre-wrap ${
                      isUser
                        ? 'bg-neutral-900 text-white rounded-br-xs'
                        : 'bg-white border border-neutral-200 text-neutral-800 rounded-bl-xs'
                    }`}
                  >
                    {msg.text}

                    {/* Action Links & Redirects */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-neutral-100 flex flex-wrap gap-1.5">
                        {msg.actions.map((act, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleActionClick(act)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-700 text-[11px] font-medium transition-colors border border-blue-200/60"
                          >
                            <span>{act.label}</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Simulated Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Suggestions Strip */}
          <div className="px-3 py-2 bg-white border-t border-neutral-200/80 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] font-mono text-neutral-400 shrink-0">Suggested:</span>
            {QUICK_SUGGESTIONS.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="shrink-0 px-2 py-0.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-[10px] font-medium transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-neutral-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about pricing, services, work..."
              className="flex-1 bg-neutral-100 border border-neutral-200 rounded-md px-3 py-1.5 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-neutral-400"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 disabled:opacity-40 text-white transition-colors"
              aria-label="Send message"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
