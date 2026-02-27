import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    slug: "custom-residence-vancouver",
    title: "Custom Residence",
    category: "Single Family",
    image: project1,
  },
  {
    slug: "commercial-office-complex",
    title: "Commercial Office Complex",
    category: "Commercial",
    image: project2,
  },
  {
    slug: "kitchen-renovation",
    title: "Kitchen Renovation",
    category: "Renovation",
    image: project3,
  },
  {
    slug: "multi-family-townhomes",
    title: "Multi-Family Townhomes",
    category: "Multi-Family",
    image: project4,
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="section-padding section-spacing">
        <p className="subtitle-label mb-4">OUR WORK</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/portfolio/${project.slug}`}
              className="group relative overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 mb-8">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
