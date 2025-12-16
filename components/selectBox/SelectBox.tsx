'use client';

import { SelectHTMLAttributes, ChangeEvent } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectBoxProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options?: string[] | SelectOption[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export default function SelectBox({
  options = [],
  value,
  onChange,
  name,
  id,
  label,
  placeholder = 'Select an option',
  error,
  disabled = false,
  required = false,
  className = '',
  ...props
}: SelectBoxProps) {
  const baseStyles = 'w-full px-4 py-3 border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 appearance-none bg-white/10';
  const normalStyles = 'border-gray-300 focus:border-orange-400 focus:ring-orange-400';
  const errorStyles = 'border-orange-500 focus:border-orange-500 focus:ring-orange-500';
  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : '';
  
  const selectStyles = `${baseStyles} ${error ? errorStyles : normalStyles} ${disabledStyles} ${className}`;
  
  return (
    <div className="w-full relative">
      {label && (
        <label 
          htmlFor={id || name} 
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={selectStyles}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => {
            if (typeof option === 'string') {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            }
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        {!disabled && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown className="h-4 w-4" />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-orange-500">{error}</p>
      )}
    </div>
  );
}

