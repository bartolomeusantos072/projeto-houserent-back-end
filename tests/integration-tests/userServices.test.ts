import app from "../../src/app";
import supertest from "supertest";
import userFactory from "../factories/userFactory";
import { prisma } from "../../src/config/database";


describe('Test User',()=>{
    
  it('create User',async ()=>{
      const signUp = await userFactory.signUp();
      const response= await supertest(app).post("/sign-up").send(signUp)
      expect(response.status).toBe(201);

      const user = await prisma.user.findFirst({
        where:{email: signUp.email}
      })
      expect(user?.email).toBe(signUp.email);
  });
});
