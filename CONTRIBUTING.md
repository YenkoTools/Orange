# Contributing

Thank you for your interest in contributing! This document provides guidelines and steps for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Bugs

1. Check the [existing issues](../../issues) to avoid duplicates.
2. Use the **Bug Report** issue template when opening a new bug.
3. Include clear reproduction steps, expected behavior, and actual behavior.

### Requesting Features

1. Check the [existing issues](../../issues) and [discussions](../../discussions) first.
2. Use the **Feature Request** issue template to propose a new feature.
3. Describe the problem you are trying to solve and your proposed solution.

### Submitting Pull Requests

1. **Fork** the repository and create a feature branch from `main`.
2. Follow the [Development Setup](#development-setup) steps below.
3. Write or update tests for any behavior you change.
4. Ensure all tests pass: `dotnet test`
5. Follow the [coding conventions](#coding-conventions) described below.
6. Submit a pull request using the provided PR template.

## Development Setup

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- A code editor such as [Visual Studio](https://visualstudio.microsoft.com/), [VS Code](https://code.visualstudio.com/), or [JetBrains Rider](https://www.jetbrains.com/rider/)

### Getting Started

```bash
# Clone your fork
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# Restore dependencies
dotnet restore

# Build the solution
dotnet build

# Run tests
dotnet test

# Run the API
./run.sh
```

## Coding Conventions

This project follows Clean Architecture principles. Please read the [Architecture Overview](../../wiki) before contributing.

- **Framework**: .NET 10
- **API style**: Minimal API (no Controllers)
- **Patterns**: CQRS, Repository, custom Mediator
- **Testing**: xUnit 3 — use built-in assertions, no FluentAssertions
- **Documentation**: Add XML `<summary>` comments to all public types and members
- **Packages**: Use central package management (`Directory.Packages.props`)

### Branch Naming

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/<short-description>` | `feature/add-user-endpoint` |
| Bug fix | `fix/<short-description>` | `fix/null-reference-exception` |
| Documentation | `docs/<short-description>` | `docs/update-readme` |
| Chore | `chore/<short-description>` | `chore/bump-dotnet-version` |

### Commit Messages

Use the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <short summary>
```

Examples:
- `feat(api): add health-check endpoint`
- `fix(domain): handle null entity in validation`
- `docs: update architecture overview`
- `chore: upgrade xunit to 3.x`

## Questions

For questions and support, please use [GitHub Discussions](../../discussions) rather than opening an issue.
