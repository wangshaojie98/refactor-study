class HeatingPlan {
  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low 
      && top <= this._temperatureRange.high
    );
  }
}

const aPlan = new HeatingPlan();
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high))
  alerts.push("room temperature went outside range");