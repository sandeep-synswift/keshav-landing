'use client';

import { InputHTMLAttributes, ChangeEvent } from 'react';

interface DefaultInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export default function DefaultInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  label,
  error,
  disabled = false,
  required = false,
  className = '',
  ...props
}: DefaultInputProps) {
  const baseStyles = 'w-full px-4 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';
  const normalStyles = 'border border-gray-300 focus:border-orange-400 focus:ring-orange-400';
  const errorStyles = 'border border-orange-500 focus:border-orange-500 focus:ring-orange-500';
  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white/10';
  
  const inputStyles = `${baseStyles} ${error ? errorStyles : normalStyles} ${disabledStyles} ${className}`;
  
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id || name} 
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={inputStyles}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-orange-500">{error}</p>
      )}
    </div>
  );
}

