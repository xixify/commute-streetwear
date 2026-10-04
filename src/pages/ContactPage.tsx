import React, { useState } from 'react';
import { CLIENT_SOCIAL_LINKS } from '../data/products';
import { Mail, Phone, MapPin, Instagram, Facebook, Send, CheckCircle, ChevronDown, ChevronUp, MessageSquare, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Order Query',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const faqs = [
    {
      q: 'HOW LONG DOES NATIONWIDE SHIPPING TAKE?',
      a: 'Orders inside Dhaka are delivered within 24–48 hours. Express nationwide shipping to all major cities across Bangladesh takes 2–4 business days.'
    },
    {
      q: 'WHAT IS YOUR SIZE EXCHANGE POLICY?',
      a: 'We offer a hassle-free 7-day size exchange policy. Items must be unworn with original tags attached. Simply contact our support team on Instagram (@commute.co) or via email.'
    },
    {
      q: 'ARE THE TEES PRE-SHRUNK AND TRUE TO SIZE?',
      a: 'Yes! All COMMUTE garments undergo pre-shrunk enzyme washing. Our cuts are intentionally boxy and oversized. If you prefer a classic fitted feel, consider ordering one size down.'
    },
    {
      q: 'WHAT PAYMENT METHODS DO YOU ACCEPT?',
      a: 'We accept Cash on Delivery (COD), bKash, Nagad, Visa, Mastercard, and American Express cards nationwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#111111] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff] border border-[#e5e3dc] text-[#b89047] font-mono text-xs uppercase tracking-widest font-bold shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMUTE CUSTOMER CARE</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-[#111111]">
            GET IN TOUCH<span className="text-[#b89047]">.</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] font-sans max-w-lg">
            Have a question regarding your order, size fitting, or custom wholesale enquiry? Send us a message or reach out on our social channels.
          </p>
        </div>

        {/* Contact Form & Studio Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact & Lead Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#e5e3dc] p-8 sm:p-10 space-y-6 shadow-sm">
            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold uppercase text-[#111111]">SEND A MESSAGE</h3>
              <p className="text-xs font-mono text-[#666666]">WE RESPOND TO ALL ENQUIRIES WITHIN 4 HOURS</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-display text-2xl font-bold uppercase text-[#111111]">MESSAGE SENT SUCCESSFULLY!</h4>
                <p className="text-xs text-[#555555] font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#111111] font-bold">{formData.name}</span>. A Commute customer care specialist will get back to you at <span className="text-[#b89047] font-mono font-bold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'Order Query', message: '' });
                  }}
                  className="px-6 py-3 bg-[#111111] text-white font-mono font-bold text-xs uppercase shadow-md"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#555555] uppercase block font-semibold">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f9f8f6] border border-[#e5e3dc] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#b89047]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#555555] uppercase block font-semibold">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="tanvir@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f9f8f6] border border-[#e5e3dc] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#b89047]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#555555] uppercase block font-semibold">PHONE NUMBER</label>
                    <input
                      type="tel"
                      placeholder="+880 1712-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f9f8f6] border border-[#e5e3dc] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#b89047]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#555555] uppercase block font-semibold">ENQUIRY SUBJECT</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#f9f8f6] border border-[#e5e3dc] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#b89047]"
                    >
                      <option value="Order Query">ORDER & DELIVERY QUERY</option>
                      <option value="Size Assistance">SIZE & FIT ASSISTANCE</option>
                      <option value="Return Exchange">RETURNS & SIZE EXCHANGE</option>
                      <option value="Wholesale">WHOLESALE / B2B ENQUIRY</option>
                      <option value="Press PR">PRESS & MEDIA INQUIRIES</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#555555] uppercase block font-semibold">YOUR MESSAGE *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us how we can assist you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#f9f8f6] border border-[#e5e3dc] p-4 text-[#111111] focus:outline-none focus:border-[#b89047]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#111111] hover:bg-[#b89047] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT ENQUIRY</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Studio Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Box */}
            <div className="bg-[#ffffff] border border-[#e5e3dc] p-8 space-y-6 shadow-sm">
              <h3 className="font-display text-xl font-bold uppercase border-b border-[#e5e3dc] pb-4 text-[#111111]">
                COMMUTE HEADQUARTERS
              </h3>

              <div className="space-y-4 font-mono text-xs text-[#555555]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#b89047] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#111111] block uppercase">STUDIO ADDRESS:</strong>
                    <span>{CLIENT_SOCIAL_LINKS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#b89047] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#111111] block uppercase">SUPPORT HOTLINE:</strong>
                    <span>{CLIENT_SOCIAL_LINKS.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#b89047] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#111111] block uppercase">DIRECT EMAIL:</strong>
                    <span>{CLIENT_SOCIAL_LINKS.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#b89047] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#111111] block uppercase">OPERATING HOURS:</strong>
                    <span>SATURDAY – THURSDAY: 10:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Link Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={CLIENT_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-5 bg-[#ffffff] hover:bg-[#111111] border border-[#e5e3dc] hover:border-[#111111] transition-all flex flex-col justify-between space-y-3 group shadow-sm text-[#111111] hover:text-white"
              >
                <div className="flex items-center justify-between text-[#b89047] group-hover:text-white">
                  <Instagram className="w-6 h-6" />
                  <span className="text-[10px] font-mono uppercase bg-[#f4f3ef] group-hover:bg-[#333] px-2 py-0.5 text-[#111111] group-hover:text-white">INSTAGRAM</span>
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold group-hover:text-[#b89047] transition-colors">
                    @commute.co
                  </h4>
                  <p className="text-[11px] font-mono text-[#666666] group-hover:text-[#aaa]">Official Drops & Fits</p>
                </div>
              </a>

              <a
                href={CLIENT_SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-5 bg-[#ffffff] hover:bg-[#111111] border border-[#e5e3dc] hover:border-[#111111] transition-all flex flex-col justify-between space-y-3 group shadow-sm text-[#111111] hover:text-white"
              >
                <div className="flex items-center justify-between text-[#b89047] group-hover:text-white">
                  <Facebook className="w-6 h-6" />
                  <span className="text-[10px] font-mono uppercase bg-[#f4f3ef] group-hover:bg-[#333] px-2 py-0.5 text-[#111111] group-hover:text-white">FACEBOOK</span>
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold group-hover:text-[#b89047] transition-colors">
                    Commute Official
                  </h4>
                  <p className="text-[11px] font-mono text-[#666666] group-hover:text-[#aaa]">Facebook Page</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Accordion Section */}
        <div className="pt-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#b89047] uppercase tracking-widest font-bold">GOT QUESTIONS?</span>
            <h2 className="font-display text-3xl font-bold uppercase text-[#111111]">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#ffffff] border border-[#e5e3dc] shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 flex items-center justify-between text-[#111111] font-bold uppercase hover:bg-[#f9f8f6] transition-colors text-left"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#b89047]" /> : <ChevronDown className="w-4 h-4 text-[#777777]" />}
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-[#555555] font-sans text-xs leading-relaxed border-t border-[#e5e3dc]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
