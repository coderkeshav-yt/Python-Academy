import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, User, Edit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

type OnboardingData = {
  timeline: string;
  level: string;
  completed: boolean;
};

type UserProfileProps = {
  onLevelChange: (newLevel: string) => void;
};

const UserProfile = ({ onLevelChange }: UserProfileProps) => {
  const [userData, setUserData] = useState<OnboardingData | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [timeline, setTimeline] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    const saved = localStorage.getItem("pythonOnboarding");
    if (saved) {
      const data = JSON.parse(saved);
      setUserData(data);
      setTimeline(data.timeline);
      setLevel(data.level);
    }
  };

  const handleUpdate = () => {
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
    setUserData(data);
    setEditOpen(false);
    
    // Notify parent component about level change
    if (level !== userData?.level) {
      onLevelChange(level);
    }
    
    toast.success("Profile updated successfully!");
  };

  const getLevelBadge = (level: string) => {
    const badges = {
      beginner: { label: "Complete Beginner", variant: "default" as const },
      intermediate: { label: "Intermediate", variant: "secondary" as const },
      advanced: { label: "Advanced", variant: "default" as const },
      expert: { label: "Expert", variant: "default" as const },
    };
    return badges[level as keyof typeof badges] || badges.beginner;
  };

  const getTimelineLabel = (timeline: string) => {
    const labels: Record<string, string> = {
      "1-month": "1 Month",
      "3-months": "3 Months",
      "6-months": "6 Months",
      "1-year": "1 Year",
      "flexible": "Flexible",
    };
    return labels[timeline] || timeline;
  };

  if (!userData) return null;

  const levelBadge = getLevelBadge(userData.level);

  return (
    <Card className="p-6 shadow-elegant mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Your Level</p>
              <Badge variant={levelBadge.variant} className="mt-1">
                {levelBadge.label}
              </Badge>
            </div>
          </div>

          <div className="h-10 w-px bg-border" />

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Timeline</p>
              <p className="font-medium">{getTimelineLabel(userData.timeline)}</p>
            </div>
          </div>
        </div>

        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Update Your Profile</DialogTitle>
              <DialogDescription>
                Change your timeline or skill level
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              <div className="space-y-3">
                <Label className="text-base font-semibold">Timeline</Label>
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

              <div className="space-y-3">
                <Label className="text-base font-semibold">Skill Level</Label>
                <RadioGroup value={level} onValueChange={setLevel} className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                    <RadioGroupItem value="beginner" id="edit-beginner" className="mt-1" />
                    <Label htmlFor="edit-beginner" className="font-medium cursor-pointer flex-1">
                      Complete Beginner
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                    <RadioGroupItem value="intermediate" id="edit-intermediate" className="mt-1" />
                    <Label htmlFor="edit-intermediate" className="font-medium cursor-pointer flex-1">
                      Intermediate
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                    <RadioGroupItem value="advanced" id="edit-advanced" className="mt-1" />
                    <Label htmlFor="edit-advanced" className="font-medium cursor-pointer flex-1">
                      Advanced
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                    <RadioGroupItem value="expert" id="edit-expert" className="mt-1" />
                    <Label htmlFor="edit-expert" className="font-medium cursor-pointer flex-1">
                      Expert
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setEditOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpdate}>
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

export default UserProfile;
