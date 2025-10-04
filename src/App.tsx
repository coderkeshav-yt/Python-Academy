import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TopicDetail from "./pages/TopicDetail";
import InstallationGuide from "./pages/installation/InstallationGuide";
import IDEGuide from "./pages/ide/IDEGuide";
import RunningPythonGuide from "./pages/running-python/RunningPythonGuide";
import ZenOfPython from "./pages/zen-of-python/ZenOfPython";
import DebuggingGuide from "./pages/debugging/DebuggingGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/python-installation" element={<InstallationGuide />} />
          <Route path="/ide-guide" element={<IDEGuide />} />
          <Route path="/running-python" element={<RunningPythonGuide />} />
          <Route path="/zen-of-python" element={<ZenOfPython />} />
          <Route path="/debugging" element={<DebuggingGuide />} />
          <Route path="/topic/:levelId/:topicIndex/:subtopicIndex" element={<TopicDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
