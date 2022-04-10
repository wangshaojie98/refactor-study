class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  get courses() {
    return this._courses;
  }

  set courses(aList) {
    this._courses = aList;
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
}

// read
const numAdvancedCourses = aPerson.courses.filter(
  (item) => item.isAdvanced
).length;

// client
const basicCourseNames = readBasicCourseNames(filename);

aPerson.courses = basicCourseNames.map(name => new Course(name, false))
for (const name of readBasicCourseNames(filename)) {
  aPerson.courses.push(new Course(name, false))
}