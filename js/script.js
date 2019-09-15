$(document).ready(function() {

 $("#getWeatherForcast").click(function() {

  var city = $("#city").val();
  var key = 'ad318e11c048fa693d824a5e61a478e6';/* personal key*/

  $.ajax({
   url: 'https://api.openweathermap.org/data/2.5/weather',/*call api from original server */
   dataType: 'json',
   type: 'GET',
   data: {
    q: city,
    appid: key,
    units: 'metric'
   },

   success: function(data) {
    var wf = '';
    var desc = '';
    var sicon = '';
    var snumb = '';
    var smin = '';
    var smax = '';
    var stemp = '';
    var simg = '';

    $.each(data.weather, function(index, val) {
     back = val.description;
     stemp = data.name;
     desc = val.description;
     sicon = val.icon;
     snumb = data.main.temp + '&deg;C ';
     smin = 'Min: ' + data.main.temp_min;
     smax = 'Max: ' + data.main.temp_max;
     simg = val.icon;

     var back = '';
    });


    $(".ShowWeatherForcast").html(wf);
    $("#snum").html(stemp);
    $("#sminmax").html(stemp);
    $("#sicon").html(snumb);
    $("#stemp").html(stemp);
    $("#simg").html("<img src=" + "img/" + simg + ".png>");
    $("#sdesc").html(desc);
    $("#sdescminmax").html(smin + '&deg;C' + " | " + smax + '&deg;C ');



   }


  })

 });
});
