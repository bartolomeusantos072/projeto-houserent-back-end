import {prisma} from "../config/database";
import { CreateUserData } from "../utils/typeUtils";


export async function findUserEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function findById(id: number) {
  return prisma.user.findUnique({
    where: { id }
  });
}

export async function insert(user: CreateUserData) {
  return prisma.user.create({
    data: user,
  });
}
