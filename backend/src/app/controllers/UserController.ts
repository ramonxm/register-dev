import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";

class UserController {
  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return res.sendStatus(409);
    }

    const user = repository.create({ email, password });
    await repository.save(user)
    
    return res.json(user);
  };

  async getById(req: Request, res: Response) {
    const repository = getRepository(User);
    const { id } = req.params;
  
    const userExists = await repository.findOne({ where: { id } })

    if(!userExists) {
      return res.sendStatus(404);
    };

    delete userExists.password;

    const user = userExists;

    return res.json(user);
  };
};

export default new UserController();