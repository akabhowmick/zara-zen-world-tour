import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  charImage: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ id, label, charImage }) => {
  const location = useLocation();
  const activeTab = location.pathname;
  const isActive = activeTab === id;

  return (
    <Link
      to={`${id}`}
      className={`flex flex-col items-center space-y-2 transition-colors`}
      aria-current={isActive ? "page" : undefined}
    >
      {charImage !== "mobile" && (
        <img
          className="w-14 h-14 rounded-2xl object-cover"
          src={charImage}
          alt="character image on top of link"
        />
      )}
      <span
        className={`px-3 py-2 rounded-md text-center transition-colors ${
          isActive ? "bg-blue-600 text-white" : "hover:bg-blue-100"
        }`}
      >
        {label}
      </span>
    </Link>
  );
};
