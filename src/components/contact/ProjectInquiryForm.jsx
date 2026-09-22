'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { CheckCircle2, ArrowRight, Loader2, AlertCircle, RefreshCw } from 'lucide-react';

const SERVICE_OPTIONS = [
  'WordPress Website',
  'Shopify Ecommerce',
  'React / Next.js',
  'Custom Web Application',
  'Landing Page / Redesign',
  'Not sure yet',
];

const BUDGET_OPTIONS = [
  'Under ₹10K',
  '₹10K – ₹25K',
  '₹25K – ₹50K',
  '₹50K – ₹1L',
  '₹1L+',
  'Not sure yet',
];

const TIMELINE_OPTIONS = [
  'ASAP',
  '2–4 weeks',
  '1–2 months',
  '2–3 months',
  'Flexible',
];

const SOURCE_OPTIONS = [
  'Google',
  'LinkedIn',
  'Instagram',
  'Referral',
  'Existing client',
  'Other',
];

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    source: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedBrief, setSubmittedBrief] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (value.trim().length < 2) return 'Please enter at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address.';
        }
        return '';
      case 'service':
        if (!value) return 'Please select what you need.';
        return '';
      case 'description':
        if (!value.trim()) return 'Project description is required.';
        if (value.trim().length < 10) {
          return 'Please write at least 10 characters describing your project.';
        }
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all required fields as touched
    const requiredFields = ['name', 'email', 'service', 'description'];
    const newTouched = {};
    const newErrors = {};

    requiredFields.forEach((field) => {
      newTouched[field] = true;
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
      }
    });

    setTouched((prev) => ({ ...prev, ...newTouched }));
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus first error field for accessibility
      const firstErrorField = requiredFields.find((f) => newErrors[f]);
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element) element.focus();
      }
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    // =========================================================================
    // TEMPORARY FRONTEND-ONLY SUBMISSION STATE:
    // This form currently executes rigorous client-side validation.
    // Backend lead delivery / email API / database storage will be connected
    // in subsequent development phases as per architectural roadmap.
    // =========================================================================
    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmittedBrief({ ...formData });
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      timeline: '',
      source: '',
      description: '',
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
    setSubmittedBrief(null);
  };

  if (isSuccess && submittedBrief) {
    return (
      <div
        id="project-intake-form"
        className="rounded-[var(--radius-default)] bg-white border border-neutral-200 p-6 sm:p-10 shadow-xs space-y-6"
      >
        {/* Success Header Plate */}
        <div className="flex items-center gap-3 pb-5 border-b border-neutral-100">
          <div className="h-10 w-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold block">
              INTAKE RECORD COMPILED
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Project brief ready.
            </h3>
          </div>
        </div>

        {/* Temporary Client-Side Notice as per user specification */}
        <div className="p-4 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200/80 space-y-1.5 text-xs sm:text-sm text-neutral-700">
          <p className="font-semibold text-neutral-950">
            We have everything needed to review your enquiry.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Backend delivery will be connected next. Your form inputs have passed full client-side validation and are structured for production dispatch.
          </p>
        </div>

        {/* Structured Summary of the Compiled Brief */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 block">
            SUMMARY OF RECORDED BRIEF
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded bg-white border border-neutral-200/80">
              <span className="text-neutral-400 block text-[10px] uppercase">CLIENT NAME</span>
              <span className="font-semibold text-neutral-900 text-sm block">{submittedBrief.name}</span>
              {submittedBrief.company && (
                <span className="text-neutral-500 text-[11px] block">{submittedBrief.company}</span>
              )}
            </div>

            <div className="p-3 rounded bg-white border border-neutral-200/80">
              <span className="text-neutral-400 block text-[10px] uppercase">CONTACT EMAIL</span>
              <span className="font-semibold text-neutral-900 text-sm block">{submittedBrief.email}</span>
              {submittedBrief.phone && (
                <span className="text-neutral-500 text-[11px] block">{submittedBrief.phone}</span>
              )}
            </div>

            <div className="p-3 rounded bg-white border border-neutral-200/80">
              <span className="text-neutral-400 block text-[10px] uppercase">REQUIRED SERVICE</span>
              <span className="font-semibold text-neutral-900 block">{submittedBrief.service}</span>
            </div>

            <div className="p-3 rounded bg-white border border-neutral-200/80">
              <span className="text-neutral-400 block text-[10px] uppercase">BUDGET &amp; TIMELINE</span>
              <span className="font-semibold text-neutral-900 block">
                {submittedBrief.budget || 'Undisclosed'} · {submittedBrief.timeline || 'Flexible'}
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded bg-neutral-50 border border-neutral-200/80 space-y-1">
            <span className="text-neutral-400 block text-[10px] font-mono uppercase">PROJECT DESCRIPTION</span>
            <p className="text-xs sm:text-sm text-neutral-800 whitespace-pre-wrap leading-relaxed">
              {submittedBrief.description}
            </p>
          </div>
        </div>

        {/* Reset Action */}
        <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
          <Button
            type="button"
            onClick={handleReset}
            variant="secondary"
            size="md"
            className="group"
          >
            <RefreshCw className="h-3.5 w-3.5 text-neutral-500 transition-transform group-hover:rotate-180" />
            <span>Submit Another Project Brief</span>
          </Button>

          <span className="text-xs font-mono text-neutral-400">
            STATUS: VALIDATED LOCAL RECORD
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      id="project-intake-form"
      className="rounded-[var(--radius-default)] bg-white border border-neutral-200 p-6 sm:p-10 shadow-xs space-y-8"
    >
      {/* Form Header */}
      <div className="space-y-2 pb-6 border-b border-neutral-100">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900">
            PROJECT INQUIRY FORM
          </span>
          <span className="text-xs font-mono text-neutral-400">
            <span className="text-rose-500">*</span> Required
          </span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
          Complete the details below to give us clear initial context. We will review before scheduling a technical discussion.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        
        {/* ROW 1: Name & Email (Required) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900"
              >
                Name <span className="text-rose-600">*</span>
              </label>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              placeholder="e.g. Anand Senapati"
              className={`w-full h-11 px-3.5 text-sm sm:text-base text-neutral-900 bg-neutral-50/50 rounded-[var(--radius-subtle)] border transition-colors placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent ${
                errors.name
                  ? 'border-rose-400 bg-rose-50/30'
                  : 'border-neutral-300 hover:border-neutral-400'
              }`}
            />
            {errors.name && (
              <p
                id="name-error"
                role="alert"
                className="text-xs text-rose-600 flex items-center gap-1.5 pt-0.5"
              >
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900"
              >
                Email Address <span className="text-rose-600">*</span>
              </label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="name@company.com"
              className={`w-full h-11 px-3.5 text-sm sm:text-base text-neutral-900 bg-neutral-50/50 rounded-[var(--radius-subtle)] border transition-colors placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent ${
                errors.email
                  ? 'border-rose-400 bg-rose-50/30'
                  : 'border-neutral-300 hover:border-neutral-400'
              }`}
            />
            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="text-xs text-rose-600 flex items-center gap-1.5 pt-0.5"
              >
                <AlertCircle className="h-3 w-3 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* ROW 2: Company & WhatsApp/Phone (Optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Company / Brand */}
          <div className="space-y-2">
            <label
              htmlFor="company"
              className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-700 block"
            >
              Company / Brand <span className="text-neutral-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Senapati Hardware or Studio Labs"
              className="w-full h-11 px-3.5 text-sm sm:text-base text-neutral-900 bg-neutral-50/50 rounded-[var(--radius-subtle)] border border-neutral-300 hover:border-neutral-400 transition-colors placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            />
          </div>

          {/* WhatsApp / Phone */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-700 block"
            >
              WhatsApp / Phone <span className="text-neutral-400 font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full h-11 px-3.5 text-sm sm:text-base text-neutral-900 bg-neutral-50/50 rounded-[var(--radius-subtle)] border border-neutral-300 hover:border-neutral-400 transition-colors placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            />
          </div>
        </div>

        {/* ROW 3: Service Selection (Required) */}
        <div className="space-y-2">
          <label
            htmlFor="service"
            className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900 block"
          >
            What do you need? <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? 'service-error' : undefined}
              className={`w-full h-11 px-3.5 text-sm sm:text-base text-neutral-900 bg-neutral-50/50 rounded-[var(--radius-subtle)] border appearance-none transition-colors cursor-pointer focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent ${
                errors.service
                  ? 'border-rose-400 bg-rose-50/30'
                  : 'border-neutral-300 hover:border-neutral-400'
              } ${!formData.service ? 'text-neutral-400' : 'text-neutral-900'}`}
            >
              <option value="" disabled>
                Select service or project type...
              </option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-neutral-900">
                  {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.service && (
            <p
              id="service-error"
              role="alert"
              className="text-xs text-rose-600 flex items-center gap-1.5 pt-0.5"
            >
              <AlertCircle className="h-3 w-3 shrink-0" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>

        {/* ROW 4: Budget & Timeline (Optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Budget */}
          <div className="space-y-2">
            <label
              htmlFor="budget"
              className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-700 block"
            >
              Estimated Budget <span className="text-neutral-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full h-11 px-3.5 text-sm sm:text-base text-neutral-900 bg-neutral-50/50 rounded-[var(--radius-subtle)] border border-neutral-300 hover:border-neutral-400 appearance-none transition-colors cursor-pointer focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              >
                <option value="">Select budget range...</option>
                {BUDGET_OPTIONS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <label
              htmlFor="timeline"
              className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-700 block"
            >
              Desired Timeline <span className="text-neutral-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full h-11 px-3.5 text-sm sm:text-base text-neutral-900 bg-neutral-50/50 rounded-[var(--radius-subtle)] border border-neutral-300 hover:border-neutral-400 appearance-none transition-colors cursor-pointer focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              >
                <option value="">Select launch window...</option>
                {TIMELINE_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 5: Project Description (Required) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="description"
              className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900"
            >
              Project Description <span className="text-rose-600">*</span>
            </label>
            <span className="text-[11px] font-mono text-neutral-400">
              {formData.description.length} chars
            </span>
          </div>
          <textarea
            id="description"
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? 'description-error' : undefined}
            placeholder="Tell us what you’re building, what exists today, and what you’d like to improve."
            className={`w-full p-3.5 text-sm sm:text-base text-neutral-900 bg-neutral-50/50 rounded-[var(--radius-subtle)] border transition-colors placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-y ${
              errors.description
                ? 'border-rose-400 bg-rose-50/30'
                : 'border-neutral-300 hover:border-neutral-400'
            }`}
          />
          {errors.description && (
            <p
              id="description-error"
              role="alert"
              className="text-xs text-rose-600 flex items-center gap-1.5 pt-0.5"
            >
              <AlertCircle className="h-3 w-3 shrink-0" />
              <span>{errors.description}</span>
            </p>
          )}
        </div>

        {/* ROW 6: Source (Optional) */}
        <div className="space-y-2">
          <label
            htmlFor="source"
            className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-700 block"
          >
            How did you find us? <span className="text-neutral-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full h-11 px-3.5 text-sm sm:text-base text-neutral-900 bg-neutral-50/50 rounded-[var(--radius-subtle)] border border-neutral-300 hover:border-neutral-400 appearance-none transition-colors cursor-pointer focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            >
              <option value="">Select discovery channel...</option>
              {SOURCE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Action Bar */}
        <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="group w-full sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-neutral-400" />
                <span>Preparing Brief...</span>
              </>
            ) : (
              <>
                <span>Send Project Brief</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>

          <span className="text-xs font-mono text-neutral-500">
            Direct review · Transparent scope
          </span>
        </div>

      </form>
    </div>
  );
}
