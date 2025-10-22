import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Account's Manager",
      company: "Distinguished Sponge Trading Est",
      location: "AL Qasim, Saudi Arabia",
      period: "2024-2025",
      responsibilities: [
        "Oversaw daily financial operations and transaction reconciliation",
        "Managed AP/AR and ensured timely collections",
        "Monitored expenses and prepared financial reports",
        "Managed inventory accounting and procurement processes",
        "Ensured compliance with accounting standards and tax regulations",
        "Supervised accounting staff and improved workflow efficiency"
      ]
    },
    {
      title: "Account's Manager",
      company: "Azla Travels & Tourism",
      location: "Riyadh, Saudi Arabia",
      period: "2024",
      responsibilities: [
        "Managed financial operations for travel bookings",
        "Maintained airline booking records using ERP software",
        "Prepared and distributed daily payment statements",
        "Tracked office expenses and maintained budget control",
        "Resolved payment discrepancies with travel agents"
      ]
    },
    {
      title: "General Account Manager",
      company: "AL Quwa Al Aula Elevator, AL Roughi Elevator, Ujra Jeddah",
      location: "Jeddah, Saudi Arabia",
      period: "2016-2024",
      responsibilities: [
        "Prepared Account Summary Statements for VAT compliance",
        "Conducted daily GL checks and monthly reconciliations",
        "Processed invoices and managed payroll with overtime calculations",
        "Managed petty cash and utility bill payments",
        "Maintained staff records and ensured compliance",
        "Handled all documentation in Arabic using ERP and accounting software"
      ]
    },
    {
      title: "Back-end Import Operations",
      company: "Artistic Milliners",
      location: "Karachi, Pakistan",
      period: "2014-2016",
      responsibilities: [
        "Coordinated with international suppliers for purchase orders",
        "Managed complete import documentation (LCs, invoices, BOL)",
        "Ensured customs and regulatory compliance",
        "Liaised with freight forwarders for timely clearance",
        "Reduced shipment delays through proactive tracking"
      ]
    },
    {
      title: "Import & Sale Coordinator",
      company: "Imran Traders",
      location: "Karachi, Pakistan",
      period: "2012-2014",
      responsibilities: [
        "Handled import processes and vendor coordination",
        "Managed purchase and sales cycles",
        "Oversaw inventory management and quality control",
        "Performed accounting tasks including invoicing and reconciliation"
      ]
    },
    {
      title: "Finance and Production Lead",
      company: "Shukat International",
      location: "Karachi, Pakistan",
      period: "2008-2012",
      responsibilities: [
        "Managed daily accounting and financial statements",
        "Supervised leather processing workflow from raw to finished goods",
        "Ensured quality control and production standards",
        "Optimized workflow to reduce costs and delays",
        "Conducted profitability and pricing analysis"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground/80">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
