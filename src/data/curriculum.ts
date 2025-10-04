// Comprehensive Python Curriculum with Modern Learning Path
type Topic = {
  title: string;
  subtopics: string[];
  duration?: string;
  projects?: string[];
};

type Level = {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
  duration: string;
  topics: Topic[];
};

export const curriculumData: Level[] = [
  {
    id: "beginner",
    title: "Python Fundamentals",
    badge: "Beginner",
    icon: "🐍",
    duration: "4-6 weeks",
    description: "Lay a solid foundation with Python's core concepts, syntax, and basic programming constructs.",
    topics: [
      {
        title: "Getting Started with Python",
        duration: "1 week",
        subtopics: [
          "Python installation & setup (Windows, macOS, Linux)",
          "Choosing an IDE/Code Editor (VS Code, PyCharm, Jupyter)",
          "Running Python scripts and interactive shell",
          "Understanding Python's philosophy (The Zen of Python)",
          "Basic debugging techniques"
        ],
        projects: ["Setup Python environment", "First Python script"]
      },
      {
        title: "Python Basics & Data Types",
        duration: "1 week",
        subtopics: [
          "Variables and basic data types (int, float, str, bool)",
          "Type conversion and type hints",
          "Basic operators (arithmetic, comparison, logical)",
          "String manipulation and formatting (f-strings, .format())",
          "Basic input/output operations"
        ],
        projects: ["Simple calculator", "Mad Libs generator"]
      },
      {
        title: "Control Flow & Functions",
        duration: "1 week",
        subtopics: [
          "Conditional statements (if/elif/else)",
          "Loops (for, while) and loop control (break, continue)",
          "List comprehensions",
          "Defining and calling functions",
          "Function parameters and return values",
          "Variable scope (global vs local)"
        ],
        projects: ["Number guessing game", "To-Do List application"]
      },
      {
        title: "Data Structures",
        duration: "1-2 weeks",
        subtopics: [
          "Lists, Tuples, Sets, Dictionaries",
          "Common operations and methods",
          "List comprehensions",
          "Nested data structures",
          "Working with collections module (Counter, defaultdict)"
        ],
        projects: ["Contact Book", "Inventory Management System"]
      }
    ]
  },
  {
    id: "intermediate",
    title: "Intermediate Python",
    badge: "Intermediate",
    icon: "🔧",
    duration: "6-8 weeks",
    description: "Dive deeper into Python's powerful features and start building more complex applications.",
    topics: [
      {
        title: "Object-Oriented Programming",
        duration: "2 weeks",
        subtopics: [
          "Classes and objects",
          "Inheritance and composition",
          "Magic methods (__init__, __str__, etc.)",
          "Class and static methods",
          "Properties and descriptors",
          "Abstract Base Classes (ABC)"
        ],
        projects: ["Bank Account System", "Library Management System"]
      },
      {
        title: "Error Handling & Debugging",
        duration: "1 week",
        subtopics: [
          "Exception handling (try/except/finally)",
          "Custom exceptions",
          "Logging and debugging techniques",
          "Using pdb debugger",
          "Unit testing with unittest/pytest"
        ],
        projects: ["Error handling in existing projects"]
      },
      {
        title: "File Handling & I/O",
        duration: "1 week",
        subtopics: [
          "Reading/writing text and binary files",
          "Working with JSON, CSV, and other formats",
          "Context managers (with statement)",
          "Path handling with pathlib",
          "Working with directories and file systems"
        ],
        projects: ["Data Export/Import Tool", "Log Analyzer"]
      },
      {
        title: "Functional Programming",
        duration: "1 week",
        subtopics: [
          "Lambda functions",
          "map(), filter(), reduce()",
          "List/dict/set comprehensions",
          "Generators and yield",
          "Decorators and closures"
        ],
        projects: ["Data Processing Pipeline"]
      },
      {
        title: "Advanced Data Structures",
        duration: "1 week",
        subtopics: [
          "Collections module (namedtuple, deque, Counter, etc.)",
          "Working with dates and times (datetime, time, calendar)",
          "Regular expressions",
          "Working with binary data",
          "Memory management"
        ],
        projects: ["Data Analysis Tool"]
      }
    ]
  },
  {
    id: "advanced",
    title: "Advanced Python",
    badge: "Advanced",
    icon: "🚀",
    duration: "8-10 weeks",
    description: "Master advanced Python concepts and design patterns to build robust, scalable applications.",
    topics: [
      {
        title: "Concurrency & Parallelism",
        duration: "2 weeks",
        subtopics: [
          "Threading and multiprocessing",
          "Asynchronous programming with asyncio",
          "GIL and its implications",
          "Concurrent.futures",
          "Parallel processing with multiprocessing"
        ],
        projects: ["Web Scraper with concurrency"]
      },
      {
        title: "Design Patterns",
        duration: "2 weeks",
        subtopics: [
          "Creational patterns (Singleton, Factory, etc.)",
          "Structural patterns (Adapter, Decorator, etc.)",
          "Behavioral patterns (Observer, Strategy, etc.)",
          "Pythonic design patterns",
          "Dependency Injection"
        ],
        projects: ["Implementing design patterns in a project"]
      },
      {
        title: "Metaprogramming",
        duration: "1 week",
        subtopics: [
          "Metaclasses",
          "Decorators and descriptors",
          "Code generation",
          "Dynamic imports and execution",
          "Abstract Syntax Trees (AST)"
        ],
        projects: ["Custom ORM"]
      },
      {
        title: "Performance Optimization",
        duration: "1 week",
        subtopics: [
          "Profiling Python code",
          "Performance optimization techniques",
          "Caching strategies",
          "Cython and Numba",
          "Memory profiling"
        ],
        projects: ["Optimizing existing code"]
      },
      {
        title: "Packaging & Distribution",
        duration: "1 week",
        subtopics: [
          "Creating Python packages",
          "setup.py and pyproject.toml",
          "Virtual environments",
          "Dependency management",
          "Publishing to PyPI"
        ],
        projects: ["Creating a distributable package"]
      },
      {
        title: "Testing & Quality Assurance",
        duration: "1 week",
        subtopics: [
          "Unit testing with pytest",
          "Mocking and patching",
          "Integration and functional testing",
          "Test-driven development (TDD)",
          "Code coverage and quality tools"
        ],
        projects: ["Adding tests to existing projects"]
      }
    ]
  },
  {
    id: "specialized",
    title: "Specialized Tracks",
    badge: "Specialization",
    icon: "🎯",
    duration: "Varies",
    description: "Apply your Python skills to specific domains and build real-world applications.",
    topics: [
      {
        title: "Web Development (Django/Flask/FastAPI)",
        duration: "6-8 weeks",
        subtopics: [
          "Web frameworks overview",
          "Building RESTful APIs",
          "Authentication & Authorization",
          "Database integration (SQL/NoSQL)",
          "Deployment and scaling"
        ],
        projects: ["Full-stack web application"]
      },
      {
        title: "Data Science & Machine Learning",
        duration: "8-10 weeks",
        subtopics: [
          "NumPy and Pandas",
          "Data visualization (Matplotlib, Seaborn)",
          "Scikit-learn basics",
          "Data preprocessing",
          "Model training and evaluation"
        ],
        projects: ["End-to-end ML project"]
      },
      {
        title: "Automation & Scripting",
        duration: "4-6 weeks",
        subtopics: [
          "Task automation",
          "Web scraping (BeautifulSoup, Scrapy)",
          "Working with APIs",
          "System administration",
          "Building CLI tools"
        ],
        projects: ["Custom automation tool"]
      },
      {
        title: "DevOps & Cloud",
        duration: "6-8 weeks",
        subtopics: [
          "Docker and containerization",
          "CI/CD pipelines",
          "Cloud platforms (AWS/GCP/Azure)",
          "Infrastructure as Code (Terraform)",
          "Monitoring and logging"
        ],
        projects: ["Deploying a Python application"]
      }
    ]
  }
];
