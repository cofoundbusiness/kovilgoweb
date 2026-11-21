'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Users,
  CheckCircle2,
  AlertCircle,
  User,
  MapPin,
} from 'lucide-react';

export default function PlanYourJourneyPage() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    email: '',
    destination: 'chettinad',
    travelDate: '',
    adults: '2',
    children: '0',
    seniors: '0',
    travelStyle: 'Relaxed Heritage',
    budget: 'Comfort (₹35k - ₹60k per person)',
    notes: '',
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.trim().replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number';
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Please select a preferred travel month or date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-brand-ivory min-h-screen">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="yellow" className="mb-1">
            Personalised Itinerary
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black">
            Plan Your Journey
          </h1>
          <p className="text-base sm:text-lg text-brand-black/70 max-w-2xl mx-auto leading-relaxed">
            Tell us about your dream destination, travel party, and pace. We shape every route
            thoughtfully around your dates.
          </p>

          {/* Prototype Transparency Notice */}
          <div className="inline-flex items-center gap-2 rounded-xl bg-brand-yellow/15 border border-brand-yellow/40 px-4 py-2 text-xs font-semibold text-brand-black text-left max-w-xl mx-auto">
            <AlertCircle className="h-4 w-4 text-brand-yellow shrink-0" />
            <span>
              <strong>Phase 1 Frontend Prototype:</strong> This form demonstrates the client
              experience and validation. Live database persistence will be connected in Phase 2.
            </span>
          </div>
        </div>

        {/* Main Form or Success View */}
        {isSubmitted ? (
          <div className="rounded-3xl bg-brand-white p-8 sm:p-14 border border-brand-grey/80 shadow-md text-center space-y-6 animate-fade-in">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-black">
              <CheckCircle2 className="h-10 w-10 text-brand-yellow" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-black">
              Your Journey Plan Request Received!
            </h2>

            <p className="text-sm sm:text-base text-brand-black/75 max-w-lg mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. In the live production system, your
              request for <strong>{formData.destination}</strong> will be routed directly to our
              dedicated destination concierge.
            </p>

            <div className="rounded-2xl bg-brand-cloud p-6 text-left max-w-md mx-auto space-y-2 text-xs font-medium text-brand-black/80 border border-brand-grey/60">
              <p><strong>Name:</strong> {formData.fullName}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Destination:</strong> {formData.destination}</p>
              <p><strong>Travel Style:</strong> {formData.travelStyle}</p>
              <p><strong>Party:</strong> {formData.adults} Adults, {formData.children} Children, {formData.seniors} Senior Citizens</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={() => setIsSubmitted(false)} variant="outline" size="md">
                Plan Another Journey
              </Button>
              <Button href="/" variant="primary" size="md">
                Return to Homepage
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-brand-white p-6 sm:p-10 lg:p-12 border border-brand-grey/80 shadow-xs space-y-8"
          >
            {/* 1. Contact Information */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-brand-black border-b border-brand-grey/60 pb-3 flex items-center gap-2">
                <User className="h-5 w-5 text-brand-yellow" />
                1. Your Contact Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Krishnan"
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-destructive font-bold mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-destructive font-bold mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-destructive font-bold mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Destination & Dates */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-brand-black border-b border-brand-grey/60 pb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-yellow" />
                2. Destination & Timing
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    Preferred Destination or Circuit
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
                  >
                    <option value="chettinad">Chettinad Heritage & Artisan Trail</option>
                    <option value="hampi-anegundi">Anegundi & Beyond (Hampi)</option>
                    <option value="darasuram-kumbakonam">Chola Temples (Darasuram & Kumbakonam)</option>
                    <option value="lepakshi-gandikota">Lepakshi & Gandikota Gorge</option>
                    <option value="cauvery-odyssey">The Sacred Cauvery Heritage Odyssey (5 Days)</option>
                    <option value="bespoke">I want a custom multi-city itinerary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    Target Travel Month / Dates *
                  </label>
                  <input
                    type="text"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    placeholder="e.g. Mid-November 2026 or Diwali weekend"
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
                  />
                  {errors.travelDate && (
                    <span className="text-[11px] text-destructive font-bold mt-1 block">
                      {errors.travelDate}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 3. Travellers & Travel Style */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-brand-black border-b border-brand-grey/60 pb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-yellow" />
                3. Party Composition & Preferences
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    Adults (12+ yrs)
                  </label>
                  <select
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Adult' : 'Adults'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    Children (under 12)
                  </label>
                  <select
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Child' : 'Children'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    Senior Citizens
                  </label>
                  <select
                    value={formData.seniors}
                    onChange={(e) => setFormData({ ...formData, seniors: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Senior' : 'Seniors'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    Travel Pace & Style
                  </label>
                  <select
                    value={formData.travelStyle}
                    onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
                  >
                    <option value="Relaxed Heritage">Relaxed Heritage (Unhurried visits & boutique stays)</option>
                    <option value="Spiritual Discovery">Spiritual Discovery (Dedicated temple darshan pace)</option>
                    <option value="Offbeat Adventure">Offbeat Adventure (Nature trails & village craft)</option>
                    <option value="Family Comfort">Family Comfort (Child & elder friendly schedule)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-black mb-1.5 uppercase tracking-wider">
                    Target Budget Range (Estimated)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
                  >
                    <option value="Standard">Standard (Clean 3-star pilgrim stays & standard AC cab)</option>
                    <option value="Comfort">Comfort (Heritage boutique hotels & Innova Crysta)</option>
                    <option value="Luxury">Luxury (Palatial resorts, private historian & premium fleet)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 4. Special Requests */}
            <div className="space-y-4">
              <label className="block text-xs font-bold text-brand-black uppercase tracking-wider">
                Special Requests or Dietary Preferences (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="e.g. Strict pure-vegetarian or Jain food required, wheelchair assistance for elderly parent, private vehicle pickup from Chennai airport..."
                className="w-full px-4 py-3 rounded-xl bg-brand-cloud border border-brand-grey/80 text-sm font-medium focus:border-brand-yellow focus:bg-white focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-brand-grey/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-brand-black/60 font-medium">
                No upfront commitment required. Custom quote prepared within 24 hours.
              </p>
              <Button
                type="submit"
                variant="primary"
                size="xl"
                isLoading={isSubmitting}
                className="w-full sm:w-auto gap-2"
              >
                <Sparkles className="h-5 w-5" />
                Submit Journey Enquiry
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
