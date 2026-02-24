import React, { forwardRef } from 'react';

const Button = forwardRef(({ children, className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={`px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;