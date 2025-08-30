import { PawPrint, Mail, CheckCircle } from "lucide-react";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Pawletter Signup", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-12 px-6 mt-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 text-center">
        {/* Logo & Title */}
        <Logo />

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {footerLinks.map(({ label, href }) => (
            <a key={label} href={href} className="hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <Divider />

        <NewsletterForm />

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Zara & Zen’s World. All tails reserved. 🐾
        </p>
      </div>
    </footer>
  );
};

/* --- Extracted components --- */

const Logo = () => (
  <div className="flex items-center gap-2">
    <PawPrint className="h-8 w-8 text-orange-400" />
    <span className="font-bold text-xl">Zara & Zen’s World</span>
  </div>
);

const Divider = () => <div className="w-full h-px bg-gray-700" />;

const NewsletterForm = () => (
  <form className="w-full max-w-md text-left space-y-4">
    <label htmlFor="email" className="block font-semibold">
      <Mail className="inline-block mr-2 h-5 w-5" />
      Join the Pawletter
    </label>
    <input
      id="email"
      type="email"
      placeholder="e.g. waggytail@dogmail.com"
      className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600 text-white"
    />
    <ConsentCheckbox />
    <SubmitButton />
  </form>
);

const ConsentCheckbox = () => (
  <div className="flex items-center gap-2 text-sm">
    <input type="checkbox" id="consent" className="accent-orange-500" />
    <label htmlFor="consent" className="flex items-center gap-1">
      <CheckCircle className="h-4 w-4" /> I give paw-mission to receive pawsome emails.
    </label>
  </div>
);

const SubmitButton = () => (
  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow inline-flex items-center gap-2">
    CONTINUE <span className="text-lg">➡️</span>
  </button>
);
