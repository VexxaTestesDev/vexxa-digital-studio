import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 blur-xl group-hover:opacity-70 transition-opacity" />
      <span className="relative flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] transition-transform group-hover:scale-110">
        <svg viewBox="0 0 32 32" fill="currentColor" className="size-7" aria-hidden>
          <path d="M19.11 17.21c-.27-.14-1.62-.8-1.87-.9-.25-.09-.43-.13-.62.14-.18.27-.7.9-.86 1.08-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.18-1.35-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.13.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.62-.66 1.85-1.31.23-.65.23-1.2.16-1.31-.07-.11-.25-.18-.52-.31z M16 3C9.37 3 4 8.37 4 15c0 2.18.58 4.22 1.59 5.99L4 28l7.2-1.55C12.92 27.41 14.43 28 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3z" />
        </svg>
      </span>
    </a>
  );
}
