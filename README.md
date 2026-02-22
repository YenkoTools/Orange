<a href="https://github.com/jkulba/Orange/">
    <img alt="The Orange Service" src="https://github.com/jkulba/Orange/blob/main/orange.svg"
    width="150" height="175">
</a>

# The Orange Service — .NET Clean Architecture Template

[![CI](https://github.com/jkulba/Orange/actions/workflows/ci.yml/badge.svg)](https://github.com/jkulba/Orange/actions/workflows/ci.yml)

A GitHub repository template for building .NET 10 services following Clean Architecture principles.

## Using This Template

Click the **"Use this template"** button at the top of the repository page to create a new repository pre-configured with this structure. Then:

1. **Rename** the solution, projects, and namespaces from `Orange` to your service name.
2. **Update** `README.md`, `CHANGELOG.md`, and `.github/CODEOWNERS` with your project details.
3. **Replace** the placeholder `Class1.cs` files in each layer with your domain logic.
4. **Configure** `appsettings.json` and `launchSettings.json` for your environment.

## Overview

This template implements Clean Architecture with a clear separation of concerns across four layers:

| Layer | Project | Responsibility |
|-------|---------|----------------|
| **Domain** | `Service/src/Domain` | Core business entities, value objects, and interfaces |
| **Application** | `Service/src/Application` | Use cases, CQRS commands/queries, and business rules |
| **Infrastructure** | `Service/src/Infrastructure` | Database, external services, and repository implementations |
| **Api** | `Service/src/Api` | Minimal API presentation layer |

Each layer has a corresponding test project under `tests/`.

## Getting Started

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)

### Run the Application

```bash
# Run the API
./run.sh
```

### Build and Test

```bash
dotnet build
dotnet test
```

## Project Structure

```
.
├── Service/
│   ├── src/
│   │   ├── Api/            # Minimal API host and endpoint definitions
│   │   ├── Application/    # CQRS handlers, commands, queries, and DTOs
│   │   ├── Domain/         # Entities, value objects, domain interfaces
│   │   └── Infrastructure/ # Repository implementations, external integrations
│   └── tests/
│       ├── Api.Tests/
│       ├── Application.Tests/
│       ├── Domain.Tests/
│       └── Infrastructure.Tests/
├── Client/
├── .github/
│   ├── workflows/      # CI/CD GitHub Actions workflows
│   ├── ISSUE_TEMPLATE/ # Bug, feature, and documentation issue templates
│   ├── CODEOWNERS      # Code ownership rules
│   └── PULL_REQUEST_TEMPLATE.md
├── Directory.Build.props   # Shared MSBuild properties
├── Directory.Packages.props # Central NuGet package versions
├── Orange.slnx             # Solution file
└── global.json             # .NET SDK version pin
```

## Documentation

For comprehensive documentation including architecture decisions, development guidelines, API documentation, and deployment instructions, please visit the [**project wiki**](../../wiki).

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please review our [Security Policy](SECURITY.md) for reporting vulnerabilities responsibly.

## License

See [LICENSE](LICENSE) for details.
