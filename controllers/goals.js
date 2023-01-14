const { validationResult } = require('express-validator');

const goalServices = require('../services/goals');

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = async (req, res) => {
    const goals = await goalServices.getGoals(req.user_id);
    return res.status(200).json({message: goals})
}

// @desc Create goals
// @route POST /api/goals
// @access Private
const createGoal = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const goal = {
        text: req.body.text,
        user: req.user_id
    }
    const createdGoal = await goalServices.createGoal(goal);
    return res.status(201).json({message: createdGoal});
}

const updateGoal = async (req, res) => {
    const updatedGoal = await goalServices.updateGoal(req.params.id, req.body)
    return res.status(201).json({message: updatedGoal});
}

const deleteGoal = async (req, res) => {
    const deletedGoal = await goalServices.updateGoal(req.params.id);
    return res.status(204).json({message: deletedGoal})
}

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}