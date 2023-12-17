import request from "supertest";
import { describe, expect, it, vi } from "vitest";

import app from "../app.js";

import("../database/utils.js");

vi.mock("../database/utils.js", async (importOriginal) => {
  const originalModule: any = await importOriginal();
  return {
    ...originalModule,
    createUser: vi.fn(),
    getUserById: vi.fn(),
  };
});

describe("Auth routes", () => {
  describe("POST /auth/signup", () => {
    it("should sign up successfully and return user data without the password", async () => {
      const expectedUserDbResponse = {
        message: "Sign up successful",
        id: 1,
        email: "matt@test.com",
        fullName: "Matt Bw",
        usageMode: 0,
        teamAccount: 1,
        createdAt: "2023-12-17T05:35:50.000Z",
        updatedAt: "2023-12-17T05:35:50.000Z",
      };

      const originalImport = await import("../database/utils.js");
      originalImport.createUser = vi
        .fn()
        .mockResolvedValue(expectedUserDbResponse);

      const response = await request(app).post("/auth/signup").send({
        email: "matt@test.com",
        password: "tester123",
        fullName: "Matt Bw",
        teamAccount: "true",
        usageMode: "personal",
      });
      expect(response.status).toBe(201);
      expect(response.body).toEqual(expectedUserDbResponse);
    });
  });

  it("should not sign up if email is missing", async () => {
    const response = await request(app).post("/auth/signup").send({
      password: "tester123",
      fullName: "Matt Bw",
      teamAccount: "true",
      usageMode: "personal",
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      errorMessage: "Sign up error. Email is missing",
    });
  });

  it("should not sign up if password is missing", async () => {
    const response = await request(app).post("/auth/signup").send({
      email: "matt@test.com",
      fullName: "Matt Bw",
      teamAccount: "true",
      usageMode: "personal",
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      errorMessage: "Sign up error. Password is missing",
    });
  });

  it("should not sign up if full name is missing", async () => {
    const response = await request(app).post("/auth/signup").send({
      email: "matt@test.com",
      password: "tester123",
      teamAccount: "true",
      usageMode: "personal",
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      errorMessage: "Sign up error. Name is missing",
    });
  });

  it("should not sign up user if email is already in database", async () => {
    const originalImport = await import("../database/utils.js");
    originalImport.createUser = vi
      .fn()
      .mockRejectedValue(
        new Error("Cannot create user, email address is already registered.")
      );

    const response = await request(app).post("/auth/signup").send({
      email: "matt@test.com",
      password: "tester123",
      fullName: "Matt Bw",
      teamAccount: "true",
      usageMode: "personal",
    });
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      errorMessage: "Cannot create user, email address is already registered.",
    });
  });
});
