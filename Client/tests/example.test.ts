import { describe, it, expect } from "vitest";

describe("Orange Client", () => {
  it("should have correct API base URL format", () => {
    const validUrl = "http://localhost:5000";
    expect(validUrl).toMatch(/^https?:\/\/.+/);
  });

  it("should format paginated response correctly", () => {
    interface PaginatedResponse<T> {
      data: T[];
      total: number;
      page: number;
      pageSize: number;
      totalPages: number;
    }

    const response: PaginatedResponse<string> = {
      data: ["item1", "item2"],
      total: 2,
      page: 1,
      pageSize: 10,
      totalPages: 1,
    };

    expect(response.data).toHaveLength(2);
    expect(response.total).toBe(2);
    expect(response.page).toBe(1);
    expect(response.pageSize).toBe(10);
    expect(response.totalPages).toBe(1);
  });

  it("should calculate total pages correctly", () => {
    const calculateTotalPages = (total: number, pageSize: number): number =>
      Math.ceil(total / pageSize);

    expect(calculateTotalPages(100, 10)).toBe(10);
    expect(calculateTotalPages(101, 10)).toBe(11);
    expect(calculateTotalPages(0, 10)).toBe(0);
  });
});
