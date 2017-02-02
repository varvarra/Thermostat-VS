describe("Features", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', function(){
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


});
