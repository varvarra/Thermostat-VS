$(document).ready(function() {

  var thermostat = new Thermostat();
  updateStatus();

  $("#up").click(function() {
    thermostat.up();
    updateStatus();
  });

  $("#down").click(function() {
    thermostat.down();
    updateStatus();
  });

  $("#PSM-button").click(function() {
    if (thermostat.isPSMon()) {
      thermostat.psmOff();
      $("#PSM").text("PSM off");
      $("#PSM").attr("class", "bg-info");
    } else {
      thermostat.psmOn();
      $("#PSM").text("PSM on");
      $("#PSM").attr("class", "bg-primary");
    };
  });

  function updateStatus(){
    $("#temperature").text(thermostat.getTemperature() + "°C");
    $("#temperature").attr("class", "bg-success");
  };

});
