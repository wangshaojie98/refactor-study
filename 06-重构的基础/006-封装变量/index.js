const spaceship = {};
let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

spaceship.owner = defaultOwner;
// 更新
defaultOwner = {firstName: "Rebecca", lastName: "Parsons"}

// 基础封装
function defaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}
// 更新
// defaultOwner = {firstName: "Rebecca", lastName: "Parsons"}
setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"})


/**
 * 封装值
 */
const owner1 = defaultOwner();
const owner2 = defaultOwner();
owner2.lastName = "Parsons";

let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

export function defaultOwner() {
  return {...defaultOwner};
}


/**
 * 封装记录
 */

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }
}