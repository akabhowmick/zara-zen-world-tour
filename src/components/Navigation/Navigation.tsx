import { Book, Users, Trophy, X, Menu } from "lucide-react";
import { useState } from "react";

const tabs = [
  { key: "chapters", label: "Chapters", icon: Book },
  { key: "characters", label: "Characters", icon: Users },
  { key: "trivia", label: "Trivia", icon: Trophy },
] as const;

type TabKey = typeof tabs[number]["key"];

interface NavigationProps {
  activeTab: TabKey;
  setActiveTab: React.Dispatch<React.SetStateAction<TabKey>>;
}

const NavButton = ({
  tabKey,
  label,
  Icon,
  activeTab,
  setActiveTab,
  onClickExtra,
}: {
  tabKey: TabKey;
  label: string;
  Icon: React.ElementType;
  activeTab: TabKey;
  setActiveTab: React.Dispatch<React.SetStateAction<TabKey>>;
  onClickExtra?: () => void;
}) => (
  <button
    onClick={() => {
      setActiveTab(tabKey);
      onClickExtra?.();
    }}
    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
      activeTab === tabKey ? "bg-blue-600" : "hover:bg-slate-700"
    }`}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </button>
);

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-xl">The Mystery Chronicles</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {tabs.map(({ key, label, icon }) => (
              <NavButton
                key={key}
                tabKey={key}
                label={label}
                Icon={icon}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {tabs.map(({ key, label, icon }) => (
                <NavButton
                  key={key}
                  tabKey={key}
                  label={label}
                  Icon={icon}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  onClickExtra={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
