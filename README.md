# Portfolio Website for Ankith Kumar Verma

## Overview

This is a comprehensive personal portfolio website for Ankith Kumar Verma, an aspiring AI/ML Engineer. The application is built as a full-stack web application featuring a modern React frontend with a Node.js/Express backend. The portfolio showcases personal information, skills, projects, education, achievements, and includes a functional contact form. The design emphasizes professional presentation with smooth animations, responsive layout, and both light/dark theme support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme System**: Custom theme provider supporting light/dark modes with system preference detection

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the entire stack
- **API Design**: RESTful API endpoints for contact form submission and message retrieval
- **Development**: Hot reload and development middleware integration with Vite

### Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL as the primary database (configured for Neon serverless)
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Management**: Drizzle Kit for database migrations and schema management

### Component Architecture
- **UI Components**: Comprehensive shadcn/ui component system including forms, navigation, layouts, and interactive elements
- **Custom Components**: Specialized portfolio sections (Hero, About, Skills, Projects, Education, Achievements, Contact)
- **Responsive Design**: Mobile-first approach with adaptive layouts and touch-friendly interfaces
- **Animation System**: CSS-based animations with intersection observer for scroll-triggered effects

### Authentication and Authorization
- **Current State**: No authentication system implemented
- **Contact Form**: Public submission without user accounts
- **Admin Access**: Basic endpoint for retrieving contact messages (no protection currently)

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless database driver
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Schema validation integration

### UI and Styling
- **@radix-ui/***: Comprehensive accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **lucide-react**: Modern icon library

### Development Tools
- **tsx**: TypeScript execution for server development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development plugins

### Form and Validation
- **react-hook-form**: Performant form handling
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Runtime type validation and schema definition

### Data Fetching
- **@tanstack/react-query**: Server state management and caching

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns, comprehensive type safety, and production-ready tooling for deployment and maintenance.
