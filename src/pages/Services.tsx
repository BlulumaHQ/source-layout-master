import Layout from "@/components/Layout";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    title: "CONSTRUCTION MANAGEMENT",
    summary:
      "We deliver high-quality projects on time and within budget through seamless oversight. From pre-construction planning and transparent bidding to on-site supervision, we ensure every detail meets our rigorous production standards.",
    detail:
      "KChen provides high-quality construction services delivered on budget, on pace, and to our clients' total satisfaction. We provide seamless oversight from the pre-construction planning stage, including detailed budgeting, scheduling, and identifying challenges before they arise. Through a transparent bidding process and strict cost control, we supervise all site activities with precision.",
  },
  {
    title: "DESIGN & BUILD",
    summary:
      "Experience a unified approach that integrates architecture, engineering, and construction. Our streamlined process eliminates delays and reduces costs, providing a single point of accountability to transform your vision into a functional reality.",
    detail:
      "KChen offers a comprehensive design–build service that integrates architecture, engineering, and construction under one unified team. This streamlined approach eliminates delays, reduces costs, and ensures design intent is carried through to completion.",
  },
  {
    title: "PROJECT MANAGEMENT",
    summary:
      "Maximize your investment potential with our deep local expertise and industry network. As your dedicated Owner's Representative, we navigate government regulations and provide strategic guidance to ensure the highest profitability and project feasibility.",
    detail:
      "With our local knowledge, profound expertise and wide network in this industry, we help our clients maximize the value of its investment potential. We evaluate the project and seek to achieve the highest profitability.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="subtitle-label mb-4">OUR SERVICES</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              KChen Construction
            </h1>
            <p className="text-foreground leading-relaxed">
              We provide integrated design, project, and construction management services across
              Greater Vancouver.
            </p>
          </div>
          <div className="h-[400px] md:h-[500px]">
            <img
              src={heroServices}
              alt="KChen services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Accordion-style list */}
      <section className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((s) => (
            <div key={s.title} className="border-t border-border pt-6">
              <div className="w-2 h-2 rounded-full bg-foreground-heading mb-4" />
              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
            </div>
          ))}
        </div>

        {/* Detail sections */}
        <div className="space-y-16">
          {services.map((s) => (
            <div key={s.title} className="border-t border-border pt-8">
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-foreground leading-relaxed max-w-3xl">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
