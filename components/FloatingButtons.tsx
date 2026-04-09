"use client";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp */}
      <a
        href="https://wa.me/19179383985"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-13 h-13 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1ebe5d] transition-colors"
        style={{ width: 52, height: 52 }}
      >
        <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.695-1.81A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22a10.94 10.94 0 01-5.57-1.52l-.4-.24-4.57 1.07 1.1-4.45-.26-.41A10.96 10.96 0 015 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.07-8.26c-.33-.17-1.96-.97-2.27-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.38.25-.71.08-.33-.17-1.4-.52-2.67-1.65-.99-.88-1.65-1.97-1.85-2.3-.19-.33-.02-.51.15-.67.15-.15.33-.38.5-.57.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.17-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.17.22 2.28 3.48 5.53 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.96-.8 2.24-1.57.28-.77.28-1.43.19-1.57-.08-.14-.3-.22-.63-.39z" />
        </svg>
      </a>

      {/* Call – visible on mobile only */}
      <a
        href="tel:+19179383985"
        aria-label="Call us"
        className="md:hidden flex items-center justify-center rounded-full shadow-lg bg-gold-500 hover:bg-gold-600 transition-colors"
        style={{ width: 52, height: 52 }}
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
        </svg>
      </a>
    </div>
  );
}
