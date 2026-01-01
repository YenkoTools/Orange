# Contributing to Orange Service

Thank you for your interest in contributing! This guide will help you get started.

## Code of Conduct

Be respectful, professional, and constructive in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Set up your development environment (see [Development Setup](Development-Setup))
4. Create a feature branch
5. Make your changes
6. Submit a pull request

## Development Workflow

### 1. Create a Feature Branch

```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `bugfix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring

### 2. Make Your Changes

Follow the coding standards and architecture guidelines outlined below.

### 3. Commit Your Changes

Use conventional commit messages:

```bash
git commit -m "feat: add user authentication endpoint"
git commit -m "fix: resolve null reference in weather service"
git commit -m "docs: update API documentation"
git commit -m "test: add unit tests for domain entities"
```

Commit types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `test:` - Adding or updating tests
- `refactor:` - Code refactoring
- `style:` - Code style changes (formatting, etc.)
- `chore:` - Maintenance tasks

### 4. Push Changes

```bash
git push origin feature/your-feature-name
```

### 5. Create Pull Request

- Go to the repository on GitHub
- Click "New Pull Request"
- Select your feature branch
- Fill out the PR template
- Link related issues

## Coding Standards

### C# Style Guide

Follow the [Microsoft C# Coding Conventions](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions):

- Use PascalCase for class names and method names
- Use camelCase for local variables and parameters
- Use meaningful, descriptive names
- One class per file
- Keep methods short and focused

### Code Organization

#### Domain Layer
```csharp
namespace Orange.Domain.Entities;

public class MyEntity
{
    // Properties
    public int Id { get; private set; }
    
    // Constructor
    public MyEntity() { }
    
    // Methods
    public void DoSomething() { }
}
```

#### Application Layer
```csharp
namespace Orange.Application.Features.MyFeature;

public class MyCommandHandler
{
    // Dependencies injected via constructor
    public MyCommandHandler() { }
    
    // Handle method
    public async Task<Result> Handle() { }
}
```

### Documentation

- Add XML comments for public APIs
- Document complex logic with inline comments
- Update wiki pages when adding new features

```csharp
/// <summary>
/// Processes the user request and returns a result.
/// </summary>
/// <param name="request">The user request.</param>
/// <returns>A result indicating success or failure.</returns>
public async Task<Result> ProcessAsync(Request request)
{
    // Implementation
}
```

## Testing Requirements

### Test Coverage

All new code should include tests:
- **Domain**: Unit tests for all business logic
- **Application**: Unit tests for use cases
- **Infrastructure**: Integration tests for external dependencies
- **API**: Integration tests for endpoints

### Running Tests

```bash
# Run all tests before committing
dotnet test

# Run with coverage
dotnet test /p:CollectCoverage=true
```

See the [Testing Guide](Testing) for detailed information.

## Architecture Guidelines

Follow Clean Architecture principles:

1. **Dependencies flow inward** - Outer layers depend on inner layers, never the reverse
2. **Domain is pure** - No external dependencies in the Domain layer
3. **Use interfaces** - Define abstractions in Application, implement in Infrastructure
4. **SOLID principles** - Follow Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion

See [Architecture Overview](Architecture) for details.

## Pull Request Guidelines

### Before Submitting

- [ ] Code builds without errors
- [ ] All tests pass
- [ ] Code follows style guidelines
- [ ] New features include tests
- [ ] Documentation is updated
- [ ] Commit messages follow conventions

### PR Template

When creating a PR, include:

1. **Description** - What does this PR do?
2. **Related Issues** - Link to GitHub issues
3. **Type of Change** - Feature, bugfix, docs, etc.
4. **Testing** - How was this tested?
5. **Screenshots** - If applicable

### Review Process

1. Automated checks must pass (build, tests)
2. Code review by at least one maintainer
3. Address feedback and make requested changes
4. Maintainer merges the PR

## Issue Reporting

### Bug Reports

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug.md):
- Describe the bug
- Steps to reproduce
- Expected vs actual behavior
- Environment details

### Feature Requests

Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature.md):
- Describe the feature
- Problem it solves
- Proposed solution
- Alternatives considered

### Documentation Issues

Use the [Documentation template](.github/ISSUE_TEMPLATE/docs.md):
- What's wrong or missing
- Suggested changes

## Questions and Support

- **GitHub Discussions** - For questions and general discussion
- **GitHub Issues** - For bugs and feature requests
- **Pull Requests** - For code contributions

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## Recognition

Contributors will be recognized in the project's README and release notes.

---

Thank you for contributing to the Orange Service!

*Maintained by Hallcrest Engineering*
