import { Router } from 'express';
import { DeleteRestaurantController } from '../useCases/deleteRestaurant/DeleteRestaurantController';
import { CreateDishController } from '../useCases/createDish/CreateDishController';
import { CreateRestaurantController } from '../useCases/createRestaurant/CreateRestaurantController';
import { ListRestaurantsController } from '../useCases/listRestaurants/ListRestaurantsController';

const router = Router();

const listRestaurantsController = new ListRestaurantsController();
const createRestaurantController = new CreateRestaurantController();
const createDishController = new CreateDishController();
const deleteRestaurantController = new DeleteRestaurantController()

router.get('/', listRestaurantsController.handle);
router.post('/', createRestaurantController.handle);
router.post('/:restaurantId/dish', createDishController.handle);
router.delete('/:restaurantId', deleteRestaurantController.handle)

export default router;