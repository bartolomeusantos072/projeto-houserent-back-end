import { User,Service, Driver, House } from "@prisma/client";


export type CreateUserData = Omit<User,"id">
export type CreateService = Omit<Service,"id">
export type CreateDriver = Omit<Driver, "id">
export type createHouseRent = Omit<House,"id">