

const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Complete Project Report",
        taskDescription: "Prepare the final project report for submission.",
        taskDate: "2024-12-20",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Team Meeting",
        taskDescription: "Participate in the weekly team meeting.",
        taskDate: "2024-12-18",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: true,
        taskTitle: "Code Review",
        taskDescription: "Review the codebase for the new feature.",
        taskDate: "2024-12-15",
        category: "Development"
      }
    ],
    taskCount: {
      active: 2,
      completed: 1,
      newTask: 1,
      failed: 3
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Fix Bugs",
        taskDescription: "Resolve reported bugs in the system.",
        taskDate: "2024-12-19",
        category: "Bug Fixes"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Presentation",
        taskDescription: "Prepare slides for the client meeting.",
        taskDate: "2024-12-20",
        category: "Presentation"
      }
    ],
    taskCount: {
      active: 2,
      completed: 0,
      newTask: 1,
      failed: 2
    }
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "UI Design",
        taskDescription: "Create mockups for the new feature.",
        taskDate: "2024-12-21",
        category: "Design"
      }
    ],
    taskCount: {
      active: 1,
      completed: 0,
      newTask: 0,
      failed: 1
    }
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Database Optimization",
        taskDescription: "Improve query performance.",
        taskDate: "2024-12-22",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: true,
        taskTitle: "Code Refactoring",
        taskDescription: "Refactor legacy code for better maintainability.",
        taskDate: "2024-12-10",
        category: "Development"
      }
    ],
    taskCount: {
      active: 1,
      completed: 1,
      newTask: 1,
      failed: 2
    }
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Testing",
        taskDescription: "Perform QA testing on the new module.",
        taskDate: "2024-12-25",
        category: "Quality Assurance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Write Documentation",
        taskDescription: "Document the API endpoints.",
        taskDate: "2024-12-23",
        category: "Documentation"
      }
    ],
    taskCount: {
      active: 2,
      completed: 0,
      newTask: 1,
      failed: 2
    }
  },
  {
    id: 6,
    name: "Emily Clark",
    email: "employee6@example.com",
    password: "456",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Migration",
        taskDescription: "Migrate the database to the new server.",
        taskDate: "2024-12-21",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Product Demo",
        taskDescription: "Conduct a product demo for potential clients.",
        taskDate: "2024-12-22",
        category: "Client Engagement"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Performance Testing",
        taskDescription: "Run performance tests on the application.",
        taskDate: "2024-12-23",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Feature Implementation",
        taskDescription: "Implement the new search feature.",
        taskDate: "2024-12-15",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Write User Manual",
        taskDescription: "Create a user manual for the new product.",
        taskDate: "2024-12-24",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Conduct a security audit for the application.",
        taskDate: "2024-12-10",
        category: "Security"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Team Building Activity",
        taskDescription: "Organize a team-building activity for the department.",
        taskDate: "2024-12-26",
        category: "HR"
      }
    ],
    taskCount: {
      active: 5,
      completed: 2,
      newTask: 3,
      failed: 3
    }
  }
  
  
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = ()=>{  
localStorage.setItem('employees', JSON.stringify(employees));
localStorage.setItem('admin', JSON.stringify(admin));
}




export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  

  return {employees, admin}
    
}
  
  
