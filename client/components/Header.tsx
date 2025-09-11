import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "The DBO Process", href: "#" },
    { name: "Tag My Home", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Our Team", href: "#" },
  ];

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-32 px-8 lg:px-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a0e226544e3568075ca8d26083287ac9e1bf1610?width=439"
              alt="DBO Logo"
              className="h-28 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-16">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dbo-green font-medium text-base hover:text-dbo-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dbo-medium"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-dbo-green hover:text-dbo-medium hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
