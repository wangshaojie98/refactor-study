let defaultOwner = {
  firstName: 'wang',
  lastName: 'sj'
};


let defaultOwnerData = {
  firstName: 'wang',
  lastName: 'sj'
};

export function defaultOwner() {
  return defaultOwnerData
}

export function setDefaultOwner(arg) {
  return defaultOwnerData = arg;
}