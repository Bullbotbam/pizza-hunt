const router = require('express').Router();
const {
	getAllPizza,
	getPizzaById,
	createPizza,
	updatePizza,
	deletePizza,
} = require('../../controllers/pizza-controller');
// set up GET all and POST at /api/pizzas
router.route('/').get(getAllPizza).post(createPizza);

//set up GET on, PUT and DELETE at /api/pizzas/:id
router.route('/').get(getPizzaById).put(updatePizza).delete(deletePizza);

module.exports = router;
