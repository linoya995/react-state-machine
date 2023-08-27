import request from "supertest";
import app from "../index";
import "jest";

describe("Payment API Tests", () => {
  // Test: valid input
  it("should pass if input number is greater than 0", async () => {
    const response = await request(app)
      .post("/api/process-payment")
      .send({ amount: 100 });
    expect(response.status).toBe(200);
  });

  // Test: negative
  it("should fail if input number is not greater than 0", async () => {
    const response = await request(app)
      .post("/api/process-payment")
      .send({ amount: -50 });
    expect(response.status).not.toBe(200);
  });

  // Test: invalid amount
  it("should fail with invalid input", async () => {
    const response = await request(app)
      .post("/api/process-payment")
      .send({ amount: "invalid" });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid input");
  });

  // Test: missing field
  it("should fail without amount field", async () => {
    const response = await request(app).post("/api/process-payment").send({});

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Amount field is required");
  });

  // Test: zero amount
  it("should fail with zero amount", async () => {
    const response = await request(app)
      .post("/api/process-payment")
      .send({ amount: 0 });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Amount must be greater than 0");
  });
});
