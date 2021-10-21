import { Router } from "express";
import authMiddleware from "./app/middlewares/authMiddleware";

import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";

const routes = Router();

routes.post('/user', UserController.store);
routes.post('/auth', AuthController.authenticated);
routes.get('/user/:id', authMiddleware, UserController.getById);

export default routes;
