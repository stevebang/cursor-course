# Cursor AI IDE Advanced Course

A comprehensive course on mastering Cursor AI IDE for building production-ready applications. This repository contains course materials, presentations, best practices, and example projects for developers who want to leverage AI-assisted development effectively.

## 📚 Course Overview

This course is designed for experienced developers who want to move beyond basic AI code completion and learn how to build complete, production-ready applications using Cursor. The curriculum covers everything from advanced context management to full-stack development, deployment, and production best practices.

### What You'll Learn

- **Advanced Cursor Features**: Context management, project rules, agents, and Model Context Protocol (MCP)
- **Full Application Development**: Build complete apps from scratch using AI assistance
- **React & Next.js Mastery**: Advanced patterns, state management, and architecture
- **Full-Stack Development**: Backend APIs, databases, authentication, and real-time features
- **Production Deployment**: Testing strategies, CI/CD, monitoring, and optimization
- **Best Practices**: Real-world workflows used by staff engineers and consultants

## 🎯 Course Structure

The course is divided into 5 comprehensive sections:

### Section 1: Cursor & Context Management (60 minutes)
- Cursor overview and context management
- Codebase indexing and `@` symbol mastery
- Project rules and agents
- Model Context Protocol (MCP) introduction
- Live configuration demos

### Section 2: Building Your First Full App (60 minutes)
- AI-driven project initialization
- Creating architecture-specific project rules
- Core feature development (data layer, UI components)
- Real-time features and polish
- Performance optimization strategies

### Section 3: Advanced App Development & Architecture (60 minutes)
- React project architecture and scaffolding
- Advanced project rules for React
- State management patterns (Zustand)
- Building an AI-powered quiz app
- Advanced UI/UX features and testing

### Section 4: Real-World Full-Stack Application (45 minutes)
- Full-stack architecture design
- Backend development with Next.js API routes
- Frontend implementation with Server Components
- Real-time collaboration features
- Deployment to Vercel

### Section 5: Deployment, Testing & Production Best Practices (45 minutes)
- Comprehensive testing strategies (unit, integration, E2E)
- Multi-environment deployment setup
- CI/CD pipeline configuration
- Production monitoring and observability
- Security best practices

## 📁 Repository Structure

```
cursor-course/
├── assets-resources/          # Course materials and resources
│   ├── course_outline.md      # Detailed course outline
│   ├── cursor-course-complete-proposal.md  # Full course proposal
│   ├── cursor_example_best_practices.md     # Best practices guide
│   ├── cursor_for_staff_engineers.md       # Staff engineer workflows
│   ├── demo-project-examples.md            # Example projects
│   ├── demo-scripts.md                     # Demo scripts
│   ├── presentation_guide.md                 # Presentation guidelines
│   └── raw-course-materials/               # Source materials
│
├── presentation/              # Presentation files
│   ├── presentation.html      # HTML presentation
│   ├── cursor-for-modern-dev.pdf  # PDF presentation
│   └── scripts.md             # Presentation scripts
│
├── PLAN_task_manager.md       # Task manager app requirements
├── SETUP_task_manager.md      # Task manager setup guide
├── AGENTS.md                  # Cursor agent configuration
├── CLAUDE.md                  # Claude AI configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Basic knowledge of JavaScript/TypeScript
- Familiarity with React and Next.js
- Experience with modern development tools (Git, npm/yarn)
- Cursor IDE installed ([download here](https://cursor.sh))

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cursor-course.git
   cd cursor-course
   ```

2. **Review the course materials**
   - Start with `assets-resources/course_outline.md` for the full curriculum
   - Read `assets-resources/cursor_example_best_practices.md` for best practices
   - Check `PLAN_task_manager.md` for a complete example project

3. **Follow along with examples**
   - The task manager app (`PLAN_task_manager.md` and `SETUP_task_manager.md`) serves as a complete reference implementation
   - Use it to understand the full development workflow

## 📖 Key Resources

### Course Materials

- **[Complete Course Proposal](assets-resources/cursor-course-complete-proposal.md)**: Full course curriculum with detailed examples
- **[Course Outline](assets-resources/course_outline.md)**: Section-by-section breakdown
- **[Best Practices](assets-resources/cursor_example_best_practices.md)**: Practical tips for using Cursor effectively
- **[Staff Engineer Guide](assets-resources/cursor_for_staff_engineers.md)**: Advanced workflows for senior engineers

### Example Projects

- **Task Manager App**: A complete full-stack application demonstrating:
  - Next.js 15+ with App Router
  - Clerk authentication
  - Supabase database
  - Server-side API routes
  - Production deployment on Vercel

  See `PLAN_task_manager.md` for requirements and `SETUP_task_manager.md` for setup instructions.

### Presentations

- **HTML Presentation**: `presentation/presentation.html` - Interactive course presentation
- **PDF Presentation**: `presentation/cursor-for-modern-dev.pdf` - Printable version
- **Scripts**: `presentation/scripts.md` - Presentation talking points

## 🎓 Learning Path

### For Beginners
1. Start with Section 1 to understand Cursor fundamentals
2. Follow the task manager example in Section 2
3. Practice with small projects before moving to advanced topics

### For Experienced Developers
1. Review Section 1 for context management techniques
2. Jump to Section 3 for advanced React patterns
3. Focus on Section 4-5 for production deployment strategies

### For Staff Engineers
1. Read `assets-resources/cursor_for_staff_engineers.md` first
2. Focus on workflow automation and delegation patterns
3. Study the three-step framework: Explore → Plan → Build

## 💡 Key Concepts

### Three-Step Framework

1. **Explore**: Share context about the problem, identify relevant files, discuss options
2. **Plan**: Create step-by-step plans in markdown files with checklists
3. **Build**: Execute one step at a time, review, iterate, commit to Git

### Project Rules

Project rules (`.cursor/rules/*.mdc`) guide AI behavior:
- **Always rules**: Core project standards
- **Auto-attached rules**: File-specific guidance
- **Agent-requested rules**: AI-initiated context
- **Manual rules**: On-demand guidance

### Context Management

- Use `@codebase` to reference entire project
- Use `@docs` to include documentation
- Use `@web` to search and include web results
- Keep context focused and relevant
- Start new chats when context gets too long

## 🛠️ Example Workflows

### Test-Driven Development
1. Share context about files to test
2. Discuss test types and edge cases with AI
3. Create a markdown plan with checklists
4. Execute tests step-by-step
5. Review and commit after each step

### Load Testing
1. Identify system endpoints and constraints
2. Use AI to generate load testing scripts
3. Iterate on test scenarios
4. Analyze performance characteristics

### PR Comment Automation
1. Screenshot PR comments
2. Group related changes
3. Create planning file with file names and line numbers
4. Fix issues one by one
5. Update planning doc as you go

## 📝 Best Practices

### Code Organization
- Break tasks into small, manageable steps
- Use Git frequently (don't rely on Cursor checkpoints)
- Create markdown planning files for complex tasks
- Keep context windows focused

### AI Interaction
- Be specific about what you want
- Provide relevant context explicitly
- Review AI-generated code carefully
- Try multiple times if first attempt fails
- Use TypeScript for better AI understanding

### Project Management
- Start with clear requirements
- Create detailed plans before building
- Test incrementally
- Commit working code frequently
- Document decisions and patterns

## 🔧 Configuration

### Cursor Settings

The repository includes configuration examples:
- `AGENTS.md`: Agent configuration patterns
- `CLAUDE.md`: Claude AI setup and best practices

### Project Rules Example

See the task manager project for examples of:
- Architecture rules
- Styling rules
- State management patterns
- API design standards

## 🤝 Contributing

This is a course repository. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request with a clear description

## 📄 License

This course material is provided for educational purposes. Please respect the original sources and attributions in the materials.

## 🙏 Acknowledgments

- Cursor team for building an amazing AI IDE
- The developer community for sharing best practices
- Contributors who have provided feedback and improvements

## 📞 Support

For questions or issues:
- Review the course materials in `assets-resources/`
- Check the example projects for reference implementations
- Consult Cursor documentation: https://docs.cursor.com/

## 🎯 Next Steps

1. **Read the course outline**: `assets-resources/course_outline.md`
2. **Review best practices**: `assets-resources/cursor_example_best_practices.md`
3. **Try the task manager example**: Follow `SETUP_task_manager.md`
4. **Build your own project**: Apply the three-step framework (Explore → Plan → Build)

---

**Happy coding with Cursor! 🚀**

