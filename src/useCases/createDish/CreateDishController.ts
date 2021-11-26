import { Request, Response } from "express";
import { CreateDishUseCase } from "./CreateDishUseCase";


class CreateDishController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, price } = req.body;
    const { restaurantId } = req.params;

    const createDishUseCase = new CreateDishUseCase();
    const dish = await createDishUseCase.execute({ name, price, restaurantId });

    return res.status(201).json(dish);
  }
}


export { CreateDishController };