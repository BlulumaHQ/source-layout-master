import { Link } from "react-router-dom";
import logoWhite from "@/assets/kchen-logo-white.svg";

const Footer = () => {
  return (
    <footer className="dark-section py-16">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div>
            <Link to="/">
              <img src={logoWhite} alt="KChen Construction" className="h-16 w-auto opacity-80" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-12 text-sm text-dark-fg/60">
            <div>
              <h4 className="text-dark-fg/80 font-medium mb-3 text-sm !text-dark-fg/80">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link to="/" className="hover:text-dark-fg/90 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-dark-fg/90 transition-colors">About</Link>
                <Link to="/services" className="hover:text-dark-fg/90 transition-colors">Services</Link>
                <Link to="/projects" className="hover:text-dark-fg/90 transition-colors">Projects</Link>
                <Link to="/recognitions" className="hover:text-dark-fg/90 transition-colors">Recognitions</Link>
                <Link to="/contact" className="hover:text-dark-fg/90 transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-dark-fg/80 font-medium mb-3 text-sm !text-dark-fg/80">Contact</h4>
              <p>Vancouver, BC, Canada</p>
              <p className="mt-1">(604) 618-2449</p>
              <p className="mt-1">info@kchencm.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
