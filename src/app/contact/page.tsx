'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Clock, Instagram, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-brand-ivory min-h-screen">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="yellow" className="mb-1">
            We Are Here To Assist
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-black">
            Contact & Concierge
          </h1>
          <p className="text-base sm:text-lg text-brand-black/70 leading-relaxed">
            Have questions about an upcoming journey, special dietary needs, or an offbeat temple
            route? Reach out to our dedicated concierge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-brand-black text-brand-white p-8 space-y-8 shadow-md">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
                  Direct Concierge Desk
                </span>
                <h2 className="font-display text-2xl font-bold text-white mt-1">
                  How to reach us
                </h2>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Our concierge team reviews every message thoughtfully. We aim to respond within
                  one business day.
                </p>
              </div>

              <div className="space-y-6 text-sm text-neutral-300">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-neutral-900 flex items-center justify-center text-brand-yellow shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-neutral-400 block mb-0.5">
                      Email Address
                    </span>
                    <a
                      href="mailto:concierge@kovilgo.com"
                      className="font-bold text-white hover:text-brand-yellow transition-colors"
                    >
                      concierge@kovilgo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-neutral-900 flex items-center justify-center text-brand-yellow shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-neutral-400 block mb-0.5">
                      Concierge Hours
                    </span>
                    <p className="font-medium text-white">
                      Monday to Saturday: 9:30 AM – 6:30 PM IST
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">Closed on national holidays</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-neutral-900 flex items-center justify-center text-brand-yellow shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-neutral-400 block mb-0.5">
                      Operational Focus
                    </span>
                    <p className="font-medium text-white">
                      Tamil Nadu, Karnataka, Andhra Pradesh & Central India Circuits
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-900">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                  Connect on Social
                </span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-neutral-300 hover:text-brand-yellow transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram @kovilgo
                </a>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-3xl bg-brand-white p-8 sm:p-12 border border-brand-grey/80 shadow-xs text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow/20">
                  <CheckCircle2 className="h-8 w-8 text-brand-yellow" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-black">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-brand-black/70 max-w-md mx-auto">
                  Thank you, {formData.name}. In the production deployment, our concierge team will
                  receive your note at concierge@kovilgo.com.
                </p>
                <div className="pt-4">
                  <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                    Send Another Note
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-brand-white p-6 sm:p-10 border border-brand-grey/80 shadow-xs space-y-6"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-black">
                    Send a Note to our Concierge
                  </h3>
                  <p className="text-xs text-brand-black/60 mt-1">
                    Fill out the form below and we will get back to you shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm focus:border-brand-yellow focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm focus:border-brand-yellow focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm focus:border-brand-yellow focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm focus:border-brand-yellow focus:bg-white focus:outline-none"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Custom Itinerary Question">Custom Itinerary Question</option>
                      <option value="Senior Citizen Special Comfort">Senior Citizen Special Comfort</option>
                      <option value="Artisan Trail Collaboration">Artisan Trail Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    How Can We Help You? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the destinations, questions, or special assistance you have in mind..."
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm focus:border-brand-yellow focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-brand-black/60">
                    Phase 1 frontend prototype preview.
                  </span>
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
