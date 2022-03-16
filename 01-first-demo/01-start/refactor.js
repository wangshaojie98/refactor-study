const fs = require("fs");
const path = require("path")
const playsJson = fs.readFileSync(path.resolve(__dirname, "./plays.json"), {encoding: "utf8"});
const invoicesJson = fs.readFileSync(path.resolve(__dirname, "./invoices.json"), {encoding: "utf8"});

const plays = JSON.parse(playsJson);
const invoices = JSON.parse(invoicesJson);

function statement(invoice, plays) {
  //-----------------------------refactor-------------down----------------------
  function playFor(aPerformance) {
    return plays[aPerformance.playID]
  }

  function amountFor(aPerformance) {
    let result = 0;
    const play = playFor(aPerformance);

    switch (play.type) {
      case 'tragedy':
        thisAmount = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`unknown type: ${play.type}`);
    }

    // 永远将函数的返回值命名为“result”
    return result;
  }
  //-----------------------------refactor---------------up--------------------


	let totalAmount = 0;
	let volumeCredits = 0;
	let result = `Statement for ${invoice.customer}\n`;
	const format = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
  }).format;
	
  console.log(invoice);
	for (let perf of invoice.performances) {
		// const play = playFor(plays, aPerformance); 3 play只在amountFor计算得到的，只在内部使用
    const thisAmount = amountFor(perf);

		// add volume credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    
		// add extra credit for every ten comedy attendees
    if ('comedy' === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);
    
		// print line for this order
		result += ` ${playFor(perf).name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`;
		totalAmount += thisAmount;
  }
  
	result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  
	return result;
}

const result = statement(invoices[0], plays);
console.log(result);



