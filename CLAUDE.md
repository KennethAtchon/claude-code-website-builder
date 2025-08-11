# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a comprehensive documentation repository for modern website development, containing detailed technical specifications, development guides, and prompt templates for building websites and applications on local PC environments.

## Repository Architecture

### Core Documentation Structure
```
claude-code-websites/
├── claude-context/               # IMPORTANT READ ALL THESE MARKDOWNS
│   ├── system-prompt.md         # Development standards and best practices
│   ├── website-development-guide.md  # Complete website building patterns
│   ├── technical-specifications.md   # Framework compatibility and setup
│   ├── prompt-enhancement.md    # AI prompt enhancement system docs
│   └── README.md               # Documentation overview
├── prompt/                      # Example prompts and templates
│   ├── userPrompt.md           # Concrete website example (auto repair shop)
│   └── userPromptTemplate.md   # Reusable prompt template structure
└── README.md                   # Basic repository overview
```

### Key Documentation Themes
- **Modern Web Development**: Best practices for building websites locally
- **Framework Integration**: Detailed setup and usage for popular frameworks
- **Development Patterns**: Clean code architecture and component organization
- **Website Templates**: Common website types with complete implementation guides

## Development Commands

This is a documentation repository without executable code. When creating projects based on this documentation:

```bash
# Standard Vite project workflow (recommended):
npm create vite@latest project-name --template react
cd project-name
npm install
npm run dev          # Development server
npm run build        # Production build  
npm run preview      # Preview production build

# Alternative minimal setup:
npm init -y
npm install vite
npm run dev

# Testing:
npm run test         # Run tests
npm run test:watch   # Watch mode
```

## Local Development Environment

### System Requirements
- **Node.js**: Version 16+ (LTS recommended)
- **Package Manager**: npm, yarn, or pnpm
- **Git**: For version control
- **Code Editor**: VS Code recommended with extensions

### Preferred Technologies
- **Build Tool**: Vite (fast development), Webpack (alternative)
- **Frontend**: React, Vue.js, Svelte, or Vanilla JavaScript ES6+
- **Styling**: Tailwind CSS, CSS Modules, Sass/SCSS
- **Database**: SQLite, PostgreSQL, MongoDB (full database support)
- **Testing**: Vitest, Jest with Testing Library

### Framework Support
**✅ Full Support**: React, Vue.js, Angular, Svelte, Next.js, Nuxt.js, SvelteKit
**✅ Backend Options**: Express.js, Fastify, Koa, Node.js APIs
**✅ Database Integration**: Full database connectivity and ORM support
**✅ Native Libraries**: All npm packages including native binaries

## Documentation Integration Patterns

### Using claude-context/ Files
1. **system-prompt.md**: Reference for development standards and code formatting
2. **website-development-guide.md**: Complete implementation patterns for common website types
3. **technical-specifications.md**: Framework setup and performance optimization
4. **prompt-enhancement.md**: AI prompt improvement system architecture

### Prompt Template Usage
- **userPromptTemplate.md**: Reusable structure for service business websites
- **userPrompt.md**: Concrete example implementation (auto repair shop)
- Templates include: design goals, sections, styling, creative touches

## Project Development Sequence

### For Website Projects Built from This Documentation:
1. **Planning**: Reference website type templates in `website-development-guide.md`
2. **Setup**: Create project with appropriate build tools and dependencies
3. **Architecture**: Follow component patterns from `technical-specifications.md`  
4. **Implementation**: Use framework-specific patterns and best practices
5. **Testing**: Implement comprehensive testing strategy
6. **Optimization**: Apply performance guidelines and accessibility standards

### Key Implementation Principles
- **Modern Tooling**: Use latest build tools and development servers
- **Modular Architecture**: Split functionality into small, focused files
- **Full Stack Capabilities**: Leverage complete Node.js ecosystem
- **Mobile-First Design**: Implement responsive layouts with modern CSS
- **Performance Optimization**: Code splitting, lazy loading, asset optimization