import { User,Service, Driver } from "@prisma/client";


export type CreateUserData = Omit<User,"id">
export type CreateService = Omit<Service,"id">
export type CreateDriver = Omit<Driver, "id">
