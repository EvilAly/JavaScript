/**
 * Week 9: Objects
 *
 * Your task is to populate this object with properties, a function, and getters and setters in order to represent a color.
 * Follow the comments of this file to complete the assignment.
 */
let color = {
  // STEP 1: Here, create the following 3 object properties and initialize them to zero:
  //  _red
  //  _green
  //  _blue
  _red: 0,
  _green: 0,
  _blue: 0,

  /**
   * Step 2: Here, complete the function that tests a given red/green/blue color value.
   *  This function will be used in our setters to test the input given.
   *
   *  IMPORTANT: A valid red/green/blue value is between 0 and 255
   */
  isValidColorValue: function (testColor) {
    // You code here: return whether or not "testColor" is a valid red/green/blue color value
    if (testColor > 255 || testColor < 0) {
      return false;
          }
    else {
      return true;
    }

  },


  /**
   * Step 3:
   * Here, create a getter and setter called "red" for the "hidden" _red color value
   *
   * Use the isValidColorValue() function above to test the potential new value for _red. If it's invalid, log a warning to the console. Otherwise, set _red to its new value.
   */
  get red() {
    console.log("Returning color" + this._red);
    return this._red;
    
  },

  set red(value) {
    let valid = this.isValidColorValue(value);
    if (valid) {
      this._red = value;
      console.log("Red has been set.");
    } else {
      console.log("This is not a valid color value.")
    }
  },



  /**
   * Step 4:
   * Here, create a getter and setter called "green" for the "hidden" _green color value
   *
   * Use the isValidColorValue() function above to test the potential new value for _green. If it's invalid, log a warning to the console. Otherwise, set _green to its new value.
   */
  get green() {
    console.log("Returning color" + this._green);
    return this._green;
  },

  set green(value) {
    let valid = this.isValidColorValue(value);
    if (valid) {
      this._green = value;
      console.log("Green has been set.");
    } else {
      console.log("This is not a valid color value.")
    }
  },

  /**
   * Step 5:
   * Here, create a getter and setter called "blue" for the "hidden" _blue color value
   *
   * Use the isValidColorValue() function above to test the potential new value for _blue. If it's invalid, log a warning to the console. Otherwise, set _blue to its new value.
   */

   get blue() {
    console.log("Returning color" + this._blue);

    return this._blue;
  },

   set blue(value) {
    let valid = this.isValidColorValue(value);
    if (valid) {
      this._blue = value;
      console.log("Blue has been set.");
    } else {
      console.log("This is not a valid color value.")
    }
  }
};
