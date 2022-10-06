import bcrypt from 'bcrypt';

import { prisma } from "../../src/database";

export type CreateUserData = Omit<User, "id">;

export default async function userFactory(user: CreateUserData) {
  return prisma.user.create({
    data: {
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    },
  });
}
