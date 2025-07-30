import { MapPin } from "lucide-react";
import { chapters } from "../../utils/chapters";

export const Sidebar = () => {
  return (
    <div className="hidden lg:block absolute left-0 top-10 bg-white/80 p-4 rounded-xl shadow-lg backdrop-blur-md">
      <h3 className="font-bold mb-2">🌐 Progress</h3>
      <ul className="space-y-1 text-sm">
        {chapters.map((ch) => (
          <li key={ch.id} className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-blue-500" />
            <span>{ch.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

