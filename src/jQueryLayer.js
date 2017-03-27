$(document).ready(function() {

  var thermostat = new Thermostat();
  updateStatus();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=15d640c46c7a8a9d53d57730a1f4bda2&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  $('#location-name').text(data.name);
})
  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=15d640c46c7a8a9d53d57730a1f4bda2&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    $('#location-name').text(data.name);
  })
  })

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

  $("#Reset").click(function() {
    thermostat.reset();
    updateStatus();
    $("#PSM").text("PSM on");
    $("#PSM").attr("class", "bg-primary");
  });

  function updateStatus(){
    $("#temperature").text(thermostat.getTemperature() + "°C");
    // $("#temperature").attr("class", "bg-success");
    $("#Energy-Usage").text(thermostat.energyUsage());
    $("#Energy-Usage").attr("class", thermostat.energyUsage());

  };

});
