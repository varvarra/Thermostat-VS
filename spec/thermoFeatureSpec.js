describe("Features:", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('and increases temperature with an up function', function() {
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('and decreases temperature with a down function', function() {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('and its minimum temperature is 10 degrees', function() {
    for( i = 0; i < 11; i++) {
      thermostat.down();
    };
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('and PSM is on by default', function() {
    expect(thermostat.isPSMon()).toBe(true);
  });

  it('and it can be reset to 20 degrees.', function() {
    for( i = 0; i < 3; i++) {
      thermostat.down();
    };
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('With PSM on, the maximum temperature is 25 degrees', function() {
    for( i = 0; i < 6; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('and with PSM off, the maximum temperature is 32 degrees.', function() {
    thermostat.psmOff();
    for( i = 0; i < 13; i++) {
      thermostat.up();
    };
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it('Below 18 degrees, the energy usage is low', function() {
    for( i = 0; i < 3; i++) {
      thermostat.down();
    };
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });

  it('and between 18 and 25 degrees, it is medium', function() {
    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });

  it('and above 25 degrees, it is high.', function() {
    for( i = 0; i < 6; i++) {
      thermostat.up();
    };
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });

});
