class HeatingPlan {
  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low 
      && top <= this._temperatureRange.high
    );
  }

  newWithinRange(aNumberRange) {
   return (
      aNumberRange.low >= this._temperatureRange.low 
      && aNumberRange.high <= this._temperatureRange.high
    );
  }
}

const aPlan = new HeatingPlan();
if (!aPlan.withinRange(aRoom.daysTempRange))
  alerts.push("room temperature went outside range");