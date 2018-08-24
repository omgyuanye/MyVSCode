// --------------------class---------------------
/*
Let's put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education.
The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary, middle, and high schools.
Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:
*/
/*
---School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
---Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
---Middle
Does not include any additional properties or methods
---High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
*/
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = ['primary', 'middle', 'high'];
    this._numberOfStudents = 0;
  }
  get name() {
    this._name = name;
  }
  get level() {
    this._level = level;
  }
  get numberOfStudents() {
    this._numberOfStudents = numberOfStudents;
  }
  set numberOfStudents(numberOfStudentsCheck) {
    if (typeof numberOfStudentsCheck === 'number') {
      this._numberOfStudents = numberOfStudentsCheck;
    } else {
      return 'Invalid input: numberOfStudents must be set to a Number.';
    }
  }
  quickFacts(){
    // SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.
    return console.log(`${name} educates ${this.numberOfStudents} students at the ${this.level} school level`)
  }

  static pickSubstituteTeacher (substituteTeachers) {
    let substituteTeachers = [];
    let substituteTeachersLength = substituteTeachers.length;
    let substituteTeachersIndex = Math.floor(Math.random() * substituteTeachersLength);
    return substituteTeachers[substituteTeachersIndex];
  }
};
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    this._level = 'Primary';
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
};
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, numberOfStudents);
    this.level = 'High';
    this._sportsTeams = [];
  }
  get sportsTeams() {
    // A getter for the sportsTeams array. The getter should log all of the sports to the console.
    console.log(this._sportsTeams);
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
PrimarySchool.quickFacts();

