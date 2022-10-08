import {prisma} from "../config/database";


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

export async function findUserAddres(userId:number) {
  return prisma.address.findUnique({
    where:{userId}
  });
}
export async function insert(user:any) {

  const {name, email, password, phone, cellphone,cpf, address} =user;

  const createUser =  await  prisma.user.create({
    data: { name, email, password, phone, cellphone, cpf },
  });


  const addAdress = await insertAdressByIdUser(createUser.id, address)
  
   
}

export async function insertAdressByIdUser(userId:number,address:any){

  return await prisma.address.create({
       data:{
          ...address,
          userId,
       }
    });
}
