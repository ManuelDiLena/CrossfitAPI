const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts()
    res.send({ status: 'OK', data: allWorkouts })
}

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout(req.params.workoutId)
    res.send(`Get workout ${req.params.workoutId}`)
}

const createWorkout = (req, res) => {
    const createdWorkout = workoutService.createWorkout(req.params.workoutId)
    res.send(`Create workout ${req.params.workoutId}`)
}

const updateWorkout = (req, res) => {
    const updatedWorkout = workoutService.getAllWorkouts(req.params.workoutId)
    res.send(`Update workout ${req.params.workoutId}`)
}

const deleteWorkout = (req, res) => {
    workoutService.getAllWorkouts(req.params.workoutId)
    res.send(`Delete workout ${req.params.workoutId}`)
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
};