import { Book, Users, Trophy, PencilLine, Menu, X, Home } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { bookCharacters } from "../../utils/characters";
import { Link } from "react-router-dom";

interface NavLink {
  key: string;
  label: string;
  icon: React.ReactNode;
  charImage: string;
}

const NAV_LINKS: NavLink[] = [
  {
    key: "/",
    label: "Home",
    icon: <Home className="h-5 w-5" />,
    charImage: bookCharacters[0].image,
  },
  {
    key: "/chapters",
    label: "Chapters",
    icon: <Book className="h-5 w-5" />,
    charImage: bookCharacters[1].image,
  },
  {
    key: "/characters",
    label: "Characters",
    icon: <Users className="h-5 w-5" />,
    charImage: bookCharacters[2].image,
  },
  {
    key: "/trivia",
    label: "Trivia",
    icon: <Trophy className="h-5 w-5" />,
    charImage: bookCharacters[3].image,
  },
  {
    key: "/blog",
    label: "Blogs",
    icon: <PencilLine className="h-5 w-5" />,
    charImage: bookCharacters[4].image,
  },
];

const BRAND_LOGO = "🐾";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("chapters");

  const isActive = (path: string) => activePath === path;

  const handleNavClick = (path: string) => {
    console.log(path);
    setActivePath(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`"w-full shadow-lg border-t-4 border-yellow-400 bg-yellow-50`}>
      {/* Top Layer: Logo and Auth */}
      <TopLayer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Bottom Layer: Navigation Links */}
      <BottomLayer
        navLinks={NAV_LINKS}
        isActive={isActive}
        mobileMenuOpen={mobileMenuOpen}
        onNavClick={handleNavClick}
      />
    </nav>
  );
};

interface TopLayerProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const TopLayer: React.FC<TopLayerProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <div className=" px-4 py-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <button
          className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg hover:opacity-90 transition-opacity"
          onClick={() => (window.location.href = "/")}
        >
          <span className="text-3xl">{BRAND_LOGO}</span>
          <div className="block">
            <h1 className="text-xl font-bold text-blue-900">Zara & Zen</h1>
            <p className="text-xs text-blue-800">World Tour</p>
          </div>
        </button>

        {/* Desktop Auth Links */}

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
          >
            <span>Log in</span>
          </Link>
          <Link
            to="/signup"
            className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>Sign up</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-orange-300 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-blue-900" />
          ) : (
            <Menu className="h-6 w-6 text-blue-900" />
          )}
        </button>
      </div>
    </div>
  );
};

interface BottomLayerProps {
  navLinks: NavLink[];
  isActive: (path: string) => boolean;
  mobileMenuOpen: boolean;
  onNavClick: (path: string) => void;
}

const BottomLayer: React.FC<BottomLayerProps> = ({ navLinks, mobileMenuOpen }) => {
  return (
    <div className="bg-white border-t-4 border-yellow-400 px-4 sm:px-6">
      <div className=" mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Desktop Navigation Links - spread evenly */}
          <div className="hidden md:flex items-center justify-between flex-1 gap-2 px-4">
            {navLinks.map(({ key, label, icon, charImage }) => (
              <NavLink key={key} id={key} label={label} icon={icon} charImage={charImage} />
            ))}
          </div>
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t pt-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map(({ key, label, icon }) => (
                  <NavLink key={key} id={key} label={label} icon={icon} charImage={""} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
