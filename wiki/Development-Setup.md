# Development Setup

This guide will help you set up your development environment for the Orange Service.

## Prerequisites

### Required
- **.NET 10 SDK (RC2 or later)** - Version `10.0.100-rc.2.25502.107` or compatible
- **Git** - For version control

### Recommended
- **Visual Studio Code** or **Visual Studio 2025** or **JetBrains Rider**
- **Docker** (for future containerization)
- **Postman** or similar API testing tool

## Installation

### 1. Install .NET 10 SDK

Download and install the .NET 10 SDK from the official Microsoft website:
```bash
# Verify installation
dotnet --version
# Should output: 10.0.100-rc.2.25502.107 or later
```

### 2. Clone the Repository

```bash
git clone https://github.com/jkulba/Orange.git
cd Orange
```

### 3. Restore Dependencies

```bash
dotnet restore
```

### 4. Build the Solution

```bash
dotnet build
```

## Running the Application

### Using the Run Script (Recommended)

The project includes a convenient bash script for running the API:

```bash
# Run on default port (5001)
./run.sh

# Run on custom port
PORT=3000 ./run.sh
```

### Using dotnet CLI

```bash
# Run from project directory
dotnet run --project src/Api

# Or specify URLs
dotnet run --project src/Api --urls http://localhost:5001
```

### Configuration

The application uses the following configuration files:
- `src/Api/appsettings.json` - Base configuration
- `src/Api/appsettings.Development.json` - Development overrides

Environment variables can override any configuration:
```bash
export ASPNETCORE_ENVIRONMENT="Development"
export ASPNETCORE_URLS="http://localhost:5001"
```

## Development Tools

### IDE Extensions (VS Code)

Recommended extensions:
- C# Dev Kit
- .NET Extension Pack
- GitLens
- REST Client

### Logging

The application uses Serilog for structured logging. Logs are output to the console by default.

### API Documentation

When running in Development mode, OpenAPI documentation is available at:
- Swagger UI: `http://localhost:5001/swagger` (coming soon)
- OpenAPI spec: `http://localhost:5001/openapi/v1.json` (coming soon)

## Project Structure

```
Orange/
├── src/
│   ├── Api/              # API endpoints and configuration
│   ├── Application/      # Use cases and application logic
│   ├── Domain/           # Domain entities and business rules
│   └── Infrastructure/   # External dependencies implementation
├── tests/
│   ├── Api.Tests/
│   ├── Application.Tests/
│   ├── Domain.Tests/
│   └── Infrastructure.Tests/
├── Directory.Build.props  # Shared MSBuild properties
├── Directory.Packages.props  # Central package management
└── global.json           # .NET SDK version pinning
```

## Running Tests

See the [Testing Guide](Testing) for detailed information about running and writing tests.

Quick command:
```bash
dotnet test
```

## Troubleshooting

### Port Already in Use
```bash
# Use a different port
PORT=5002 ./run.sh
```

### SDK Version Mismatch
Ensure the correct SDK version is installed:
```bash
dotnet --list-sdks
```

### Build Errors
Clean and rebuild:
```bash
dotnet clean
dotnet build
```

## Next Steps

- Read the [Architecture Overview](Architecture)
- Explore the [API Documentation](API-Documentation)
- Learn about [Testing](Testing)
- Review [Contributing Guidelines](Contributing)

---
*Maintained by Hallcrest Engineering*
