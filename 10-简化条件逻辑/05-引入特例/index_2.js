/**
 * 来自接口的数据
 * 
 * 
{
  name: "Acme Boston",
  location: "Malden MA",
  // more site details
  customer: {
    name: "Acme Industries",
    billingPlan: "plan-451",
    paymentHistory: {
      weeksDelinquentInLastYear: 7
      //more
    },
    // more
  }
}
 */

const json = {
  name: "Acme Boston",
  location: "Malden MA",
  // more site details
  customer: {
    name: "Acme Industries",
    billingPlan: "plan-451",
    paymentHistory: {
      weeksDelinquentInLastYear: 7
      //more
    },
    // more
  }
}
 
function enrichSite(aSite) {
  const result = _.cloneDeep(aSite);

  const unkonwnCustomer = {
    isUnknown: true,
    name: "unknown",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0
    }
  }

  if (isUnknown(result.customer)) {
    result.customer = unkonwnCustomer
  } else {
    result.customer.isUnknown = false
  }

  return result
}

function isUnknown(aCustomer) {
  if (aCustomer === "unknown") return true;

  return aCustomer.isUnknown
}

const rawSite = json;
const site = enrichSite(rawSite);
const aCustomer = site.customer

function clientCodeOne() {
  // a lots of intervening code...
  const customerName = aCustomer.name;
  // if (isUnknown(aCustomer)) {
  //   customerName = "occupant"
  // } else {
  //   customerName = aCustomer.name
  // }
}

// client code two
function clientCodeTwo() {
  // const plan = (aCustomer === "unknown") 
  //   ? registry.billingPlans.basic 
  //   : aCustomer.billingPlan

  const plan = aCustomer.billingPlan
}

// client code four
function clientCodeFour() {
  // const weeksDelinquent = (aCustomer === "unknown") 
  //   ? 0 
  //   : aCustomer.paymentHistory.weeksDelinquentInLastYear

  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear
}
