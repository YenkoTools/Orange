# Testing Guide

The Orange Service includes comprehensive test coverage using xUnit as the testing framework.

## Test Projects

The solution includes four test projects, one for each layer:

- **Api.Tests** - Tests for API endpoints and controllers
- **Application.Tests** - Tests for use cases and application logic  
- **Domain.Tests** - Tests for domain entities and business rules
- **Infrastructure.Tests** - Tests for data access and external services

## Running Tests

### Run All Tests

```bash
# From solution root
dotnet test
```

### Run Specific Test Project

```bash
# API tests
dotnet test tests/Api.Tests

# Application tests
dotnet test tests/Application.Tests

# Domain tests
dotnet test tests/Domain.Tests

# Infrastructure tests
dotnet test tests/Infrastructure.Tests
```

### Run with Code Coverage

```bash
dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=opencover
```

### Run Tests in Watch Mode

```bash
dotnet watch test --project tests/Api.Tests
```

## Test Configuration

Each test project includes an `xunit.runner.json` configuration file for customizing test execution behavior.

## Writing Tests

### Test Structure

Follow the Arrange-Act-Assert (AAA) pattern:

```csharp
[Fact]
public void MethodName_StateUnderTest_ExpectedBehavior()
{
    // Arrange
    var sut = new SystemUnderTest();
    
    // Act
    var result = sut.DoSomething();
    
    // Assert
    Assert.NotNull(result);
}
```

### Naming Conventions

- Test class: `{ClassUnderTest}Tests`
- Test method: `{MethodName}_{Scenario}_{ExpectedResult}`

### Domain Tests

Domain tests should focus on business rules and invariants:

```csharp
[Fact]
public void Constructor_WithInvalidData_ThrowsDomainException()
{
    // Test domain validation logic
}
```

### Application Tests

Application tests should verify use case logic:

```csharp
[Fact]
public async Task Handle_ValidCommand_ReturnsSuccessResult()
{
    // Test application logic with mocked dependencies
}
```

### Infrastructure Tests

Infrastructure tests verify external integrations:

```csharp
[Fact]
public async Task SaveAsync_ValidEntity_PersistsToDatabase()
{
    // Test data access logic
}
```

### API Tests

API tests verify HTTP endpoints and responses:

```csharp
[Fact]
public async Task Get_ReturnsOkResult()
{
    // Test API endpoints
}
```

## Test Categories

Use traits to categorize tests:

```csharp
[Fact]
[Trait("Category", "Unit")]
public void UnitTest() { }

[Fact]
[Trait("Category", "Integration")]
public void IntegrationTest() { }
```

Run specific categories:
```bash
dotnet test --filter Category=Unit
```

## Mocking

🚧 **Coming Soon** - Mocking framework recommendations and patterns

Common frameworks:
- Moq
- NSubstitute
- FakeItEasy

## Test Data Builders

🚧 **Coming Soon** - Test data builder patterns for creating test objects

## Integration Testing

🚧 **Coming Soon** - Integration testing setup with WebApplicationFactory

## Testing Best Practices

1. **Keep tests isolated** - Each test should be independent
2. **One assertion per test** - Test one behavior at a time
3. **Use descriptive names** - Test names should explain what they test
4. **Follow AAA pattern** - Arrange, Act, Assert
5. **Test edge cases** - Don't just test the happy path
6. **Keep tests fast** - Unit tests should run in milliseconds
7. **Mock external dependencies** - Isolate the system under test

## Continuous Integration

🚧 **Coming Soon** - CI/CD pipeline configuration for automated testing

## Code Coverage Goals

- **Domain Layer**: 90%+
- **Application Layer**: 85%+
- **Infrastructure Layer**: 75%+
- **API Layer**: 80%+

## Troubleshooting

### Tests Not Discovered

```bash
# Rebuild the test project
dotnet build tests/Api.Tests
```

### Test Failures

Check the detailed output:
```bash
dotnet test --logger "console;verbosity=detailed"
```

---
*Maintained by Hallcrest Engineering*
