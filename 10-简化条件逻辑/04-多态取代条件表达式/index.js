// example 1
switch (bird.type) {
  case 'EuropeanSwallow':
    return 'average'
  case 'AfricanSwallow':
    return bird.numberOfCoconuts > 2 ? 'tired' : 'average'
  case 'NorwegianBlueParrot':
    return bird.voltage > 100 ? 'scorched' : 'beautiful'
  default:
    return 'unknow'
}

class EuropeanSwallow {
  get plumage() {
    return 'average'
  }
}

class AfricanSwallow {
  get plumage() {
    return this.numberOfCoconuts > 2 ? 'tired' : 'average'
  }
}

class NorwegianBlueParrot {
  get plumage() {
    return this.bird.voltage > 100 ? 'scorched' : 'beautiful'
  }
}

// example 2
function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]))
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]))
}

function plumages(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return 'average'
    case 'AfricanSwallow':
      return bird.numberOfCoconuts > 2 ? 'tired' : 'average'
    case 'NorwegianBlueParrot':
      return bird.voltage > 100 ? 'scorched' : 'beautiful'
    default:
      return 'unknow'
  }
}

function airSpeedVelocity(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return '35'
    case 'AfricanSwallow':
      return 40 - 2 * bird.numberOfCoconuts
    case 'NorwegianBlueParrot':
      return bird.isNailed ? 0 : 10 + bird.voltage / 10
    default:
      return null
  }
}

// 对airSpeedVelocity和plumase组合成类
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject)
  }

  get plumage() {
    switch (this.type) {
      case 'EuropeanSwallow':
        return 'average'
      case 'AfricanSwallow':
        return this.numberOfCoconuts > 2 ? 'tired' : 'average'
      case 'NorwegianBlueParrot':
        return this.voltage > 100 ? 'scorched' : 'beautiful'
      default:
        return 'unknow'
    }
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case 'EuropeanSwallow':
        return '35'
      case 'AfricanSwallow':
        return 40 - 2 * this.numberOfCoconuts
      case 'NorwegianBlueParrot':
        return this.isNailed ? 0 : 10 + this.voltage / 10
      default:
        return null
    }
  }
}

function plumage(bird) {
  return new Bird(bird).plumage
}

function airSpeedVelocity(bird) {
  return new Bird(bird).airSpeedVelocity
}

// 针对每种鸟类创建一个子类，用一个工厂函数来实例化合适的子类对象
function plumage(bird) {
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return new EuropeanSwallow(bird)
    case 'AfricanSwallow':
      return new AfricanSwallow(bird);
    case 'NorwegianBlueParrot':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return 'average';
  }

  get airSpeedVelocity() {
    return '35';
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? 'tired' : 'average';
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject)
  }

  get plumage() {
    return 'unknow';
  }

  get airSpeedVelocity() {
    return null;
  }
}

function plumages(birds) {
  return new Map(birds
    .map(b => createBird(b))
    .map(bird => [bird.name, bird.plumage])
  )
}

function speeds(birds) {
  return new Map(birds
    .map(b => createBird(b))
    .map(bird => [bird.name, bird.airSpeedVelocity])
  )
}
