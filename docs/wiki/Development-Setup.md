# Development Setup

This guide will help you set up your development environment for both the Orange Service (API) and the Orange Client (frontend).

## Prerequisites

### Required

- **.NET 10 SDK** - Version `10.0.100` or later
- **Node.js 22+** and **npm** - For the Client application
- **Git** - For version control

### Recommended

- **Visual Studio Code** or **Visual Studio 2025** or **JetBrains Rider**
- **Docker** (for containerized deployments)
- **Postman** or similar API testing tool

## Installation

### 1. Install .NET 10 SDK

Download and install the .NET 10 SDK from the official Microsoft website:

```bash
# Verify installation
dotnet --version
# Should output: 10.0.100 or later
```

### 2. Install Node.js 22

Download and install Node.js 22+ from [nodejs.org](https://nodejs.org/):

```bash
# Verify installation
node --version   # Should output: v22.x.x
npm --version
```

### 3. Clone the Repository

```bash
git clone https://github.com/YenkoTools/Orange.git
cd Orange
```

---

## Setting Up the Service (API)

### Restore and Build

```bash
dotnet restore
dotnet build
```

### Running the Service

#### Using the Run Script (Recommended)

```bash
# Run on default port (5001)
./run.sh

# Run on custom port
PORT=3000 ./run.sh
```

#### Using dotnet CLI

```bash
dotnet run --project Service/src/Api

# Or specify URLs explicitly
dotnet run --project Service/src/Api --urls http://localhost:5001
```

### Service Configuration

The Service uses the following configuration files:

- `Service/src/Api/appsettings.json` - Base configuration
- `Service/src/Api/appsettings.Development.json` - Development overrides

Environment variables can override any configuration:

```bash
export ASPNETCORE_ENVIRONMENT="Development"
export ASPNETCORE_URLS="http://localhost:5001"
```

### API Documentation

When running in Development mode, OpenAPI documentation is available at:

- OpenAPI spec: `http://localhost:5001/openapi/v1.json`

---

## Setting Up the Client (Frontend)

### Install Dependencies

```bash
cd Client
npm install
```

### Configure Environment Variables

```bash
cp .env.example .env
```

Open `.env` and set the Service URL (default: `5001`):

```dotenv
PUBLIC_API_BASE_URL=http://localhost:5001
PUBLIC_API_PORT=5001
```

### Running the Client

```bash
npm run dev
```

The Client is available at **http://localhost:4321** by default.

For more details, see the [Client Application](Client-Application) page.

---

## Running Both Together

### With Docker Compose

The easiest way to run the full stack locally is with Docker Compose:

```bash
docker-compose up --build
```

| Container | Port | URL |
|-----------|------|-----|
| `orange-service` | 7001 | http://localhost:7001 |
| `orange-client` | 5001 | http://localhost:5001 |

---

## Development Tools

### IDE Extensions (VS Code)

Recommended extensions:

- **C# Dev Kit** - .NET language support
- **.NET Extension Pack** - Additional .NET tooling
- **Astro** - Astro syntax highlighting and IntelliSense
- **Tailwind CSS IntelliSense** - Tailwind class suggestions
- **GitLens** - Enhanced Git history and blame
- **REST Client** - Test API endpoints directly from `.http` files
- **ESLint** / **Prettier** - JavaScript/TypeScript linting and formatting

---

## Project Structure

```
Orange/
├── Service/
│   ├── src/
│   │   ├── Api/              # Minimal API endpoints and configuration
│   │   ├── Application/      # Use cases, CQRS handlers, and application logic
│   │   ├── Domain/           # Domain entities and business rules
│   │   └── Infrastructure/   # External dependency implementations
│   └── tests/
│       ├── Api.Tests/
│       ├── Application.Tests/
│       ├── Domain.Tests/
│       └── Infrastructure.Tests/
├── Client/
│   ├── src/
│   │   ├── components/       # Astro / React components
│   │   ├── layouts/          # Page layout templates
│   │   ├── pages/            # File-based routes
│   │   └── styles/           # Global CSS and Tailwind base styles
│   ├── tests/                # Vitest unit tests
│   ├── .env.example          # Environment variable template
│   ├── astro.config.mjs      # Astro configuration
│   └── package.json
├── Directory.Build.props     # Shared MSBuild properties
├── Directory.Packages.props  # Central NuGet package versions
├── Orange.slnx               # Solution file
├── global.json               # .NET SDK version pin
└── docker-compose.yml        # Full-stack local deployment
```

---

## Running Tests

### Service Tests

```bash
# Run all Service tests from solution root
dotnet test

# Run a specific test project
dotnet test Service/tests/Api.Tests
dotnet test Service/tests/Application.Tests
dotnet test Service/tests/Domain.Tests
dotnet test Service/tests/Infrastructure.Tests
```

See the [Testing Guide](Testing) for more details.

### Client Tests

```bash
cd Client
npm test
```

---

## Troubleshooting

### Service: Port Already in Use

```bash
PORT=5002 ./run.sh
```

### Service: SDK Version Mismatch

```bash
dotnet --list-sdks
```

### Service: Build Errors

```bash
dotnet clean
dotnet build
```

### Client: Port Already in Use

```bash
npm run dev -- --port 4322
```

### Client: Environment Variables Not Loaded

Ensure `.env` exists inside the `Client/` directory (not the repo root) and all variable names start with `PUBLIC_`.

### Client: API Calls Failing

1. Verify the Service is running (default: `http://localhost:5001`).
2. Confirm `PUBLIC_API_BASE_URL` in `Client/.env` matches the Service URL.
3. Check the browser console for CORS errors.

---

## Next Steps

- Read the [Architecture Overview](Architecture)
- Explore the [API Documentation](API-Documentation)
- Learn about the [Client Application](Client-Application)
- Learn about [Testing](Testing)
- Review [Contributing Guidelines](Contributing)

---
*Maintained by Hallcrest Engineering*
