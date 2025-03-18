import React, { useState, useEffect } from "react";
import "./InputField.css";

export default function InputField({
  className = "",
  label = "Name",
  defaultValue = "",
  placeholder,
  onChange,
}: InputFieldProps) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`${className} input-field-container`}>
      <label className="input-field-label">{label}</label>
      <div className="input-field-input-container">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder || `Enter ${label}`}
          className="input-field-input"
        />
      </div>
    </div>
  );
}

interface InputFieldProps {
  className?: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}
