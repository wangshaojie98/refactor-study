class Person {
  constructor(name, id) {
    this._id = id;
    this._name = name;
  }
  get name() { return this._name }
  get id() { return this._id }

}

const martin = new Person('martin', '123');