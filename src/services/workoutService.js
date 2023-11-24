const { v4: uuid } = require('uuid');
const Workout = require('../database/Workout');

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts
}

const getOneWorkout = () => {
    return
}

const createWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString('en-US', { timezone: 'UTC'} ),
        updatedAt: new Date().toLocaleString('en-US', { timezone: 'UTC'} ),
    }

    const createdWorkout = Workout.createNewWorkout(workoutToInsert)
    return createdWorkout
}

const updateWorkout = () => {
    return
}

const deleteWorkout = () => {
    return
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
};
