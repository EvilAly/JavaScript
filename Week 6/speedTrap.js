/**
 * ADD FUNCTION COMMENTS HERE
 Declares the speed limit and how fast you can go to avoid getting a ticket
 */
function speedTrap() {
  // Declare two variables
  // - a speed limit
  const speedLimit = 55;
  // - a speed limit "fudge factor". I.e. a number to increase the speed limit by that won't get you a ticket (just a warning)
  const fudgeFactor = (speedLimit + 8);


  /**
   * ADD FUNCTION COMMENTS HERE
   * Return an enclosed function for checking a vehicle's speed against the speed limit (and fudge factor)
   */
  return function (currentSpeed) {
    // Using the log, error, and warn console functions, complete the following operations:
    //  - if the vehicle speed is less than or equal to the speed limit, log a "everything's ok" message to the console
    if (currentSpeed <= speedLimit) {
      console.log("Everything's ok.");
    }
    //  - if the vehicle speed is within the speed "fudge factor" range, put a warning message in the console
    else if (currentSpeed > speedLimit && currentSpeed <= fudgeFactor) {
      console.warn("just a warning");
    }
    //  - if the vehicle speed is above the fudge factor, put an error in the console that they're getting a ticket
    else if (currentSpeed > fudgeFactor) {
      console.error("you're speeding!");
    }

  };
}
