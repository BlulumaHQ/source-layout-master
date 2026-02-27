import Layout from "@/components/Layout";
import contactBg from "@/assets/contact-bg.jpg";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section
        className="relative min-h-[80vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-foreground-heading/80" />
        <div className="relative z-10 section-padding py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headlines */}
            <div className="text-background">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                WE'RE HERE TO HELP
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Let's Get Your Project Done
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold">Call Us Today!</h3>

              <div className="mt-12 grid grid-cols-2 gap-8 text-sm text-background/60">
                <div>
                  <p className="text-background/40 mb-2">Find Us</p>
                  <p>Vancouver</p>
                  <p>BC. Canada</p>
                </div>
                <div>
                  <p className="text-background/40 mb-2">Social</p>
                  <p>Instagram</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Card */}
            <div className="bg-amber-50 rounded-lg p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground-heading mb-6">
                Let's Talk About Your New Project, We Can Do It!
              </h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <a
                  href="tel:6046182449"
                  className="inline-flex items-center gap-2 bg-foreground-heading text-background rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  (604) 618-2449
                </a>
                <span className="text-sm text-muted-foreground">
                  Email: info@kchencm.com
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Have any questions about your construction project? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
