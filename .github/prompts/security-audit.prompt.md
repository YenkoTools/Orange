# Security Audit Report Generator

Execute the following commands to generate a comprehensive security audit report for both Client and Service projects:

## Client Project (npm/Node.js)
1. Run `npm audit` in `Aem/Client` to scan for security vulnerabilities
2. Run `npm outdated` in `Aem/Client` to check for outdated packages

## Service Project (.NET)
1. Run `dotnet list package --vulnerable` in `Aem/Service` to check for vulnerable NuGet packages
2. Run `dotnet list package --outdated` in `Aem/Service` to check for outdated NuGet packages
3. Run `dotnet list package --deprecated` in `Aem/Service` to check for deprecated NuGet packages

## Report Generation
Generate a markdown report at `security-audit-report.md` with the following structure:

## Report Structure

### Header
- Title: "Security Audit Report"
- Date: Current date and time in local timezone (e.g., "February 11, 2026 at 2:30 PM PST")
- Branch: Current git branch name
- Projects scanned: Client (npm) and Service (.NET)

### Section 1: Client Project - Security Vulnerabilities
- Summary table with vulnerability counts by severity (Critical, High, Moderate, Low)
- Detailed vulnerability information including:
  - Package names
  - Affected versions
  - Advisory links
  - Descriptions
  - Fix commands
- If no vulnerabilities: Display success message with ✅

### Section 2: Client Project - Outdated Packages
- Table or formatted list of outdated packages showing:
  - Package name
  - Current version
  - Wanted version
  - Latest version
  - Location
- If all packages up to date: Display success message with ✅

### Section 3: Service Project - Vulnerable Packages
- Summary of vulnerable NuGet packages by severity
- Detailed information including:
  - Package names
  - Current version
  - Vulnerable versions
  - Severity level
  - Advisory URLs
- If no vulnerabilities: Display success message with ✅

### Section 4: Service Project - Outdated Packages
- Table of outdated NuGet packages showing:
  - Package name
  - Current version (Requested)
  - Resolved version
  - Latest version
  - Project location
- If all packages up to date: Display success message with ✅

### Section 5: Service Project - Deprecated Packages
- List of deprecated NuGet packages with:
  - Package name
  - Current version
  - Deprecation reason/alternative
- If no deprecated packages: Display success message with ✅

### Section 6: Recommended Actions
- Prioritized list of actions to take for both projects
- Commands to run for fixes (npm and dotnet)
- Notes about breaking changes and testing requirements
- Separate subsections for Client and Service if needed

## Formatting Requirements
- Use proper markdown syntax
- Include code blocks for commands with language identifiers (bash for npm, powershell for dotnet)
- Use tables for structured data
- Include emoji indicators:
  - ✅ for success (no issues found)
  - ⚠️ for warnings (moderate issues)
  - 🔴 for critical/high severity issues
  - 📦 for package information
  - 🔧 for recommended fixes
- Organize with clear headers and sections
- Make the report easy to read and actionable
- Include project names in section headers for clarity

## Output Location
Overwrite any existing `security-audit-report.md` file with the new report in the repository root.
