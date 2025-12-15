import { AlertCircle, CheckCircle, X } from "lucide-react";

interface AlertProps {
  type: "error" | "success" | "info";
  message: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const styles = {
    error: {
      container: "bg-red-50 border-red-200 text-red-800",
      icon: <AlertCircle className="h-5 w-5 text-red-500" />,
    },
    success: {
      container: "bg-green-50 border-green-200 text-green-800",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    info: {
      container: "bg-blue-50 border-blue-200 text-blue-800",
      icon: <AlertCircle className="h-5 w-5 text-blue-500" />,
    },
  };

  const style = styles[type];

  return (
    <div className={`flex items-start gap-3 p-4 rounded-lg border ${style.container}`} role="alert">
      <div className="flex-shrink-0">{style.icon}</div>
      <div className="flex-1 text-sm">{message}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Close alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
