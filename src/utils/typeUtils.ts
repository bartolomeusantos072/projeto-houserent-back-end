import { User,Service, Driver, House, AddressHouse, PhotosHouse } from "@prisma/client";


export type CreateUserData = Omit<User,"id">
export type CreateService = Omit<Service,"id">
export type CreateDriver = Omit<Driver, "id">
export type CreateHouse = Omit<House,"id"|"proprietaryId">
export type CreateAddressHouse = Omit<AddressHouse,"id">
export type AddPhotoHouse = Omit<PhotosHouse,"id">