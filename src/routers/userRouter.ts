import { Request, Response, Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { signIn,signUp } from "../schemas/userSchema";
import * as userController from "../controllers/userController";

const userRouter = Router();

userRouter.post("/signup",validateSchemaMiddleware(signUp), userController.signUp );

userRouter.post("/signin",validateSchemaMiddleware(signIn), userController.signIn );


export default userRouter;
