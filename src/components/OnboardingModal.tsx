import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

type OnboardingData = {
  timeline: string;
  level: string;
  completed: boolean;
};

type OnboardingModalProps = {
  onComplete: (data: OnboardingData) => void;
};

const OnboardingModal = ({ onComplete }: OnboardingModalProps) => {
  const [open, setOpen] = useState(false);
  const [timeline, setTimeline] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    const onboardingData = localStorage.getItem("pythonOnboarding");
    if (!onboardingData) {
      setOpen(true);
    }
  }, []);

  const handleSubmit = () => {
    if (!timeline || !level) {
      toast.error("Please select both timeline and skill level");
      return;
    }

    const data: OnboardingData = {
      timeline,
      level,
      completed: true,
    };

    localStorage.setItem("pythonOnboarding", JSON.stringify(data));
    setOpen(false);
    onComplete(data);
    toast.success("Welcome! Let's start your Python journey! 🚀");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to Python Zero to Hero! 🐍</DialogTitle>
          <DialogDescription className="text-base">
            Let's personalize your learning experience
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Timeline Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">How long do you plan to complete this course?</Label>
            <Select value={timeline} onValueChange={setTimeline}>
              <SelectTrigger>
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-month">1 Month (Intensive)</SelectItem>
                <SelectItem value="3-months">3 Months (Regular)</SelectItem>
                <SelectItem value="6-months">6 Months (Relaxed)</SelectItem>
                <SelectItem value="1-year">1 Year (Part-time)</SelectItem>
                <SelectItem value="flexible">Flexible (No rush)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Skill Level Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">What's your current Python skill level?</Label>
            <RadioGroup value={level} onValueChange={setLevel} className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                <RadioGroupItem value="beginner" id="beginner" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="beginner" className="font-medium cursor-pointer">
                    Complete Beginner
                  </Label>
                  <p className="text-sm text-muted-foreground">I'm new to Python and programming</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                <RadioGroupItem value="intermediate" id="intermediate" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="intermediate" className="font-medium cursor-pointer">
                    Intermediate
                  </Label>
                  <p className="text-sm text-muted-foreground">I know the basics and want to go deeper</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                <RadioGroupItem value="advanced" id="advanced" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="advanced" className="font-medium cursor-pointer">
                    Advanced
                  </Label>
                  <p className="text-sm text-muted-foreground">I'm comfortable with OOP and advanced concepts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                <RadioGroupItem value="expert" id="expert" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="expert" className="font-medium cursor-pointer">
                    Expert
                  </Label>
                  <p className="text-sm text-muted-foreground">I want to master specialized topics only</p>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button onClick={handleSubmit} size="lg" className="w-full sm:w-auto">
            Start Learning
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
