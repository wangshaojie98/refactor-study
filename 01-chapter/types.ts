export interface Plays {
  [key: string]: {
    name: string;
    type: string;
  }
}

export interface Invoices {
  customer: string;
  performances: Performance []
}

export interface Performance {
  playID: string;
  audience: number;
}

export interface StatementData {
  customer: Invoices['customer'],
  performances: {
    playID:string;
    audience: number;
    play: {
      name: string;
      type: string;
    }
  }[]
}