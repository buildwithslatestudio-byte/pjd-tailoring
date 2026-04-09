"use client";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name, from_email: form.email,
        phone: form.phone, service: form.service, message: form.message,
      }, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch { setStatus("error"); }
  };

  const field = "w-full px-0 py-3 bg-transparent border-0 border-b border-charcoal-200 focus:border-gold-500 focus:outline-none text-charcoal-900 text-sm placeholder:text-charcoal-300 transition-colors duration-200";
  const label = "block text-[10px] font-medium text-charcoal-400 uppercase tracking-widest mb-1";

  return (
    <div>
      <span className="section-label block mb-3">Send a Message</span>
      <h2 className="font-serif text-4xl text-charcoal-950 font-semibold mb-8">
        Book a Consultation
      </h2>

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 border-l-2 border-green-500 text-green-700 text-sm">
          Thank you — we&apos;ll be in touch shortly.
        </div>
      )}
      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border-l-2 border-red-400 text-red-700 text-sm">
          Something went wrong. Please call us at +1 (917) 938-3985.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          <div>
            <label className={label}>Full Name *</label>
            <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={field} />
          </div>
          <div>
            <label className={label}>Email *</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={field} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          <div>
            <label className={label}>Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (000) 000-0000" className={field} />
          </div>
          <div>
            <label className={label}>Service</label>
            <select name="service" value={form.service} onChange={handleChange} className={field}>
              <option value="">Select a service</option>
              <option>Custom Suits</option>
              <option>Alterations</option>
              <option>Wedding Outfits</option>
              <option>Dress Tailoring</option>
              <option>Shirt & Trouser Tailoring</option>
              <option>Leather & Specialty Garments</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className={label}>Message *</label>
          <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your project..." className={field} />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-gold w-full py-4 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
