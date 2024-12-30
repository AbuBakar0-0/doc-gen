import * as React from "react";
import { cn } from "@/lib/utils";

const formatPhoneNumber = (value) => {
  // Remove all non-numeric characters
  const numbersOnly = value.replace(/\D/g, "");

  // Format as US phone number
  if (numbersOnly.length <= 3) {
    return numbersOnly;
  } else if (numbersOnly.length <= 6) {
    return `(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3)}`;
  } else {
    return `(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3, 6)}-${numbersOnly.slice(6, 10)}`;
  }
};

const Input = React.forwardRef(({ className, type, value, onChange, placeholder, ...props }, ref) => {
  const handleChange = (e) => {
    const newValue = e.target.value;

    // Format phone numbers or fax numbers specifically
    if (placeholder.toLowerCase().includes("phone") || placeholder.toLowerCase().includes("fax")) {
      const formattedValue = formatPhoneNumber(newValue);
      if (onChange) {
        onChange({ ...e, target: { ...e.target, value: formattedValue } });
      }
    } else {
      if (onChange) {
        onChange(e);
      }
    }
  };

  return (
    <input
      type={type}
      className={cn(
        "flex flex-col h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      value={value || ""}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
