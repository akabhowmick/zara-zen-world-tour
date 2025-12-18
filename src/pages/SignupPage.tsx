import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../components/Auth/AuthLayout";
import { InputField } from "../components/Auth/InputField";
import { Button } from "../components/Auth/Button";
import { Alert } from "../components/Auth/Alert";
import { useFormValidation } from "../hooks/useFormValidation";
import { validationRules } from "../utils/validation";
import { useAuth } from "../context/AuthProvider";

export const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const { formState, handleChange, handleBlur, validateForm, resetForm } = useFormValidation({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Check terms agreement
    if (!agreedToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    // Validate form
    const isValid = validateForm({
      name: validationRules.name,
      email: validationRules.email,
      password: validationRules.password,
      confirmPassword: validationRules.confirmPassword(formState.password.value),
    });

    if (!isValid) {
      return;
    }

    setLoading(true);

    try {
      const result = await signup(formState.email.value, formState.password.value);

      if (result) {
        setSuccess(true);
        resetForm();
        setAgreedToTerms(false);

        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError("Unable to create account. This email may already be registered.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Join the Adventure!"
      subtitle="Create an account to explore the world with Zara & Zen"
    >
      {error && <Alert type="error" message={error} onClose={() => setError(null)} />}
      {success && (
        <Alert type="success" message="Account created successfully! Redirecting to login..." />
      )}

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
          placeholder="Create a strong password"
          autoComplete="new-password"
          required
          onChange={(value) => handleChange("password", value, validationRules.password)}
          onBlur={() => handleBlur("password", validationRules.password)}
          disabled={loading}
        />

        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formState.confirmPassword.value}
          error={formState.confirmPassword.error}
          touched={formState.confirmPassword.touched}
          placeholder="Re-enter your password"
          autoComplete="new-password"
          required
          onChange={(value) =>
            handleChange(
              "confirmPassword",
              value,
              validationRules.confirmPassword(formState.password.value)
            )
          }
          onBlur={() =>
            handleBlur("confirmPassword", validationRules.confirmPassword(formState.password.value))
          }
          disabled={loading}
        />

        <div className="space-y-3">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              I agree to the{" "}
              <Link to="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        <Button type="submit" variant="primary" fullWidth loading={loading} disabled={loading}>
          Create Account
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Already have an account?</span>
          </div>
        </div>

        <div className="mt-6">
          <Link to="/login">
            <Button variant="outline" fullWidth>
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};
