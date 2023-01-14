const Goal = require('../models/goals');

const getGoals = async (user_id) => {
    const goals = await Goal.find({user: user_id});
    return goals;
}

const createGoal = async (goal) => {
    const createdGoal = await Goal.create(goal);
    return createdGoal;
}

const updateGoal = async (id, goal) => {
    const updatedGoal = await Goal.findByIdAndUpdate(id, goal, {new: true});
    return updatedGoal;
}

const deleteGoal = async (id) => {
    const deletedGoal = await Goal.findByIdAndDelete(id);
    return deletedGoal;
}

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}