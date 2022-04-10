// example 1
function setHeight(value) {
  this._height = value;
}

function setWidth(value) {
  this._width = value;
}

// example 2
function regularBookConcert(aCustomer) {
  // logic for regular booking
}
function premiumBookConcert(aCustomer) {
  // logic for premium booking
}

// example 3
function rushDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeleveryDate(anOrder) {
  let deliveryTime;
  if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
  else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
  else deliveryTime = 4;
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}
aShipment.deliveryDate = rushDeliveryDate(anOrder);
aShipment.deliveryDate = regularDeleveryDate(anOrder);

// example 4 内部比较复杂的判断逻辑
function rushDeliveryDate(anOrder) {
  deliveryDate(anOrder, true)
}

function regularDeleveryDate(anOrder) {
  deliveryDate(anOrder, false)
}
aShipment.deliveryDate = rushDeliveryDate(anOrder);
aShipment.deliveryDate = regularDeleveryDate(anOrder);