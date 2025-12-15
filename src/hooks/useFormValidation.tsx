import { useState } from "react";

export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface FormField {
  value: string;
  error: string | null;
  touched: boolean;
}

export interface FormState {
  [key: string]: FormField;
}

export const useFormValidation = (initialState: { [key: string]: string }) => {
  const [formState, setFormState] = useState<FormState>(() =>
    Object.keys(initialState).reduce((acc, key) => {
      acc[key] = { value: initialState[key], error: null, touched: false };
      return acc;
    }, {} as FormState)
  );

  const validateField = (_name: string, value: string, rules: ValidationRules): string | null => {
    if (rules.required && !value.trim()) {
      return "This field is required";
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Must be less than ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return "Invalid format";
    }

    if (rules.custom) {
      return rules.custom(value);
    }

    return null;
  };

  const handleChange = (name: string, value: string, rules?: ValidationRules) => {
    setFormState((prev) => ({
      ...prev,
      [name]: {
        value,
        error: rules ? validateField(name, value, rules) : null,
        touched: prev[name].touched,
      },
    }));
  };

  const handleBlur = (name: string, rules?: ValidationRules) => {
    setFormState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        error: rules ? validateField(name, prev[name].value, rules) : null,
        touched: true,
      },
    }));
  };

  const validateForm = (validationRules: { [key: string]: ValidationRules }): boolean => {
    let isValid = true;
    const newState = { ...formState };

    Object.keys(validationRules).forEach((key) => {
      const error = validateField(key, formState[key].value, validationRules[key]);
      newState[key] = { ...newState[key], error, touched: true };
      if (error) isValid = false;
    });

    setFormState(newState);
    return isValid;
  };

  const resetForm = () => {
    setFormState(
      Object.keys(formState).reduce((acc, key) => {
        acc[key] = { value: "", error: null, touched: false };
        return acc;
      }, {} as FormState)
    );
  };

  return {
    formState,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  };
};
