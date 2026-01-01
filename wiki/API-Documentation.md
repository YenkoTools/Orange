# API Documentation

This page documents the API endpoints available in the Orange Service.

## Base URL

Development: `http://localhost:5001`

## Authentication

🚧 **Coming Soon** - Authentication and authorization will be implemented in future releases.

## Endpoints

### Health Check

#### GET `/health`
Returns the health status of the API.

**Response:**
```json
{
  "status": "healthy"
}
```

**Status Codes:**
- `200 OK` - Service is healthy
- `503 Service Unavailable` - Service is unhealthy

---

### Weather Forecast

#### GET `/weatherforecast`
Returns a sample weather forecast.

**Response:**
```json
[
  {
    "date": "2025-01-01",
    "temperatureC": 25,
    "temperatureF": 76,
    "summary": "Warm"
  }
]
```

**Status Codes:**
- `200 OK` - Success

---

## OpenAPI / Swagger

The API includes OpenAPI documentation support. When running in Development mode, you can access:

🚧 **Coming Soon:**
- Swagger UI: `http://localhost:5001/swagger`
- OpenAPI Spec: `http://localhost:5001/openapi/v1.json`

## API Versioning

🚧 **Coming Soon** - API versioning will be implemented in future releases.

## Rate Limiting

🚧 **Coming Soon** - Rate limiting will be implemented in future releases.

## Error Responses

Standard error response format:

```json
{
  "type": "https://tools.ietf.org/html/rfc9110#section-15.5.1",
  "title": "Bad Request",
  "status": 400,
  "errors": {
    "field": ["Error message"]
  }
}
```

## Common Status Codes

- `200 OK` - Request succeeded
- `201 Created` - Resource created successfully
- `204 No Content` - Request succeeded with no response body
- `400 Bad Request` - Invalid request data
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## Testing the API

### Using curl

```bash
# Health check
curl http://localhost:5001/health

# Weather forecast
curl http://localhost:5001/weatherforecast
```

### Using the HTTP File

The project includes an HTTP file for testing:
```
src/Api/Api.http
```

Use the REST Client extension in VS Code to execute requests directly from this file.

## Future Endpoints

As the project evolves, additional endpoints will be documented here:

- User management
- Resource CRUD operations
- Search and filtering
- Batch operations

---
*Maintained by Hallcrest Engineering*
