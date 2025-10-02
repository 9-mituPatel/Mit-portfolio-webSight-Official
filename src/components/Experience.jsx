import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer & Tech Lead",
      company: "Braincuber Technologies Pvt Ltd",
      location: "Surat, Gujarat",
      period: "Aug 2024 - Present · 1 yr 3 mos",
      description: [
        "Designed and developed scalable web applications using Node.js, Express.js, MongoDB, React.js, Next.js, and Tailwind CSS",
        "Led a small team of developers, providing guidance, code reviews, and mentoring",
        "Collaborated with clients to gather requirements, plan project timelines, and deliver high-quality solutions",
        "Implemented CI/CD pipelines using Docker and managed deployments for zero-downtime releases",
        "Integrated third-party services and optimized database operations for performance and scalability"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Next.js", "Docker", "Redis", "AWS", "Tailwind CSS"]
    },
    {
      title: "Backend & Full Stack Developer",
      company: "Freelance / Relatives' Companies / Internships",
      location: " Surat, India",
      period: "~2022 - 2024 · Part-time / Internship",
      description: [
        "Worked part-time during graduation, gaining hands-on experience in web design and development",
        "Built small to mid-scale projects, including frontend dashboards using React.js and Bootstrap, and backend APIs with Node.js, SQL & MongoDB",
        "Learned end-to-end project development, client communication, and foundational full stack skills",
        "Contributed to internships and small company projects, building a strong practical base over 2 years"
      ],
      technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "MySQL", "Bootstrap", "RESTful APIs"]
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