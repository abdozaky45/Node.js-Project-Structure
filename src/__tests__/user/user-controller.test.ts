import { UserService } from "../../services/user/user-service";
import { UserRepository } from "../../repositories/user/user";
import Iuser from "../../models/user/Iuser-model";

describe("UserService", () => {
  let userService: UserService;
  let mockUserRepository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    mockUserRepository = {
      createUser: jest.fn(),
    } as unknown as jest.Mocked<UserRepository>;

    userService = new UserService(mockUserRepository);
  });

  it("should call userRepository.createUser with the correct data", async () => {
    const userData: Iuser = {
      name: "Abdo",
      email: "abdo@test.com",
      password: "123456",
    };

    const expectedUser = { ...userData, _id: "fake-id-123" };

    mockUserRepository.createUser.mockResolvedValue(expectedUser as Iuser);

    const result = await userService.createUser(userData);

    expect(mockUserRepository.createUser).toHaveBeenCalledWith(userData);
    expect(result).toEqual(expectedUser);
  });

  it("should call userRepository.createUser exactly once", async () => {
    const userData: Iuser = {
      name: "Sara",
      email: "sara@test.com",
      password: "654321",
    };

    mockUserRepository.createUser.mockResolvedValue(userData as Iuser);

    await userService.createUser(userData);

    expect(mockUserRepository.createUser).toHaveBeenCalledTimes(1);
  });
});
