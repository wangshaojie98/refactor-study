class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }
  /**
   * 返回副本的原因是调用方万一直接修改course，
   * 比如aPerson.courses.push(new Course(name, false)
   * 这样会发现数据没有更新，从而必须使用aPerson.addCourse()
   */
  get courses() {
    return this._courses.slice();
  }

  set courses(aList) {
    this._courses = aList.slice();
  }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError()}) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

// client
const basicCourseNames = readBasicCourseNames(filename);

aPerson.courses = basicCourseNames.map(name => new Course(name, false))
for (const name of readBasicCourseNames(filename)) {
  aPerson.addCourse(new Course(name, false))
}