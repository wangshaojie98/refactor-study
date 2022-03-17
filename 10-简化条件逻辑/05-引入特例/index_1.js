/**
 * 客户端没有更新操作
 */
// class Site
class Site {
  get customer() {
    return (this._customer === "unknown")
      ? createUnKnownCustomer() 
      : this._customer;
  }
}
// 使用字面量代替了未知用户类的作用
function createUnKnownCustomer() {
  return { 
    isUnknown: true,
    name: "occupant",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0
    }
  };
}

function isUnknown(arg) {
  return arg.isUnknown
}

// class Customer
class Customer {
  get name() {}

  get billingPlan() {}

  set billingPlan(billingPlan) {}

  get paymentHistory() {}

  get isUnknown() {
    return false;
  }

}

let site = new Site();
const aCustomer = site.customer;

// client code one
function clientCodeOne() {
  // a lots of intervening code...
  const customerName = aCustomer.name;
  // if (aCustomer === "unknown") {
  //   customerName = "occupant"
  // } else {
  //   customerName = aCustomer.name
  // }
  // if (isUnknown(aCustomer)) {
  //   customerName = "occupant"
  // } else {
  //   customerName = aCustomer
  // }
}

// client code two
function clientCodeTwo() {
  // const plan = isUnknown(aCustomer) 
  //   ? registry.billingPlans.basic
  //   : aCustomer.billingPlan

  const plan = aCustomer.billingPlan
}

// client code four
function clientCodeFour() {
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear
}