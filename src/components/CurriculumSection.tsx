import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { curriculumData } from "@/data/curriculum";
import { useNavigate } from "react-router-dom";

const CurriculumSection = () => {
  const [expandedLevels, setExpandedLevels] = useState<Set<string>>(new Set(["beginner"]));
  const navigate = useNavigate();

  const handleSubtopicClick = (levelId: string, topicIndex: number, subtopicIndex: number) => {
    navigate(`/topic/${levelId}/${topicIndex}/${subtopicIndex}`);
  };

  const toggleLevel = (levelId: string) => {
    setExpandedLevels((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(levelId)) {
        newSet.delete(levelId);
      } else {
        newSet.add(levelId);
      }
      return newSet;
    });
  };

  const getLevelColor = (level: string) => {
    const colors = {
      beginner: "bg-green-500/10 text-green-700 border-green-500/20",
      intermediate: "bg-blue-500/10 text-blue-700 border-blue-500/20",
      advanced: "bg-purple-500/10 text-purple-700 border-purple-500/20",
      specialized: "bg-pink-500/10 text-pink-700 border-pink-500/20",
    };
    return colors[level.toLowerCase() as keyof typeof colors] || colors.beginner;
  };

  return (
    <section id="curriculum" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Complete Python Curriculum
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive roadmap covering every essential Python topic from fundamentals to advanced concepts
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {curriculumData.map((level, levelIndex) => (
            <Card
              key={level.id}
              className="overflow-hidden border-2 hover:shadow-elegant transition-all duration-300"
            >
              <button
                onClick={() => toggleLevel(level.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-hero text-primary-foreground font-bold text-lg">
                    {levelIndex + 1}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{level.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge className={`${getLevelColor(level.id)} border`}>
                        {level.badge}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {level.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {level.topics.length} topics
                  </span>
                  {expandedLevels.has(level.id) ? (
                    <ChevronUp className="h-6 w-6 text-primary" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
              </button>

              {expandedLevels.has(level.id) && (
                <div className="px-6 pb-6 space-y-4 border-t border-border animate-accordion-down">
                  <p className="text-muted-foreground pt-4">{level.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {level.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-border"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{topic.title}</h4>
                          {topic.duration && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {topic.duration}
                            </span>
                          )}
                        </div>
                        <ul className="space-y-1.5 mt-2">
                          {topic.subtopics.map((subtopic, subIndex) => (
                            <li
                              key={subIndex}
                              onClick={() => handleSubtopicClick(level.id, topicIndex, subIndex)}
                              className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-1 before:text-primary hover:text-primary hover:cursor-pointer group transition-colors"
                            >
                              <div className="flex items-center">
                                {subtopic}
                                <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-70 transition-opacity" />
                              </div>
                            </li>
                          ))}
                        </ul>
                        {topic.projects && topic.projects.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-border/50">
                            <span className="text-xs font-medium text-primary">Projects:</span>
                            <ul className="mt-1 space-y-1">
                              {topic.projects.map((project, i) => (
                                <li key={i} className="text-xs text-muted-foreground flex items-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2"></span>
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
