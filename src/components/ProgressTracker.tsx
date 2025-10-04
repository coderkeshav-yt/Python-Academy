import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, RotateCcw } from "lucide-react";
import { curriculumData } from "@/data/curriculum";
import { toast } from "sonner";
import UserProfile from "./UserProfile";

// Type for tracking completed topics
type CompletedTopics = {
  [levelId: string]: {
    [topicIndex: number]: boolean;
  };
};

const ProgressTracker = () => {
  const [completedTopics, setCompletedTopics] = useState<CompletedTopics>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("pythonProgress");
    if (saved) {
      try {
        setCompletedTopics(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load progress:", e);
      }
    }

    // Auto-complete topics based on user level
    const onboardingData = localStorage.getItem("pythonOnboarding");
    if (onboardingData) {
      const { level } = JSON.parse(onboardingData);
      autoCompleteBasedOnLevel(level);
    }
  }, []);

  // Auto-complete topics based on skill level
  const autoCompleteBasedOnLevel = (level: string) => {
    const levelHierarchy = ["beginner", "intermediate", "advanced", "expert"];
    const currentLevelIndex = levelHierarchy.indexOf(level);
    
    if (currentLevelIndex <= 0) return; // Beginner starts fresh

    setCompletedTopics((prev) => {
      const newState = { ...prev };
      
      curriculumData.forEach((curriculumLevel) => {
        const curriculumLevelIndex = levelHierarchy.indexOf(curriculumLevel.id);
        
        // Auto-complete all levels below the selected level
        if (curriculumLevelIndex >= 0 && curriculumLevelIndex < currentLevelIndex) {
          if (!newState[curriculumLevel.id]) {
            newState[curriculumLevel.id] = {};
          }
          curriculumLevel.topics.forEach((_, index) => {
            newState[curriculumLevel.id][index] = true;
          });
        }
      });
      
      return newState;
    });
  };

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("pythonProgress", JSON.stringify(completedTopics));
  }, [completedTopics]);

  // Toggle topic completion
  const toggleTopic = (levelId: string, topicIndex: number) => {
    setCompletedTopics((prev) => {
      const newState = { ...prev };
      if (!newState[levelId]) {
        newState[levelId] = {};
      }
      newState[levelId][topicIndex] = !newState[levelId][topicIndex];
      return newState;
    });

    const isCompleting = !completedTopics[levelId]?.[topicIndex];
    if (isCompleting) {
      toast.success("Topic completed! Keep up the great work! 🎉");
    }
  };

  // Calculate overall progress
  const calculateProgress = () => {
    let totalTopics = 0;
    let completedCount = 0;

    curriculumData.forEach((level) => {
      totalTopics += level.topics.length;
      level.topics.forEach((_, index) => {
        if (completedTopics[level.id]?.[index]) {
          completedCount++;
        }
      });
    });

    return { totalTopics, completedCount, percentage: (completedCount / totalTopics) * 100 };
  };

  // Reset all progress
  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      setCompletedTopics({});
      toast.info("Progress reset successfully");
    }
  };

  const { totalTopics, completedCount, percentage } = calculateProgress();

  const handleLevelChange = (newLevel: string) => {
    autoCompleteBasedOnLevel(newLevel);
    toast.success("Progress updated based on your new level!");
  };

  return (
    <section id="progress" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Track Your Progress</h2>
          <p className="text-lg text-muted-foreground">
            Mark topics as you complete them and watch your Python mastery grow
          </p>
        </div>

        {/* User Profile Card */}
        <div className="max-w-4xl mx-auto">
          <UserProfile onLevelChange={handleLevelChange} />
        </div>

        {/* Overall Progress Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 shadow-elegant">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Overall Progress</h3>
                <p className="text-muted-foreground">
                  {completedCount} of {totalTopics} topics completed
                </p>
              </div>
              <Button
                onClick={resetProgress}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            </div>
            <Progress value={percentage} className="h-3 mb-4" />
            <div className="text-right">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {percentage.toFixed(1)}%
              </span>
            </div>
          </Card>
        </div>

        {/* Topic Checklist by Level */}
        <div className="max-w-4xl mx-auto space-y-6">
          {curriculumData.map((level) => {
            const levelCompleted = level.topics.filter(
              (_, index) => completedTopics[level.id]?.[index]
            ).length;
            const levelPercentage = (levelCompleted / level.topics.length) * 100;

            return (
              <Card key={level.id} className="p-6 shadow-elegant">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{level.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {levelCompleted}/{level.topics.length}
                    </span>
                  </div>
                  <Progress value={levelPercentage} className="h-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {level.topics.map((topic, index) => {
                    const isCompleted = completedTopics[level.id]?.[index];
                    return (
                      <button
                        key={index}
                        onClick={() => toggleTopic(level.id, index)}
                        className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${
                          isCompleted
                            ? "bg-primary/5 border-primary hover:bg-primary/10"
                            : "bg-background border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <div
                              className={`font-medium ${
                                isCompleted ? "text-primary" : "text-foreground"
                              }`}
                            >
                              {topic.title}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {topic.subtopics.length} subtopics
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
