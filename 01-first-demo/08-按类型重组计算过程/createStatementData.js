export default function createStatementData(invoice, plays) {
	const result = {};

	result.customer = invoice.customer;
	result.performances = invoice.performances.map(enrichPerformance);
	result.totalAmount = totalAmount(result);
	result.totalVolumeCredits = totalVolumeCredits(result);
	return result;

	function enrichPerformance(aPerformance) {
		const calculator = new createPerformanceCalculator(aPerformance, playFor(aPerformance));
		const result = Object.assign({}, aPerformance);

		result.play = calculator.play;
		result.amount = calculator.amount;
		result.volumeCredits = calculator.volumeCredits;
		return result;
	}

	// 获取play演出的信息
	function playFor(aPerformance) {
		return plays[aPerformance.playID];
	}

	function totalAmount(data) {
		return data.performances.reduce((total, p) => total + p.amount, 0);
	}

	function totalVolumeCredits(data) {
		return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
	}
}

function createPerformanceCalculator(aPerformance, aPlay) {
	switch(aPlay.type) {
		case "tragedy": return new TrageDyCalculator(aPerformance, aPlay);
		case "comedy": return new ComedyCalculator(aPerformance, aPlay);
		default:
			throw new Error(`unknown type: ${aPlay.type}`);
	}
}

class PerformanceCalculator {
	/**
	 *{
	 * 	performance: {
				"playID": "hamlet",
				"audience": 55
			},
			play: { 
				"name": "Hamlet", 
				"type": "tragedy" 
			}
	 *} 
	 */
	constructor(aPerformance, aPlay) {
		this.performance = aPerformance;
		this.play = aPlay;
		
	}
	// getterr在class中绑定到原型上
	get amount() {
		throw new Error('subclass responsibity');
	}

	get volumeCredits() {
		return Math.max(this.performance.audience - 30, 0);
	}
}

class TrageDyCalculator extends PerformanceCalculator {
	// 默认没有构造方法的话，会默认使用派生类构造方法
	// constructor(...args) {
	// 	super(...args)
	// }
	get amount() {
		let result = 40000;
		console.log(this);
		if (this.performance.audience > 30) {
			result += 1000 * (this.performance.audience - 30);
		}
		return result;
	}
}

class ComedyCalculator extends PerformanceCalculator {
	// 默认没有构造方法的话，会默认使用派生类构造方法
	// constructor(...args) {
	// 	super(...args)
	// }
	get amount() {
		let result = 30000;

		if (this.performance.audience > 20) {
			result += 10000 + 500 * (this.performance.audience - 20);
		}
		result += 300 * this.performance.audience;
		return result;
	}

	get volumeCredits() {
		return super.volumeCredits + Math.floor(this.performance.audience / 5);
	}
}
