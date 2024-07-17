import request from "supertest";

import express from "express";
import router from "../../route";
import { users } from "../../model/user";

describe("User Integration Test Suite", () => {
  const app = express();
  app.use(router);
  app.use(express.json());

  describe("createUser API Test", async () => {
    it("Should create a new user", async () => {
      const response = await request(app).post("/users").send({
        // id: "1",
        name: "user integration Test",
        email: "user1@test.com",
        password: "Test1234*131",
      });
      console.log("users", users);
    });
  });
});
