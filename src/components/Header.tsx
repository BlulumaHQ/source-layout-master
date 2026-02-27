import { Link, useLocation } from "react-router-dom";
import logoColor from "@/assets/kchen-logo-color.svg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Recognitions", path: "/recognitions" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-between section-padding py-4">
        <Link to="/" className="flex-shrink-0">
          <img src={logoColor} alt="KChen Construction" className="h-16 md:h-20 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-0">
          {navItems.map((item, i) => (
            <span key={item.path} className="flex items-center">
              <Link
                to={item.path}
                className={`text-sm tracking-wide transition-colors hover:text-primary px-4 py-2 ${
                  location.pathname === item.path
                    ? "text-foreground-heading font-medium underline underline-offset-4"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
              {i < navItems.length - 1 && (
                <span className="text-muted-foreground/40 text-sm">/</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
