import Layout from "@/components/Layout";
import kevinPhoto from "@/assets/kevin-headshot.jpg";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";

const About = () => {
  return (
    <Layout>
      {/* About Intro - Two column */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">ABOUT US</h2>
            <p className="text-foreground leading-relaxed">
              We are our client's "one-stop" trusted advisor. KChen provides a streamline of
              services that will bring efficiency for our clients by simplifying or eliminating
              the hassle of having multiple contractors. We assist our clients from the
              preliminary stage of evaluating the profitability and feasibility of each project,
              to the designing and building services transformed from initial sketches to the
              final construction, and managing the budget and schedule, providing our clients
              with a sense of security and comfort.
            </p>
          </div>
          <div>
            <p className="text-foreground leading-relaxed">
              K. Chen Construction Management is a full service construction management company
              in Vancouver, BC, specializing in residential and commercial projects, fulfilling
              the visions of property owners, business owners, developers, and property managers.
              We focus on assisting our clients in building their dream homes and realizing their
              investment goals while bridging the communication barriers. Our team possess years
              of experience and in depth local knowledge in the construction industry. Whether
              it's the house of your dream, a place to build lasting memories with your family,
              or commercial properties that you wish to realize your business objectives, our
              team strives to understand our clients, and helps our clients eliminate frustrations
              and misunderstandings through the process.
            </p>
          </div>
        </div>
      </section>

      {/* Kevin Bio + Testimonials - Two column */}
      <section className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Kevin Bio */}
          <div>
            <div className="flex items-start gap-6 mb-6">
              <img
                src={kevinPhoto}
                alt="Kevin Chen"
                className="w-36 h-44 object-cover grayscale"
              />
              <div>
                <h3 className="text-xl font-bold">KEVIN CHEN</h3>
                <p className="text-muted-foreground">P.Eng, GSC</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed text-sm">
              Kevin is the President of KChen Management Construction, and co-founder and partner
              of Formation Project Management Inc. Kevin has over 15 years of career expertise in
              the construction industries. He works directly with clients and manages all the
              trade partners in each stage of projects.
            </p>
            <p className="text-foreground leading-relaxed text-sm mt-4">
              Prior to starting up KChen Construction Management, Kevin was a Project Manager at a
              larger Canadian-based international construction firm. He has served on various
              scales of construction projects, managed budgets ranging from $250k to over $80
              million, and worked on projects located in Victoria, Whistler, to every corner in
              the Lower Mainland.
            </p>
          </div>

          {/* Right: Testimonials */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
              SEE WHAT OUR CLIENTS ARE SAYING
            </h3>
            <div className="space-y-8">
              <blockquote className="italic text-foreground leading-relaxed text-center">
                "Working with Kevin was a breath of fresh air. He was always available to answer
                my questions and address any concerns I had throughout the construction process.
                Their attention to detail and commitment to quality really stood out to me, and I
                couldn't be happier with the final result."
                <footer className="mt-4 font-semibold not-italic text-foreground-heading">
                  Daniel Lee
                </footer>
              </blockquote>
              <blockquote className="italic text-foreground leading-relaxed text-center">
                "I was initially nervous about taking on a construction project, but Kevin and
                his team put all of my worries to rest. They were honest, transparent, and
                communicative throughout the entire process, and delivered a final product that
                exceeded my expectations. Thank you very much~"
                <footer className="mt-4 font-semibold not-italic text-foreground-heading">
                  Ashley Martinez
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding pb-16 md:pb-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">HOW WE WORK</h2>
        <p className="text-muted-foreground mb-8">
          Let's Talk About Your New Project, We Can Do It!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            "Consultation",
            "Design & Budgeting",
            "Permitting & Planning",
            "Construction & Supervision",
            "Handover & Warranty",
          ].map((step, i) => (
            <div
              key={step}
              className="border border-border rounded-sm p-4 text-center hover:border-primary transition-colors"
            >
              <span className="text-xs text-muted-foreground">0{i + 1}</span>
              <p className="text-sm font-medium mt-2 text-foreground-heading">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certification / Licences */}
      <section className="section-padding pb-16 md:pb-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">CERTIFICATION / LICENCES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <img src={certNHW} alt="National Home Warranty" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={certGVHBA} alt="GVHBA Member" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={certGeorgie} alt="Georgie Awards" className="h-20 md:h-24 object-contain mx-auto" />
          <img src={cert2510} alt="2-5-10 Year Warranty" className="h-20 md:h-24 object-contain mx-auto" />
        </div>
      </section>
    </Layout>
  );
};

export default About;
