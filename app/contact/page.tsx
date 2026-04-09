import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact PJD Custom Tailoring & Alterations in New York. Call, visit, or send us a message.",
};

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const info = [
  {
    label: "Phone",
    value: "+1 (917) 938-3985",
    href: "tel:+19179383985",
    sub: "Call or text anytime",
  },
  {
    label: "Address",
    value: "260 W 36th St, Suite 802",
    sub: "New York, NY 10018",
    href: null,
  },
  {
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: "https://wa.me/19179383985",
    sub: "Quick responses",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Reach Out"
        title="Contact Us"
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
      />

      {/* Info + Form */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left info */}
          <div>
            <span className="section-label block mb-4">Get in Touch</span>
            <h2 className="font-serif text-5xl sm:text-6xl text-charcoal-950 font-semibold mb-10 leading-tight">
              We&apos;d Love to<br />Hear From You
            </h2>

            {/* Contact cards */}
            <div className="space-y-4 mb-12">
              {info.map((item) => (
                <div key={item.label} className="group flex items-start gap-5 p-5 border border-charcoal-100 hover:border-gold-300 transition-colors duration-300">
                  <div className="w-10 h-10 bg-charcoal-950 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-400 text-xs font-medium uppercase tracking-widest"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                      {item.label[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-charcoal-400 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-charcoal-900 font-medium hover:text-gold-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-charcoal-900 font-medium">{item.value}</p>
                    )}
                    <p className="text-charcoal-400 text-sm mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="border-t border-charcoal-100 pt-8">
              <p className="text-charcoal-400 text-xs uppercase tracking-widest mb-5">Business Hours</p>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="text-charcoal-600">{h.day}</span>
                    <span className={h.time === "Closed" ? "text-charcoal-400" : "text-charcoal-900 font-medium"}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-charcoal-50 p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.9934!3d40.7527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2s260%20W%2036th%20St%2C%20New%20York%2C%20NY%2010018!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PJD Custom Tailoring location"
        />
      </section>
    </>
  );
}
