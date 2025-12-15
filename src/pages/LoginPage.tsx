import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { AuthLayout } from "../components/Auth/AuthLayout";
import { InputField } from "../components/Auth/InputField";
import { Button } from "../components/Auth/Button";
import { Alert } from "../components/Auth/Alert";
import { useFormValidation } from "../hooks/useFormValidation";
import { validationRules } from "../utils/validation";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { formState, handleChange, handleBlur, validateForm } = useFormValidation({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate form
    const isValid = validateForm({
      email: validationRules.email,
      password: { required: true, minLength: 6 },
    });

    if (!isValid) {
      return;
    }

    setLoading(true);

    try {
      const success = await login(formState.email.value, formState.password.value);

      if (success) {
        navigate("/");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome Back!" subtitle="Sign in to continue your adventure with Zara & Zen">
      {error && <Alert type="error" message={error} onClose={() => setError(null)} />}

      <form onSubmit={handleSubmit} className="space-y-5 mt-6">
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formState.email.value}
          error={formState.email.error}
          touched={formState.email.touched}
          placeholder="your.email@example.com"
          autoComplete="email"
          required
          onChange={(value) => handleChange("email", value, validationRules.email)}
          onBlur={() => handleBlur("email", validationRules.email)}
          disabled={loading}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={formState.password.value}
          error={formState.password.error}
          touched={formState.password.touched}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
          onChange={(value) => handleChange("password", value, { required: true, minLength: 6 })}
          onBlur={() => handleBlur("password", { required: true, minLength: 6 })}
          disabled={loading}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-blue-600 hover:text-blue-700 font-medium">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" variant="primary" fullWidth loading={loading} disabled={loading}>
          Sign In
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">New to Zara & Zen's World?</span>
          </div>
        </div>

        <div className="mt-6">
          <Link to="/signup">
            <Button variant="outline" fullWidth>
              Create an Account
            </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
