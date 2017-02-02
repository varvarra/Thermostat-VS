function Thermostat(){
  this._temperature = 20;
  this._PSM = true;
  this.MIN_TEMP = 10;
  this.MAX_PSM_ON = 25;
  this.MAX_PSM_OFF = 32;
  this.MAX_TEMP = this.MAX_PSM_ON;
};

Thermostat.prototype.getTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.isPSMon = function () {
  return this._PSM === true;
};

Thermostat.prototype.whatMaxTemp = function () {
  if (this._PSM === false) {
    this.MAX_TEMP = this.MAX_PSM_OFF
  };
  return
};

Thermostat.prototype.up = function () {
  if (this._temperature === this.MAX_TEMP) {
    return
  };
    this._temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this._temperature === this.MIN_TEMP) {
    return
  }
  this._temperature -= 1;
};
