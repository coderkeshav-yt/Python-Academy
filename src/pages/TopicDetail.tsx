import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { curriculumData } from "@/data/curriculum";

const TopicDetail = () => {
  const { levelId, topicIndex, subtopicIndex } = useParams<{
    levelId: string;
    topicIndex: string;
    subtopicIndex: string;
  }>();
  const navigate = useNavigate();

  if (!levelId || !topicIndex || !subtopicIndex) {
    return <div>Topic not found</div>;
  }

  // Find the level, topic, and subtopic
  const level = curriculumData.find((l) => l.id === levelId);
  if (!level) return <div>Level not found</div>;

  const topic = level.topics[parseInt(topicIndex)];
  if (!topic) return <div>Topic not found</div>;

  const subtopic = topic.subtopics[parseInt(subtopicIndex)];
  if (!subtopic) return <div>Subtopic not found</div>;

  // Check for specific subtopics that have dedicated guide pages
  if (subtopic.trim() === 'Python installation & setup (Windows, macOS, Linux)') {
    return <Navigate to="/python-installation" replace />;
  }
  
  if (subtopic.trim() === 'Choosing an IDE/Code Editor (VS Code, PyCharm, Jupyter)') {
    return <Navigate to="/ide-guide" replace />;
  }
  
  if (subtopic.trim() === 'Running Python scripts and interactive shell') {
    return <Navigate to="/running-python" replace />;
  }

  // This is where you'd fetch or define more detailed content
  const detailedContent = {
    title: subtopic,
    content: `
      <h2 class="text-2xl font-bold mb-4">${subtopic}</h2>
      <p class="mb-4">This is a detailed explanation of ${subtopic}. In this section, you'll learn everything you need to know about this topic.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Key Points</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Detailed point 1 about ${subtopic}</li>
        <li>Detailed point 2 about ${subtopic}</li>
        <li>Step-by-step instructions</li>
        <li>Common issues and solutions</li>
        <li>Best practices</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Examples</h3>
      <div class="bg-muted p-4 rounded-lg mb-6">
        <pre class="whitespace-pre-wrap"><code># Example code for ${subtopic}
# This would be replaced with actual code examples
print("Hello, World!")
</code></pre>
      </div>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Additional Resources</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Link to official documentation</li>
        <li>Recommended tutorials</li>
        <li>Related topics to explore</li>
      </ul>
    `,
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Curriculum
      </Button>
      
      <div className="bg-card rounded-lg shadow-lg p-8">
        <div className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: detailedContent.content }}
        />
        
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-lg font-semibold mb-4">Ready to continue learning?</h3>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => navigate(-1)}>Back to {topic.title}</Button>
            <Button variant="outline" onClick={() => window.scrollTo(0, 0)}>
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
