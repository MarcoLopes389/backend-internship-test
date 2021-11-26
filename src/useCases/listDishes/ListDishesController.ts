import { Request, Response } from "express";
import { ListDishesUseCase } from "./ListDishesUseCase";

class ListDishesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { restaurantId } = req.query;

    if(!restaurantId) {
      return res.sendStatus(400)
    }

    const listDishesUseCase = new ListDishesUseCase();
    const dishes = await listDishesUseCase.execute(restaurantId ? String(restaurantId) : '');

    return res.json(dishes);
  }
}


export { ListDishesController };