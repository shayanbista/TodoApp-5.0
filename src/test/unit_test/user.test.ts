import sinon from "sinon";
import { add, getUserById } from "../../service/user";
import expect from "expect";
import * as userModel from "../../model/user";
import { BadRequestError } from "../../error/BadRequestError";
describe("User Service Test Suite", () => {
  describe("add", () => {
    it("Should return the sum of two numbers", () => {
      const output = add(1, 2);
      expect(output).toBe(3);
    });
  });
  describe("getUserById", () => {
    let userModelGetUserByIdStub: sinon.SinonStub;
    beforeEach(() => {
      userModelGetUserByIdStub = sinon.stub(userModel, "getUserById");
    });
    afterEach(() => {
      userModelGetUserByIdStub.restore();
    });
    it("Should throw error when user is not found", () => {
      userModelGetUserByIdStub.returns(undefined);
      expect(() => getUserById(100)).toThrow(
        new BadRequestError("User with this Id does not exist")
      );
    });
    it("Should return user idf user is found", () => {
      const user = {
        id: "1",
        name: "Test",
        email: "test@test.com",
        password: "test1234",
        permissions: [],
      };
      userModelGetUserByIdStub.returns(user);
      const response = getUserById(1);
      expect(response).toStrictEqual(user);
    });
  });
  describe("createUser", () => {
    let bcryptHashStub: sinon.SinonStub;
    let userModelCreateUserStub: sinon.SinonStub;
    beforeEach(() => {
      bcryptHashStub = sinon.stub();
      userModelCreateUserStub = sinon.stub(userModel, "createUser");
    });
    afterEach(() => {
      bcryptHashStub.restore();
      userModelCreateUserStub.restore();
    });
  });
});
