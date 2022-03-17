// class Site
class Site {
  get customer() {
    return (this._customer === "unknown") ? new UnknownCustomer() : this._customer;
  }
}
// 空支付记录
class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}
// 未知的顾客
class UnknownCustomer {
  get isUnknown() {
    return true;
  }

  get name() {
    return 'occupant'
  }

  get billingPlan() {
    return registry.billingPlans.basic;
  }

  set billingPlan(billingPlan) {
    // xxxx
  }

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

// class Customer
class Customer {
  get name() {}

  get billingPlan() {}

  set billingPlan(billingPlan) {}

  get paymentHistory() {
    // xxxxxx
  }

  get isUnknown() {
    return false;
  }
}

function isUnknown(arg) {
  if (!((arg instanceof Customer) || (arg instanceof UnknownCustomer))) {
    throw new Error(`investigate bad value: <${arg}>`)
  }

  return arg === Customer
}

let site = new Site();
const aCustomer = site.customer;

// client code one
function clientCodeOne() {
  
  // a lots of intervening code...
  let customerName = aCustomer.name
}

// client code two
function clientCodeTwo() {
  const plan = aCustomer.billingPlan
}

// client code three
function clientCodeThree() {
  aCustomer.billingPlan = newPlan;
}

// client code four
function clientCodeFour() {
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear
}