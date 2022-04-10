class Person {
  get name() { return this._name }

  set name(name) { this._name = name}

  get id() { return this._id }

  set id(id) { this._id = id}
}

const martin = new Person();
martin.name = 'martin'
martin.id = '123'