import React from 'react';

// DropdownMenuSimple component
const DropdownMenuSimple = () => (
  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Menu Item 1</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Menu Item 2</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Menu Item 3</a>
    </div>
  </div>
);

// Header component
interface HeaderProps {
  autoOpenMenu?: boolean;
  items: Array<{
    label: string;
    href: string;
    menu?: React.ReactNode;
  }>;
}

const Header: React.FC<HeaderProps> = ({ autoOpenMenu, items }) => {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Brand</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {items.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  onMouseEnter={() => item.menu && setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {item.label}
                </a>
                {item.menu && openMenu === item.label && (
                  <div
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    {item.menu}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Main component
export const HeaderDropdownSimple = () => (
  <Header
    autoOpenMenu
    items={[
      { label: "Products", href: "/products", menu: <DropdownMenuSimple /> },
      { label: "Services", href: "/Services", menu: <DropdownMenuSimple /> },
      { label: "Pricing", href: "/pricing" },
      { label: "Resources", href: "/resources", menu: <DropdownMenuSimple /> },
      { label: "About", href: "/about" },
    ]}
  />
);
