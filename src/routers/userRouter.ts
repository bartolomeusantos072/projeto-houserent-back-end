import { Request, Response, Router } from "express";
// import userController from "../controllers/userController.js";
// import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
// import { userSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post("/sign-up", (req:Request,res:Response)=>{
    console.log(req.body);
});

userRouter.post("/sign-up", (req:Request,res:Response)=>{
    console.log(req.body);
});


export default userRouter;
