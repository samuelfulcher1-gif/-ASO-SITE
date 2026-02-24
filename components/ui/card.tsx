import React, { forwardRef } from 'react';

const Card = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
});

const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className, ...props }) => {
  return (
    <div className={`bg-gray-200 p-4 border-b ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className, ...props }) => {
  return (
    <div className={`bg-gray-100 p-4 border-t ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Card, CardContent, CardHeader, CardFooter };