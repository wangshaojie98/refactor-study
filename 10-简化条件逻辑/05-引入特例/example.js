// class Site
class Site {
  get customer() {
    return this._customer;
  }
}

// class Customer
class Customer {
  get name() {}

  get billingPlan() {}

  set billingPlan(billingPlan) {}

  get paymentHistory() {}

}

let site = new Site();
const aCustomer = site.customer;

// client code one
function clientCodeOne() {
  // a lots of intervening code...
  let customerName;
  if (aCustomer === "unknown") {
    customerName = "occupant"
  } else {
    customerName = aCustomer.name
  }
}

// client code two
function clientCodeTwo() {
  const plan = (aCustomer === "unknown") 
    ? registry.billingPlans.basic 
    : aCustomer.billingPlan
}

// client code three
function clientCodeThree() {
  if (aCustomer !== "unknown") {
    let newPlan = "XXXXXX";
    aCustomer.billingPlan = newPlan;
  }
}

// client code four
function clientCodeFour() {
  const weeksDelinquent = (aCustomer === "unknown") 
    ? 0 
    : aCustomer.paymentHistory.weeksDelinquentInLastYear
}