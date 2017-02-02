describe("Features", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });


});
