import { useState } from "react";
import { Save, X } from "lucide-react";

import { Alert } from "../Alert";
import { Button } from "../Button";
import { InputField } from "../InputField";
import { useFormValidation } from "../../../hooks/useFormValidation";
import type { BookUser, UpdateProfileData } from "../../../types/user-profiles-types";

interface ProfileEditFormProps {
  profile: BookUser;
  onSave: (updates: UpdateProfileData) => Promise<boolean>;
  onCancel: () => void;
}

export const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ profile, onSave, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { formState, handleChange, handleBlur, validateForm } = useFormValidation({
    name: profile.name,
    phone_number: profile.phone_number || "",
  });

  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validate form
    const isValid = validateForm({
      name: {
        required: true,
        minLength: 2,
        maxLength: 100,
      },
      phone_number: {
        required: false,
        pattern: phoneRegex,
        custom: (value: string) => {
          if (value && !phoneRegex.test(value)) {
            return "Please enter a valid phone number";
          }
          return null;
        },
      },
    });

    if (!isValid) {
      return;
    }

    setLoading(true);

    try {
      const updates: UpdateProfileData = {
        name: formState.name.value.trim(),
        phone_number: formState.phone_number.value.trim() || null,
      };

      const result = await onSave(updates);

      if (result) {
        setSuccess(true);
        setTimeout(() => {
          onCancel();
        }, 1500);
      } else {
        setError("Failed to update profile. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Profile update error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X className="h-6 w-6" />
        </button>
      </div>

      {error && <Alert type="error" message={error} onClose={() => setError(null)} />}
      {success && <Alert type="success" message="Profile updated successfully!" />}

      <form onSubmit={handleSubmit} className="space-y-5 mt-6">
        <InputField
          label="Full Name"
          name="name"
          type="text"
          value={formState.name.value}
          error={formState.name.error}
          touched={formState.name.touched}
          placeholder="Your full name"
          required
          onChange={(value) =>
            handleChange("name", value, {
              required: true,
              minLength: 2,
              maxLength: 100,
            })
          }
          onBlur={() =>
            handleBlur("name", {
              required: true,
              minLength: 2,
              maxLength: 100,
            })
          }
          disabled={loading}
        />

        <InputField
          label="Phone Number"
          name="phone_number"
          type="text"
          value={formState.phone_number.value}
          error={formState.phone_number.error}
          touched={formState.phone_number.touched}
          placeholder="+1 (555) 123-4567"
          onChange={(value) =>
            handleChange("phone_number", value, {
              required: false,
              pattern: phoneRegex,
              custom: (val: string) => {
                if (val && !phoneRegex.test(val)) {
                  return "Please enter a valid phone number";
                }
                return null;
              },
            })
          }
          onBlur={() =>
            handleBlur("phone_number", {
              required: false,
              pattern: phoneRegex,
            })
          }
          disabled={loading}
        />

        {/* Read-only email field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-500">
            {profile.email}
          </div>
          <p className="mt-1 text-xs text-gray-500">Email cannot be changed</p>
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" variant="primary" fullWidth loading={loading} disabled={loading}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
          <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
