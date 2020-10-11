import { invoices, plays } from './data.js';

function amountFor(aPerformance, play) {
	let result = 0;

	switch (playFor(aPerformance).type) {
		case 'tragedy':
			result = 40000;
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
			throw new Error(`unknown type: ${playFor(aPerformance).type}`);
	}

	return result;
}

function playFor(aPerformance) {
	return plays[aPerformance.playID];
}

function volumeCreditsFor(perf) {
			// add volume credits
			let result = 0;
			result += Math.max(perf.audience - 30, 0);

			// add extra credit for every ten comedy attendees
			if ('comedy' === playFor(perf).type) result += Math.floor(perf.audience / 5);
			return result;
}

function usd(aNumber) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	}).format(aNumber / 100);
}

function totalVolumeCredits(invoice) {
	let result = 0;
	invoice.performances.forEach(perf => {
		result += volumeCreditsFor(perf);
	});
	return result;
}

function countTotalAmount(invoice) {
	let result = 0;
	invoice.performances.forEach(perf => {
		result += amountFor(perf);
	});
	return result;
}

function statement(invoice) {
	let result = `Statement for ${invoice.customer}\n`;

	for (let perf of invoice.performances) {
		result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
	}


	result += `Amount owed is ${usd(countTotalAmount(invoice))}\n`;
	result += `You earned ${totalVolumeCredits(invoice)} credits\n`;

	return result;
}

const result = statement(invoices[0], plays);
console.log(result);
