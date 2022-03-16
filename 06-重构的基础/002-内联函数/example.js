// 优化前
function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}
function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}
// 优化后
function getRating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  
  return lines;
}
function gatherCustomerData(out, aCustomer) {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}


function reportLines(aCustomer) {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);

  return lines;
}