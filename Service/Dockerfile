# ─── Build Stage ─────────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /source

# Copy central package management and build props from repo root.
# global.json is intentionally excluded so the container uses the SDK version
# shipped with the base image rather than enforcing the local preview pin.
COPY Directory.Build.props .
COPY Directory.Packages.props .

# Copy project files first to take advantage of Docker layer caching.
# Only the project files are copied here; source code follows after restore.
COPY Service/src/Api/Api.csproj                           Service/src/Api/
COPY Service/src/Application/Application.csproj           Service/src/Application/
COPY Service/src/Domain/Domain.csproj                     Service/src/Domain/
COPY Service/src/Infrastructure/Infrastructure.csproj     Service/src/Infrastructure/

# Restore dependencies
RUN dotnet restore Service/src/Api/Api.csproj

# Copy the rest of the source (tests excluded — not needed in the image)
COPY Service/src/ Service/src/

# Publish in Release mode
RUN dotnet publish Service/src/Api/Api.csproj \
    --configuration Release \
    --no-restore \
    --output /app/publish

# ─── Runtime Stage ────────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app

# Copy published output from build stage
COPY --from=build /app/publish .

# Listen on HTTP only — TLS termination is handled by a reverse proxy or
# the docker-compose network boundary.
ENV ASPNETCORE_URLS=http://+:7001
ENV ASPNETCORE_ENVIRONMENT=Production

EXPOSE 7001

ENTRYPOINT ["dotnet", "Api.dll"]
