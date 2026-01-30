interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Hero({ title, subtitle, description, children }: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-navy-700 to-teal-600 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-100 mb-4">{subtitle}</p>
          )}
          {description && (
            <p className="text-lg text-gray-200 mb-6">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
