# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- [2026-04-11] ISSUE#55: Merge main into develop, migrate Tailwind v4, and update NuGet packages
- [2026-02-23] ISSUE#55: Reorganize Service project structure and update SDK version
- [2026-02-21] ISSUE#9: Fix project path references and add Prettier Astro plugin
- [2026-02-21] ISSUE#7: Add GitHub Copilot workflow prompts and apply code formatting

### Added
- Initial project scaffold using Clean Architecture
- Domain, Application, Infrastructure, and API layers
- Central NuGet package management
- xUnit 3 test projects for each layer
- Serilog structured logging
- OpenAPI/Swagger documentation
- GitHub Actions CI workflow
- Issue templates (Bug, Feature, Documentation)
- Pull request template
- Dependabot configuration for automated dependency updates
