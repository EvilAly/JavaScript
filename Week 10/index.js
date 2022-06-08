/**
 * Person
 *
 * Represents a person with first name, last name, and age properties
 */
class Person {
  /**
   * Initialize the properties of this person
   *
   * @param {String} firstName - The person's first name
   * @param {String} lastName - The person's last name
   * @param {String} age - The person's age
   */

  

  constructor(firstName, lastName, age) {
    // Here, define and intilize three class properties to the firstName, lastName, and age arguments in this constructor
    //  HINT: don't forget about "this"
    // (your code here…)
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

  }

  /**
   * Generate this person's full name based on their first and last name.
   */
  get fullName() {
    // Here, return a string that contains this peron's first and last name combined
    // together to create their full name (separated by a space)
    //  For example, if firstName is "Joe" and lastName is "Smith", the full name would be "Joe Smith"
    // (your code here…)
    return this.firstName + " " + this.lastName;
  }

  /**
   * Returns a greeting statement based on this peron's attributes.
   */
  sayGreeting() {
    // Here, return a greeting to introduce this person based on their full name and their age,
    // referncing this class's fullName getter and the age property.
    //   Example: "Hello my name is Joe Smith and I am 41 years old."
    // (your code here…)

    return "Hello my name is " + this.fullName + " and I am " + this.age + " years old.";

  }
}
