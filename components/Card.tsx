import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = '', href }: CardProps) {
  const cardClasses = `card p-6 ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${cardClasses}`}>
        {children}
      </Link>
    );
  }

  return <div className={cardClasses}>{children}</div>;
}
