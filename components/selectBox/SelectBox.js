'use client';

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
}) {
  const baseStyles = 'w-full px-4 py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 appearance-none bg-white';
  const normalStyles = 'border-gray-300 focus:border-primary-500 focus:ring-primary-500';
  const errorStyles = 'border-primary-500 focus:border-primary-500 focus:ring-primary-500';
  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : '';
  
  const selectStyles = `${baseStyles} ${error ? errorStyles : normalStyles} ${disabledStyles} ${className}`;
  
  return (
    <div className="w-full relative">
      {label && (
        <label 
          htmlFor={id || name} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-primary-500 ml-1">*</span>}
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
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-primary-500">{error}</p>
      )}
    </div>
  );
}
