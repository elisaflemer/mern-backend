const express = require('express');
const router = express.Router();
const goalsControllers = require('../controllers/goals')
const goalsValidator = require('../middlewares/goalsValidate')
const authenticate = require('../middlewares/auth')

router.route('/')
            .get(authenticate.protect, goalsControllers.getGoals)
            .post(authenticate.protect, goalsValidator.create, goalsControllers.createGoal);

router.route('/:id')
            .put(authenticate.protect, goalsControllers.updateGoal)
            .delete(authenticate.protect, goalsControllers.deleteGoal);

module.exports = router;