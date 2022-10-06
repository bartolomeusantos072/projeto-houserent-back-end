import { User,Service } from "@prisma/client";


export type CreateUserData = Omit<User,"id">
export type CreateService = Omit<Service,"id">

