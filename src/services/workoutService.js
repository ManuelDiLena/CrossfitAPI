const Workout = require('../database/Workout');

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts
}

const getOneWorkout = () => {
    return
}

const createWorkout = () => {
    return
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
