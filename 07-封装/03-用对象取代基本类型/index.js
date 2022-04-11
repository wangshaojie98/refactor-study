class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  get priorityString() {
    return this._priority.toString();
  }

  get priority() {
    return this._priority;
  }

  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this._value = value;
    else throw new Error(`<${value}> is invalid for Priority`);
  }

  toString() {
    return this._value;
  }
  /**
   * 字符串比大小的话，可以创建一个字符串从小到大的数组，利用下标对比
   */
  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }

  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }

  equals(other) {
    return this._index === other._index;
  }

  higherThan(other) {
    return this._index > other._index;
  }

  lowerThan(other) {
    return this._index < other._index;
  }
}

// client
const orders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (priority) {
  return new Order({ priority });
});

let highPriorityCount = orders.filter(
  (o) => "high" === o.priority.toString() || "rush" === o.priority.toString()
).length;

highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("normal")))                           .length