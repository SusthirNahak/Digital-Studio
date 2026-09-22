'use client';

import { PRICING_ITEMS } from '@/data/pricing';
import Eyebrow from '@/components/ui/Eyebrow';
import {
  MessageSquare,
  Mail,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

export function DirectChannelsCard() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const isWhatsAppConfigured = Boolean(whatsappNumber && whatsappNumber.trim());
  const whatsappHref = isWhatsAppConfigured
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        "Hello Digital Studio, I would like to discuss a project."
      )}`
    : null;

  const studioEmail = process.env.NEXT_PUBLIC_STUDIO_EMAIL;
  const isEmailConfigured = Boolean(studioEmail && studioEmail.trim());

  return (
    <div className="rounded-[var(--radius-default)] bg-white border border-neutral-200 p-6 sm:p-7 shadow-xs space-y-6">
      {/* Header */}
      <div className="space-y-1.5 pb-4 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          <Eyebrow variant="accent">DIRECT CHANNELS</Eyebrow>
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
          Let&apos;s talk.
        </h2>
        <p className="text-xs text-neutral-600 leading-relaxed">
          Need a quick answer or want to talk through ideas before filing a brief? Connect directly with the studio.
        </p>
      </div>

      {/* WhatsApp Block */}
      <div className="space-y-2.5">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900">
            Prefer WhatsApp?
          </span>
          <span className="text-[10px] font-mono text-neutral-400">INSTANT</span>
        </div>

        {isWhatsAppConfigured && whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3.5 rounded-[var(--radius-subtle)] bg-neutral-50 hover:bg-neutral-900 hover:text-white border border-neutral-200 hover:border-neutral-900 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="h-4 w-4 text-emerald-600 group-hover:text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs font-semibold block text-neutral-900 group-hover:text-white">
                  Start the conversation directly
                </span>
                <span className="text-[11px] font-mono text-neutral-500 group-hover:text-neutral-400">
                  Direct message channel
                </span>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <div className="p-3.5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-neutral-700">
                <MessageSquare className="h-3.5 w-3.5 text-neutral-400" />
                <span className="font-medium">Start the conversation directly</span>
              </div>
              <span className="text-[10px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                SETUP REQUIRED
              </span>
            </div>
            <p className="text-[11px] font-mono text-neutral-500">
              [Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env]
            </p>
          </div>
        )}
      </div>

      {/* Email Block */}
      <div className="space-y-2.5 pt-4 border-t border-neutral-100">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900">
            Email Inquiries
          </span>
          <span className="text-[10px] font-mono text-neutral-400">ASYNCHRONOUS</span>
        </div>

        {isEmailConfigured && studioEmail ? (
          <a
            href={`mailto:${studioEmail}`}
            className="group p-3.5 rounded-[var(--radius-subtle)] bg-neutral-50 hover:bg-neutral-900 hover:text-white border border-neutral-200 hover:border-neutral-900 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-[var(--color-accent)] group-hover:text-white shrink-0" />
              <span className="text-xs font-mono font-medium text-neutral-900 group-hover:text-white">
                {studioEmail}
              </span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <div className="p-3.5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-neutral-700">
                <Mail className="h-3.5 w-3.5 text-neutral-400" />
                <span className="font-mono text-xs">contact@yourstudio.com</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 rounded">
                PLACEHOLDER
              </span>
            </div>
            <p className="text-[11px] font-mono text-neutral-500">
              [Set NEXT_PUBLIC_STUDIO_EMAIL in .env]
            </p>
          </div>
        )}
      </div>

      {/* Studio Origin Base */}
      <div className="pt-4 border-t border-neutral-100 flex items-start gap-2.5 text-xs text-neutral-600 font-mono">
        <MapPin className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-neutral-900 block">Studio Location</span>
          <span>Odisha, India · Remote Worldwide</span>
        </div>
      </div>
    </div>
  );
}

export function StartingPointsCard() {
  const startingPoints = [
    {
      label: 'WEB DESIGN',
      item: PRICING_ITEMS.find((p) => p.id === 'wordpress'),
      fallbackPrice: 'From ₹10K',
    },
    {
      label: 'SHOPIFY',
      item: PRICING_ITEMS.find((p) => p.id === 'shopify'),
      fallbackPrice: 'From ₹20K',
    },
    {
      label: 'REACT / NEXT.JS',
      item: PRICING_ITEMS.find((p) => p.id === 'react-nextjs'),
      fallbackPrice: 'From ₹25K',
    },
    {
      label: 'WEB APPLICATIONS',
      item: PRICING_ITEMS.find((p) => p.id === 'web-application'),
      fallbackPrice: 'Custom quote',
    },
  ];

  return (
    <div className="rounded-[var(--radius-default)] bg-white border border-neutral-200 p-6 sm:p-7 shadow-xs space-y-5">
      <div className="space-y-1 pb-3 border-b border-neutral-100">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900 block">
          STARTING POINTS
        </span>
        <p className="text-xs text-neutral-500 font-normal">
          Transparent minimums. Scope is tailored per engagement.
        </p>
      </div>

      <div className="divide-y divide-neutral-100 font-mono text-xs">
        {startingPoints.map((point) => {
          const price = point.item ? point.item.startingPrice : point.fallbackPrice;

          return (
            <div key={point.label} className="py-2.5 flex items-center justify-between">
              <span className="text-neutral-700 font-medium">{point.label}</span>
              <span className="font-semibold text-neutral-950">{price}</span>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span>SOURCE: PRICING LEDGER</span>
        <span>FIXED QUOTES</span>
      </div>
    </div>
  );
}

export default function ContactDetails() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <DirectChannelsCard />
      <StartingPointsCard />
    </aside>
  );
}
