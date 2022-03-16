function printOwing(invoice) {  
  let outstanding = 0;

  console.log("***********************");  
  console.log("**** Customer Owes ****");  
  console.log("***********************");

  // calculate outstanding  
  for (const o of invoice.orders) {   
    outstanding += o.amount;  
  }

  // record due date  
  const today = Clock.today;  
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  //print details  
  console.log(`name: ${invoice.customer}`);  
  console.log(`àmount: ${outstanding}`);  
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`); 
}

// 001-无形参，提炼打印
function printOwing(invoice) {  
  let outstanding = 0;
    
  printBanner();

  // calculate outstanding  
  for (const o of invoice.orders) {   
    outstanding += o.amount;  
  }

  // record due date  
  const today = Clock.today;  
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  //print details  
  printDetails();

  function printBanner() {
    console.log("***********************");  
    console.log("**** Customer Owes ****");  
    console.log("***********************");
  }

  function printDetails() {
    console.log(`name: ${invoice.customer}`);  
    console.log(`àmount: ${outstanding}`);  
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }
}


// 002-有形参，提炼打印
function printOwing(invoice) {  
  let outstanding = 0;
    
  printBanner();

  // calculate outstanding  
  for (const o of invoice.orders) {   
    outstanding += o.amount;  
  }

  // record due date  
  const today = Clock.today;  
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  //print details  
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("***********************");  
  console.log("**** Customer Owes ****");  
  console.log("***********************");
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);  
  console.log(`àmount: ${outstanding}`);  
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}


// 003-有形参，提炼设置日期
function printOwing(invoice) {  
  let outstanding = 0;
    
  printBanner();

  // calculate outstanding  
  for (const o of invoice.orders) {   
    outstanding += o.amount;  
  }

  // record due date  
  recordDueDate(invoice)

  //print details  
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("***********************");  
  console.log("**** Customer Owes ****");  
  console.log("***********************");
}

function recordDueDate(invoice) {
  const today = Clock.today;  
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);  
  console.log(`àmount: ${outstanding}`);  
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}


// 004-有形参，函数变量在多处用到,并被重新赋值
function printOwing(invoice) {  
  printBanner();

  // calculate outstanding  
  const outstanding = calculateOutstanding(invoice);

  // record due date  
  recordDueDate(invoice)

  //print details  
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("***********************");  
  console.log("**** Customer Owes ****");  
  console.log("***********************");
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {   
    result += o.amount;  
  }
  return result;
}

function recordDueDate(invoice) {
  const today = Clock.today;  
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);  
  console.log(`àmount: ${outstanding}`);  
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
