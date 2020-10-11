export default function createStatementData(invoice, plays) {
	const result = {
		customer: invoice.customer,
		performances: invoice.performances.map(v => {
			const result = {...v};
			result.play = playFor(result);
			result.amount = amountFor(result);
			result.volumeCredits = volumeCreditsFor(result);
			return result;
		})
	};
	result.totalVolumeCredits = totalVolumeCredits(result);
	result.totalAmount = countTotalAmount(result);


	return result;

	function playFor(aPerformance) {
		return plays[aPerformance.playID];
	}

	function amountFor(aPerformance) {
		let result = 0;
		switch (aPerformance.play.type) {
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
				throw new Error(`unknown type: ${aPerformance.play.type}`);
		}
	
		return result;
	}


	
	function volumeCreditsFor(perf) {
		// add volume credits
		let result = 0;
		result += Math.max(perf.audience - 30, 0);

		// add extra credit for every ten comedy attendees
		if ('comedy' === perf.play.type) result += Math.floor(perf.audience / 5);
		return result;
	}

	function countTotalAmount(data) {
		return data.performances
			.reduce((total, p) => total + p.amount, 0);
	}

	function totalVolumeCredits(data) {
		return data.performances
			.reduce((total, p) => total + p.volumeCredits, 0);
	}
}