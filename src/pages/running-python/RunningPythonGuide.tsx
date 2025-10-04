import { Button } from "@/components/ui/button";
import { ArrowLeft, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "../../components/CodeBlock";

const RunningPythonGuide = () => {
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
        <h1 className="text-4xl font-bold mb-6">Running Python Scripts and Interactive Shell</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to run Python code using scripts and the interactive shell for efficient development and testing.
        </p>

        <Tabs defaultValue="scripts" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="scripts">Running Scripts</TabsTrigger>
            <TabsTrigger value="interactive">Interactive Shell</TabsTrigger>
          </TabsList>
          
          {/* Running Scripts */}
          <TabsContent value="scripts">
            <Card>
              <CardHeader>
                <CardTitle>Running Python Scripts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">1. Creating a Python Script</h3>
                  <p className="mb-4">Create a new file with a <code>.py</code> extension. For example, <code>hello.py</code>:</p>
                  <CodeBlock 
                    code={'# hello.py\nprint("Hello, World!")'}
                    className="mb-4"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">2. Running the Script</h3>
                  <p className="mb-2">Open a terminal or command prompt and navigate to the directory containing your script, then run:</p>
                  <div className="space-y-4">
                    <div>
                      <p>On Windows:</p>
                      <CodeBlock 
                        code="python hello.py"
                        className="my-2"
                      />
                    </div>
                    <div>
                      <p>On macOS/Linux:</p>
                      <CodeBlock 
                        code="python3 hello.py"
                        className="my-2"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">3. Command Line Arguments</h3>
                  <p className="mb-2">You can pass command line arguments to your script:</p>
                  <CodeBlock 
                    code={'# args.py\nimport sys\nprint(f"Arguments: {sys.argv}")'}
                    className="mb-4"
                  />
                  <p>Run it with:</p>
                  <CodeBlock 
                    code="python args.py arg1 arg2"
                    className="mb-4"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interactive Shell */}
          <TabsContent value="interactive">
            <Card>
              <CardHeader>
                <CardTitle>Using Python Interactive Shell</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">1. Starting the Interactive Shell</h3>
                  <p className="mb-2">To start the Python interactive shell, simply type:</p>
                  <div className="space-y-4">
                    <div>
                      <p>On Windows:</p>
                      <CodeBlock 
                        code="python"
                        className="my-2"
                      />
                    </div>
                    <div>
                      <p>On macOS/Linux:</p>
                      <CodeBlock 
                        code="python3"
                        className="my-2"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">2. Basic Usage</h3>
                  <p className="mb-2">You can type Python code directly into the shell:</p>
                  <CodeBlock 
                    code='>>> print("Hello, Interactive Shell!")
Hello, Interactive Shell!
>>> x = 5
>>> y = 3
>>> x + y
8'
                    className="mb-4"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">3. Getting Help</h3>
                  <p className="mb-2">Use the <code>help()</code> function to get information about any Python object:</p>
                  <CodeBlock 
                    code='>>> help(str)  # Get help on the string type
>>> help(str.upper)  # Get help on a specific method'
                    className="mb-4"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">4. Exiting the Shell</h3>
                  <p className="mb-2">To exit the interactive shell, use one of these methods:</p>
                  <CodeBlock 
                    code='>>> exit()  # or quit()
>>> # On Unix-like systems, you can also use Ctrl+D
>>> # On Windows, use Ctrl+Z then Enter'
                    className="mb-4"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Tips and Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Using IPython</h3>
                  <p className="mb-2">For an enhanced interactive experience, install IPython:</p>
                  <CodeBlock 
                    code="pip install ipython"
                    className="mb-2"
                  />
                  <p>Then run <code>ipython</code> instead of <code>python</code> for features like:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Tab completion</li>
                    <li>Syntax highlighting</li>
                    <li>Better help system</li>
                    <li>Magic commands (e.g., <code>%run</code>, <code>%timeit</code>)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Running Code from a File in Interactive Mode</h3>
                  <p className="mb-2">You can run a Python file and then enter interactive mode with the <code>-i</code> flag:</p>
                  <CodeBlock 
                    code="python -i script.py"
                    className="mb-2"
                  />
                  <p>This is useful for debugging or exploring code interactively after it runs.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Executing Python Code Directly</h3>
                  <p className="mb-2">Run a single command without entering interactive mode:</p>
                  <CodeBlock 
                    code={`python -c "print('Hello from command line')"`}
                    className="mb-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default RunningPythonGuide;
