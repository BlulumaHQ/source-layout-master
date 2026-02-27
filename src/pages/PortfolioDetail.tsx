import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projectData: Record<string, { title: string; category: string; image: string; description: string }> = {
  "custom-residence-vancouver": {
    title: "Custom Residence",
    category: "Single Family",
    image: project1,
    description: "A bespoke single-family home designed and built to the client's exact specifications.",
  },
  "commercial-office-complex": {
    title: "Commercial Office Complex",
    category: "Commercial",
    image: project2,
    description: "A modern commercial office development in downtown Vancouver.",
  },
  "kitchen-renovation": {
    title: "Kitchen Renovation",
    category: "Renovation",
    image: project3,
    description: "A complete kitchen renovation featuring premium finishes and custom cabinetry.",
  },
  "multi-family-townhomes": {
    title: "Multi-Family Townhomes",
    category: "Multi-Family",
    image: project4,
    description: "A multi-unit residential development designed for modern urban living.",
  },
};

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="section-padding section-spacing text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Image */}
      <section className="w-full h-[50vh] md:h-[60vh] -mt-24 md:-mt-28">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Project Info */}
      <section className="section-padding section-spacing">
        <div className="max-w-3xl">
          <p className="subtitle-label mb-3">{project.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-foreground leading-relaxed mb-8">{project.description}</p>
          <Link
            to="/projects"
            className="text-sm text-primary hover:underline font-medium"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioDetail;
