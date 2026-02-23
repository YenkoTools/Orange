# Orange Wiki

Welcome to the Orange documentation! This project is a .NET 10 Clean Architecture service template with a modern TypeScript frontend client.

## Quick Links

### Service (API)
- [Architecture Overview](Architecture)
- [Development Setup](Development-Setup)
- [API Documentation](API-Documentation)
- [Testing Guide](Testing)
- [Deployment](Deployment)

### Client (Frontend)
- [Client Application](Client-Application)

### General
- [Contributing](Contributing)

## About

Orange consists of two applications:

**Service** — A .NET 10 backend built using Clean Architecture principles. It demonstrates:

- **Clean Architecture** - Separation of concerns with Domain, Application, Infrastructure, and API layers
- **Modern .NET** - Built on .NET 10
- **Logging** - Integrated Serilog for structured logging
- **Testing** - Comprehensive xUnit test coverage
- **API Documentation** - OpenAPI/Swagger integration

**Client** — A TypeScript frontend built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and the [AG Grid Community](https://www.ag-grid.com/) data grid. It supports both Astro and React components and consumes the Service API.

## Project Status

🚧 **This project is in active development.** Features and documentation are being added continuously.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/YenkoTools/Orange.git
cd Orange

# Run the Service (default port 5001)
./run.sh

# Run the Client (in a separate terminal)
cd Client
npm install
cp .env.example .env
npm run dev
```

Or run both with Docker Compose:

```bash
docker-compose up --build
```

## Support

For questions and support, please open an issue on GitHub or contact Hallcrest Engineering.

---
*Maintained by Hallcrest Engineering*
