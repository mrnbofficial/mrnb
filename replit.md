# Overview

This is a React-based memecoin landing page for "$MRNB" (a Solana memecoin). The application features a countdown timer, community milestones tracking, and social media integration. It's built with modern web technologies including React, TypeScript, TailwindCSS, and shadcn/ui components, with a Node.js/Express backend and PostgreSQL database using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Styling**: TailwindCSS with shadcn/ui component library for consistent UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui for accessibility and consistency

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Middleware**: JSON parsing, URL encoding, request logging, and error handling
- **Development**: Vite integration for hot module replacement in development mode

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development/testing

## Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Storage Interface**: Abstracted storage layer supporting both database and in-memory implementations

## External Dependencies
- **Database**: Neon Database for PostgreSQL hosting
- **UI Framework**: Radix UI for accessible component primitives
- **Fonts**: Google Fonts integration (Inter, Fira Code, DM Sans, Architects Daughter, Geist Mono)
- **Development Tools**: Replit-specific plugins for development environment integration
- **Validation**: Zod for runtime type validation and schema definition
- **Date Handling**: date-fns for date manipulation and formatting
- **Icons**: Lucide React for consistent iconography

The application follows a monorepo structure with shared TypeScript definitions between client and server, enabling type safety across the full stack. The architecture supports both development and production environments with appropriate build processes and optimizations.