# Presentation Scripts & Speaker Notes

## Section 1: Cursor & Context Management

### Slide: What is Cursor 2.0?

**Speaker Notes:**
- Cursor is fundamentally different from traditional IDEs - it's built AI-first from the ground up
- The 2.0 release introduced Composer, a new frontier coding model that's 4x faster than competitors
- Key differentiator: Multi-agent system can run up to 8 agents in parallel using git worktrees
- MCP (Model Context Protocol) allows integration with external tools like GitHub, Figma, databases
- Emphasize: This isn't just autocomplete - it's production development

**Key Points to Cover:**
- Natural language to code generation
- Semantic search across entire codebase (not just text matching)
- Multi-agent parallel execution prevents conflicts
- MCP standardizes AI connections to your dev ecosystem

**Reference:** Cursor 2.0 Blog Post - https://cursor.com/blog/2-0

---

### Slide: Core Features Overview

**Speaker Notes:**
- **Chat Interface**: Multi-tab conversations with context checkpoints - like having multiple consultants
- **Tab Autocomplete**: Goes beyond single-line - predicts multi-line code based on your recent changes
- **Agent Mode (Composer)**: Autonomous multi-file editing - give it a goal, it makes a plan and executes
- **Inline Edit (Cmd+K)**: Quick in-place modifications without leaving your flow

**Demo Opportunity:**
- Show opening a new chat tab (Cmd+L)
- Demonstrate inline edit (Cmd+K) on a simple function
- Show how Tab autocomplete predicts based on context

---

### Slide: The Three-Step Framework

**Speaker Notes:**
- This framework came from real staff engineers using Cursor in production
- **EXPLORE**: Don't jump straight to code - share context, discuss options, identify relevant files
- **PLAN**: Create explicit step-by-step plans, use markdown checklists, break down complex tasks
- **BUILD**: Execute iteratively, review each step, commit regularly (don't rely on Cursor's checkpoint system alone)

**Why This Matters:**
- Prevents context overload (the #1 cause of poor AI output)
- Ensures you're making strategic decisions, not just typing faster
- AI works best with clear, step-by-step tasks - not vague "fix everything" requests

**Reference:** Cursor for Staff Engineers - https://www.youtube.com/watch?v=sb0y5B3LLUA

---

### Slide: Why This Framework Matters

**Speaker Notes:**
- You're a staff engineer (or aspiring to be one) - your value is in decision-making, not typing speed
- LLMs need clear, tactical prompts - they struggle with ambiguity
- Trying to do everything at once leads to hallucinations, security issues, and wasted time

**The "Try 5 Times" Rule:**
- If a prompt fails once, don't give up immediately
- Try it 5 different ways, in a new context window if needed
- The more you push yourself to use the system, the better you'll understand what works
- Pattern recognition develops over time

**Git Commits Are Critical:**
- Cursor's checkpoint system is NOT a replacement for git
- Commit frequently - after each working milestone
- Makes rollback trivial when AI makes mistakes
- Provides audit trail of what worked

---

### Slide: Context Management: The Foundation

**Speaker Notes:**
- LLMs have fixed context windows (128k-1M tokens) - but comprehension doesn't scale linearly
- Think of it like telling a story - when it gets convoluted, the listener loses track
- Token footprint ≠ understanding quality
- Poor context = hallucinations, incorrect code, security vulnerabilities

**Real-World Example:**
- Dumping an entire `node_modules` folder into context is useless noise
- Better: Reference specific files with @-mentions, use semantic search for relevant code

**Key Insight:**
- You need to curate what the AI sees, just like you would for a junior developer
- More context != better results

---

### Slide: Codebase Indexing Process

**Speaker Notes:**
Walk through the 7 steps:

1. **File Synchronization** - Encrypted paths tracked (privacy-preserving)
2. **Chunking** - Code split into semantic segments (not just line-based)
3. **Vector Conversion** - Create semantic "fingerprints" of code
4. **Vector Database Storage** - Enables efficient similarity search
5. **Query Encoding** - Your natural language questions become vectors
6. **Similarity Matching** - Find code that matches semantically (not just keyword matching)
7. **Results Ranking** - Best matches prioritized based on relevance

**Why This Matters:**
- You can ask "where is authentication logic?" instead of grepping for specific function names
- Works even if variable names or file structures change
- Understands intent, not just syntax

---

### Slide: The @ Symbol: Your Context Navigator

**Speaker Notes:**

**@file** - Reference specific files
- Example: `@src/components/Header.tsx`
- Use when you know exactly what file you need

**@folder** - Include entire directories
- Example: `@src/utils/`
- Careful with large folders - causes context bloat

**@codebase** - Semantic search across project
- Example: `@codebase "authentication logic"`
- This is where the magic happens - finds relevant code you might not even know exists

**@docs** - Query indexed documentation
- Example: `@docs "React hooks API"`
- Add documentation URLs in settings → documentation

**@git** - Reference git history
- Example: `@git "last commit changes"`
- Useful for understanding recent modifications

**@branch** - Get working state from specific branch
- Example: `@branch feature/new-auth`
- Compare implementations across branches

**Pro Tip:** Combine @-mentions for precision
- `@src/components/Header.tsx @src/styles/theme.ts Update the Header to use our new theme system`

---

### Slide: Context Management Best Practices

**Speaker Notes:**

**DO:**
- Use @-mentions for precision (don't rely on AI guessing what you mean)
- Start new chats frequently (one task = one chat session to maintain "narrative integrity")
- Configure .cursorignore (exclude build artifacts, node_modules, logs)
- Break large tasks into chunks (10 small tasks > 1 giant task)
- Provide clear, specific prompts (describe the end state you want)
- Reference existing code patterns (show examples of what you want)
- Ask for the plan before code changes (review strategy first)

**AVOID:**
- Including entire large folders (massive context waste)
- Reusing same chat for unrelated tasks (context pollution)
- Vague "fix this" prompts (AI needs specificity)
- Letting context window fill up (restart chats proactively)
- Skipping the planning step (leads to poor architectures)
- Blindly accepting all changes (you're still the engineer in charge)

---

### Slide: Effective Prompting Patterns

**Speaker Notes:**

**Bad Prompt: "Make this better"**
- Vague, no success criteria, no direction
- AI doesn't know what "better" means to you

**Good Prompt Example:**
```
@src/components/Button.tsx

Refactor this Button component to:
1. Add TypeScript interfaces for all props
2. Include disabled state with reduced opacity
3. Add loading spinner option
4. Make fully keyboard accessible
5. Follow our design system @docs/design-tokens.json
```

**Why This Works:**
- Specific, numbered steps
- Clear success criteria
- References existing patterns (design system)
- Provides context (@-mentions)

**Think in Diffs:**
- Describe the transformation from current state → desired state
- Not "write a button" but "transform this button to have X, Y, Z"

---

### Slide: Project Rules: .cursor/rules

**Speaker Notes:**

**Four Application Modes:**

1. **Always Apply** - Every session automatically (use sparingly)
2. **Apply Intelligently** - AI determines relevance (recommended default)
3. **Apply to Specific Files** - Pattern matching like `*.test.ts` (useful for test conventions)
4. **Apply Manually** - Activated with @-mention (for specialized rules)

**Best Practices:**
- Keep rules under 500 lines (AI needs to process these every request)
- Break into composable components (separate files for different concerns)
- Store domain knowledge, not just style preferences
- Example: Database schema, API conventions, security patterns

**What to Include:**
- Component architecture patterns
- Naming conventions
- Security requirements (e.g., "always sanitize user input")
- Testing patterns
- File organization structure

---

### Slide: When NOT to Use Cursor Rules

**Speaker Notes:**

**Hot Take from Production Engineers:**
- "I don't use cursor rules. I think what matters is knowing your codebase and providing good context and giving it tactical things to work on."
- This is from a staff engineer working on multiple production codebases daily

**The Argument Against Over-Using Rules:**
- Rules can slow you down if overused (processed on every request)
- Better to rely on LLMs getting better over time naturally
- Focus on clear context and tactical prompts instead
- When working on many codebases, rules become impractical to maintain

**When Rules DO Help:**
- Catching recurring mistakes the model makes consistently
- Enforcing critical security patterns (must-haves, not nice-to-haves)
- Team-wide consistency requirements (shared standards)
- Onboarding new team members (codified best practices)

**Balance:**
- Start without rules, add them only when you notice patterns of mistakes
- Treat rules as last resort, not first instinct

**Reference:** Cursor for Staff Engineers - https://www.youtube.com/watch?v=sb0y5B3LLUA

---

### Slide: Example Project Rules

**Speaker Notes:**

Walk through this React + TypeScript + Tailwind example:

**Component Structure:**
- Use functional components (no class components)
- Props interfaces defined in same file (co-located)
- Export as default at bottom (consistent pattern)

**Styling:**
- Tailwind utility classes (no custom CSS unless absolutely necessary)
- No inline styles except dynamic values (e.g., calculated widths)
- Responsive: mobile-first approach (start with base, add `md:` `lg:` breakpoints)

**State Management:**
- Local state: useState/useReducer (component-specific)
- Global state: Zustand (cross-component shared state)
- Server state: React Query (API data, caching, background sync)

**File Organization:**
- Components in `src/components/*.tsx`
- Custom hooks in `src/hooks/*.ts`
- Helper functions in `src/utils/*.ts`

**Why This Example:**
- Specific enough to be actionable
- Not so prescriptive that it kills flexibility
- Covers common decision points developers face

---

### Slide: Agent Types & When to Use Them

**Speaker Notes:**

**Normal Mode (Chat - Cmd+L):**
- Quick questions and explorations
- Code explanations ("explain this function")
- Single-file edits
- Fast, conversational

**Agent Mode (Composer - Cmd+I):**
- Multi-file changes (refactoring across components)
- Feature implementation (end-to-end functionality)
- Complex refactoring (architectural changes)
- Autonomous - makes a plan and executes

**Background Agents:**
- Continuous monitoring (watch for patterns)
- Automated suggestions (proactive assistance)
- Long-running tasks (while you work on something else)

**Planning Mode:**
- Task decomposition (break down large features)
- Architecture decisions (evaluate options)
- Multi-phase projects (staged implementation)

**Decision Matrix:**
- Need answer quickly? → Normal mode
- Multi-file changes? → Agent mode
- Want continuous help? → Background agent
- Need to think through architecture? → Planning mode

---

### Slide: Composer: The New Coding Model

**Speaker Notes:**

**Performance Breakthrough:**
- 4x faster than similarly intelligent models
- Most tasks complete in under 30 seconds
- This is a purpose-built coding model, not a general-purpose LLM repurposed for code

**Built-in Capabilities (No Setup Required):**
- Codebase-wide semantic search (understands your entire project)
- Full file reading with no 2MB cap (reads massive files)
- Self-gathering context (finds what it needs)
- Parallel agent execution up to 8 agents (prevents conflicts via git worktrees)
- Git worktree isolation (each agent gets its own workspace)

**What This Means:**
- You can delegate complex, multi-step tasks
- No more "AI got confused halfway through"
- Multiple agents can work on frontend + backend + tests simultaneously
- Results merge cleanly without conflicts

**References:**
- Cursor 2.0 Blog - https://cursor.com/blog/2-0
- InfoQ Coverage - https://www.infoq.com/news/2025/11/cursor-composer-multiagent/

---

### Slide: Multi-Agent Architecture (Mermaid Diagram)

**Speaker Notes:**

Walk through the flow:

1. **User Prompt** → You give a high-level task
2. **Agent Orchestrator** → Cursor's system decides how to split the work
3. **Multiple Agents** → Each gets a specialized subtask
   - Agent 1: Backend changes
   - Agent 2: Frontend UI
   - Agent 3: Test coverage
4. **Isolated Worktrees** → Each agent works in its own git worktree (no conflicts)
5. **Merge Results** → Changes are intelligently merged
6. **Final Output** → Cohesive implementation across all files

**Key Insight:**
- Git worktrees are the secret sauce - prevents merge conflicts
- Each agent thinks it has the whole codebase to itself
- Orchestrator handles coordination and merging

**Real-World Example:**
- "Add authentication to the app"
- Agent 1: Backend routes + middleware
- Agent 2: Login UI components
- Agent 3: Integration tests
- All three work simultaneously, results merge cleanly

---

### Slide: Model Context Protocol (MCP)

**Speaker Notes:**

**What is MCP:**
- Open protocol connecting AI to external tools and data
- Like USB for AI - standardized interface
- Created by Anthropic, now open source

**Five Key Components:**

1. **Tools** - Functions AI can execute
   - Example: `create_github_pr`, `query_database`

2. **Prompts** - Templated workflows
   - Example: Pre-configured prompt for code reviews

3. **Resources** - Structured data sources
   - Example: Database schemas, API documentation

4. **Roots** - URI/filesystem boundaries
   - Defines what the AI can access

5. **Elicitation** - User information requests
   - AI can ask you for clarification

**Goal:**
- Standardize how AI connects to your development ecosystem
- No more custom integrations for every tool
- Community-driven MCP servers (like npm packages)

---

### Slide: MCP Server Examples

**Speaker Notes:**

**GitHub MCP:**
- Direct GitHub operations from Cursor
- Create PRs, review code, manage issues
- No need to leave your editor

**Figma MCP:**
- Read Figma designs programmatically
- Extract design tokens (colors, spacing, typography)
- Generate components matching designs
- Sync UI updates from Figma to code

**GitMCP:**
- Turn any GitHub repo into MCP
- Replace github.com with gitmcp.io in URL
- Instant context access to any public repo
- No configuration needed (dead simple)

**Database MCPs:**
- PostgreSQL, SQLite, MySQL
- Query and inspect data directly
- Generate migrations from schema changes

**The Power:**
- Chain these together
- Example: Read Figma design → Generate React component → Create GitHub PR → All from one prompt

**References:**
- Figma MCP: https://github.com/grab/cursor-talk-to-figma-mcp
- GitMCP: https://gitmcp.io

---

### Slide: MCP Configuration Example

**Speaker Notes:**

Walk through the JSON config:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-token-here"
      }
    },
    "figma": {
      "command": "bunx",
      "args": ["cursor-talk-to-figma-mcp@latest"],
      "env": {
        "FIGMA_TOKEN": "your-figma-token"
      }
    }
  }
}
```

**Where to Save:**
- `.cursor/mcp.json` in your project root
- Or global config in Cursor settings

**Getting Tokens:**
- GitHub: Settings → Developer settings → Personal access tokens
- Figma: Account settings → Personal access tokens

**Security:**
- Never commit tokens to git
- Use environment variables for sensitive values
- Consider using `.env` files with proper .gitignore

---

## Section 2: Building Your First Full App

### Slide: AI-Driven Project Initialization

**Speaker Notes:**

**The Context File Approach:**

Start with clarity before touching code:

1. **Describe your app in plain English**
   - What problem does it solve?
   - Who are the users? (developers, designers, end-users)
   - What are the core features? (3-5 key features)

2. **Define your tech stack**
   - Frontend framework (React, Next.js, Vue)
   - Backend (Node, Supabase, Firebase, custom API)
   - Database (PostgreSQL, MongoDB, SQLite)
   - Authentication provider
   - Deployment platform (Vercel, Netlify, AWS)

3. **Generate project structure**
   - Let Cursor create optimal folder organization
   - Auto-generate database schema based on features
   - Scaffold component architecture
   - Set up configuration files

**Why This Works:**
- Forces you to think before coding
- Cursor generates consistent, well-architected projects
- Saves hours of setup time
- Creates documentation as you go

**Reference:** Building Apps with AI - https://www.youtube.com/watch?v=WZ8g6deOyAk

---

### Slide: Creating the Context File

**Speaker Notes:**

Walk through the DeepWork AI example:

**Problem:** Clear, specific problem statement
- Developers struggle with multitasking and distractions
- Need a tool to prioritize tasks and maintain deep work focus

**Users:** Define who will use this
- Software engineers, designers, product managers
- Important: Understanding users shapes UX decisions

**Core Features:** 3-5 key features (not 20)
1. Task management with priority levels
2. Focus timer for single-task concentration
3. AI chat to quickly add tasks via natural language

**Tech Stack:** Be specific
- Frontend: Next.js 14 (App Router), TypeScript, Tailwind
- Backend: Supabase (database + auth in one)
- AI: OpenAI API for chat functionality
- Deployment: Vercel (one-click Next.js deployment)

**Database Schema:** Let Cursor generate
- Instead of manually designing tables, describe features
- Cursor generates normalized schema with proper relationships

**This Becomes Your North Star:**
- Reference it in every prompt: `@docs/context.md`
- Update it as requirements evolve
- Share with team for alignment

---

### Slide: Using ChatGPT + Cursor Together

**Speaker Notes:**

**Two-Stage Workflow:**

**Stage 1: ChatGPT (Planning)**
- Brainstorming features (divergent thinking)
- Structuring ideas (organize thoughts)
- Creating context.md (document vision)
- Planning architecture (high-level design)

**Stage 2: Cursor (Implementation)**
- Generating actual code (tactical execution)
- Multi-file operations (cross-cutting changes)
- Debugging errors (iterative fixing)
- Refactoring (improving existing code)

**Why Separate Tools:**
- ChatGPT: Free-form thinking, no codebase context needed
- Cursor: Deeply integrated with your actual project
- Each tool optimized for its phase

**Workflow Example:**
1. ChatGPT: "Help me plan a task management app with AI"
2. Save that conversation as context.md
3. Open Cursor: `@docs/context.md Generate the project structure`
4. Cursor builds it with full context

**Best Practice:**
- Use ChatGPT for exploration and planning
- Use Cursor for implementation and refinement
- Don't try to use one tool for both jobs

---

(Continue with remaining sections following same detailed format...)

## Quick Reference: Common Prompts

### Exploration Phase
- "Analyze the architecture of @src/ and suggest improvements"
- "@codebase where is user authentication handled?"
- "Explain how @src/components/Header.tsx works"

### Planning Phase
- "Create a step-by-step plan to add dark mode support"
- "Generate a database schema for [feature description]"
- "What's the best way to structure components for [feature]?"

### Build Phase
- "Implement the plan from above, step 1 first"
- "Fix this error: [paste error]"
- "Refactor @src/utils/api.ts to use async/await"

### Testing Phase
- "Generate comprehensive tests for @src/components/Button.tsx"
- "Create integration tests for the authentication flow"
- "Add E2E tests using Playwright for the happy path"

### Deployment Phase
- "Create a GitHub Actions workflow for CI/CD"
- "List all environment variables needed for production"
- "Generate a deployment checklist for production readiness"

## Troubleshooting Guide

### AI Output is Poor Quality
**Likely Causes:**
- Context overload (too many files in context)
- Vague prompts (not specific enough)
- Wrong chat mode (use Agent for multi-file changes)

**Solutions:**
- Start new chat, be more specific
- Use @-mentions to target exact files
- Try the prompt 5 different ways

### Context Window Full
**Symptoms:**
- Slow responses
- AI forgetting earlier conversation
- Incomplete or confused answers

**Solutions:**
- Start new chat tab
- Summarize progress and handoff to new chat
- Use task handoff pattern (detailed in Section 1)

### Merge Conflicts from Agents
**This shouldn't happen with Cursor 2.0, but if it does:**
- Check git worktree status
- Manually resolve conflicts
- Consider breaking task into smaller, sequential steps

### AI Making Same Mistakes Repeatedly
**Solutions:**
- Add project rule to prevent the mistake
- Be more explicit in prompts about the requirement
- Check if you need to update context with examples

## Demo Checkpoints

### Demo 1: Setting Up Cursor Configuration
- Create `.cursor/rules` directory
- Add react.mdc, typescript.mdc, styling.mdc rules
- Configure application modes (Intelligent, Specific Files)
- Test with a prompt: "Create a Button component following our rules"

### Demo 2: Context Management
- Configure `.cursorignore` (show examples)
- Demonstrate `@codebase` semantic search
- Show combining multiple @-mentions
- Demonstrate incremental context building

### Demo 3: MCP Configuration
- Install GitHub MCP server
- Test: "List my open pull requests"
- Add GitMCP for external repo
- Query: "How does React handle effects?" using gitmcp.io/facebook/react

### Demo 4: Core Feature Development (Quiz App)
- Walk through creating context.md
- Generate database schema with Cursor
- Create UI components using Agent mode
- Add real-time features with Supabase

### Demo 5: Testing & Refining
- Generate test suite for component
- Run tests, show failures
- Let Cursor fix failing tests
- Demonstrate TDD workflow

### Demo 6: Production Setup
- Create GitHub Actions workflow
- Configure environment variables
- Deploy to Vercel
- Test production deployment

## Time Management

**Section 1: Cursor & Context Management** (90 min)
- What is Cursor: 15 min
- Context management: 30 min
- Project rules & MCP: 25 min
- Demo & Q&A: 20 min

**Section 2: Building Your First Full App** (60 min)
- Project initialization: 20 min
- Data layer & UI components: 25 min
- Testing & polish: 15 min

**Section 3: Advanced Development** (75 min)
- Architecture patterns: 25 min
- Hands-on Quiz App: 35 min
- Mermaid diagrams & testing: 15 min

**Section 4: Full-Stack Application** (60 min)
- Architecture: 15 min
- Backend & database: 20 min
- Frontend & state: 15 min
- Demo: 10 min

**Section 5: Deployment & Production** (75 min)
- Deployment workflow: 20 min
- CI/CD & quality gates: 25 min
- Production setup exercise: 20 min
- Final Q&A: 10 min

**Total: 6 hours + breaks**

## Additional Resources for Presenter

### Must-Have Links
- Cursor Docs: cursor.com/docs
- Cursor 2.0 Blog: cursor.com/blog/2-0
- Cursor Changelog: cursor.com/changelog
- MCP Servers: github.com/modelcontextprotocol/servers
- GitMCP: gitmcp.io
- Figma MCP: github.com/grab/cursor-talk-to-figma-mcp

### Recommended Videos
- Cursor for Staff Engineers: https://www.youtube.com/watch?v=sb0y5B3LLUA
- Building Apps with AI: https://www.youtube.com/watch?v=WZ8g6deOyAk
- Cursor 2.0 Announcement: Check cursor.com for official release video

### Community
- Cursor Discord (link from cursor.com)
- Twitter: @cursor_ai
- Reddit: r/cursor

### Tools to Have Ready
- Supabase account
- Vercel account
- GitHub account with PAT
- OpenAI API key (or DeepSeek for demos)
- Sample project ready to demo

## Backup Demos (If Ahead of Schedule)

1. **Integuru Demo** - Reverse engineering API calls
2. **Advanced Mermaid Diagrams** - Multi-level architecture
3. **Load Testing with k6** - Generate and run performance tests
4. **PR Comment Automation** - Screenshot-based workflow
5. **Feature Flags Pattern** - Safe deployment strategies
