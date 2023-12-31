import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../app.js";
describe("GET /", () => {
    it("responds with a welcome message", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Welcome to Todoist Server API" });
    });
});
describe("404 handler", () => {
    it("responds with a 404 status code for unknown routes", async () => {
        const response = await request(app).get("/some-unknown-route");
        expect(response.status).toBe(404);
    });
});
describe("Error handler", () => {
    it("responds with a 500 status code and error message", async () => {
        const response = await request(app).get("/test/test-error");
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty("errorMessage");
    });
});
describe("Protected route", () => {
    it.todo("should access protected route when JWT token is valid");
});
