function Thermostat(){
  this._PSM = true;
  this.STD_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_PSM_ON = 25;
  this.MAX_PSM_OFF = 32;
  this.MAX_TEMP = this.MAX_PSM_ON;
  this._temperature = this.STD_TEMP;
};

Thermostat.prototype.getTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.isPSMon = function () {
  return this._PSM === true;
};


Thermostat.prototype.psmOff = function () {
  this._PSM = false;
};

Thermostat.prototype.psmOn = function () {
  this._PSM =true;
};


Thermostat.prototype.up = function () {
  if (this._PSM === false) {
    this.MAX_TEMP = this.MAX_PSM_OFF
  };
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

Thermostat.prototype.reset = function () {
  this._temperature = this.STD_TEMP;
};

Thermostat.prototype.energyUsage = function () {
  if (this._temperature < 18) {
    return 'low-usage'
  } else if (this._temperature >= 18 && this._temperature < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
};
