import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "../../components/CodeBlock";

const IDEGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Curriculum
      </Button>
      
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6">Choosing an IDE/Code Editor</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Select the best development environment for your Python projects. This guide covers VS Code, PyCharm, and Jupyter Notebook.
        </p>

        <Tabs defaultValue="vscode" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="vscode">VS Code</TabsTrigger>
            <TabsTrigger value="pycharm">PyCharm</TabsTrigger>
            <TabsTrigger value="jupyter">Jupyter</TabsTrigger>
          </TabsList>
          
          {/* VS Code */}
          <TabsContent value="vscode">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Visual Studio Code</CardTitle>
                  <a 
                    href="https://code.visualstudio.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Download <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Why Choose VS Code?</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Lightweight and fast</li>
                    <li>Extensive extension ecosystem</li>
                    <li>Excellent Python support through extensions</li>
                    <li>Built-in Git integration</li>
                    <li>Free and open-source</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Installation</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Download VS Code from the official website</li>
                    <li>Run the installer and follow the instructions</li>
                    <li>Install the Python extension by Microsoft</li>
                  </ol>
                  <CodeBlock 
                    code="code --install-extension ms-python.python"
                    className="mt-4"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Recommended Extensions</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Python (Microsoft)</li>
                    <li>Pylance</li>
                    <li>Jupyter</li>
                    <li>Python Docstring Generator</li>
                    <li>Python Test Explorer</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PyCharm */}
          <TabsContent value="pycharm">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>PyCharm</CardTitle>
                  <a 
                    href="https://www.jetbrains.com/pycharm/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Download <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Why Choose PyCharm?</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Dedicated Python IDE with powerful features</li>
                    <li>Professional and Community editions available</li>
                    <li>Built-in testing and debugging tools</li>
                    <li>Database tools integration</li>
                    <li>Scientific tools support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Installation</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Download PyCharm (Community Edition is free)</li>
                    <li>Run the installer and follow the instructions</li>
                    <li>Configure Python interpreter during first launch</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Intelligent code completion</li>
                    <li>Powerful debugger</li>
                    <li>Integrated unit testing</li>
                    <li>Version control integration</li>
                    <li>Database tools</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Jupyter */}
          <TabsContent value="jupyter">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Jupyter Notebook/Lab</CardTitle>
                  <a 
                    href="https://jupyter.org/install" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Install Guide <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Why Choose Jupyter?</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ideal for data science and research</li>
                    <li>Interactive computing environment</li>
                    <li>Supports multiple programming languages</li>
                    <li>Great for visualization and documentation</li>
                    <li>Browser-based interface</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Installation</h3>
                  <p className="mb-2">Install Jupyter using pip:</p>
                  <CodeBlock 
                    code="pip install notebook jupyterlab"
                    className="mb-4"
                  />
                  <p>To launch Jupyter Notebook:</p>
                  <CodeBlock 
                    code="jupyter notebook"
                    className="mb-4"
                  />
                  <p>To launch JupyterLab:</p>
                  <CodeBlock 
                    code="jupyter lab"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Interactive code execution</li>
                    <li>Rich media support</li>
                    <li>Markdown and LaTeX support</li>
                    <li>Extensible through extensions</li>
                    <li>Great for data visualization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-muted">
                  <th className="text-left p-4">Feature</th>
                  <th className="text-left p-4">VS Code</th>
                  <th className="text-left p-4">PyCharm</th>
                  <th className="text-left p-4">Jupyter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted">
                  <td className="p-4 font-medium">Best For</td>
                  <td className="p-4">General development, lightweight</td>
                  <td className="p-4">Professional development</td>
                  <td className="p-4">Data science, research</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-4 font-medium">Learning Curve</td>
                  <td className="p-4">Moderate</td>
                  <td className="p-4">Steep</td>
                  <td className="p-4">Easy to start</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="p-4 font-medium">Performance</td>
                  <td className="p-4">Fast</td>
                  <td className="p-4">Heavy</td>
                  <td className="p-4">Browser-dependent</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Price</td>
                  <td className="p-4">Free</td>
                  <td className="p-4">Free (Community) / Paid (Pro)</td>
                  <td className="p-4">Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Recommendation</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">For beginners:</span> Start with VS Code - it's lightweight, free, and has excellent Python support.
            </p>
            <p>
              <span className="font-semibold">For professional development:</span> Consider PyCharm for its powerful features and Python-specific tools.
            </p>
            <p>
              <span className="font-semibold">For data science:</span> Use Jupyter Notebooks for interactive data analysis and visualization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDEGuide;
