export const categories = [
  {
    id: "java",
    name: "Java",
    icon: "☕",
    color: "#f59e0b",
    description: "Core Java concepts including OOPs, JVM architecture, Collections, and Exception Handling.",
    difficulty: "Intermediate",
    totalQuestions: 6,
    timeInMinutes: 3
  },
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    color: "#10b981",
    description: "Python data structures, decorators, list comprehensions, OOP, and memory management.",
    difficulty: "Beginner to Intermediate",
    totalQuestions: 6,
    timeInMinutes: 3
  },
  {
    id: "react",
    name: "React.js",
    icon: "⚛️",
    color: "#06b6d4",
    description: "React fundamentals: Components, Hooks, Virtual DOM, State Management, and Lifecycle.",
    difficulty: "Intermediate",
    totalQuestions: 6,
    timeInMinutes: 3
  },
  {
    id: "gk",
    name: "General Knowledge",
    icon: "🌍",
    color: "#8b5cf6",
    description: "General awareness covering science discoveries, world geography, history, and modern inventions.",
    difficulty: "General",
    totalQuestions: 6,
    timeInMinutes: 3
  },
  {
    id: "cs",
    name: "Computer Science",
    icon: "💻",
    color: "#ec4899",
    description: "Foundational CS: Data Structures & Algorithms, OS, DBMS, Computer Networks, and System Design.",
    difficulty: "Advanced",
    totalQuestions: 6,
    timeInMinutes: 3
  }
];

export const quizQuestions = {
  java: [
    {
      id: 1,
      question: "Which of the following is NOT a feature of Java?",
      options: [
        "Object-oriented",
        "Use of explicit pointers",
        "Platform independent",
        "Robust and secure"
      ],
      correctAnswer: 1,
      explanation: "Java does not support explicit pointers for security and simplicity reasons. Pointers are managed automatically internally."
    },
    {
      id: 2,
      question: "Which memory location holds objects created with the 'new' keyword in Java?",
      options: [
        "Stack Memory",
        "Heap Memory",
        "Class Area",
        "Native Method Stack"
      ],
      correctAnswer: 1,
      explanation: "All objects and their corresponding instance variables in Java are allocated memory on the Heap."
    },
    {
      id: 3,
      question: "Why are String objects immutable in Java?",
      options: [
        "To allow faster compilation",
        "For security, synchronization, and caching in String Constant Pool",
        "Because Java does not support mutable data types",
        "To reduce CPU clock cycles"
      ],
      correctAnswer: 1,
      explanation: "Immutability allows String caching in the String Pool, ensures thread-safety without synchronization, and protects sensitive data like database passwords."
    },
    {
      id: 4,
      question: "Which collection class allows unique elements and stores them in sorted ascending order?",
      options: [
        "HashSet",
        "ArrayList",
        "TreeSet",
        "LinkedHashSet"
      ],
      correctAnswer: 2,
      explanation: "TreeSet implements the NavigableSet interface and stores elements in a self-balancing binary search tree (Red-Black Tree), guaranteeing sorted order."
    },
    {
      id: 5,
      question: "What is the difference between 'throw' and 'throws' in Java?",
      options: [
        "'throw' is used to declare an exception, while 'throws' explicitly raises an exception",
        "'throw' is used to explicitly throw an exception object, while 'throws' is used in method signatures to declare exceptions",
        "They are completely interchangeable aliases",
        "'throws' is only used for unchecked RuntimeExceptions"
      ],
      correctAnswer: 1,
      explanation: "'throw' is a statement used inside a method body to throw a specific Throwable instance. 'throws' is a clause in a method declaration specifying exceptions."
    },
    {
      id: 6,
      question: "Can an abstract class in Java have a constructor?",
      options: [
        "No, because abstract classes cannot be instantiated",
        "Yes, called during subclass instantiation via super()",
        "Only if the constructor is declared private",
        "Only in Java 17 and above"
      ],
      correctAnswer: 1,
      explanation: "Yes, abstract classes can have constructors. They are executed when a subclass constructor invokes super() to initialize inherited fields."
    }
  ],

  python: [
    {
      id: 1,
      question: "Which of the following data types in Python is MUTABLE?",
      options: [
        "Tuple",
        "String",
        "List",
        "FrozenSet"
      ],
      correctAnswer: 2,
      explanation: "Lists in Python are mutable, meaning their items can be modified, appended, or removed in-place. Tuples, Strings, and FrozenSets are immutable."
    },
    {
      id: 2,
      question: "What is the output of the expression: `[x**2 for x in range(5) if x % 2 == 0]`?",
      options: [
        "[0, 4, 16]",
        "[1, 9]",
        "[0, 1, 4, 9, 16]",
        "[4, 16]"
      ],
      correctAnswer: 0,
      explanation: "range(5) gives 0, 1, 2, 3, 4. Even numbers are 0, 2, and 4. Squaring them yields [0, 4, 16]."
    },
    {
      id: 3,
      question: "What is the primary role of the `__init__` method in a Python class?",
      options: [
        "To allocate raw system memory for the object",
        "To initialize the newly created object's attributes (constructor)",
        "To destroy the object when garbage collection triggers",
        "To convert the class into a generator"
      ],
      correctAnswer: 1,
      explanation: "`__init__` is the initializer method called automatically immediately after the object instance has been created by `__new__`."
    },
    {
      id: 4,
      question: "What is the key difference between `==` and `is` in Python?",
      options: [
        "`==` compares memory addresses, while `is` compares values",
        "`==` checks value equality, while `is` checks reference identity (same object in memory)",
        "They are 100% identical in all versions of Python",
        "`is` is only valid when comparing None"
      ],
      correctAnswer: 1,
      explanation: "`==` invokes `__eq__` to compare values, whereas `is` checks whether two variables point to the exact same object in memory (`id(a) == id(b)`)."
    },
    {
      id: 5,
      question: "What does the Python decorator `@functools.wraps` do?",
      options: [
        "Encrypts the function code",
        "Preserves the original function's name, docstring, and metadata",
        "Runs the decorated function in parallel threads",
        "Enforces strict type checks on runtime arguments"
      ],
      correctAnswer: 1,
      explanation: "`@functools.wraps` copies over function attributes like `__name__` and `__doc__` from the original function to the wrapper function."
    },
    {
      id: 6,
      question: "What is Python's GIL (Global Interpreter Lock)?",
      options: [
        "A lock preventing any file I/O operations",
        "A mutex that allows only one native thread to execute Python bytecode at a time",
        "A security firewall built into the standard library",
        "A mechanism that prevents infinite recursion loops"
      ],
      correctAnswer: 1,
      explanation: "CPython's GIL ensures that only one thread executes Python bytecode at any given moment, simplifying memory management."
    }
  ],

  react: [
    {
      id: 1,
      question: "What is the primary purpose of the Virtual DOM in React?",
      options: [
        "To directly alter the browser's hardware GPU canvas",
        "To minimize costly direct DOM manipulations by diffing changes in memory",
        "To execute server-side Node.js code inside the browser",
        "To replace standard JavaScript with WebAssembly"
      ],
      correctAnswer: 1,
      explanation: "React maintains a lightweight representation of the real DOM in memory. By diffing Virtual DOM trees, React minimizes expensive real DOM updates."
    },
    {
      id: 2,
      question: "When does the `useEffect` hook with an empty dependency array `[]` run?",
      options: [
        "On every single component re-render",
        "Only once after the initial render (mount)",
        "Only when component unmounts",
        "Before the DOM nodes are created"
      ],
      correctAnswer: 1,
      explanation: "An empty dependency array tells React that the effect doesn't depend on any values from props or state, running it only once upon mounting."
    },
    {
      id: 3,
      question: "Why should you never mutate React state directly (e.g. `state.count = 5`)?",
      options: [
        "It triggers a fatal browser JavaScript crash",
        "React cannot detect direct mutations, so it will not trigger a re-render",
        "It converts integers into strings",
        "Direct mutation is deprecated only in React 19"
      ],
      correctAnswer: 1,
      explanation: "React relies on reference equality checks to know when state changes. Mutating state directly bypasses setter functions, preventing UI re-renders."
    },
    {
      id: 4,
      question: "What is the purpose of the `key` prop when rendering lists in React?",
      options: [
        "To assign CSS style identifiers to each element",
        "To help React identify which items have changed, been added, or removed for efficient reconciliation",
        "To encrypt data passed to child components",
        "To enable keyboard navigation automatically"
      ],
      correctAnswer: 1,
      explanation: "Keys give stable identities to array elements, enabling React's reconciliation algorithm to re-order and reuse DOM nodes rather than recreating them."
    },
    {
      id: 5,
      question: "Which hook is best suited to cache the calculated result of an expensive computation across renders?",
      options: [
        "useCallback",
        "useMemo",
        "useRef",
        "useReducer"
      ],
      correctAnswer: 1,
      explanation: "`useMemo` caches the calculated return value of a function, recomputing it only when specified dependencies change."
    },
    {
      id: 6,
      question: "Which of the following statements about React component Props is TRUE?",
      options: [
        "Child components can modify their props directly",
        "Props are read-only and immutable for the receiving component",
        "Props can only be passed from child to parent",
        "Props cannot pass functions or objects"
      ],
      correctAnswer: 1,
      explanation: "Props are read-only. React enforces unidirectional data flow, meaning children must never mutate props passed by parents."
    }
  ],

  gk: [
    {
      id: 1,
      question: "Who is known as the 'Father of the Modern Computer'?",
      options: [
        "Charles Babbage",
        "Alan Turing",
        "Tim Berners-Lee",
        "John von Neumann"
      ],
      correctAnswer: 0,
      explanation: "Charles Babbage conceptualized and invented the first mechanical computer, the Analytical Engine, in the early 19th century."
    },
    {
      id: 2,
      question: "Which protocol is primarily responsible for securely transferring web pages over the internet?",
      options: [
        "FTP",
        "SMTP",
        "HTTPS",
        "SNMP"
      ],
      correctAnswer: 2,
      explanation: "HTTPS (Hypertext Transfer Protocol Secure) encrypts HTTP communication using TLS/SSL to safeguard user privacy and integrity."
    },
    {
      id: 3,
      question: "What is the approximate speed of light in a vacuum?",
      options: [
        "150,000 km/s",
        "300,000 km/s",
        "500,000 km/s",
        "1,000,000 km/s"
      ],
      correctAnswer: 1,
      explanation: "The speed of light in vacuum is approximately 299,792 kilometers per second (commonly rounded to 300,000 km/s or 3 x 10^8 m/s)."
    },
    {
      id: 4,
      question: "Which scientist invented the World Wide Web in 1989 at CERN?",
      options: [
        "Vint Cerf",
        "Tim Berners-Lee",
        "Marc Andreessen",
        "Steve Wozniak"
      ],
      correctAnswer: 1,
      explanation: "Sir Tim Berners-Lee invented the World Wide Web in 1989 while working as an engineer at CERN."
    },
    {
      id: 5,
      question: "Which natural satellite in our solar system has a dense atmosphere and liquid methane lakes?",
      options: [
        "Europa (Jupiter)",
        "Titan (Saturn)",
        "Ganymede (Jupiter)",
        "Triton (Neptune)"
      ],
      correctAnswer: 1,
      explanation: "Titan, Saturn's largest moon, has a nitrogen-rich atmosphere and rivers, lakes, and seas composed of liquid methane and ethane."
    },
    {
      id: 6,
      question: "What does the 'RAM' acronym stand for in computer hardware?",
      options: [
        "Read Access Module",
        "Random Access Memory",
        "Rapid Application Manager",
        "Run Allocation Matrix"
      ],
      correctAnswer: 1,
      explanation: "RAM stands for Random Access Memory, the primary volatile workspace used by computers to store active program data."
    }
  ],

  cs: [
    {
      id: 1,
      question: "What is the worst-case time complexity of searching an element in a balanced Binary Search Tree (AVL / Red-Black)?",
      options: [
        "O(1)",
        "O(log N)",
        "O(N)",
        "O(N log N)"
      ],
      correctAnswer: 1,
      explanation: "Because a balanced BST maintains height bounded by O(log N), search, insertion, and deletion operations take O(log N) worst-case time."
    },
    {
      id: 2,
      question: "What does the 'A' represent in the relational database ACID properties?",
      options: [
        "Asynchronous",
        "Atomicity",
        "Availability",
        "Authorization"
      ],
      correctAnswer: 1,
      explanation: "Atomicity ensures that all statements within a transaction succeed together or the entire transaction is rolled back with no partial effects."
    },
    {
      id: 3,
      question: "Which OSI model layer is responsible for end-to-end reliable data transmission and flow control (e.g., TCP)?",
      options: [
        "Network Layer (Layer 3)",
        "Transport Layer (Layer 4)",
        "Session Layer (Layer 5)",
        "Data Link Layer (Layer 2)"
      ],
      correctAnswer: 1,
      explanation: "The Transport Layer (Layer 4) handles host-to-host communication, packet sequencing, flow control, and error recovery."
    },
    {
      id: 4,
      question: "What is the primary difference between a Process and a Thread?",
      options: [
        "Processes share the same address space; threads have independent memory",
        "A process has its own address space, while threads within a process share the same memory space",
        "Threads cannot run concurrently",
        "Operating systems do not schedule threads"
      ],
      correctAnswer: 1,
      explanation: "Processes run in isolated address spaces with separate memory maps. Threads are lightweight execution units that share the enclosing process's code, data, and resources."
    },
    {
      id: 5,
      question: "What is a Deadlock in operating systems, and which condition is NOT one of the Coffman conditions?",
      options: [
        "Mutual Exclusion",
        "Hold and Wait",
        "Preemption Allowed",
        "Circular Wait"
      ],
      correctAnswer: 2,
      explanation: "The 4 Coffman conditions for deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. 'Preemption Allowed' prevents deadlocks."
    },
    {
      id: 6,
      question: "Which HTTP status code signifies that a requested resource was moved permanently to a new URL?",
      options: [
        "201 Created",
        "301 Moved Permanently",
        "403 Forbidden",
        "502 Bad Gateway"
      ],
      correctAnswer: 1,
      explanation: "HTTP 301 is the standard redirection status code indicating that the resource has permanently migrated to a new URI."
    }
  ]
};
