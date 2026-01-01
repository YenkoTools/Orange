# Architecture Overview

The Orange Service follows Clean Architecture principles, organizing code into distinct layers with clear dependencies.

## Architecture Layers

### 1. Domain Layer (`src/Domain`)
The innermost layer containing enterprise business logic and entities.

**Responsibilities:**
- Domain entities and value objects
- Domain events
- Domain exceptions
- Business rules and invariants

**Dependencies:** None (pure business logic)

**Current Status:** 🚧 Initial structure in place

### 2. Application Layer (`src/Application`)
Contains application business logic and use cases.

**Responsibilities:**
- Use case implementations
- Application services
- DTOs (Data Transfer Objects)
- Interfaces for external dependencies
- CQRS patterns (Commands/Queries)

**Dependencies:** Domain layer only

**Current Status:** 🚧 Initial structure in place

### 3. Infrastructure Layer (`src/Infrastructure`)
Implements external concerns and technical capabilities.

**Responsibilities:**
- Data persistence (EF Core, Dapper, etc.)
- External service integrations
- File system access
- Email/SMS services
- Caching implementations

**Dependencies:** Domain and Application layers

**Current Status:** 🚧 Initial structure in place

### 4. API Layer (`src/Api`)
The presentation layer exposing HTTP endpoints.

**Responsibilities:**
- HTTP API endpoints
- Request/Response handling
- Authentication/Authorization
- API documentation (OpenAPI)
- Dependency injection configuration

**Dependencies:** Application and Infrastructure layers

**Current Status:** ✅ Basic setup complete with Serilog logging

## Dependency Flow

```
┌─────────────────┐
│   API Layer     │
│  (Presentation) │
└────────┬────────┘
         │
    ┌────▼─────────────────┐
    │  Infrastructure      │
    │    (External)        │
    └────────┬─────────────┘
             │
        ┌────▼──────────┐
        │  Application  │
        │  (Use Cases)  │
        └────┬──────────┘
             │
        ┌────▼────────┐
        │   Domain    │
        │  (Business) │
        └─────────────┘
```

**Rule:** Dependencies flow inward. Inner layers know nothing about outer layers.

## Key Principles

1. **Dependency Inversion** - High-level modules don't depend on low-level modules
2. **Separation of Concerns** - Each layer has a distinct responsibility
3. **Testability** - Business logic can be tested independently of infrastructure
4. **Maintainability** - Changes in one layer minimize impact on others

## Technology Stack

- **.NET 10** (RC2) - Application framework
- **Serilog** - Structured logging
- **OpenAPI** - API documentation
- **xUnit** - Unit testing framework

## Future Enhancements

As the project evolves, this architecture will support:
- CQRS patterns with MediatR
- Entity Framework Core for data access
- AutoMapper for object mapping
- FluentValidation for input validation
- Authentication and authorization

---
*Maintained by Hallcrest Engineering*
