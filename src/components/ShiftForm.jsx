import React, { useState } from "react";

// FloatingLabelInput Component
const FloatingLabelInput = ({
  label,
  required = false,
  type = "text",
  name,
  value,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (event) => {
    if (!event.target.value) {
      setFocused(false);
    }
  };

  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full p-3 bg-[#f6f6f6] text-black rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-300 text-sm transition-all duration-300"
      />
      <label
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-sm pointer-events-none transition-all ${
          focused || value
            ? "text-gray-600 text-xs top-[-9px]"
            : "text-gray-400"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};

// FloatingLabelSelect Component
const FloatingLabelSelect = ({
  label,
  required = false,
  name,
  value,
  onChange,
  options,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (event) => {
    if (!event.target.value) {
      setFocused(false);
    }
  };

  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full p-3 bg-[#f6f6f6] text-black rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-300 text-sm appearance-none transition-all duration-300"
      >
        <option value="" disabled hidden></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-sm pointer-events-none transition-all ${
          focused || value
            ? "text-gray-600 text-xs top-[-9px]"
            : "text-gray-400"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};

const ShiftForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    shiftType: "",
    workType: "",
    maxHours: "",
    period: "",
    annualLeave: "",
    payrollStart: "",
    payrollEnd: "",
    attendanceEnabled: true,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <p className="mb-6 text-gray-800 text-lg">
        Please fill out these fields and select working times and breaks.
      </p>
      <div className="grid grid-cols-2 gap-6">
        {/* Name Field */}
        <FloatingLabelInput
          label="Name"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Shift Type Field */}
        <FloatingLabelSelect
          label="Shift Type"
          required
          name="shiftType"
          value={formData.shiftType}
          onChange={handleChange}
          options={[
            { value: "morning", label: "Morning" },
            { value: "evening", label: "Evening" },
          ]}
        />

        {/* Work Type Field */}
        <FloatingLabelSelect
          label="Work Type"
          required
          name="workType"
          value={formData.workType}
          onChange={handleChange}
          options={[
            { value: "full-time", label: "Full-Time" },
            { value: "part-time", label: "Part-Time" },
          ]}
        />

        {/* Max Hours Field */}
        <FloatingLabelInput
          label="Max Hours"
          required
          name="maxHours"
          value={formData.maxHours}
          onChange={handleChange}
        />

        {/* Period Field */}
        <FloatingLabelSelect
          label="Period"
          required
          name="period"
          value={formData.period}
          onChange={handleChange}
          options={[
            { value: "weekly", label: "Weekly" },
            { value: "monthly", label: "Monthly" },
          ]}
        />

        {/* Annual Leave Field */}
        <FloatingLabelInput
          label="Annual Leave"
          required
          name="annualLeave"
          value={formData.annualLeave}
          onChange={handleChange}
        />

        {/* Payroll Start Day Field */}
        <FloatingLabelInput
          label="Payroll Start Day"
          required
          name="payrollStart"
          value={formData.payrollStart}
          onChange={handleChange}
        />

        {/* Payroll End Day Field */}
        <FloatingLabelInput
          label="Payroll End Day"
          required
          name="payrollEnd"
          value={formData.payrollEnd}
          onChange={handleChange}
        />
      </div>

      {/* Enable Attendance Checkbox */}
      <div className="mt-6 flex items-center">
        <input
          type="checkbox"
          name="attendanceEnabled"
          checked={formData.attendanceEnabled}
          onChange={handleChange}
          className="w-4 h-4 text-blue-500 focus:ring-blue-300 border-gray-300 rounded"
        />
        <label className="ml-2 text-black text-sm">
          Enable attendance for this shift{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>
    </div>
  );
};
export default ShiftForm;
