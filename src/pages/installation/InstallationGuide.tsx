import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// Reusable CodeBlock component with copy functionality
interface CodeBlockProps {
  code: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code.replace(/\\"/g, '"'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group ${className}`}>
      <pre className="bg-muted p-3 rounded-md overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-1.5 rounded bg-background/50 hover:bg-muted-foreground/10 transition-colors opacity-0 group-hover:opacity-100"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
};

const InstallationGuide: React.FC = () => {
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
        <h1 className="text-4xl font-bold mb-6">Python Installation & Setup</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Get Python up and running on your system with this comprehensive installation guide for Windows, macOS, and Linux.
        </p>

        <Alert className="mb-8">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Before You Begin</AlertTitle>
          <AlertDescription>
            This guide will help you install the latest stable version of Python. 
            Make sure you have administrative privileges on your computer before proceeding.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="windows" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="windows">Windows</TabsTrigger>
            <TabsTrigger value="macos">macOS</TabsTrigger>
            <TabsTrigger value="linux">Linux</TabsTrigger>
          </TabsList>
          
          {/* Windows Installation */}
          <TabsContent value="windows">
            <Card>
              <CardHeader>
                <CardTitle>Windows Installation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Download Python</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Visit the official Python downloads page: <a href="https://www.python.org/downloads/" className="text-primary hover:underline">python.org/downloads</a></li>
                    <li>Click on the "Download Python" button (it will automatically detect your OS)</li>
                    <li>For most users, the 64-bit version is recommended</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Run the Installer</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Locate the downloaded file (typically in your Downloads folder)</li>
                    <li>Double-click the installer to run it</li>
                    <li><strong>Important:</strong> Check the box that says "Add Python to PATH" at the bottom of the installer</li>
                    <li>Click "Install Now" (recommended for most users) or "Customize installation" for advanced options</li>
                  </ol>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="font-medium">Note for Windows 7/8 users:</p>
                    <p>Python 3.9 was the last version to support Windows 7. You can download it from the <a href="https://www.python.org/downloads/release/python-3913/" className="text-primary hover:underline">Python archives</a> if needed.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Verify Installation</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Open Command Prompt (press Win + R, type <code>cmd</code>, and press Enter)</li>
                    <li>Type the following command and press Enter:
                      <CodeBlock code="python --version" />
                    </li>
                    <li>You should see the installed Python version (e.g., <code>Python 3.11.4</code>)</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* macOS Installation */}
          <TabsContent value="macos">
            <Card>
              <CardHeader>
                <CardTitle>macOS Installation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Check Pre-installed Python</h3>
                  <p className="mb-4">macOS comes with Python 2.7 pre-installed, but we'll install the latest version.</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Open Terminal (press Cmd + Space, type "Terminal", and press Enter)</li>
                    <li>Check the current Python version:
                      <pre className="bg-muted p-3 rounded-md mt-2 overflow-x-auto">
                        <code>python3 --version</code>
                      </pre>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Install Homebrew (Recommended)</h3>
                  <p className="mb-4">Homebrew is a package manager that makes it easy to install Python and other tools.</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Install Homebrew by running this command in Terminal:
                      <CodeBlock code={'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'} />
                    </li>
                    <li>Follow the on-screen instructions to complete the installation</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Install Python</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>In Terminal, run:
                      <CodeBlock code="brew install python" />
                    </li>
                    <li>Verify the installation:
                      <pre className="bg-muted p-3 rounded-md mt-2 overflow-x-auto">
                        <code>python3 --version</code>
                      </pre>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Linux Installation */}
          <TabsContent value="linux">
            <Card>
              <CardHeader>
                <CardTitle>Linux Installation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Check Current Python Version</h3>
                  <p className="mb-4">Most Linux distributions come with Python pre-installed. Check your current version:</p>
                  <CodeBlock code="python3 --version" />
                </div>

                <div>
                  <p className="mb-2">Use your distribution's package manager:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">For Ubuntu/Debian:</h4>
                      <CodeBlock code="sudo apt update
sudo apt install python3 python3-pip python3-venv" />
                    </div>

                    <div>
                      <h4 className="font-medium">For Fedora:</h4>
                      <CodeBlock code="sudo dnf install python3 python3-pip" />
                    </div>

                    <div>
                      <h4 className="font-medium">For Arch Linux:</h4>
                      <CodeBlock code="sudo pacman -S python python-pip" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Verify Installation</h3>
                  <p className="mb-4">After installation, verify Python and pip are working:</p>
                  <CodeBlock code="python3 --version
pip3 --version" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Setting Up a Virtual Environment</h3>
              <p>It's recommended to use virtual environments for Python projects:</p>
              <CodeBlock code="python -m venv myenv" />
              <p className="mt-4">Activate the environment:</p>
              <div className="space-y-2">
                <p>On Windows:</p>
                <CodeBlock code=".\\myenv\\Scripts\\activate" />
                <p>On macOS/Linux:</p>
                <CodeBlock code="source myenv/bin/activate" />
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Installing Packages</h3>
              <p>Use pip to install packages:</p>
              <CodeBlock code="pip install package-name" />
              <p className="mt-4">Common packages to get started:</p>
              <CodeBlock code="pip install numpy pandas matplotlib jupyter" />
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Python command not found</h3>
              <p>On some systems, you might need to use <code>python3</code> instead of <code>python</code>.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Permission Denied</h3>
              <p>If you get permission errors, try using <code>sudo</code> (Linux/macOS) or run the command prompt as administrator (Windows).</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Need Help?</h3>
              <p>Visit the <a href="https://docs.python.org/3/using/index.html" className="text-primary hover:underline">official Python documentation</a> or ask for help on <a href="https://stackoverflow.com/questions/tagged/python" className="text-primary hover:underline">Stack Overflow</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;
