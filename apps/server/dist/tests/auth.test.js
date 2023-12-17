import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import app from "../app.js";
vi.mock("jsonwebtoken", async (importOriginal) => {
    const originalModule = await importOriginal();
    return {
        default: {
            ...originalModule,
            sign: vi.fn().mockReturnValue("MockJwtToken"),
        },
    };
});
vi.mock("../database/utils.js", async (importOriginal) => {
    const originalModule = await importOriginal();
    return {
        ...originalModule,
        createUser: vi.fn(),
        getUserById: vi.fn(),
        getUserByEmail: vi.fn(),
    };
});
vi.mock("../lib/auth.js", async (importOriginal) => {
    const mod = await importOriginal();
    return {
        ...mod,
        hashPassword: vi.fn(),
        checkUserPassword: vi.fn(),
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
                .mockRejectedValue(new Error("Cannot create user, email address is already registered."));
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
    describe("POST  /auth/login", () => {
        it("should log in successfully and return user data and JWT token", async () => {
            const originalDbUtilsImport = await import("../database/utils.js");
            const expectedDbResponse = {
                id: 1,
                email: "matt@test.com",
                hashedPassword: "$2b$10$sMr/3vuq3hd.KLHnBqgX0.Q2oEFlavNuEuo21M2rhaupXf8OwJUyq",
                fullName: "Matt Bw",
                usageMode: 0,
                teamAccount: 1,
                createdAt: "2023-12-17T08:52:15.000Z",
                updatedAt: "2023-12-17T08:52:15.000Z",
            };
            originalDbUtilsImport.getUserByEmail = vi
                .fn()
                .mockReturnValue(expectedDbResponse);
            const originalAuthUtilsImport = await import("../lib/auth.js");
            originalAuthUtilsImport.checkUserPassword = vi.fn().mockReturnValue(true);
            const response = await request(app).post("/auth/login").send({
                email: "matt@test.com",
                password: "tester123",
            });
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                id: 1,
                email: "matt@test.com",
                fullName: "Matt Bw",
                usageMode: "personal",
                teamAccount: "yes",
                createdAt: "2023-12-17T08:52:15.000Z",
                updatedAt: "2023-12-17T08:52:15.000Z",
                message: "Log in successful",
                jwtToken: "MockJwtToken",
            });
        });
        it("should not login if email is missing", async () => {
            const response = await request(app).post("/auth/login").send({
                password: "tester123",
            });
            expect(response.status).toBe(400);
            expect(response.body).toEqual({
                errorMessage: "Log in error, email is missing",
            });
        });
        it("should not login if password is missing", async () => {
            const response = await request(app).post("/auth/login").send({
                email: "matt@test.com",
            });
            expect(response.status).toBe(400);
            expect(response.body).toEqual({
                errorMessage: "Log in error, password is missing",
            });
        });
        it("should not log in if user is not in database", async () => {
            const originalDbUtilsImport = await import("../database/utils.js");
            originalDbUtilsImport.getUserByEmail = vi.fn().mockReturnValue(null);
            const response = await request(app).post("/auth/login").send({
                email: "matt@test.com",
                password: "tester123",
            });
            expect(response.status).toBe(401);
            expect(response.body).toEqual({
                errorMessage: "Log in error, no such user",
            });
        });
        it("should not log in user if the wrong password is provided", async () => {
            const originalDbUtilsImport = await import("../database/utils.js");
            const expectedDbResponse = {
                id: 1,
                email: "matt@test.com",
                hashedPassword: "$2b$10$sMr/3vuq3hd.KLHnBqgX0.Q2oEFlavNuEuo21M2rhaupXf8OwJUyq",
                fullName: "Matt Bw",
                usageMode: 0,
                teamAccount: 1,
                createdAt: "2023-12-17T08:52:15.000Z",
                updatedAt: "2023-12-17T08:52:15.000Z",
            };
            originalDbUtilsImport.getUserByEmail = vi
                .fn()
                .mockReturnValue(expectedDbResponse);
            const originalAuthUtilsImport = await import("../lib/auth.js");
            originalAuthUtilsImport.checkUserPassword = vi
                .fn()
                .mockReturnValue(false);
            const response = await request(app).post("/auth/login").send({
                email: "matt@test.com",
                password: "wrongPassword",
            });
            expect(response.status).toBe(401);
            expect(response.body).toEqual({
                errorMessage: "Log in error, wrong password",
            });
        });
    });
});
