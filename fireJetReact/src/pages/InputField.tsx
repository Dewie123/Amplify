import React, { useState, useEffect } from "react";
import "./InputField.css";

export default function InputField({
  className = "",
  label = "Name",
  defaultValue = "",
  placeholder,
  onChange,
  timeDropdown = false,
  datePicker = false,
  statusDropdown = false,
  description = false,
  readOnly = false,
  jobRole = false,
  jobSkillsets = false,
}: InputFieldProps) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const roles = [
    "Lab Technician",
    "Developer",
    "Sound",
    "Videographer",
    "Logistics",
    "Intern"
  ]

  const skillsets = [
    "Directing, Casting",
    "Java, Python",
    "DJ, Sound Tech",
    "Coaching, Talent"
  ]

  const timeRanges = [
    "12am-1am",
    "1am-2am",
    "2am-3am",
    "3am-4am",
    "4am-5am",
    "5am-6am",
    "6am-7am",
    "7am-8am",
    "8am-9am",
    "9am-10am",
    "10am-11am",
    "11am-12pm",
    "12pm-1pm",
    "1pm-2pm",
    "2pm-3pm",
    "3pm-4pm",
    "4pm-5pm",
    "5pm-6pm",
    "6pm-7pm",
    "7pm-8pm",
    "8pm-9pm",
    "9pm-10pm",
    "10pm-11pm",
    "11pm-12am",
  ];

  const handleChange = (newValue: string) => {
    if (!readOnly) {
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };


  if (jobRole) {
    return (
      <div className={`${className} input-field-container`}>
        <label className="input-field-label">{label}</label>
        <div className="input-field-input-container">
          <select
            className="input-field-input"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            style={{ cursor: "pointer" }}
          >
            {roles.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  if (jobSkillsets) {
    return (
      <div className={`${className} input-field-container`}>
        <label className="input-field-label">{label}</label>
        <div className="input-field-input-container">
          <select
            className="input-field-input"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            style={{ cursor: "pointer" }}
          >
            {skillsets.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  if (timeDropdown) {
    return (
      <div className={`${className} input-field-container`}>
        <label className="input-field-label">{label}</label>
        <div className="input-field-input-container">
          <select
            className="input-field-input"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            style={{ cursor: "pointer" }}
          >
            {timeRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  if (description) {
    return (
      <div className={`${className} input-field-container`}>
        <label className="input-field-label">{label}</label>
        <div
          className="input-field-input-container description-container"
          style={{ height: "4.5em" }} // Adjust height for about 3 rows of text
        >
          <textarea
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={placeholder || `Enter ${label}`}
            className="input-field-input description-input"
            rows={3}
          />
        </div>
      </div>
    );
  }

  if (statusDropdown) {
    return (
      <div className={`${className} input-field-container`}>
        <label className="input-field-label">{label}</label>
        <div className="input-field-input-container">
          <select
            className="input-field-input"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            style={{ cursor: "pointer" }}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
    );
  }

  

  if (datePicker) {
    return (
      <div className={`${className} input-field-container`}>
        <label className="input-field-label">{label}</label>
        <div className="input-field-input-container">
          <input
            type="date"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className="input-field-input"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} input-field-container`}>
      <label className="input-field-label">{label}</label>
      <div className="input-field-input-container">
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder || `Enter ${label}`}
          className="input-field-input"
          readOnly={readOnly}
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
  timeDropdown?: boolean;
  datePicker?: boolean;
  statusDropdown?: boolean;
  description?: boolean;
  readOnly?: boolean;
  jobRole?: boolean;
  jobSkillsets?: boolean;
}
