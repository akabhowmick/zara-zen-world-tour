export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordMinLength = 8;

export const validationRules = {
  email: {
    required: true,
    pattern: emailRegex,
    custom: (value: string) => {
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
      return null;
    },
  },
  password: {
    required: true,
    minLength: passwordMinLength,
    custom: (value: string) => {
      if (value.length < passwordMinLength) {
        return `Password must be at least ${passwordMinLength} characters`;
      }
      if (!/[A-Z]/.test(value)) {
        return "Password must contain at least one uppercase letter";
      }
      if (!/[a-z]/.test(value)) {
        return "Password must contain at least one lowercase letter";
      }
      if (!/[0-9]/.test(value)) {
        return "Password must contain at least one number";
      }
      return null;
    },
  },
  confirmPassword: (password: string) => ({
    required: true,
    custom: (value: string) => {
      if (value !== password) {
        return "Passwords do not match";
      }
      return null;
    },
  }),
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
  },
};
