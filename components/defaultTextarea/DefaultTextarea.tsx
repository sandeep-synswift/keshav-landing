'use client';

import { TextareaHTMLAttributes, ChangeEvent } from 'react';

interface DefaultTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  className?: string;
}

export default function DefaultTextarea({
  placeholder,
  value,
  onChange,
  name,
  id,
  label,
  error,
  disabled = false,
  required = false,
  rows = 4,
  className = '',
  ...props
}: DefaultTextareaProps) {
  const baseStyles = 'w-full px-4 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 resize-none';
  const normalStyles = 'border border-gray-300 focus:border-orange-400 focus:ring-orange-400';
  const errorStyles = 'border border-orange-500 focus:border-orange-500 focus:ring-orange-500';
  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white/10';
  
  const textareaStyles = `${baseStyles} ${error ? errorStyles : normalStyles} ${disabledStyles} ${className}`;
  
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
      <textarea
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        className={textareaStyles}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-orange-500">{error}</p>
      )}
    </div>
  );
}

