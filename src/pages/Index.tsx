import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseOverview from "@/components/CourseOverview";
import CurriculumSection from "@/components/CurriculumSection";
import ProgressTracker from "@/components/ProgressTracker";
import Footer from "@/components/Footer";
import OnboardingModal from "@/components/OnboardingModal";

const Index = () => {
  const handleOnboardingComplete = () => {
    // Reload the progress tracker to auto-complete topics based on level
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background">
      <OnboardingModal onComplete={handleOnboardingComplete} />
      <Navbar />
      <main>
        <Hero />
        <CourseOverview />
        <CurriculumSection />
        <ProgressTracker />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
