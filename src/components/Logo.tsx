import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8", size }) => {
  return (
    <img
      src="/favicon.svg"
      alt="Resume Filter Logo"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    />
  );
};

export default Logo;
