import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CodeBlock } from "@/components/CodeBlock";

export default function DebuggingGuide() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Curriculum
      </Button>

      <h1 className="text-3xl font-bold mb-6">Basic Debugging Techniques in Python</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Debugging is an essential skill for every programmer. Python provides several tools and techniques to help you find and fix bugs in your code efficiently.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Print Debugging</h2>
        <p className="mb-4">The simplest form of debugging is using print statements to track variable values and program flow.</p>
        
        <div className="space-y-4 mb-8">
          <CodeBlock
            code={`def calculate_average(numbers):
    print(f"Input numbers: {JSON.stringify(numbers)}")  # Debug print
    total = sum(numbers)
    print(f"Total: {total}")  # Debug print
    average = total / len(numbers)
    print(f"Average: {average}")  # Debug print
    return average`}
            className="mb-4"
          />
          <p className="text-muted-foreground text-sm">
            While simple, print statements can quickly become cluttered. Use them judiciously.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Using Logging Module</h2>
        <p className="mb-4">For more sophisticated debugging, use Python's <code>logging</code> module.</p>
        
        <div className="space-y-4 mb-8">
          <CodeBlock
            code={`import logging

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def process_items(items):
    logging.debug(f"Processing {len(items)} items")
    for i, item in enumerate(items):
        try:
            result = 100 / item
            logging.debug(f"Item {i}: {item} → {result}")
        except ZeroDivisionError:
            logging.error(f"Cannot divide by zero at index {i}")

process_items([1, 2, 0, 4, 5])`}
            className="mb-4"
          />
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Common Debugging Scenarios</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Handling Exceptions</h3>
            <CodeBlock
              code={`try:
    # Potentially problematic code
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error occurred: {e}")
    # Additional error handling`}
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Checking Variable Types</h3>
            <CodeBlock
              code={`def process_value(value):
    print(f"Type of value: {typeof value}")
    print(f"Value: {value}")
    # Rest of the function`}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Start with simple print statements for quick checks</li>
          <li>Use the debugger for complex issues</li>
          <li>Add assertions to catch unexpected conditions</li>
          <li>Write small, testable functions</li>
          <li>Use version control to track changes and identify when bugs were introduced</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Additional Resources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>
            <a 
              href="https://docs.python.org/3/library/pdb.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Python Debugger Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://docs.python.org/3/howto/logging.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Python Logging HOWTO
            </a>
          </li>
        </ul>
      </div>
      
      <div className="mt-8 pt-6 border-t">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="w-full sm:w-auto"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Getting Started with Python
        </Button>
      </div>
    </div>
  );
}
