import Link from 'next/link';

interface AI4SECLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function AI4SECLogo({ className = '', width = 40, height = 40 }: AI4SECLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        {/* Shield background */}
        <path 
          d="M50 5 L85 20 L85 50 C85 70 70 85 50 95 C30 85 15 70 15 50 L15 20 Z" 
          fill="currentColor"
          className="text-navy-600 dark:text-navy-400"
        />
        {/* Inner shield */}
        <path 
          d="M50 15 L75 25 L75 50 C75 65 62 77 50 85 C38 77 25 65 25 50 L25 25 Z" 
          fill="currentColor"
          className="text-navy-700 dark:text-navy-500"
        />
        {/* Circuit pins - top */}
        <circle cx="50" cy="35" r="3" fill="currentColor" className="text-teal-400" />
        <circle cx="40" cy="45" r="3" fill="currentColor" className="text-teal-400" />
        <circle cx="60" cy="45" r="3" fill="currentColor" className="text-teal-400" />
        {/* Circuit lines */}
        <line x1="50" y1="35" x2="40" y2="45" stroke="currentColor" strokeWidth="2" className="text-teal-300" />
        <line x1="50" y1="35" x2="60" y2="45" stroke="currentColor" strokeWidth="2" className="text-teal-300" />
        <line x1="40" y1="45" x2="40" y2="60" stroke="currentColor" strokeWidth="2" className="text-teal-300" />
        <line x1="60" y1="45" x2="60" y2="60" stroke="currentColor" strokeWidth="2" className="text-teal-300" />
        {/* Circuit pins - bottom */}
        <circle cx="40" cy="60" r="3" fill="currentColor" className="text-teal-400" />
        <circle cx="60" cy="60" r="3" fill="currentColor" className="text-teal-400" />
        <circle cx="50" cy="68" r="3" fill="currentColor" className="text-teal-400" />
        {/* Connect to center */}
        <line x1="40" y1="60" x2="50" y2="68" stroke="currentColor" strokeWidth="2" className="text-teal-300" />
        <line x1="60" y1="60" x2="50" y2="68" stroke="currentColor" strokeWidth="2" className="text-teal-300" />
      </svg>
      <span className="text-xl font-bold text-navy-700 dark:text-navy-300">
        AI4SEC
      </span>
    </Link>
  );
}
