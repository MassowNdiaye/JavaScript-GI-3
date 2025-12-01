// Request breakdown:
// Implement an exercise of the day feature. Implement logic to update the system so it reflects the exercise assigned for that day. Must be a closure.

// Solution:
// - Create an outer function.
// - Create an empty variable.
// - Create an inner function.
// - Return the inner function, which takes the new exercise and updates the daily exercise.

//Outer Function
function dailyExercise() {
  let exerciseType = "";

  // Inner Function
  return function (newExercise) {
    exerciseType = newExercise;
    return `Today's exercise ${exerciseType}`;
  };
}

const exercise = dailyExercise();

console.log(exercise("Runnig"));
console.log(exercise("Swimming"));
console.log(exercise("Dancing"));
console.log(exercise("Fencing"));
