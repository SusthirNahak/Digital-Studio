import {
  Monitor,
  ShoppingBag,
  Code2,
  LayoutDashboard,
  Sparkles,
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function ServiceVisualPreview({ type }) {
  switch (type) {
    case 'website':
      return (
        <div className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-default)] shadow-xs overflow-hidden select-none">
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-100/80 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            </div>
            <div className="px-3 py-0.5 rounded-[var(--radius-subtle)] bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600">
              business-site.com
            </div>
            <div className="h-2.5 w-6 rounded-xs bg-neutral-200" />
          </div>

          {/* Website Canvas */}
          <div className="p-5 sm:p-6 space-y-5 bg-white">
            {/* Site Nav */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-xs bg-neutral-900" />
                <span className="text-xs font-bold tracking-tight text-neutral-900">STUDIO CORP</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-neutral-500 hidden sm:inline">Insights</span>
                <span className="text-[11px] text-neutral-500 hidden sm:inline">Services</span>
                <span className="px-2 py-1 rounded-[var(--radius-subtle)] bg-neutral-900 text-white text-[10px] font-medium">
                  Contact
                </span>
              </div>
            </div>

            {/* Editorial Lead Article */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-[10px] font-semibold tracking-wider uppercase">
                  Featured Case Study
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">WordPress 6.x</span>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-950 leading-snug">
                  Editorial Architecture for Content-Driven Businesses
                </h4>
                <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                  Structured with custom Gutenberg blocks and Advanced Custom Fields so internal teams can publish case studies and news without code assistance.
                </p>
              </div>
            </div>

            {/* 3-Column Content Blocks */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              <div className="p-2.5 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-1.5">
                <div className="h-2 w-8 bg-neutral-300 rounded-xs" />
                <div className="h-2.5 w-full bg-neutral-800 rounded-xs" />
                <div className="h-2 w-4/5 bg-neutral-200 rounded-xs" />
              </div>
              <div className="p-2.5 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-1.5">
                <div className="h-2 w-8 bg-neutral-300 rounded-xs" />
                <div className="h-2.5 w-full bg-neutral-800 rounded-xs" />
                <div className="h-2 w-4/5 bg-neutral-200 rounded-xs" />
              </div>
              <div className="p-2.5 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-1.5">
                <div className="h-2 w-8 bg-neutral-300 rounded-xs" />
                <div className="h-2.5 w-full bg-neutral-800 rounded-xs" />
                <div className="h-2 w-4/5 bg-neutral-200 rounded-xs" />
              </div>
            </div>

            {/* Meta Footer */}
            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>ACF Pro Fields & Taxonomy</span>
              </span>
              <span>Fast Server Cache: 0.28s</span>
            </div>
          </div>
        </div>
      );

    case 'ecommerce':
      return (
        <div className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-default)] shadow-xs overflow-hidden select-none">
          {/* Store Browser Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-100/80 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            </div>
            <div className="px-3 py-0.5 rounded-[var(--radius-subtle)] bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600">
              store.merchant.com
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-700">
              <ShoppingBag className="h-3 w-3 text-neutral-800" />
              <span>(2)</span>
            </div>
          </div>

          {/* Storefront Product & Cart Simulation */}
          <div className="p-5 sm:p-6 bg-white space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              {/* Product Visual Box */}
              <div className="sm:col-span-6 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] p-4 space-y-3">
                <div className="aspect-4/3 bg-neutral-100 border border-neutral-200/60 rounded-xs flex items-center justify-center relative overflow-hidden">
                  <div className="w-20 h-20 rounded-full border border-dashed border-neutral-300 flex items-center justify-center text-[10px] font-mono text-neutral-400">
                    Product Hero
                  </div>
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-xs bg-neutral-900 text-white text-[9px] font-mono">
                    NEW
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-semibold text-neutral-900">Atelier Canvas Tote</span>
                    <span className="text-xs font-mono font-bold text-neutral-900">₹2,499</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                    <Check className="h-3 w-3" />
                    <span>In Stock — Ready to dispatch</span>
                  </div>
                </div>

                {/* Variant Chips & Add to Cart */}
                <div className="space-y-2 pt-1">
                  <div className="flex gap-1.5">
                    <span className="px-2 py-0.5 rounded-xs text-[10px] font-mono bg-neutral-900 text-white">Obsidian</span>
                    <span className="px-2 py-0.5 rounded-xs text-[10px] font-mono bg-neutral-100 text-neutral-600 border border-neutral-200">Natural</span>
                    <span className="px-2 py-0.5 rounded-xs text-[10px] font-mono bg-neutral-100 text-neutral-600 border border-neutral-200">Olive</span>
                  </div>
                  <button
                    type="button"
                    tabIndex={-1}
                    className="w-full py-1.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent)] text-white text-xs font-medium tracking-tight flex items-center justify-center gap-1.5"
                  >
                    <span>Add to Bag</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Flyout Mini Cart Drawer Preview */}
              <div className="sm:col-span-6 bg-neutral-950 text-white rounded-[var(--radius-subtle)] p-4 space-y-3.5 border border-neutral-800">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-xs">
                  <span className="font-semibold tracking-tight text-neutral-200">Quick Cart Drawer</span>
                  <span className="text-[10px] font-mono text-emerald-400">Free Shipping</span>
                </div>

                {/* Item line */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <div className="space-y-0.5">
                      <p className="font-medium text-neutral-200">1x Atelier Canvas Tote</p>
                      <p className="text-[10px] text-neutral-400 font-mono">Color: Obsidian</p>
                    </div>
                    <span className="font-mono text-xs text-neutral-300">₹2,499</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <div className="space-y-0.5">
                      <p className="font-medium text-neutral-200">1x Desk Organizer</p>
                      <p className="text-[10px] text-neutral-400 font-mono">Finish: Raw</p>
                    </div>
                    <span className="font-mono text-xs text-neutral-300">₹1,250</span>
                  </div>
                </div>

                {/* Shipping progress */}
                <div className="space-y-1 pt-1 border-t border-neutral-800/80">
                  <div className="flex justify-between text-[10px] text-neutral-400">
                    <span>Subtotal</span>
                    <span className="font-mono text-white">₹3,749</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent)] w-full rounded-full" />
                  </div>
                </div>

                <div className="pt-1">
                  <div className="w-full py-1.5 rounded-[var(--radius-subtle)] bg-white text-neutral-950 text-xs font-semibold text-center">
                    Instant Secure Checkout
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Architecture Note */}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>Liquid Theme • Custom Section Modules</span>
              <span className="text-emerald-600 font-medium">Shopify Hosted</span>
            </div>
          </div>
        </div>
      );

    case 'app':
      return (
        <div className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-default)] shadow-xs overflow-hidden select-none">
          {/* App Window Chrome */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-100/80 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            </div>
            <div className="px-3 py-0.5 rounded-[var(--radius-subtle)] bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600">
              app.nextjs-system.io
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-[var(--color-accent)] font-semibold">
              <Zap className="h-3 w-3" />
              <span>SSR / RSC</span>
            </div>
          </div>

          {/* Web App Architecture View */}
          <div className="p-5 sm:p-6 bg-white space-y-4">
            {/* Header with Server Component badge */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Architecture</span>
                <h4 className="text-sm font-semibold text-neutral-950">React 19 & Next.js App Router</h4>
              </div>
              <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-medium">
                Edge Render: 14ms TTFB
              </span>
            </div>

            {/* Split layout: Interactive UI Island & API Stream */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
              {/* Interactive Client Island */}
              <div className="sm:col-span-6 p-3.5 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-neutral-800">Dynamic UI Island</span>
                  <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex gap-1.5 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded-xs bg-neutral-900 text-white">All Records</span>
                    <span className="px-2 py-0.5 rounded-xs bg-white border border-neutral-200 text-neutral-600">Active</span>
                    <span className="px-2 py-0.5 rounded-xs bg-white border border-neutral-200 text-neutral-600">Queued</span>
                  </div>
                  <div className="p-2 bg-white border border-neutral-200 rounded-xs space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-neutral-500">Live Client State</span>
                      <span className="font-mono font-semibold text-neutral-900">42 Nodes Synced</span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-accent)] w-3/4 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* JSON Data Stream Preview */}
              <div className="sm:col-span-6 p-3.5 bg-neutral-950 text-white rounded-[var(--radius-subtle)] space-y-2 border border-neutral-800 font-mono text-[11px]">
                <div className="flex items-center justify-between text-neutral-400 text-[10px] pb-1 border-b border-neutral-800">
                  <span>API Response Stream</span>
                  <span className="text-emerald-400">200 OK</span>
                </div>
                <div className="text-neutral-300 leading-tight space-y-0.5 text-[10px]">
                  <p><span className="text-neutral-500">{'{'}</span></p>
                  <p className="pl-2">&quot;route&quot;: <span className="text-emerald-300">&quot;/api/v1/workspaces&quot;</span>,</p>
                  <p className="pl-2">&quot;cache&quot;: <span className="text-[var(--color-accent)]">&quot;s-maxage=3600&quot;</span>,</p>
                  <p className="pl-2">&quot;hydration&quot;: <span className="text-amber-300">&quot;zero-shift&quot;</span></p>
                  <p><span className="text-neutral-500">{'}'}</span></p>
                </div>
              </div>
            </div>

            {/* Performance Footer */}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>TypeScript • Tailwind CSS • App Router</span>
              <span className="text-neutral-900 font-semibold">100% Core Web Vitals Target</span>
            </div>
          </div>
        </div>
      );

    case 'dashboard':
      return (
        <div className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-default)] shadow-xs overflow-hidden select-none">
          {/* Portal Top Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-950 text-white border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold tracking-tight text-white">OPS PORTAL</span>
              <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">v2.4 / Internal Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-800 text-[10px] font-mono text-neutral-300">
                Role: Admin
              </span>
              <span className="h-5 w-5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] font-mono">
                JS
              </span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-5 sm:p-6 bg-white space-y-4">
            {/* Top KPI Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-1">
                <span className="text-[10px] text-neutral-500 font-mono uppercase">Open Invoices</span>
                <p className="text-base font-bold font-mono text-neutral-900">142</p>
                <span className="text-[10px] text-emerald-600 font-medium">98.2% on schedule</span>
              </div>
              <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-1">
                <span className="text-[10px] text-neutral-500 font-mono uppercase">Avg Approval Time</span>
                <p className="text-base font-bold font-mono text-[var(--color-accent)]">1.8 hrs</p>
                <span className="text-[10px] text-neutral-500">Automated routing</span>
              </div>
              <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-1 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-neutral-500 font-mono uppercase">System Uptime</span>
                <p className="text-base font-bold font-mono text-neutral-900">99.98%</p>
                <span className="text-[10px] text-emerald-600 font-medium">Postgres RDS</span>
              </div>
            </div>

            {/* Workflow Table Simulation */}
            <div className="border border-neutral-200 rounded-[var(--radius-subtle)] overflow-hidden">
              <div className="px-3 py-2 bg-neutral-50 border-b border-neutral-200 flex justify-between items-center text-[11px] font-mono text-neutral-600">
                <span>Recent Team Requests</span>
                <span className="text-[10px] text-neutral-400">Live Status Feed</span>
              </div>
              <div className="divide-y divide-neutral-100 text-xs">
                <div className="px-3 py-2 flex items-center justify-between hover:bg-neutral-50/50">
                  <div className="space-y-0.5">
                    <p className="font-medium text-neutral-900">Client Onboarding #402</p>
                    <p className="text-[10px] text-neutral-500 font-mono">Bhubaneswar Logistics Hub</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-emerald-50 text-emerald-700 text-[10px] font-mono font-medium">
                    Approved
                  </span>
                </div>
                <div className="px-3 py-2 flex items-center justify-between hover:bg-neutral-50/50">
                  <div className="space-y-0.5">
                    <p className="font-medium text-neutral-900">Custom Export Pipeline</p>
                    <p className="text-[10px] text-neutral-500 font-mono">Batch Data Processor</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-[10px] font-mono font-medium">
                    In Review
                  </span>
                </div>
                <div className="px-3 py-2 flex items-center justify-between hover:bg-neutral-50/50">
                  <div className="space-y-0.5">
                    <p className="font-medium text-neutral-900">Role Elevation Request</p>
                    <p className="text-[10px] text-neutral-500 font-mono">Finance Ops Member</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-amber-50 text-amber-700 text-[10px] font-mono font-medium">
                    Pending
                  </span>
                </div>
              </div>
            </div>

            {/* Security Compliance Note */}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-neutral-800" />
                <span>Granular Role-Based Permissions (RBAC)</span>
              </span>
              <span>Encrypted Storage</span>
            </div>
          </div>
        </div>
      );

    case 'landing':
      return (
        <div className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-default)] shadow-xs overflow-hidden select-none">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-100/80 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            </div>
            <div className="px-3 py-0.5 rounded-[var(--radius-subtle)] bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600">
              campaign.launch-page.com
            </div>
            <div className="text-[10px] font-mono text-emerald-600 font-semibold">
              99/100 Mobile
            </div>
          </div>

          {/* Campaign Page Layout Simulation */}
          <div className="p-5 sm:p-6 bg-white space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              {/* Desktop Campaign Hero Box */}
              <div className="sm:col-span-8 space-y-3">
                <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-[10px] font-semibold tracking-wider uppercase">
                  Campaign Focus
                </span>
                <div className="space-y-1.5">
                  <h4 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-950 leading-snug">
                    Convert Traffic Around a Singular Business Objective
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Stripping away navigation distraction to focus visitor attention directly on your value proposition and primary inquiry form.
                  </p>
                </div>

                {/* Form Input Preview */}
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <div className="flex-1 px-3 py-1.5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200 text-xs text-neutral-400">
                    work-email@company.com
                  </div>
                  <div className="px-4 py-1.5 rounded-[var(--radius-subtle)] bg-neutral-900 text-white text-xs font-semibold text-center">
                    Get Proposal
                  </div>
                </div>

                {/* Value Checkmarks */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-neutral-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-emerald-600" />
                    <span>Zero Cumulative Layout Shift</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-emerald-600" />
                    <span>Mobile Touch Optimization</span>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Phone Preview Card */}
              <div className="sm:col-span-4 bg-neutral-950 text-white p-3.5 rounded-[var(--radius-default)] border border-neutral-800 space-y-2.5">
                <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800 text-[10px] text-neutral-400 font-mono">
                  <span>375px Viewport</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-1.5 text-center">
                  <div className="h-2 w-12 bg-neutral-700 mx-auto rounded-xs" />
                  <p className="text-[11px] font-semibold text-neutral-100">
                    Focused Mobile UX
                  </p>
                  <div className="h-1.5 w-4/5 bg-neutral-800 mx-auto rounded-xs" />
                  <div className="h-1.5 w-3/5 bg-neutral-800 mx-auto rounded-xs" />
                </div>
                <div className="pt-1">
                  <div className="w-full py-1 rounded-[var(--radius-subtle)] bg-[var(--color-accent)] text-white text-[10px] font-medium text-center">
                    Instant Action
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Performance Note */}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>Redesign & Campaign Architecture</span>
              <span className="text-emerald-600 font-medium">Speed Index: &lt; 0.8s</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
