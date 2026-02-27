import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section - Full width image */}
      <section className="relative w-full h-[70vh] md:h-[85vh] -mt-24 md:-mt-28">
        <img
          src={heroImage}
          alt="KChen Construction project"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Proven Expertise Section */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="subtitle-label mb-4">Proven Expertise.</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Comprehensive Development and Design-Build Construction Management
            </h2>
            <p className="text-foreground leading-relaxed mb-8">
              Through a strategic integration of architecture, engineering, and construction
              management, KChen delivers high-value development solutions. We maximize
              investment potential for our clients by providing seamless oversight and
              professional accountability across every phase of the project lifecycle.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Design-Build Services</li>
                <li>Pre-Construction Planning</li>
                <li>Feasibility Analysis</li>
                <li>Value Engineering</li>
                <li>Owner's Representation</li>
              </ul>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Construction Management</li>
                <li>Project Management</li>
                <li>Regulatory Compliance</li>
                <li>Cost & Schedule Control</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold text-foreground-heading">
                15<span className="text-primary">+</span>
              </div>
              <p className="text-muted-foreground mt-2 text-lg">Years of experience.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
