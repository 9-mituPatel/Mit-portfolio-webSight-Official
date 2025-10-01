import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Braincuber Technologies Pvt Ltd",
      location: "Surat, Gujarat",
      period: "Aug 2024 - Present",
      description: [
        "Designed and developed scalable backend systems using Node.js, MongoDB, and Redis for high-performance applications",
        "Led project development teams, ensuring timely delivery and quality control for multiple client projects",
        "Interacted directly with clients to gather requirements, provide technical solutions, and coordinate project deliverables",
        "Built RESTful APIs with role-based access control for admin, distributor, agent, and user dashboards",
        "Implemented Redis caching strategies to optimize frequently accessed data and improve application performance",
        "Integrated Elasticsearch for lightning-fast search functionality on customer and transaction data",
        "Used PM2 for process management and ensuring zero-downtime deployments"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "Elasticsearch", "BullMQ", "PM2", "JWT", "Amazon S3"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            My journey in backend development and database management across various organizations.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;