class HeatingPlan {
  targetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

const thePlan = new HeatingPlan;
if (thePlan.targetTemperature(thermostat) > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature(thermostat) < thermostat.currentTemperature) setToCool();
else setOff();
