import Layout from "@/components/Layout";
import heroServices from "@/assets/hero-services.jpg";
import { Award, Trophy, Star } from "lucide-react";

const awards = [
  {
    icon: Award,
    title: "Top 50 Construction Management Firms – Regional Ranking",
    year: "2025",
    org: "Engineering News-Record (ENR) Southeast",
    description:
      "Ranked #18 among the leading construction management firms in the Southeast region based on revenue, project diversity, and client satisfaction scores for healthcare, education, and commercial sectors.",
  },
  {
    icon: Trophy,
    title: "Excellence in Construction Award – Commercial Category",
    year: "2024",
    org: "Master Builders Association",
    description:
      "Recognized for outstanding project delivery and craftsmanship on the Downtown Riverside Office Complex, a 180,000 sq ft LEED Gold-certified mixed-use development completed ahead of schedule with zero lost-time incidents.",
  },
  {
    icon: Star,
    title: "Safety Achievement Award – Platinum Level",
    year: "2023",
    org: "Associated General Contractors (AGC)",
    description:
      "Awarded for achieving over 1.2 million man-hours without a recordable incident across multiple infrastructure and high-rise projects, demonstrating exceptional commitment to worker safety and best-in-class safety protocols.",
  },
];

const Recognitions = () => {
  return (
    <Layout>
      {/* Awards Grid */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {awards.map((award, i) => (
            <div
              key={award.title}
              className={`p-8 md:p-10 ${i < awards.length - 1 ? "md:border-r border-border" : ""}`}
            >
              <award.icon className="w-10 h-10 text-foreground-heading mb-6" />
              <h3 className="text-lg font-bold mb-4 leading-snug">{award.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{award.year}</p>
              <p className="text-muted-foreground text-sm mb-4">{award.org}</p>
              <p className="text-foreground text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services CTA (same as source) */}
      <section className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="subtitle-label mb-4">OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">KChen Construction</h2>
            <p className="text-foreground leading-relaxed">
              We provide integrated design, project, and construction management services
              across Greater Vancouver.
            </p>
          </div>
          <div className="h-[400px]">
            <img
              src={heroServices}
              alt="Services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recognitions;
