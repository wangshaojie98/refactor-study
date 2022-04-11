/**
 * example 1
 */
class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

// client
const orders = [1,2,3,4,5,6,7,8,9,10,11].map(function(priority) {
  return new Order({ priority })
})
const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
