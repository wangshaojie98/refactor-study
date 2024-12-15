import invoicesJson from './invoices.json' assert { type: "json"};
import playsJson from './plays.json' assert { type: "json"};
import { Invoices, Performance, Plays, StatementData } from './types';


function statement(invoice: Invoices, plays: Plays) {
  const statementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(aPerformance => ({
      ...aPerformance,
      play: playFor(aPerformance)
    })),
  };
  return renderPlainText(statementData, plays)

  function playFor(aPerformance: Invoices['performances'][number]){
		return plays[aPerformance.playID];
	}
}

function renderPlainText(data: StatementData, plays: Plays) {
  let result = `Statement for ${data.customer}\n`;
	// NOTE 4. 移除format变量
	for (let perf of data.performances) {
		// NOTE 1. 移除switch将计算单个剧的账单抽象成amountFor
		// print line for this order
		result += ` ${perf.play.name}: ${usd(amountFor(perf) / 100)} (${perf.audience} seats)\n`;
  }
	

	// NOTE 将计算积分与账单逻辑分开
  
	result += `Amount owed is ${usd(totalAmount() / 100)}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  
	return result;

	function volumeCreditsFor(perf: StatementData['performances'][number]) {
		let result = 0;
		result += Math.max(perf.audience - 30, 0);

		// add extra credit for every ten comedy attendees
		if ('comedy' === perf.play.type) result += Math.floor(perf.audience / 5);

		return result;
	}

	// 分离作用域参数，查看参数是否变化，控制返回值
	function amountFor(aPerformance: StatementData['performances'][number]) {
		let result = 0;

		// NOTE 3. 移出play变量
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

	

	function usd(aNumber: number) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2
		}).format(aNumber);
	}

	function totalVolumeCredits() {
		let result = 0;
		for (let perf of data.performances) {
			result += volumeCreditsFor(perf);
		}
		return result;
	}

	function totalAmount() {
		let result = 0;
		for (let perf of data.performances) {
			result += amountFor(perf)
		}
		return result;
	}

}

const result = statement(invoicesJson[0], playsJson);
console.log(result);

