import { Request, Response } from "express";
import { DeleteRestaurantUseCase } from "./DeleteRestaurantUseCase";


class DeleteRestaurantController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { restaurantId } = req.query;

    const deleteRestaurantUseCase = new DeleteRestaurantUseCase();
    await deleteRestaurantUseCase.execute(restaurantId ? String(restaurantId) : '');
    return res.sendStatus(204);
  }
}


export { DeleteRestaurantController };