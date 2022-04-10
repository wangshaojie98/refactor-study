/**
 * 案例一
 */
const organization = { name: "Acme Gooseberries", country: "GB" };

result += `<h1>${organization.name}</h1>`;
organization.name = newName;

/**
 * 案例二：封装嵌套的记录
 */
const customerData = {
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

// update
customerData[customerID].usages[year][month] = amount;

// read
function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}
