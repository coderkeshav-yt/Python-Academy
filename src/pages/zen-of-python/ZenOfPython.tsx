import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CodeBlock } from "@/components/CodeBlock";

export default function ZenOfPython() {
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

      <h1 className="text-3xl font-bold mb-6">Understanding Python's Philosophy (The Zen of Python)</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          The Zen of Python is a collection of 19 guiding principles that influence the design of the Python programming language. 
          It was written by Tim Peters and serves as a cultural touchstone for the Python community.
        </p>

        <div className="bg-card p-6 rounded-lg border mb-8">
          <CodeBlock
            code={"import this"}
            className="mb-4"
          />
          <p className="text-muted-foreground text-sm">
            Run this in a Python interpreter to see the full Zen of Python
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">The Zen of Python</h2>
        
        <div className="space-y-4 mb-8">
          <p className="border-l-4 border-primary pl-4 py-2 bg-muted/50">
            <span className="font-semibold">Beautiful is better than ugly.</span>
            <br />
            Python emphasizes readability and elegance in code.
          </p>
          
          <p className="border-l-4 border-primary pl-4 py-2 bg-muted/50">
            <span className="font-semibold">Explicit is better than implicit.</span>
            <br />
            Code should be straightforward and not hide anything from the reader.
          </p>
          
          <p className="border-l-4 border-primary pl-4 py-2 bg-muted/50">
            <span className="font-semibold">Simple is better than complex.</span>
            <br />
            Favor simplicity over unnecessary complexity.
          </p>
          
          <p className="border-l-4 border-primary pl-4 py-2 bg-muted/50">
            <span className="font-semibold">Complex is better than complicated.</span>
            <br />
            When complexity is necessary, it should be manageable and well-structured.
          </p>
          
          <p className="border-l-4 border-primary pl-4 py-2 bg-muted/50">
            <span className="font-semibold">Readability counts.</span>
            <br />
            Code is read more often than it's written, so make it readable.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Key Principles in Practice</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">1. Readability Matters</h3>
        <p className="mb-4">
          Python's syntax is designed to be readable and expressive. This means using meaningful variable names, 
          proper indentation, and following the PEP 8 style guide.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">2. There should be one-- and preferably only one --obvious way to do it</h3>
        <p className="mb-4">
          Unlike some languages that offer multiple ways to accomplish the same task, Python encourages a single, 
          obvious way to write code. This reduces ambiguity and makes code more maintainable.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">3. Errors should never pass silently</h3>
        <p className="mb-4">
          Python makes it easy to handle errors explicitly, which helps in writing more robust code.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Practical Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">List Comprehensions</h3>
            <p className="mb-2">Pythonic way to create lists:</p>
            <CodeBlock
              code={"# Non-Pythonic\nsquares = []\nfor x in range(10):\n    squares.append(x ** 2)\n\n# Pythonic\nsquares = [x ** 2 for x in range(10)]"}
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">The with Statement</h3>
            <p className="mb-2">Ensuring resources are properly managed:</p>
            <CodeBlock
              code={"# Proper resource management\nwith open('file.txt', 'r') as file:\n    content = file.read()\n    # File is automatically closed after this block"}
            />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Additional Resources</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>
            <a 
              href="https://www.python.org/dev/peps/pep-0020/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              PEP 20 -- The Zen of Python
            </a>
          </li>
          <li>
            <a 
              href="https://www.python.org/dev/peps/pep-0008/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              PEP 8 -- Style Guide for Python Code
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
