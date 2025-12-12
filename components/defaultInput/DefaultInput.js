'use client';

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
}) {
  const baseStyles = 'w-full px-4 py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';
  const normalStyles = 'border-gray-300 focus:border-primary-500 focus:ring-primary-500';
  const errorStyles = 'border-primary-500 focus:border-primary-500 focus:ring-primary-500';
  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white';
  
  const inputStyles = `${baseStyles} ${error ? errorStyles : normalStyles} ${disabledStyles} ${className}`;
  
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id || name} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-primary-500 ml-1">*</span>}
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
        <p className="mt-1 text-sm text-primary-500">{error}</p>
      )}
    </div>
  );
}
