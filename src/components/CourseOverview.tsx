import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Layers, TrendingUp } from "lucide-react";

const CourseOverview = () => {
  const benefits = [
    {
      icon: Target,
      title: "Structured Learning Path",
      description: "Follow a clear roadmap from basics to advanced topics, ensuring no gaps in your knowledge.",
    },
    {
      icon: Layers,
      title: "Comprehensive Coverage",
      description: "From syntax to OOP, data science to web development - everything you need in one place.",
    },
    {
      icon: CheckCircle,
      title: "Progressive Difficulty",
      description: "Each level builds on the previous, ensuring solid understanding before moving forward.",
    },
    {
      icon: TrendingUp,
      title: "Career-Ready Skills",
      description: "Master the skills needed for real-world Python development and data science roles.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why This Course?
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete, structured approach to learning Python that takes you from absolute beginner to advanced developer
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/50 group"
            >
              <div className="mb-4 p-3 bg-gradient-hero rounded-lg inline-block group-hover:shadow-glow transition-all duration-300">
                <benefit.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* What You'll Learn */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-6 text-center">What You'll Master</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Python fundamentals and syntax",
                "Data structures and algorithms",
                "Object-oriented programming",
                "File handling and I/O operations",
                "Error handling and debugging",
                "Functional programming concepts",
                "Web development frameworks",
                "Data science and machine learning basics",
                "Asynchronous programming",
                "Testing and best practices",
                "Package management and virtual environments",
                "Real-world project development",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
