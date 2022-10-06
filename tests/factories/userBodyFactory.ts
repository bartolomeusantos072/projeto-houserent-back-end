import { faker } from "@faker-js/faker";
import { prisma } from "../../src/database.js";
export type CreateUserData = Omit<User, "id">;

export default function userBodyFactory(): CreateUserData {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}