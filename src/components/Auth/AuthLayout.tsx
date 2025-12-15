import { PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo and branding */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <PawPrint className="h-8 w-8 text-orange-400" />
            <span>Zara & Zen's World</span>
          </Link>
        </div>

        {/* Auth card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
          </div>
          {children}
        </div>

        {/* Footer text */}
        <p className="text-center text-sm text-gray-600 mt-6">
          © {new Date().getFullYear()} Zara & Zen's World. All tails reserved. 🐾
        </p>
      </div>
    </div>
  );
};
