import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, type = 'text', ...props }, ref) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={props.id}>{label}</label>}
      <input
        ref={ref}
        type={type}
        className="border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 w-full"
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;