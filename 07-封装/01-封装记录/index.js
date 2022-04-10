/**
 * 案例一
 */
// const organization = { name: "Acme Gooseberries", country: "GB" };
// function getRawDataOfOrganization() {
//   return organization;
// }

// result += `<h1>${getRawDataOfOrganization().name}</h1>`;
// getRawDataOfOrganization().name = newName;

// 2
class Organization {
  constructor(data) {
    this._data = data;
    this._name = data.name;
    this._country = data.country;
  }

  set name(newName) {
    this.name = newName;
  }

  get name() {
    return this.name;
  }

  set country(aCountryCode) {
    this.country = aCountryCode;
  }

  get country() {
    return this.country;
  }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});
// function getRawDataOfOrganization() {
//   return organization._data;
// }
function getOrganization() {
  return organization;
}

result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = newName;

/**
 * 案例二
 */
const json = {
  1920: {
    name: "martin",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
        // remaining months of the year
      },
      2015: {
        1: 70,
        2: 63,
        // remaining months of the year
      },
    },
  },
  38673: {
    name: "neal",
    id: "38673",
    // ...
  },
};

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month]
  }
}
const customerData = new CustomerData(json);

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData.rawData;
}

function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

// update
// getRawDataOfCustomers()[customerID].usages[year][month] = amount;
getCustomerData().setUsage(customerID, year, month, amount)

// read
function compareUsage(customerID, laterYear, month) {
  // const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const later = getRawDataOfCustomers().usage(customerID, laterYear, month)
  const earlier =
    getRawDataOfCustomers().usage(customerID, laterYear - 1, month)
  return { laterAmount: later, change: later - earlier };
}


