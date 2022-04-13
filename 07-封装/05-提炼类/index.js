class TelephoneNumber {
  get areaCode() {
    return this._officeAreaCode;
  }

  set areaCode(arg) {
    this._officeAreaCode = arg
  }

  get number() {
    return this._officeNumber;
  }
  set number(arg) {
    this._officeNumber = arg;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
}

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {
    return this._telephoneNumber.officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.officeAreaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.officeNumber;
  }
  set officeNumber(arg) {
    this._telephoneNumber.officeNumber = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.telephoneNumber;
  }
}